const div = document.querySelector("#map")
const info = document.querySelector(".info")
mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGktc2l2YXJhanUiLCJhIjoiY2xrZ3o0MG5jMDRqdzNvcnp4ZnBvZHQ4bCJ9.fjkl7FXHgXdueyxgY2tnUA';
// const divs = new mapboxgl.Map({
//     container: 'map', // container ID
//     projection: 'globe',
//     style: 'mapbox://styles/mapbox/satellite-v9', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9, // starting zoom
// });
let map = new mapboxgl.Map({
    container: 'map',
    projection: 'globe',
    center: [78.9629, 20.5937],
    style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: 1.5
});
map.on('click', async (e) => {
    let lngLat = e.lngLat;
    let lat = lngLat.lat;
    let lon = lngLat.lng;
    let con = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/ ${lon},${lat}.json?access_token=pk.eyJ1IjoicmlzaGktc2l2YXJhanUiLCJhIjoiY2xrZ3o0MG5jMDRqdzNvcnp4ZnBvZHQ4bCJ9.fjkl7FXHgXdueyxgY2tnUA`)
    let locality = con.data.features[1].place_name
    console.log(locality)
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb5de4977205403a59132f425bfb51a2&units=metric`);
    let weather = res.data.weather[0].description
    console.log(weather)
    let Temperature = res.data.main.temp
    console.log(Temperature)
    const view = document.createElement("p")
    const temp = document.createElement("p")
    temp.innerHTML = `Temperature: ${Temperature}`
    const weathers = document.createElement("p")
    weathers.innerHTML = `<p style="margin-bottom:2%;">Weather: ${weather}</p>`
    const loc = document.createElement("p")
    loc.innerHTML = `<p style="margin-bottom:20px;">Location: ${locality}</p><hr>`
    view.append(temp, weathers, loc)
    info.append(view)
    temp.classList.add("margin-inbetween");
    info.classList.add("over")
    view.classList.add("margin");
});
map.on('style.load', () => {
  map.setFog({
    color: 'rgb(186, 210, 235)', // Lower atmosphere
    'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
    'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
    'space-color': '#020d19', // Background color
    'star-intensity': 0 // Background star brightness (default 0.35 at low zoooms )
  });
});