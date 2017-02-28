
var keyData = {
	q: {
		sound: new Howl({
  		src: ['sounds/bubbles.mp3']
		}),
		color: '#1abc9c',
	},
	w: {
		sound: new Howl({
  		src: ['sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		src: ['sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		src: ['sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		src: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		src: ['sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		src: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		src: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			src: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		src: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		src: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		src: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		src: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		src: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		src: ['sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		src: ['sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		src: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		src: ['sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		src: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		src: ['sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		src: ['sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		src: ['sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		src: ['sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}
// Create a Paper.js Path to draw a line into it

function randomCoord () {
    return Math.floor(Math.random()*1001)
}
function randomSize () {
	return Math.floor(Math.random()*30)
}
function randomRgb () {
	return Math.random()*1;
}
var circles = [];
var metronome = [];
var previousTimeStamp = 0;
var pause = false;
function onMouseDown(event) {
	pause = !pause;
	if(pause) {
		document.getElementById("myCanvas").style.background = 'black';
	}
}
function onMouseMove(event) {
	if (pause) {
		if (event.item) {
			event.item.position = event.point;
		}
	}
}
function onKeyDown(event) {
	console.log(event.key)
	if (event.key === "space") {
		pause = !pause;
		if(pause) {
			document.getElementById("myCanvas").style.background = 'black';
		}
	}
	else if (keyData[event.key]) {
		if (previousTimeStamp === 0) {
			circles.unshift(new Path.Circle(new Point(randomCoord(),0), 20))
			circles[0].fillColor = keyData[event.key].color
			circles[0].key = event.key
			previousTimeStamp = event.event.timeStamp
		} else {
			var timeElapsed = (event.event.timeStamp - previousTimeStamp)%view.size.width;
			//if (timeElapsed<30) { timeElapsed = 30}
			//timeElapsed*=Math.random()+.9
			circles.unshift(new Path.Circle(new Point(timeElapsed, 0), 20))
			circles[0].fillColor = keyData[event.key].color
			circles[0].key = event.key
			keyData[event.key].sound.play();
			//previousTimeStamp = event.event.timeStamp
		}
	}
}
function metro () {
	if (metronome.length>0) {
		metronome = [];
	} else {
		var metronomeYcoord = 0
		for (var i = 0; i<4; i++) {
			metronome.unshift(new Path.Circle(new Point(50,metronomeYcoord),20))
			metronome[0].key = "y"
			metronome[0].fillColor = "#2c3e50"
			metronomeYcoord+=view.size.height/4;
		}
	}
}
function onFrame(event) {
// Run through the active layer's children list and change
// the position of the placed symbols:
	if(!pause){
		for (var i = 0; i < circles.length+metronome.length; i++) {
			var item = project.activeLayer.children[i];
			//move items up
			item.position.y -= 5

		// If the item has left the view on the top, move it back
		// to the bottom:

			if (item.position.y < 0) {
				item.position.y = view.size.height;
				keyData[item.key].sound.play();
				document.getElementById("myCanvas").style.background = keyData[item.key].color;
			}
		}
	}
}

$( document ).ready(function() {
    $("#metro").click(function(){
    	metro();
    	console.log(metronome[0].key)
    })
});
