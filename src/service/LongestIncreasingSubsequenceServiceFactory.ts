import { FindSubsequenceService } from './FindSubsequenceService';
import { LongestIncreasingSubsequenceStrategy } from './strategy/LongestIncreasingSubsequenceStrategy';

export class LongestIncreasingSubsequenceServiceFactory {

    /**
     * Factory to create find sequence service with strategy
     * LongestIncreasingSubsequence
     * @returns {FindSubsequenceService}
     */
    public static create(): FindSubsequenceService {
        return new FindSubsequenceService(
            new LongestIncreasingSubsequenceStrategy(),
        );
    }
}
