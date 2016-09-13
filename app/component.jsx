

import React from 'react';
import './bootstrap.css';
<<<<<<< HEAD
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
=======

export default class Button extends React.Component {

  render(){
    return (
      <div className="container">
        <a className="btn btn-default">Button</a>
      </div>
>>>>>>> 0828128edbe720d4d9ee7f549c6e14f809f56e8d
    );
  }
}
