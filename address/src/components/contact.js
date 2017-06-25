import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const [name, imgSrc, addr] = Object.values(this.props);
    return (
      <div className="contact">
        <img src={imgSrc} className="contact-photo"
        role="presentation"/>
        <span
          className="contact-name">
          {name}
        </span>
        <span
          className="contact-address">
          {addr}
        </span>
      </div>
    )
  }
}
