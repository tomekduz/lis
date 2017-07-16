import { FindSubsequenceStrategyInterface } from './FindSubsequenceStrategyInterface';

export class LongestIncreasingSubsequenceStrategy implements FindSubsequenceStrategyInterface
{
    /**
     * Method return longest increasing subsequence from numberSequence
     * @param numberSequence
     * @returns {number[]}
     */
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

    /**
     * Method create new sequence if selectedElement is bigger than last element in sequence
     * @param sequenceList
     * @param selectedElement
     * @returns {number[][]}
     */
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

                sequenceList = this.analyzeSequenceListAndAddNewSubsequence(sequenceList, newSequence)
            } else {
                sequenceList = this.setSmallestOneElementSequence(sequenceList, selectedElement);
            }
        }
        return sequenceList;
    }

    /**
     * Method check sequence list is exist sequence with last element bigger then last
     * element in new sequence - if true then method remove sequence with bigger element and
     * add new sequence
     * Method also check is add new sequence to sequence list
     * @param sequenceList
     * @param newSequence
     * @returns {number[][]}
     */
    private analyzeSequenceListAndAddNewSubsequence(
        sequenceList: number[][],
        newSequence: number[],
    ): number[][] {
        let newSequenceLength: number = newSequence.length;
        let isAddNewSequence:boolean = true;
        for (let j = 0; j < sequenceList.length; j++) {
            let checkedSequenceLength = sequenceList[j].length;
            if (checkedSequenceLength === newSequenceLength
                && newSequence[(newSequenceLength-1)] < sequenceList[j][(checkedSequenceLength-1)]) {
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

    /**
     * Method check is value on single element sequence is bigger then selectedElement value
     * then method replace this sequence by new sequence with selectedElement
     * @param sequenceList
     * @param selectedElement
     * @returns {number[][]}
     */
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

    /**
     * Method return sequence with first element on numberSequence
     * @param numberSequence
     * @returns {[number]}
     */
    private getSubsequenceFromFirstElement(numberSequence: number[]) {
        return [numberSequence[0]];
    }

    /**
     * Method check is selected element is bigger then lastElementFromSelectedSequence
     * @param selectedElement
     * @param lastElementFromSelectedSequence
     * @returns {boolean}
     */
    private isSelectedElementIsBiggerThenLastElementFromSequence(
        selectedElement: number,
        lastElementFromSelectedSequence: number,
    ):boolean {
        return selectedElement > lastElementFromSelectedSequence;
    }

    /**
     * From sequenceList method return longest sequence
     * @param sequenceList
     * @returns {number[]}
     */
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
