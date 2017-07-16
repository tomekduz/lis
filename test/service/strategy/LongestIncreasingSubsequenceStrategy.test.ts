import { LongestIncreasingSubsequenceStrategy } from '../../../src/service/strategy/LongestIncreasingSubsequenceStrategy';

describe('#find longest increasing sub sequence using LongestIncreasingSubsequenceStrategy', () => {

    const beginSequence: number[]
        = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16];

    const beginSequenceWithStartedWithNotSmollestValue: number[]
        = [0, -2, -1, 13, 1, 3, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16, -9];

    const longBeginSequence: number[]
        = [0, -2, -1, 1, -5, -4, -3, 13, 1, 3, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16, -9];

    const beginSequenceWithLingestSubsequenceInEnd = [
        0, -2, -1, 1, -5, -4, -3,
        13, 1, 3, 7, 15, 2, 10, 6, 14, 4,
        12, 8, 16, -9, -99999, -200, -109, -108,-107,
        -106,-105,-104, -100,-1,1000,2000,3000,4000,
        5000,6000,12,7000];

    const oneElementSequence: number[] = [1];

    const sequenceOneNumber: number[] = [2, 2, 2, 2, 2, 2, 2];

    const twoNumberSequenceWithMaxLong: number[] = [2, 9223372036854775807];

    const longestIncreasingSubsequence = new LongestIncreasingSubsequenceStrategy();

    it('should return longest increasing subsequence' +
        ', if I use number list', () => {
       expect(longestIncreasingSubsequence
           .find(beginSequence))
           .toEqual([1, 3, 7, 10, 12, 16]);
    });

    it('should return longest increasing subsequence, ' +
        'if I use number list with started from not smollest value', () => {
        expect(longestIncreasingSubsequence
            .find(beginSequenceWithStartedWithNotSmollestValue))
            .toEqual([-2, -1, 1, 3, 7, 10, 12, 16]);
    });

    it('should return longest increasing subsequence, ' +
        'if I use number list with started from not smollest value', () => {
        expect(longestIncreasingSubsequence
            .find(longBeginSequence))
            .toEqual([-5, -4, -3, 1, 3, 7, 10, 12, 16]);
    });

    it('should return single element sequence, ' +
        'if I use single element list', () => {
        expect(longestIncreasingSubsequence
            .find(oneElementSequence))
            .toEqual([1]);
    });

    it('should return single element sequence, ' +
        'if I use sequence with one number', () => {
        expect(longestIncreasingSubsequence
            .find(sequenceOneNumber))
            .toEqual([2]);
    });

    it('should return two element sequence, ' +
        'if I use sequence with max long value', () => {
        expect(longestIncreasingSubsequence
            .find(twoNumberSequenceWithMaxLong))
            .toEqual([2, 9223372036854775807]);
    });

    it('should return longest increasing subsequence, ' +
        'if I use number list with longest subsequence in end of list', () => {
        expect(longestIncreasingSubsequence
            .find(beginSequenceWithLingestSubsequenceInEnd))
            .toEqual([
                -99999,
                -200,
                -109,
                -108,
                -107,
                -106,
                -105,
                -104,
                -100,
                -1,
                1000,
                2000,
                3000,
                4000,
                5000,
                6000,
                7000 ]);
    });

    it('should throw exception, ' +
        'if I use empty number list', () => {
        expect(() => {
            longestIncreasingSubsequence.find([]);
        }).toThrow("Error, Sequence number is empty!");
    });
})