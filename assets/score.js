const scoreBtn = document.getElementById('score');

var player = localStorage.getItem('player');

var playerDetails = player.substring(16, 19);
console.log(playerDetails);

var scoreDets = player.substring(42, 44);
console.log("scoreDets", scoreDets)

scoreBtn.addEventListener('click', function() {
    $('#player-scores').text(playerDetails + " " + scoreDets);
    console.log("player", player)
})