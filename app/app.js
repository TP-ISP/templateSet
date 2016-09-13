/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-05 15:40:46
 * @version $Id$
 */

'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Component from './component.jsx';
=======
import Button from './component.jsx';
>>>>>>> 0828128edbe720d4d9ee7f549c6e14f809f56e8d
import './basic.css';

main();

function main() {
<<<<<<< HEAD
	const comments = [
		{text: 'First comment!'},
		{text: 'second comment'},
		{text:  'third comment'}
	];
    comments.map(comment=>ReactDOM.render(<Component {...comment}/>, document.getElementById('app')));
=======

    ReactDOM.render(<Button />, document.getElementById('app'));
>>>>>>> 0828128edbe720d4d9ee7f549c6e14f809f56e8d
}