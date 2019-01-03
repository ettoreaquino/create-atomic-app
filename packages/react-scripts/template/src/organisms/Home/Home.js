import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="org-home">
        <header className="header">
          <h3>{ this.props.homeData }</h3>
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}