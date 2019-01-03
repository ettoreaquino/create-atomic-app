import React from 'react';

export default class BasePage extends React.Component {
  componentWillMount () {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps (nextProps) {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <React.Component {...this.props} />
    );
  }
}