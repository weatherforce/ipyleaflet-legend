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
    _view_module = Unicode('jupyter-widget-legend').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('jupyter-widget-legend').tag(sync=True)

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
    title = Unicode('Legendaire').tag(sync=True)
    position = Unicode('bottomright').tag(sync=True)
    legend = Dict(default_value={
        "pas ouf": "#AAF",
        "moyen ouf": "#55A",
        "ouf": "#005"}).tag(sync=True)

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
