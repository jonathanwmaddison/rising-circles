var circles = new Group();
var metronome = new Group();
var previousTimeStamp = 0;
var pause = false;
var speed = 5;

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
		color: '#2ecc71',
	},
	e: {
		sound: new Howl({
  		src: ['sounds/confetti.mp3']
		}),
		color: '#3498db',
	},
	r: {
		sound: new Howl({
  		src: ['sounds/corona.mp3']
		}),
		color: '#9b59b6',
	},
		t: {
		sound: new Howl({
  		src: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e',
	},
	y: {
		sound: new Howl({
  		src: ['sounds/flash-1.mp3']
		}),
		color: '#16a085',
	},
	u: {
		sound: new Howl({
  		src: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60',
	},
	i: {
		sound: new Howl({
  		src: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9',
	},
	o: {
		sound: new Howl({
			src: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad',
	},
	p: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50',
	},
	a: {
		sound: new Howl({
  		src: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f',
	},
	s: {
		sound: new Howl({
  		src: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22',
	},
	d: {
		sound: new Howl({
  		src: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c',
	},
	f: {
		sound: new Howl({
  		src: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6',
	},
	g: {
		sound: new Howl({
  		src: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12',
	},
	h: {
		sound: new Howl({
  		src: ['sounds/prism-3.mp3']
		}),
		color: '#d35400',
	},
	j: {
		sound: new Howl({
  		src: ['sounds/splits.mp3']
		}),
		color: '#1abc9c',
	},
	k: {
		sound: new Howl({
  		src: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71',
	},
	l: {
		sound: new Howl({
  		src: ['sounds/strike.mp3']
		}),
		color: '#3498db',
	},
	z: {
		sound: new Howl({
  		src: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6',
	},
	x: {
		sound: new Howl({
  		src: ['sounds/timer.mp3']
		}),
		color: '#34495e',
	},
	c: {
		sound: new Howl({
  		src: ['sounds/ufo.mp3']
		}),
		color: '#16a085',
	},
	v: {
		sound: new Howl({
  		src: ['sounds/veil.mp3']
		}),
		color: '#27ae60',
	},
	b: {
		sound: new Howl({
  		src: ['sounds/wipe.mp3']
		}),
		color: '#2980b9',
	},
	n: {
		sound: new Howl({
			src: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad',
	},
	m: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50',
	}
}

function horizontalLocation (index) {
	return view.size.width * (index/(Object.keys(keyData).length));
}
function addLocateData (object) {
	var index = 1;
	for (key in object) {
		object[key].locate = horizontalLocation(index)
		index++;
	}
}

function toggleSoundBank (soundbankId) {
	console.log(soundbankId)
	for (key in keyData) {
		var fileName = keyData[key].sound._src.split("/")[1] 
		keyData[key].sound = new Howl ({
			src: [soundbankId + "/" + fileName]
		});
	}
}

// Create a Paper.js Path to draw a line into it

function randomCoord () {
    return Math.floor(Math.random()*view.size.width)
}
function randomSize () {
	return Math.floor(Math.random()*30)
}
function randomRgb () {
	return Math.random()*1;
}

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
	addLocateData (keyData);
	if(!event.key) {
		event.key = event;
	}
	if (event.key === "space") {
		pause = !pause;
		if(pause) {
			document.getElementById("myCanvas").style.background = 'black';
		}
	}

	else if (keyData[event.key]) {
		var lastCircleIndex;
		circles.addChild(new Path.Circle(new Point(keyData[event.key].locate,0), 20));
		lastCircleIndex = circles.children.length - 1;
		circles.children[lastCircleIndex].fillColor = keyData[event.key].color;
		circles.children[lastCircleIndex].key = event.key;
		keyData[event.key].sound.play();
	}
}

function mobileKeyDown(letter) {
	addLocateData (keyData);
	var keys = "";
	keys = letter.trim();
	var lastCircleIndex;
	circles.addChild(new Path.Circle(new Point(keyData[keys].locate,0), 20));
	lastCircleIndex = circles.children.length-1;
	circles.children[lastCircleIndex].fillColor = keyData[keys].color;
	circles.children[lastCircleIndex].key = keys
	keyData[keys].sound.play();
}
function metro () {
	if (metronome.children.length>0) {
		metronome.removeChildren();
	} else {
		var metronomeYcoord = 0
		for (var i = 0; i<4; i++) {
			metronome.addChild(new Path.Circle(new Point(50,metronomeYcoord),20))
			metronome.children[i].key = "y"
			metronomeYcoord+=view.size.height/4;
		}
	metronome.fillColor = "#2c3e50"
	}
}
function animateGroup (group,speed) {
	for (var i = 0; i <group.children.length; i++) {
		var circle = group.children[i];
		circle.position.y -= speed

		if(circle.position.y < 0 ) {
			circle.position.y = view.size.height;
			keyData[circle.key].sound.play();
			document.getElementById("myCanvas").style.background = keyData[circle.key].color;
		}
	}
}
function onFrame(event) {
	if(!pause){
		animateGroup(metronome,speed);
		animateGroup(circles,speed);
	}
}
function undo() {
	circles.lastChild.remove();
}
function restart() {
	document.getElementById("myCanvas").style.background = 'black';
	circles.removeChildren();
	metronome.removeChildren();
}
function stop() {
	document.getElementById("myCanvas").style.background = 'black';
	pause = !pause;
}
function changeTempo(tempo){
	speed = tempo;
}
$( document ).ready(function() {
	var buttons = ""
	for (key in keyData) {
		buttons += "<span class=\"mobileButton\">" + key + "</span>";
	}
	$(".mobileInterface").append(buttons)
	$(".mobileButton").click(function () {
			mobileKeyDown($( this ).html())
		})
	
	var buttons = $(".mobileButton")
	for (var i = 0; i<buttons.length; i++) {
		buttons[i].style.background = keyData[buttons[i].outerText].color
		buttons[i].style.color = "white"
	}

	$("#pause").click(function(){
		stop();
	})
	$("#restart").click(function(){
		console.log(metronome)
		restart();
		console.log(metronome)
	})
    $("#metro").click(function(){
    	metro();
    })
    $("#undo").click(function(){
    	undo();
    })
    $('.toggleGroup').on('change', function() {
    	toggleSoundBank($('input[name=soundbanks]:checked', '.toggleGroup').val()); 
	});
	 $('#tempoSlider').on('change', function() {
    	changeTempo($('input[name=points]', '#tempoSlider').val()); 
	});
});
