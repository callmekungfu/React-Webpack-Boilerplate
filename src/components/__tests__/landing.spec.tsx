import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import * as ShallowRenderer from 'react-test-renderer/shallow';

import { LandingPage } from '../landing/Landing';

describe('<LandingPage />', () => {
  it('should render', () => {
    const renderer = ShallowRenderer.createRenderer();
    expect(renderer.render(
      <LandingPage appName="React Typescript Boilerplate" />,
    )).toMatchSnapshot();
  });
});
