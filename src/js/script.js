var container = document.querySelector('.container');
var grid = new Muuri(container, {

  // Item elements
  items: '.item',

  // Default show animation
  showDuration: 300,
  showEasing: 'ease',

  // Default hide animation
  hideDuration: 300,
  hideEasing: 'ease',

  // Item's visible/hidden state styles
  visibleStyles: {
    opacity: '1',
    transform: 'scale(1)'
  },
  hiddenStyles: {
    opacity: '0',
    transform: 'scale(0.5)'
  },

  // Layout
  layout: {
    fillGaps: false,
    horizontal: false,
    alignRight: false,
    alignBottom: false,
    rounding: false
  },
  layoutOnResize: 100,
  layoutOnInit: true,
  layoutDuration: 300,
  layoutEasing: 'ease',

  // Sorting
  sortData: null,

  // Drag & Drop
  dragEnabled: true,
  dragContainer: null,
  dragStartPredicate: {
    distance: 0,
    delay: 0,
    handle: false
  },
  dragAxis: null,
  dragSort: true,
  dragSortInterval: 100,
  dragSortPredicate: {
    threshold: 50,
    action: 'move'
  },
  dragReleaseDuration: 300,
  dragReleaseEasing: 'ease',
  dragHammerSettings: {
    touchAction: 'none'
  },

  // Classnames
  containerClass: 'muuri',
  itemClass: 'muuri-item',
  itemVisibleClass: 'muuri-item-shown',
  itemHiddenClass: 'muuri-item-hidden',
  itemPositioningClass: 'muuri-item-positioning',
  itemDraggingClass: 'muuri-item-dragging',
  itemReleasingClass: 'muuri-item-releasing'

});

window.onload = function() {
	var cards = document.querySelectorAll('.card');
	for (var i = 0; i < cards.length; i++) {
		cards[i].setAttribute('aria-label', cards[i].childNodes[1].innerText);
	}
};
