import { FindSubsequenceService } from '../../src/service/FindSubsequenceService';
import { FindSubsequenceStrategyInterface } from '../../src/service/strategy/FindSubsequenceStrategyInterface';

describe('#find sequence using FindSubsequenceService', () => {

    const FindSubsequenceStrategyMock = jest.fn<FindSubsequenceStrategyInterface>(() => ({
        find: jest.fn(),
    }));

    const findSubsequenceStrategyMock = new FindSubsequenceStrategyMock();

    const findSubsequenceService = new FindSubsequenceService(
        findSubsequenceStrategyMock,
    );

    it('should find subsequence with use number list' +
        ', if I use find method in findSubsequenceService', () => {
        findSubsequenceService.find([1]);

        expect(findSubsequenceStrategyMock.find).toHaveBeenCalledWith([1])
    });

});
