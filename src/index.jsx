import React from 'react';
import ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

ReactDOM.render(
    <Hello compiler="JavaScript 2015" framework="React" />,
    document.getElementById('app')
);
