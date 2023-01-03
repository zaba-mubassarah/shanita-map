
var myview = new ol.View({
   center: [0,0],
   zoom:4
})

var myLayer= new ol.layer.Tile({
  source:new ol.source.OSM()
})

var layer = [myLayer]

var map = new ol.Map({
    target: 'map',
    layers: layer,
    view: myview
  });