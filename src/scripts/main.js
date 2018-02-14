var elements = Array.prototype.slice.call(document.getElementsByClassName('js-viewport'));

elements.forEach(function(element) {
  new WhenInViewport(element, function(elementInViewport) {
    elementInViewport.classList.add('in-viewport');
  });
});
