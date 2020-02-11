var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var L = require('leaflet');
const ipyleaflet = require('jupyter-leaflet');


let jsLegend = L.control({position: "bottomright"})
jsLegend.onAdd = function(map){
	let jsLegendName="leaflet-control-legend"
	let container = L.DomUtil.create('div', jsLegendName),
	grades = [0, 10, 100],
	labels = []

	for (let i=0; i < grades.length; i++){
		container.innerHTML += '<i style="background: \"blue\""></i> toto'
	}
	return container

}


export class LegendModel extends ipyleaflet.LeafletControlModel {
	defaults(){
		return{
			...super.defaults(),
			_model_name : 'LegendModel',
        	_view_name : 'LegendView',
        	_model_module : 'jupyter-widget-legend',
        	_view_module : 'jupyter-widget-legend',
        	_model_module_version : '0.1.0',
        	_view_module_version : '0.1.0',
			value : "hello :)"
		}
	}
}


export class LegendView extends ipyleaflet.LeafletControlView{

	initialize(parameters){
		super.initialize(parameters);
		this.map_view = this.options.map_view;
	}

	value_changed(){
		console.log("value changed!")
		if(this.obj) this.obj.remove()
		this.obj = jsLegend
		this.obj.addTo(this.map_view.obj)
	}

	render(){
		this.value_changed();
        this.model.on('change:value', this.value_changed, this);
	}
}
