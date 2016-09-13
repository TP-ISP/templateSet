

import React from 'react';
import './bootstrap.css';
import './basic.css';

export default class Button extends React.Component {

  constructor(props) {
     super(props);
   };


  render(){
    return (
      <section className="section">
        <h2 className="sub-title">Vertically Aligned Users</h2>
        <div className="user">
            <div className="user__avatar"></div>
            <div className="user__description">
                <h2 className="user__username">John Doe</h2>
                <p className="user__excerpt">{this.props.text}</p>
            </div>
        </div>
    </section>
    );
  }
}
