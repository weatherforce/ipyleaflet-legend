import ipywidgets as widgets
from traitlets import Unicode, Dict


@widgets.register
class Legend(widgets.DOMWidget):
    """An example widget."""

    # Name of the widget view class in front-end
    _view_name = Unicode('LegendView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('LegendModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('ipyleaflet-legend').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('ipyleaflet-legend').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with
    # `sync=True`
    # is automatically synced to the frontend *any* time it changes in Python.
    # It is synced back to Python from the frontend *any* time the model is
    # touched.
    title = Unicode('Legend').tag(sync=True)
    position = Unicode('bottomright').tag(sync=True)
    legend = Dict(default_value={
        "value 1": "#AAF",
        "value 2": "#55A",
        "value 3": "#005"}).tag(sync=True)

    def __init__(self, legend, *args, name="Legend", **kwargs):
        super().__init__(*args, **kwargs)
        self.title = name
        self.legend = legend

    @property
    def name(self):
        return self.title

    @name.setter
    def name(self, title):
        self.title = title
        self.send_state()

    @property
    def legends(self):
        return self.legend

    @legends.setter
    def legends(self, legends):
        self.legend = legends
        self.send_state()

    @property
    def positionning(self):
        return self.position

    @positionning.setter
    def positionning(self, position):
        self.position = position
        self.send_state()

    def add_legend_element(self, key, value):
        self.legend[key] = value
        self.send_state()

    def remove_legend_element(self, key):
        del self.legend[key]
        self.send_state()
