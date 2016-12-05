'use strict';

import 'core-js';
import 'whatwg-fetch';
import '../less/vrf-main.less';
import ReactDOM from 'react-dom';
import {routes, clientSide} from './vrf';
import { browserHistory  } from 'react-router';

ReactDOM.render(clientSide({ history: browserHistory, children: routes }), document.getElementById('entry-point'));

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function() {
        document.location.reload();
    });
}