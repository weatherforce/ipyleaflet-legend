var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var L = require('leaflet');
const ipyleaflet = require('jupyter-leaflet');


let jsLegend = L.control({position: "bottomright"})

jsLegend.onAdd = function(map){

	let jsLegendName="leaflet-control-legend"
	let container = L.DomUtil.create('div', jsLegendName),

	grades = ["#005", "#55A", "#AAF"],
	labels = ["ouf", "moyen ouf", "pas ouf" ]

	let title = document.createElement('h4')
	title.style = "padding: 0; margin: 0; margin-bottom: 5px"
	title.textContent = "Legendaire"
	container.appendChild(title)

	for (let i=0; i < grades.length; i++){
		let icon = document.createElement("i")
		icon.style = `background-color: ${grades[i]}; width: 18px; height: 18px; float: left; margin-right: 8px; opacity:0.7`
		container.appendChild(icon)
		container.innerHTML += `<p style="display: inline-block">${labels[i]} </p></br>`
		container.style = "color: #555; line-height: 18px; width: auto; background-color: #fff; padding: 5px; border-radius: 5px; box-shadow: 0 1px 5px rgba(0,0,0,0.4); padding: 6px 10px 6px 6px; "
	
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
			title: "",
			legend : {}
		}
	}
}


export class LegendView extends ipyleaflet.LeafletControlView{

	initialize(parameters){
		super.initialize(parameters);
		this.map_view = this.options.map_view;
	}

	changed(){
		this.addLegend(this.model.get('title'), this.model.get('legend'))
	}

	render(){
		this.changed();
        this.model.on('change:title', this.changed, this);
        this.model.on('change:legend', this.changed, this);
	}

	addLegend(title, legend){
		if(this.obj) this.obj.remove()
		let jsLegend = L.control({position: "bottomright"})

		jsLegend.onAdd = function(map){
			let jsLegendName="leaflet-control-legend"
			let container = L.DomUtil.create('div', jsLegendName)
			let titleContainer = document.createElement('h4')

			titleContainer.style = "padding: 0; margin: 0; margin-bottom: 5px"
			titleContainer.textContent =  title
			container.appendChild(titleContainer)

			for ( let legendElement in legend ){
				let icon = document.createElement("i")
				icon.style = `background-color: ${legend[legendElement]}; width: 18px; height: 18px; float: left; margin-right: 8px; opacity:0.7`
				container.appendChild(icon)
				container.innerHTML += `<p style="display: inline-block">${legendElement} </p></br>`
				container.style = "color: #555; line-height: 18px; width: auto; background-color: #fff; padding: 5px; border-radius: 5px; box-shadow: 0 1px 5px rgba(0,0,0,0.4); padding: 6px 10px 6px 6px; "
	
			}
			return container
		}

		this.obj = jsLegend
		this.obj.addTo(this.map_view.obj)
	}
}
