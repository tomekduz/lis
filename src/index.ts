import { LongestIncreasingSubsequenceServiceFactory } from './service/LongestIncreasingSubsequenceServiceFactory';

/**
 * Main class for run project
 */
class Main {

    /**
     * @param numberList
     * @returns {number[]}
     */
    public run(numberList: number[]): number[] {
        let longestIncreasingSubsequenceService
            = LongestIncreasingSubsequenceServiceFactory.create();
        return longestIncreasingSubsequenceService.find(numberList);
    }
}

let sequenceNumber = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16];
let main = new Main();
let result = main.run(sequenceNumber);
console.log(result);
/**
 * to show result in CLI use
 * console.log(result);
 */
