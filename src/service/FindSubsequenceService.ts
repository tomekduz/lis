import { FindSubsequenceStrategyInterface } from './strategy/FindSubsequenceStrategyInterface';

export class FindSubsequenceService {

    /**
     * @param findSubsequence - strategy to find subsequence
     */
    public constructor(
        private findSubsequence: FindSubsequenceStrategyInterface
    ) {
    }

    /**
     * @param numberSequence
     * @returns {number[]} - result find subsequnce by dependency strategy
     */
    public find(numberSequence: number[]): number[] {
        return this.findSubsequence.find(numberSequence);
    }
}