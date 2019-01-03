// ========================== Node modules imported ========================= //
import React from 'react';
import { compose } from 'recompose';
import { observer, inject } from 'mobx-react';

// =========================== Files Imported =============================== //
import BasePage from './BasePage';
import { HomeTemplate } from '../templates/templates';

// ========================================================================== //

class HomePage extends BasePage {
  render () {
    const store = this.props.homeStore;
    return (
      <React.Fragment>
        <HomeTemplate
          homeData={ store.homeData }/>
      </React.Fragment>
    );
  }
}

export default compose(
  inject('homeStore'),
  observer
)(HomePage);