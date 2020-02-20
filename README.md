ipyleaflet-legend
===============================

A custom legend based on this example https://leafletjs.com/examples/choropleth/

Installation
------------

To install use pip:

    $ pip install ipyleaflet_legend
    $ jupyter nbextension enable --py --sys-prefix ipyleaflet_legend

To install for jupyterlab

    $ jupyter labextension install ipyleaflet_legend

For a development installation (requires npm),

    $ git clone https://github.com/weatherforce/ipyleaflet-legend.git
    $ cd ipyleaflet-legend
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix ipyleaflet_legend
    $ jupyter nbextension enable --py --sys-prefix ipyleaflet_legend
    $ jupyter labextension install js

When actively developing your extension, build Jupyter Lab with the command:

    $ jupyter lab --watch

This take a minute or so to get started, but then allows you to hot-reload your javascript extension.
To see a change, save your javascript, watch the terminal for an update.

Note on first `jupyter lab --watch`, you may need to touch a file to get Jupyter Lab to open.

