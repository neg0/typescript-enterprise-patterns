import {SessionPool} from "./SessionPool";

describe('Testing Session Pool',() => {
   let sut: SessionPool = SessionPool.create();

   sut.store('name', 'Hadi');
   it('should do', () => {
      console.log('Fetch', sut.fetch('name'));
      console.log('Fetch All', sut.fetchAll());
      sut.clear();
      console.log('Fetch All After CLeaning', sut.fetchAll());
   })
});