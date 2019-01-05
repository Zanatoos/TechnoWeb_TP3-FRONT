import SongsList from '../inc/SongsList';
import React from 'react';
import { mount } from 'enzyme';

test('Testing API and what it returns', () => {
  const partSongs = "A D";
  const wrapper = mount(
    <SongsList />
  );

  const p = wrapper.find('.suggestedSongs');
  expect(p.text()).toBe('A Dozen Red Roses For My Darling');
});
