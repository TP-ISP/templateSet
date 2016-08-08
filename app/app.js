/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-05 15:40:46
 * @version $Id$
 */

'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component.jsx';
import './basic.css';

main();

function main() {
	const comments = [
		{text: 'First comment!'},
		{text: 'second comment'}
	];
	const props = {text:'I\'m John Doe, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'};
    var post = comment=>ReactDOM.render(<Component {...comment}/>, document.getElementById('app'));
    comments.map(post);

}