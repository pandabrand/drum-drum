import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ControlKey, DrumKey } from './keys';
import { wrap } from 'module';

describe('renders a control key', () => {
    const wrapper = shallow(<ControlKey name="snare" letter="k"/>);
    const type = wrapper.type();

    test('is wrapped in a div', () => {
        expect(type).toBe('div');
    });

    test('has a class of `.key`', () => {
        expect(wrapper.find('.key')).toHaveLength(1);
    });

    test('child span has text of `snare`', () => {
        expect(wrapper.find('.sound').text()).toBe('snare');
    });

    test('child `<kbd>` has letter of `k`', () => {
        expect(wrapper.find('kbd').text()).toBe('k');
    })
});

describe('render a drum key', () => {
    const wrapper = shallow(<DrumKey name="hi-hat" letter="z" kCode="31" sound="hi-hat.wav"/>);

    test('has a class of `.key`', () => {
        expect(wrapper.find('.key')).toHaveLength(1);
    });

    test('child span has a text of `hi-hat`', () => {
        expect(wrapper.find('.sound').text()).toBe('hi-hat');
    });

    test('child `<kbd>` has a letter of `z`', () => {
        expect(wrapper.find('kbd').text()).toBe('z');
    });

    test('child audio has key-code of `31` and src of `hi-hat.wav`', () => {
        expect(wrapper.find('[src="sounds/hi-hat.wav"]')).toHaveLength(1);
        expect(wrapper.find('[data-key="31"]')).toHaveLength(2);
    });
});
