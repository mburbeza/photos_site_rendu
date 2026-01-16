
var smiles = [
    {el: document.getElementById('smile1'), img:'Photo1.jpg', x:90, y:140, sx:2, sy:2, size:96},
    {el: document.getElementById('smile2'), img:'Photo2.jpg', x:320, y:350, sx:-2, sy:2, size:96},
    {el: document.getElementById('smile3'), img:'Photo3.jpg', x:440, y:170, sx:2, sy:-2, size:96}
];
var playing = true;
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');

function moveSmiles() {
    if (!playing) return;
    var w = window.innerWidth, h = window.innerHeight;
    for (var i=0; i<smiles.length; i++) {
        var s = smiles[i];
        s.x += s.sx;
        s.y += s.sy;
        if (s.x <= 0 || s.x + s.size >= w) s.sx *= -1;
        if (s.y <= 0 || s.y + s.size >= h) s.sy *= -1;
        s.el.style.left = s.x + 'px';
        s.el.style.top = s.y + 'px';
    }
    requestAnimationFrame(moveSmiles);
}

smiles.forEach(function(s, idx){
    s.el.onclick = function() {
        playing = false;
        modal.classList.remove('hidden');
        modalImg.src = s.img;
    };
});

function closePhoto() {
    modal.classList.add('hidden');
    playing = true;
    moveSmiles();
}


document.getElementById('game-area').classList.add('hidden');
