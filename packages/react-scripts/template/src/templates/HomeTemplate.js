// ========================== Node modules imported ========================= //
import React from 'react';

// =========================== Files Imported =============================== //
import { Home } from '../organisms/organisms';

// ========================================================================== //

export default class HomeTemplate extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Home
          homeData={ this.props.homeData }
        />
      </React.Fragment>
    );
  }
}