// **********************************
// Earth Globe Start
// **********************************

// Select the container element
const container = document.getElementById('globe-container');

// Create the globe instance and pass the container element
const myGlobe = new Globe(container, {rendererConfig: { precision: 'mediump' }})
  .globeImageUrl(`${window.location.protocol}/utils/imgs/World_blank_map_countries.PNG`) // Earth texture
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') // Topology for bump effect
  .backgroundColor("rgba(0, 0, 0, 0)")
  .pointsData([
    { lat: 40.7128, lng: -74.0060, size: 1, color: 'red' }, // New York
    { lat: 48.8566, lng: 2.3522, size: 1.5, color: 'blue' }, // Paris
    { lat: 35.6895, lng: 139.6917, size: 2, color: 'green' } // Tokyo
  ])
  .pointLat(d => d.lat)
  .pointLng(d => d.lng)
  .pointColor(d => d.color)
  .pointRadius(d => d.size)

myGlobe.camera().fov = 37; // Zoom in by decreasing the FOV (default is 75)
myGlobe.camera().updateProjectionMatrix(); // Apply the FOV change

const { width, height } = container.getBoundingClientRect();
myGlobe.width(width).height(height);

myGlobe.controls().autoRotate = true

// **********************************
// Earth Globe End
// **********************************

// const dropdownItems = Array.from(document.querySelectorAll(".dropdown-item"))
// dropdownItems.forEach(item => (
//   document.addEventListener("click", (e) => {
//     document.querySelector(".dropdown-toggle").innerHTML = item.innerHTML
//   })
// ))

function changeLang(element) {
  console.log(document.querySelector(".dropdown-toggle"))
  console.log(element)
  document.querySelector(".dropdown-toggle").innerHTML = element.innerHTML
}
