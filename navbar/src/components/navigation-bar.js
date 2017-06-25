import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const title = this.props.title;
    const links = this.props.links.map(
      (link, index) => <li>
        <a key={index} href={link.href}>
          {link.text}</a>
        </li>
    )
    return (
      <div className="navigation-bar navigation-bar-nav">
        <nav>
          <h1>{title}</h1>
          <ul>
          {links}
          </ul>
        </nav>
      </div>
    )
  }
}
