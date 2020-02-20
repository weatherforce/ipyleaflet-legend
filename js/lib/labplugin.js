var plugin = require('./index');
var base = require('@ipyleaflets/base');

module.exports = {
  id: 'ipyleaflet-legend',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'ipyleaflet-legend',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

