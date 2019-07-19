import component from './component';

describe('Component', () => {
    test('should be exported', () => {
        expect(component).toBeDefined();
    });
    test('should have test method', () => {
        expect(component.test).toBeDefined();
        expect(component.test()).toBe(42);
    });
});