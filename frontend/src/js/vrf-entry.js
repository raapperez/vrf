'use strict';

import ReactDOM from 'react-dom';
import vrf, {routes} from './vrf';
import { browserHistory  } from 'react-router';

ReactDOM.render(vrf({ history: browserHistory, children: routes }), document.getElementById('entry-point'));