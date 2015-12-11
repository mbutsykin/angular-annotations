import {Inject} from 'bootstrap';

describe('@Inject', () => {
    @Inject('test', 'test1')
    class SomeClass {
        @Inject('test')
        static someStaticMethod() {}
    }

    it('$inject was added to the class', () => {
        expect(SomeClass.$inject.length).toBe(2);
    });

    it('$inject was added to the class static method', () => {
        expect(SomeClass.someStaticMethod.$inject.length).toBe(1);
    });
});
