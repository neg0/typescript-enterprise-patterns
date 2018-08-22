import {Cache} from './Cache';

describe('Testing Cache Singleton', () => {
    const sut: Cache = Cache.sharedInstance;

    it('should have one instance of Cache',  () => {
        expect(sut instanceof Cache).toBe(true);
    });
});
