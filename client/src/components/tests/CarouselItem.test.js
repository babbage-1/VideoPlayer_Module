import React from 'react';
import {mount, shallow} from 'enzyme';

import CarouselItem from '../CarouselItem';
import sampleData from '../../sampleData';

describe('Carousel Item', () => {
  it('should mount correctly', () => {
    let dummyVid = sampleData.associatedVideos[0];

    const component = shallow(<CarouselItem video={dummyVid}/>)

    expect(component.exists()).toBe(true);
  })
})