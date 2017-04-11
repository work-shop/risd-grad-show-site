//randomizing the order of tiles loaded
var tiles = document.querySelector('.grid');
for (var i = tiles.children.length; i >= 0; i--) {
    tiles.appendChild(tiles.children[Math.random() * i | 0]);
}
//Using Masonry

/*
jQuery('.grid').masonry({
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  gutter: 0,
  fitWidth: true
});
*/

//Using Mason JS

jQuery(".grid").mason({
	itemSelector: ".grid-item",
	ratio: 4,
	sizes: [
		[1,1],
		//[1,2],
		[1,2],
		[1,3]
		
	],
	columns: [
        [0,480,1],
        [480,780,2],
        [780,1080,3],
        [1080,1320,4],
        [1320,1680,5]
    ],
	promoted: [
        ['.date', 1, 4],
        ['.gradshow', 1, 1],
        ['.location', 1, 1],
        ['.thesis', 1, 1]
    ],
	
    layout: 'fluid'
});