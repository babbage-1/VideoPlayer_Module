import React from 'react';
import {mount, shallow} from 'enzyme';

import Carousel from '../Carousel';
import sampleData from '../../sampleData';

describe('Carousel', () => {
  it('should mount correctly', () => {
    let dummyVids = sampleData.associatedVideos;

    const component = shallow(<Carousel videos={dummyVids}/>)

    expect(component.exists()).toBe(true);
  })
})