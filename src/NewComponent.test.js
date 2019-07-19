import { shallowMount } from '@vue/test-utils';
import Component from './NewComponent.vue';

let wrapper;

beforeEach(() => {
    // Mount only needed component
    wrapper = shallowMount(Component, {
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {},
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe('New Component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
    test('should be mounted and not destroyed', () => {
        expect(wrapper.vm._isMounted).toBeTruthy();
        expect(wrapper.vm._isDestroyed).toBeFalsy();
    });
    test('name should be `dummy`', () => {
        expect(wrapper.name()).toBe('dummy');
    });
    test('message property should be set', () => {
        expect(wrapper.vm.message).toBeDefined();
        expect(wrapper.vm.message).toBe('Hello from Vue');
    });
    test('dummies collection to be defined', () => {
        expect(wrapper.vm.dummies).toBeDefined();
        expect(wrapper.vm.dummies.length).toBe(3);
        expect(wrapper.vm.dummies).toEqual(['I\'m item from Vue', 'Me too, from component', 'Last, but not least']);
    });
});