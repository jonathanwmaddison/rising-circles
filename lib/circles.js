window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

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
    return Math.floor(Math.random()*view.size.width)
}
function randomSize () {
	return Math.floor(Math.random()*30)
}
function randomRgb () {
	return Math.random()*1;
}
var circles = new Layer();
var metronome = new Group();
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
			console.log(event)
			event.item.position = event.point;
		}
	}
}

function onKeyDown(event) {
	if(!event.key) {
		event.key = event;
	}
	if (event.key === "space") {
		pause = !pause;
		if(pause) {
			document.getElementById("myCanvas").style.background = 'black';
		}
	}
	else if (event.key === 'backspace') {
		event.item.remove();
	}
	else if (keyData[event.key]) {
		var lastCircleIndex;
		if (previousTimeStamp === 0) {
			circles.addChild(new Path.Circle(new Point(randomCoord(),0), 20))
			lastCircleIndex = circles.children.length-1
			circles.children[lastCircleIndex].fillColor = keyData[event.key].color
			circles.children[lastCircleIndex].key = event.key
			previousTimeStamp = event.event.timeStamp
		} else {
			var timeElapsed = (event.event.timeStamp - previousTimeStamp)%view.size.width;
			circles.addChild(new Path.Circle(new Point(timeElapsed, 0), 20))
			lastCircleIndex = circles.children.length-1
			circles.children[lastCircleIndex].fillColor = keyData[event.key].color
			circles.children[lastCircleIndex].key = event.key
			keyData[event.key].sound.play();
		}
	}
}


function mobileKeyDown(letter) {
	var keys = "";
	keys = letter.trim();
	var lastCircleIndex;
	circles.addChild(new Path.Circle(new Point(randomCoord(),0), 20))
	lastCircleIndex = circles.children.length-1
	circles.children[lastCircleIndex].fillColor = keyData[keys].color
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
		animateGroup(metronome,0);
		animateGroup(circles,5);

	}
}

$( document ).ready(function() {
	if(window.mobileAndTabletcheck() || window.innerHeight<400 || window.innerWidth<400) {
		var buttons = ""
		for (key in keyData) {
			buttons += "<span class=\"mobileButton\">" + key +"</span>";
		}
		$(".mobileInterface").append(buttons)
		$(".mobileButton").click(function () {
			mobileKeyDown($( this ).html())
		})
	}
	var buttons = $(".mobileButton")
	for (var i = 0; i<buttons.length; i++) {
		console.log(buttons[i]);
		buttons[i].style.background = keyData[buttons[i].outerText].color
		buttons[i].style.color = keyData[buttons[i].outerText].color
	}
    $("#metro").click(function(){
    	metro();
    })
});
