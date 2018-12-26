let line;

jQuery(document).ready(function($) {
  $(".row-click").click(function() {
    window.location = $(this).data("href");
  });

  line = $(".toGraph").css("line-height");
});

function mpld3_load_lib(url, callback) {
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function () { console.warn("failed to load library " + url); };
  document.getElementsByTagName("head")[0].appendChild(s);
}

if (typeof (mpld3) !== "undefined" && mpld3._mpld3IsLoaded) {
  // already loaded: just create the figure
  !function (mpld3) {

    mpld3.draw_figure("fig_el279624167887064721144265325", { "width": 300.0, "height": 200.0, "axes": [{ "bbox": [0.125, 0.10999999999999999, 0.775, 0.77], "xlim": [-2.5500000000000003, 53.55], "ylim": [0.04999999999999993, 20.95], "xdomain": [-2.5500000000000003, 53.55], "ydomain": [0.04999999999999993, 20.95], "xscale": "linear", "yscale": "linear", "axes": [{ "position": "bottom", "nticks": 0, "tickvalues": [], "tickformat": [], "scale": "linear", "fontsize": null, "grid": { "gridOn": false }, "visible": true }, { "position": "left", "nticks": 0, "tickvalues": [], "tickformat": [], "scale": "linear", "fontsize": null, "grid": { "gridOn": false }, "visible": true }], "axesbg": "#D2E0F3", "axesbgalpha": null, "zoomable": true, "id": "el27962416894304384", "lines": [{ "data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el27962416867829464", "color": "#9966FF", "linewidth": 5.0, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" }], "paths": [], "markers": [], "texts": [{ "text": "weeks", "position": [0.5, -0.03607503607503604], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el27962416894306624" }, { "text": "commits", "position": [-0.023894862604540018, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el27962416894307576" }], "collections": [], "images": [], "sharex": [], "sharey": [] }], "data": { "data01": [[0.0, 2.0], [1.0, 20.0], [2.0, 7.0], [3.0, 15.0], [4.0, 20.0], [5.0, 13.0], [6.0, 2.0], [7.0, 7.0], [8.0, 14.0], [9.0, 9.0], [10.0, 4.0], [11.0, 8.0], [12.0, 4.0], [13.0, 14.0], [14.0, 16.0], [15.0, 8.0], [16.0, 3.0], [17.0, 19.0], [18.0, 2.0], [19.0, 16.0], [20.0, 14.0], [21.0, 6.0], [22.0, 9.0], [23.0, 5.0], [24.0, 14.0], [25.0, 3.0], [26.0, 1.0], [27.0, 1.0], [28.0, 3.0], [29.0, 4.0], [30.0, 1.0], [31.0, 7.0], [32.0, 8.0], [33.0, 7.0], [34.0, 4.0], [35.0, 4.0], [36.0, 18.0], [37.0, 20.0], [38.0, 7.0], [39.0, 7.0], [40.0, 4.0], [41.0, 13.0], [42.0, 5.0], [43.0, 3.0], [44.0, 14.0], [45.0, 6.0], [46.0, 2.0], [47.0, 19.0], [48.0, 1.0], [49.0, 4.0], [50.0, 19.0], [51.0, 4.0]] }, "id": "el27962416788706472", "plugins": [{ "type": "reset" }, { "type": "zoom", "button": true, "enabled": false }, { "type": "boxzoom", "button": true, "enabled": false }] });
  }(mpld3);
} else if (typeof define === "function" && define.amd) {
  // require.js is available: use it to load d3/mpld3
  require.config({ paths: { d3: "https://mpld3.github.io/js/d3.v3.min" } });
  require(["d3"], function (d3) {
    window.d3 = d3;
    mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.js", function () {

      mpld3.draw_figure("fig_el279624167887064721144265325", { "width": 300.0, "height": 200.0, "axes": [{ "bbox": [0.125, 0.10999999999999999, 0.775, 0.77], "xlim": [-2.5500000000000003, 53.55], "ylim": [0.04999999999999993, 20.95], "xdomain": [-2.5500000000000003, 53.55], "ydomain": [0.04999999999999993, 20.95], "xscale": "linear", "yscale": "linear", "axes": [{ "position": "bottom", "nticks": 0, "tickvalues": [], "tickformat": [], "scale": "linear", "fontsize": null, "grid": { "gridOn": false }, "visible": true }, { "position": "left", "nticks": 0, "tickvalues": [], "tickformat": [], "scale": "linear", "fontsize": null, "grid": { "gridOn": false }, "visible": true }], "axesbg": "#D2E0F3", "axesbgalpha": null, "zoomable": true, "id": "el27962416894304384", "lines": [{ "data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el27962416867829464", "color": "#9966FF", "linewidth": 5.0, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" }], "paths": [], "markers": [], "texts": [{ "text": "weeks", "position": [0.5, -0.03607503607503604], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el27962416894306624" }, { "text": "commits", "position": [-0.023894862604540018, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el27962416894307576" }], "collections": [], "images": [], "sharex": [], "sharey": [] }], "data": { "data01": [[0.0, 2.0], [1.0, 20.0], [2.0, 7.0], [3.0, 15.0], [4.0, 20.0], [5.0, 13.0], [6.0, 2.0], [7.0, 7.0], [8.0, 14.0], [9.0, 9.0], [10.0, 4.0], [11.0, 8.0], [12.0, 4.0], [13.0, 14.0], [14.0, 16.0], [15.0, 8.0], [16.0, 3.0], [17.0, 19.0], [18.0, 2.0], [19.0, 16.0], [20.0, 14.0], [21.0, 6.0], [22.0, 9.0], [23.0, 5.0], [24.0, 14.0], [25.0, 3.0], [26.0, 1.0], [27.0, 1.0], [28.0, 3.0], [29.0, 4.0], [30.0, 1.0], [31.0, 7.0], [32.0, 8.0], [33.0, 7.0], [34.0, 4.0], [35.0, 4.0], [36.0, 18.0], [37.0, 20.0], [38.0, 7.0], [39.0, 7.0], [40.0, 4.0], [41.0, 13.0], [42.0, 5.0], [43.0, 3.0], [44.0, 14.0], [45.0, 6.0], [46.0, 2.0], [47.0, 19.0], [48.0, 1.0], [49.0, 4.0], [50.0, 19.0], [51.0, 4.0]] }, "id": "el27962416788706472", "plugins": [{ "type": "reset" }, { "type": "zoom", "button": true, "enabled": false }, { "type": "boxzoom", "button": true, "enabled": false }] });
    });
  });
} else {
  // require.js not available: dynamically load d3 & mpld3
  mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function () {
    mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.js", function () {

      mpld3.draw_figure("fig_el279624167887064721144265325", { "width": 300.0, "height": 200.0, "axes": [{ "bbox": [0.125, 0.10999999999999999, 0.775, 0.77], "xlim": [-2.5500000000000003, 53.55], "ylim": [0.04999999999999993, 20.95], "xdomain": [-2.5500000000000003, 53.55], "ydomain": [0.04999999999999993, 20.95], "xscale": "linear", "yscale": "linear", "axes": [{ "position": "bottom", "nticks": 0, "tickvalues": [], "tickformat": [], "scale": "linear", "fontsize": null, "grid": { "gridOn": false }, "visible": true }, { "position": "left", "nticks": 0, "tickvalues": [], "tickformat": [], "scale": "linear", "fontsize": null, "grid": { "gridOn": false }, "visible": true }], "axesbg": "#D2E0F3", "axesbgalpha": null, "zoomable": true, "id": "el27962416894304384", "lines": [{ "data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el27962416867829464", "color": "#9966FF", "linewidth": 5.0, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" }], "paths": [], "markers": [], "texts": [{ "text": "weeks", "position": [0.5, -0.03607503607503604], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el27962416894306624" }, { "text": "commits", "position": [-0.023894862604540018, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el27962416894307576" }], "collections": [], "images": [], "sharex": [], "sharey": [] }], "data": { "data01": [[0.0, 2.0], [1.0, 20.0], [2.0, 7.0], [3.0, 15.0], [4.0, 20.0], [5.0, 13.0], [6.0, 2.0], [7.0, 7.0], [8.0, 14.0], [9.0, 9.0], [10.0, 4.0], [11.0, 8.0], [12.0, 4.0], [13.0, 14.0], [14.0, 16.0], [15.0, 8.0], [16.0, 3.0], [17.0, 19.0], [18.0, 2.0], [19.0, 16.0], [20.0, 14.0], [21.0, 6.0], [22.0, 9.0], [23.0, 5.0], [24.0, 14.0], [25.0, 3.0], [26.0, 1.0], [27.0, 1.0], [28.0, 3.0], [29.0, 4.0], [30.0, 1.0], [31.0, 7.0], [32.0, 8.0], [33.0, 7.0], [34.0, 4.0], [35.0, 4.0], [36.0, 18.0], [37.0, 20.0], [38.0, 7.0], [39.0, 7.0], [40.0, 4.0], [41.0, 13.0], [42.0, 5.0], [43.0, 3.0], [44.0, 14.0], [45.0, 6.0], [46.0, 2.0], [47.0, 19.0], [48.0, 1.0], [49.0, 4.0], [50.0, 19.0], [51.0, 4.0]] }, "id": "el27962416788706472", "plugins": [{ "type": "reset" }, { "type": "zoom", "button": true, "enabled": false }, { "type": "boxzoom", "button": true, "enabled": false }] });

      console.log(line);

      if(line == "4px") {
        document.getElementsByClassName("mpld3-figure")[0].setAttribute("transform", "scale(1.4)");
      } else if(line == "3px") {
          document.getElementsByClassName("mpld3-figure")[0].setAttribute("transform", "scale(1)");
        } else if(line == "2px") {
            document.getElementsByClassName("mpld3-figure")[0].setAttribute("transform", "scale(0.9)");
          } else if(line == "1px") {
            document.getElementsByClassName("mpld3-figure")[0].setAttribute("transform", "scale(0.7)");
          }
    })
  });
}