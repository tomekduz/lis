import { FindSubsequenceStrategyInterface } from './FindSubsequenceStrategyInterface';

export class LongestIncreasingSubsequenceStrategy implements FindSubsequenceStrategyInterface
{

    private getSubsequenceFromFirstElement(numberSequence: number[]) {
        return [numberSequence[0]];
    }

    private isSelectedElementIsBiggerThenLastElementFromSequence(
        selectedElement: number,
        lastElementFromSelectedSequence: number,
    ):boolean {
        return selectedElement > lastElementFromSelectedSequence;
    }

    private analyzeSequenceListAndAddNewSubsequents(
        sequenceList: number[][],
        newSequence: number[],
    ): number[][] {
        let newSequenceLength: number = newSequence.length;
        let isAddNewSequence:boolean = true;
        for (let j = 0; j < sequenceList.length; j++) {
            let checkedSequenceLength = sequenceList[j].length;
            if (checkedSequenceLength === newSequenceLength
                && sequenceList[j][(checkedSequenceLength-1)] > newSequence[(newSequenceLength-1)]) {
                sequenceList.splice(j, 1);
                break;
            }

            if (checkedSequenceLength === newSequenceLength
                && sequenceList[j][(checkedSequenceLength-1)] <= newSequence[(newSequenceLength-1)]) {
                isAddNewSequence = false;
                break;
            }
        }
        if (isAddNewSequence) {
            sequenceList.push(newSequence);
        }

        return sequenceList;
    }

    private getSubsequenceListForSelectedElement(
        sequenceList:number[][],
        selectedElement: number,
    ): number[][] {
        for (let i = 0; i < sequenceList.length; i++) {
            if (this.isSelectedElementIsBiggerThenLastElementFromSequence(
                    selectedElement,
                    sequenceList[i][(sequenceList[i].length - 1)],
                )) {
                let newSequence: number[] = [];
                newSequence = sequenceList[i].slice();
                newSequence.push(selectedElement);

                sequenceList = this.analyzeSequenceListAndAddNewSubsequents(sequenceList, newSequence)
            } else {
                sequenceList = this.setSmallestOneElementSequence(sequenceList, selectedElement);
            }
        }
        return sequenceList;
    }

    private setSmallestOneElementSequence(
        sequenceList: number[][],
        selectedElement: number,
    ): number[][] {
        for (let k = 0; k < sequenceList.length; k++) {
            if (sequenceList[k].length === 1
                && sequenceList[k][(sequenceList[k].length-1)] > selectedElement) {
                sequenceList.splice(k, 1);
                sequenceList.push([selectedElement])
                break;
            }
        }
        return sequenceList;
    }

    public find(numberSequence: number[]): number[] {
        if (numberSequence.length === 0) {
            throw "Error, Sequence number is empty!";
        }
        let sequenceList:number[][] = [];
        sequenceList.push(this.getSubsequenceFromFirstElement(numberSequence));

        for (let i = 0; i < numberSequence.length; i++) {
            let selectedElement = numberSequence[i];
            sequenceList = this.getSubsequenceListForSelectedElement(sequenceList, selectedElement);
        }

        return this.getLongestSubsequenceFromSequenceList(sequenceList);
    }

    private getLongestSubsequenceFromSequenceList(sequenceList:number[][]): number[] {
        let result: number[] = [];
        for(let i = 0; i < sequenceList.length; i++) {
            if (sequenceList[i].length > result.length) {
                result = sequenceList[i];
            }
        }
        return result;
    }
}