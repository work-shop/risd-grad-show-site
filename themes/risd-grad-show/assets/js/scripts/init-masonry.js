//randomizing the order of tiles loaded
var tiles = document.querySelector('.grid');
for (var i = tiles.children.length; i >= 0; i--) {
    tiles.appendChild(tiles.children[Math.random() * i | 0]);
}