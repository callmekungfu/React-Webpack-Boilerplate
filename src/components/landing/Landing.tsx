import * as React from 'react';

import './landing.scss';

export interface LandingProps {
  appName: string;
}

export class LandingPage extends React.Component<LandingProps, {}> {
  render() {
    return <h1>Hello From {this.props.appName}!</h1>;
  }
}
