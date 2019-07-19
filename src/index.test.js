import index from './index';

describe('Main index file', () => {
    test('should export Vue instance and component function', () => {
        expect(index).toBeDefined();
        expect(index.component).toBeDefined();
        expect(index.app).toBeDefined();
    });
    test('component function should return an element', () => {
        let comp = index.component('id');
        expect(comp).toBeDefined();
        expect(comp.id).toBe('id');
        expect(comp.classList).toContain('test');
        expect(comp.innerHTML).toBe('Hello webpack');
    });
});