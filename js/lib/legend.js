var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var L = require('leaflet');
const ipyleaflet = require('jupyter-leaflet');

// See example.py for the kernel counterpart to this file.


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
let LegendModel = new ipyleaflet.LeafletControlModel.extend({
//var LegendModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(ipyleaflet.LeafletControlModel.prototype.defaults(), {
        _model_name : 'LegendModel',
        _view_name : 'LegendView',
        _model_module : 'jupyter-widget-legend',
        _view_module : 'jupyter-widget-legend',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Legend World!'
    })
});


// Custom View. Renders the widget model.
let LegendView = ipyleaflet.LeafletControlView.extend({
//var LegendView = widgets.DOMWidgetView.extend({
    // Defines how the widget gets rendered into the DOM
    render: function() {
        this.value_changed();

        // Observe changes in the value traitlet in Python, and define
        // a custom callback.
        this.model.on('change:value', this.value_changed, this);
    },
    value_changed: function() {
		if(this.obj) this.obj.remove()
		this.obj = L.control({position: 'bottomright'})
		this.obj.onAdd = this.onAdd()
		this.obj.addTo(this.map_view)
    },
	onAdd: function(map){
		let div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 10, 100],
			labels = []

		for (let i=0; i < grades.length; i++){
			div.innerHTML += '<i style="background: blue"></i> toto'
		}
	}
});


module.exports = {
    LegendModel: LegendModel,
    LegendView: LegendView
};
