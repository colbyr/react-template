var Dispatcher = require('flux').Dispatcher;
var GeneralStore = require('general-store');
var React = require('react/addons');

var dispatcher = new Dispatcher();
var rootNode = document.getElementById('root');

GeneralStore.DispatcherInstance.set(dispatcher);

React.render(
  <h1>react-template</h1>,
  rootNode
);

module.exports = {
  dispatcher,
  rootNode
};

