let mapOptions = {
    center:[51.958, 9.141], // Set the center later to an area where all the waypoints can be seen. 
    zoom:10
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([51.958, 9.141]);
marker.addTo(map);