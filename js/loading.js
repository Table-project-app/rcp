window.onload = function() {
  const loader = document.getElementById('page_loader');
  loader.classList.add('loaded');
},
lottie.loadAnimation({
container: document.getElementById("lottie-loader"),
renderer: "svg",
loop: true,
autoplay: true,
path: "json/loader.json",
rendererSettings: {
  progressiveLoad: true
},
animationData: null,
renderer: 'canvas',
images: null,
events: {
  complete: function() {console.log('Animation Loaded')},
  error: function(e) {console.error(e)}
}
});