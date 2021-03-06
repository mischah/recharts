import React from 'react';
import { expect } from 'chai';
import { Surface, Triangle } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Triangle />', () => {
  const points = [
    { x: 100, y: 300 },
    { x: 300, y: 300 },
    { x: 200, y: 50 },
  ];

  it('Render 1 triangle in simple Triangle', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Triangle points={points} fill="#ff7300"/>
      </Surface>
    );

    expect(wrapper.find('.recharts-triangle').length).to.equal(1);
  });

  it('Dno\'t render any path when points is empty or null', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Triangle points={[]} fill="#ff7300"/>
        <Triangle fill="#ff7300"/>
      </Surface>
    );

    expect(wrapper.find('.recharts-triangle').length).to.equal(0);
  });
});
