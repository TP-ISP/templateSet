/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-05 15:40:46
 * @version $Id$
 */

'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Button from './component.jsx';
import './basic.css';

main();

function main() {

    ReactDOM.render(<Button />, document.getElementById('app'));
}