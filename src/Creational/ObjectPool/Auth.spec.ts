import {Auth} from "./Auth";

describe('Testing Auth Pool', () => {

    let sut: Auth = Auth.create(1, 'username', 'username@gmail.com', 'John Doe');

    it('should do', () => {
        console.log('Auth is:', sut.fetchUserProfile());
    })
});
