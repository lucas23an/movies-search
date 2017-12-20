import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Movies from './Movies';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';

configure({adapter: new Adapter()});

describe('<Movies />', () => {
    it('should render search bar', () => {
        const wrapper = shallow(<Movies />);
        expect(wrapper.find(SearchBar)).toHaveLength(1);
    });

    it('should render pagination', () => {
        const wrapper = shallow(<Movies />);
        expect(wrapper.find(Pagination)).toHaveLength(1);
    });
});