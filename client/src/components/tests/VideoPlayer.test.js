import React from 'react';
import {mount, shallow} from 'enzyme';

import VideoPlayer from '../VideoPlayer';
import sampleData from '../../sampleData';

describe('VideoPlayer', () => {
  it('should mount correctly', () => {
    let dummyTitle = sampleData.name;
    let dummyVideo = sampleData.associatedVideos[0];

    const component = shallow(<VideoPlayer videoTitle={dummyTitle} video={dummyVideo}/>)

    expect(component.exists()).toBe(true);
  })
})