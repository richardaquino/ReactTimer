var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
<<<<<<< HEAD
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');
=======
>>>>>>> 5eadf86a037d434666b19761e1e0259cd7216fe0

//Load Foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<<<<<<< HEAD
   <Router history={hashHistory}>
      <Route path="/" component={Main}>
         <IndexRoute component={Timer}></IndexRoute>
         <Route path="countdown" component={Countdown}></Route>
      </Route>
   </Router>,
=======
  <p>Boilerplate 3 Project</p>,
>>>>>>> 5eadf86a037d434666b19761e1e0259cd7216fe0
   document.getElementById('app')
);