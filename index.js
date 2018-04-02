const gplay = require('aso')('gplay');
const itunes = require('aso')('itunes');
 
// do stuff with google play 
gplay.scores('game').then(data => console.log('google', data));
 
// do stuff with itunes 
itunes.scores('game').then(data => console.log('apple', data));