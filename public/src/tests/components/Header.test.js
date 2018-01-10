import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

const wrapper = shallow(<Header />);
//expect(wrapper).toMatchSnapshot();
expect(wrapper.find('h1'.length)).toBe(1);

