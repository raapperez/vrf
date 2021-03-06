'use strict';

import 'core-js';
import 'whatwg-fetch';
import ReactDOM from 'react-dom';
import {routes, clientSide} from './vrf';
import { browserHistory  } from 'react-router';

ReactDOM.render(clientSide({ history: browserHistory, children: routes }), document.getElementById('entry-point'));