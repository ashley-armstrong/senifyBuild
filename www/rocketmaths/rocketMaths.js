(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bluePlanet = function() {
	this.initialize(img.bluePlanet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.bronze = function() {
	this.initialize(img.bronze);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.gold = function() {
	this.initialize(img.gold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.moon = function() {
	this.initialize(img.moon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,137);


(lib.redPlanet = function() {
	this.initialize(img.redPlanet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.rocketIlustration = function() {
	this.initialize(img.rocketIlustration);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,452);


(lib.silver = function() {
	this.initialize(img.silver);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.yellowPlanet = function() {
	this.initialize(img.yellowPlanet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yellowPlanet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yellowPlanet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellowPlanet_1, new cjs.Rectangle(0,0,300,300), null);


(lib.rocket1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{rightAnswer:0});

	// rocketRight
	this.instance = new lib.rocketIlustration();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.555,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket1, new cjs.Rectangle(0,0,184.7,250.7), null);


(lib.redPlanet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.redPlanet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redPlanet_1, new cjs.Rectangle(0,0,300,300), null);


(lib.print = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("PRINT", "bold 37px 'Proxima Nova'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 119;
	this.text.parent = this;
	this.text.setTransform(1,-21.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AzEF9QgeAAAAgeIAAq9QAAgeAeAAMAmJAAAQAeAAAAAeIAAK9QAAAegeAAg");
	this.shape.setTransform(0,0,0.719,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.print, new cjs.Rectangle(-89.9,-38.1,179.9,76.3), null);


(lib.planets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yellowPlanet();
	this.instance.parent = this;
	this.instance.setTransform(285.5,-150.5);

	this.instance_1 = new lib.redPlanet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-585.5,-149.5);

	this.instance_2 = new lib.bluePlanet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-145.5,-150.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-585.5,-150.5,1171,301);


(lib.next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgcCJIAAjdIhQAAIAAg0IDZAAIAAA0IhQAAIAADdg");
	this.shape.setTransform(35.6,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABECJIhEhkIhEBkIhFAAIBjiLIhdiGIBGAAIA9BeIA+heIBGAAIhdCFIBjCMg");
	this.shape_1.setTransform(10,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhgCJIAAkRIDBAAIAAAyIiGAAIAAA8ICDAAIAAAxIiDAAIAAA/ICGAAIAAAzg");
	this.shape_2.setTransform(-15.2,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABCCJIiBi3IAAC3Ig6AAIAAkRIA7AAIB+CwIAAiwIA7AAIAAERg");
	this.shape_3.setTransform(-42.5,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArRE/QgoAAAAgoIAAotQAAgoAoAAIWjAAQAoAAAAAoIAAItQAAAogoAAg");
	this.shape_4.setTransform(-4.4,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.next, new cjs.Rectangle(-80.6,-34.1,152.5,63.8), null);


(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("MAIN MENU", "bold 37px 'Proxima Nova'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 237;
	this.text.parent = this;
	this.text.setTransform(1,-20.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AzEF9QgeAAAAgeIAAq9QAAgeAeAAMAmJAAAQAeAAAAAeIAAK9QAAAegeAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.menu, new cjs.Rectangle(-125.1,-38.1,250.3,76.3), null);


(lib.explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9966").s().p("AoSNAIwwHlIKsu9IyBjsIRdlzIsatlIRjFjIiEySIK8OzIJDwAIAJSZIQwnmIqtO+ISBDtIxcFyIMaNlIxiljICDSSIq7uzIpEQAg");
	this.shape.setTransform(-0.1,-0.1,0.454,0.479);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6666").s().p("AoSNAIwwHlIKsu9IyBjsIRdlzIsatlIRjFjIiEySIK8OzIJDwAIAJSZIQwnmIqtO+ISBDtIxcFyIMaNlIxiljICDSSIq7uzIpEQAg");
	this.shape_1.setTransform(0,0,0.706,0.696);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6633").s().p("AoSNAIwwHlIKsu9IyBjsIRdlzIsatlIRjFjIiEySIK8OzIJDwAIAJSZIQwnmIqtO+ISBDtIxcFyIMaNlIxiljICDSSIq7uzIpEQAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.explosion, new cjs.Rectangle(-207.1,-200.8,414.3,401.7), null);


(lib.bluePlanet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bluePlanet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluePlanet_1, new cjs.Rectangle(0,0,300,300), null);


(lib.rocket2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rocket1();
	this.instance.parent = this;
	this.instance.setTransform(92.4,125.4,1,1,0,0,0,92.4,125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket2, new cjs.Rectangle(0,0,184.7,250.7), null);


(lib.rightAnswer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("rightAnswerSound");
		score++;
	}
	this.frame_24 = function() {
		createjs.Sound.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1));

	// rightText
	this.rightText = new cjs.Text("0", "bold 112px 'Proxima Nova'", "#FFFFFF");
	this.rightText.name = "rightText";
	this.rightText.textAlign = "center";
	this.rightText.lineHeight = 129;
	this.rightText.lineWidth = 176;
	this.rightText.parent = this;
	this.rightText.setTransform(90.7,267.4);
	this.rightText.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.rightText).wait(25));

	// rocketRight
	this.instance = new lib.rocket1();
	this.instance.parent = this;
	this.instance.setTransform(92.4,125.4,1,1,0,0,0,92.4,125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-397.9},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,193,416.4);


(lib.wrongAnswer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("wrongAnswerSound");
	}
	this.frame_24 = function() {
		createjs.Sound.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1));

	// text
	this.wrongText1 = new cjs.Text("0", "bold 112px 'Proxima Nova'", "#FFFFFF");
	this.wrongText1.name = "wrongText1";
	this.wrongText1.textAlign = "center";
	this.wrongText1.lineHeight = 129;
	this.wrongText1.lineWidth = 176;
	this.wrongText1.parent = this;
	this.wrongText1.setTransform(90.7,267.4);
	this.wrongText1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.wrongText1).wait(25));

	// explosion
	this.instance = new lib.explosion();
	this.instance.parent = this;
	this.instance.setTransform(92.7,116.8,0.002,0.002,0,0,0,0,20.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:116.3},23).wait(1));

	// wrongRocket1
	this.instance_1 = new lib.rocket2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.4,125.4,1,1,0,0,0,92.4,125.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAAABIAAAAIAAABIAAgBIABABIAAgBIAAAAIAAAAIABABIgBgBIAAACIgBgCIAAADgAAAABIAAAAIAAABIAAgBIgBACgAgBAAIABAAIAAABIgCABgAADABIgBAAIgBgBIABAAIAAAAIABABgAACABIgBAAIAAgBIABABgAgCAAIABAAIgBAAIABAAIAAAAIgBgBIACAAIgBgBIABABIAAABIgBgBIABABIgBAAIABAAIgBAAgAABAAIABAAIgBAAIACgBIgBABIAAAAIABAAIgBAAgAABAAIAAAAIAAgBIABgBIgBACgAAAgBIAAAAIAAAAIAAgBIAAABIABgBIAAABIgBAAg");
	this.shape.setTransform(-168.9,-134.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAAABIAAAAIAAABIAAgBIAAAAIgBAAIABAAIAAgBIgBAAIAAAAIABAAIgBAAIABAAIgBgBIABABIAAgBIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAABIAAAAIABAAIgBAAIABAAIAAAAIgBAAIABABIgBgBIAAABIABAAIgBAAIAAAAIAAAAIAAABIgBgBIAAABg");
	this.shape_1.setTransform(-168.9,-134.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6633").s().p("AAAACIgBACIAAgDIgCACIACgCIgCAAIABgBIgCAAIACAAIABAAIgBAAIABAAIAAAAIgBACIACgBIgBAAIABAAIgBACIABgCIAAADIAAgDIABACIAAgCIACABIgBgBIAAAAIgBAAIABAAIACADIgDgCIABADIgCgDIAAADgAACABIABAAIAAAAIACABgAACAAIAAAAIACAAIABAAIgCAAgAACAAIACgBIgBABgAADgCIgCABIAAAAIAAgBIgBABIAAgBIAAABIAAAAIgBgBIABABIgCAAIABABIAAAAIgCgCIACABIgBgCIACACIAAgDIAAADIABgDIAAADIADgCIgCACIADAAIgBAAIgDABgAAEgBg");
	this.shape_2.setTransform(-168.9,-134.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_1}]},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,193,416.4);


(lib.rocket3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rocket2();
	this.instance.parent = this;
	this.instance.setTransform(92.4,125.4,1,1,0,0,0,92.4,125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket3, new cjs.Rectangle(0,0,184.7,250.7), null);


(lib.wrongAnswer3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("wrongAnswerSound");
	}
	this.frame_24 = function() {
		this.stop();
		createjs.Sound.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1));

	// text
	this.wrongText2 = new cjs.Text("0", "bold 112px 'Proxima Nova'", "#FFFFFF");
	this.wrongText2.name = "wrongText2";
	this.wrongText2.textAlign = "center";
	this.wrongText2.lineHeight = 129;
	this.wrongText2.lineWidth = 176;
	this.wrongText2.parent = this;
	this.wrongText2.setTransform(90.7,267.4);
	this.wrongText2.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.wrongText2).wait(25));

	// explosion
	this.instance = new lib.explosion();
	this.instance.parent = this;
	this.instance.setTransform(92.7,116.8,0.002,0.002,0,0,0,0,20.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:116.3},23).wait(1));

	// rocket3
	this.instance_1 = new lib.rocket3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.4,125.4,1,1,0,0,0,92.4,125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,193,416.4);


// stage content:
(lib.rocketMaths = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:0,q2:4,q3:9,q4:14,q5:19,q6:24,q7:29,q8:34,q9:39,q10:44,b:49,s:50,g:51,"b":49,"s":50,"g":51});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.rightAnswer.rightText.text = "12";
		this.wrongAnswer1.wrongText1.text="20";
		this.wrongAnswer2.wrongText2.text="35";
		
		this.question.text = "Which number is NOT a multiple of 5?";
		
		
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('q2');
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		createjs.Sound.stop();
		
		this.rightAnswer.rightText.text = "17";
		this.wrongAnswer1.wrongText1.text="16";
		this.wrongAnswer2.wrongText2.text="20";
		
		this.question.text = "Which number is NOT a multiple of 4?";
		
		
		this.rightAnswer.gotoAndStop(0);
		this.wrongAnswer1.gotoAndStop(0);
		this.wrongAnswer2.gotoAndStop(0);
		
		this.rightAnswer.rightText.color = "white";
		this.wrongAnswer1.wrongText1.color="white";
		this.wrongAnswer2.wrongText2.color="white";
		
		this.rightAnswer.mouseEnabled = true;
		this.wrongAnswer1.mouseEnabled = true;
		this.wrongAnswer2.mouseEnabled = true;
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('q3');
		}
	}
	this.frame_9 = function() {
		this.stop();
		
		createjs.Sound.stop();
		
		this.rightAnswer.rightText.text = "19";
		this.wrongAnswer1.wrongText1.text="15";
		this.wrongAnswer2.wrongText2.text="21";
		
		this.question.text = "Which number is NOT a multiple of 3?";
		
		
		
		this.rightAnswer.gotoAndStop(0);
		this.wrongAnswer1.gotoAndStop(0);
		this.wrongAnswer2.gotoAndStop(0);
		
		this.rightAnswer.rightText.color = "white";
		this.wrongAnswer1.wrongText1.color="white";
		this.wrongAnswer2.wrongText2.color="white";
		
		this.rightAnswer.mouseEnabled = true;
		this.wrongAnswer1.mouseEnabled = true;
		this.wrongAnswer2.mouseEnabled = true;
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('q4');
		}
	}
	this.frame_14 = function() {
		this.stop();
		
		createjs.Sound.stop();
		
		this.rightAnswer.rightText.text = "11";
		this.wrongAnswer1.wrongText1.text="18";
		this.wrongAnswer2.wrongText2.text="20";
		
		this.question.text = "Which number is NOT a multiple of 2?";
		
		
		
		this.rightAnswer.gotoAndStop(0);
		this.wrongAnswer1.gotoAndStop(0);
		this.wrongAnswer2.gotoAndStop(0);
		
		this.rightAnswer.rightText.color = "white";
		this.wrongAnswer1.wrongText1.color="white";
		this.wrongAnswer2.wrongText2.color="white";
		
		this.rightAnswer.mouseEnabled = true;
		this.wrongAnswer1.mouseEnabled = true;
		this.wrongAnswer2.mouseEnabled = true;
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('q5');
		}
	}
	this.frame_19 = function() {
		this.stop();
		
		createjs.Sound.stop();
		
		this.rightAnswer.rightText.text = "55";
		this.wrongAnswer1.wrongText1.text="70";
		this.wrongAnswer2.wrongText2.text="40";
		
		this.question.text = "Which number is NOT a multiple of 10?";
		
		
		
		this.rightAnswer.gotoAndStop(0);
		this.wrongAnswer1.gotoAndStop(0);
		this.wrongAnswer2.gotoAndStop(0);
		
		this.rightAnswer.rightText.color = "white";
		this.wrongAnswer1.wrongText1.color="white";
		this.wrongAnswer2.wrongText2.color="white";
		
		this.rightAnswer.mouseEnabled = true;
		this.wrongAnswer1.mouseEnabled = true;
		this.wrongAnswer2.mouseEnabled = true;
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('q6');
		}
	}
	this.frame_24 = function() {
		this.stop();
		
		createjs.Sound.stop();
		
		this.rightAnswer.rightText.text = "35";
		this.wrongAnswer1.wrongText1.text="18";
		this.wrongAnswer2.wrongText2.text="24";
		
		this.question.text = "Which number is NOT a multiple of 6?";
		
		
		this.rightAnswer.gotoAndStop(0);
		this.wrongAnswer1.gotoAndStop(0);
		this.wrongAnswer2.gotoAndStop(0);
		
		this.rightAnswer.rightText.color = "white";
		this.wrongAnswer1.wrongText1.color="white";
		this.wrongAnswer2.wrongText2.color="white";
		
		this.rightAnswer.mouseEnabled = true;
		this.wrongAnswer1.mouseEnabled = true;
		this.wrongAnswer2.mouseEnabled = true;
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('q7');
		}
	}
	this.frame_29 = function() {
		this.stop();
		
		createjs.Sound.stop();
		
		this.rightAnswer.rightText.text = "99";
		this.wrongAnswer1.wrongText1.text="60";
		this.wrongAnswer2.wrongText2.text="80";
		
		this.question.text = "Which number is NOT a multiple of 10?";
		
		
		
		this.rightAnswer.gotoAndStop(0);
		this.wrongAnswer1.gotoAndStop(0);
		this.wrongAnswer2.gotoAndStop(0);
		
		this.rightAnswer.rightText.color = "white";
		this.wrongAnswer1.wrongText1.color="white";
		this.wrongAnswer2.wrongText2.color="white";
		
		this.rightAnswer.mouseEnabled = true;
		this.wrongAnswer1.mouseEnabled = true;
		this.wrongAnswer2.mouseEnabled = true;
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('q8');
		}
	}
	this.frame_34 = function() {
		this.stop();
		
		createjs.Sound.stop();
		
		this.rightAnswer.rightText.text = "36";
		this.wrongAnswer1.wrongText1.text="45";
		this.wrongAnswer2.wrongText2.text="60";
		
		this.question.text = "Which number is NOT a multiple of 5?";
		
		
		this.rightAnswer.gotoAndStop(0);
		this.wrongAnswer1.gotoAndStop(0);
		this.wrongAnswer2.gotoAndStop(0);
		
		this.rightAnswer.rightText.color = "white";
		this.wrongAnswer1.wrongText1.color="white";
		this.wrongAnswer2.wrongText2.color="white";
		
		this.rightAnswer.mouseEnabled = true;
		this.wrongAnswer1.mouseEnabled = true;
		this.wrongAnswer2.mouseEnabled = true;
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('q9');
		}
	}
	this.frame_39 = function() {
		this.stop();
		
		createjs.Sound.stop();
		
		this.rightAnswer.rightText.text = "26";
		this.wrongAnswer1.wrongText1.text="30";
		this.wrongAnswer2.wrongText2.text="27";
		
		this.question.text = "Which number is NOT a multiple of 3?";
		
		
		
		this.rightAnswer.gotoAndStop(0);
		this.wrongAnswer1.gotoAndStop(0);
		this.wrongAnswer2.gotoAndStop(0);
		
		this.rightAnswer.rightText.color = "white";
		this.wrongAnswer1.wrongText1.color="white";
		this.wrongAnswer2.wrongText2.color="white";
		
		this.rightAnswer.mouseEnabled = true;
		this.wrongAnswer1.mouseEnabled = true;
		this.wrongAnswer2.mouseEnabled = true;
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('q10');
		}
	}
	this.frame_44 = function() {
		this.stop();
		
		createjs.Sound.stop();
		
		this.rightAnswer.rightText.text = "13";
		this.wrongAnswer1.wrongText1.text="8";
		this.wrongAnswer2.wrongText2.text="36";
		
		this.question.text = "Which number is NOT a multiple of 4?";
		
		
		
		this.rightAnswer.gotoAndStop(0);
		this.wrongAnswer1.gotoAndStop(0);
		this.wrongAnswer2.gotoAndStop(0);
		
		this.rightAnswer.rightText.color = "white";
		this.wrongAnswer1.wrongText1.color="white";
		this.wrongAnswer2.wrongText2.color="white";
		
		this.rightAnswer.mouseEnabled = true;
		this.wrongAnswer1.mouseEnabled = true;
		this.wrongAnswer2.mouseEnabled = true;
		
		this.nxt.mouseEnabled = false;
		this.rightAnswer.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.rightAnswer.play();
			
		
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
			
		}
		
		this.wrongAnswer1.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
		
			this.wrongAnswer1.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		
		this.wrongAnswer2.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
		
			this.wrongAnswer2.play();
			
			this.rightAnswer.rightText.color = "green";
			
			this.wrongAnswer1.wrongText1.color="red";
			this.wrongAnswer2.wrongText2.color="red";
			
			
			this.rightAnswer.mouseEnabled = false;
			this.wrongAnswer1.mouseEnabled = false;
			this.wrongAnswer2.mouseEnabled = false;
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			
			if (score <= 3) {
				this.gotoAndStop('b');
			} else if (score >= 4 && score < 8) {
				this.gotoAndStop('s');
			} else {
				this.gotoAndStop('g');
			}
		}
	}
	this.frame_49 = function() {
		this.stop();
		
		this.userscore.text = score;
		
		this.username.text = name;
		
		this.printBtn.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5() {
		
			window.print();
		
		}
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.menu.on('click', function () {
			/*
		Loads the URL in a new browser window.
		*/
			window.open('http://senify.co.uk/game', '_self');
		});
	}
	this.frame_50 = function() {
		this.stop();
		
		this.userscore.text = score;
		
		this.username.text = name;
		
		this.printBtn.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5() {
		
			window.print();
		
		}
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.menu.on('click', function () {
			/*
		Loads the URL in a new browser window.
		*/
			window.open('http://senify.co.uk/game', '_self');
		});
	}
	this.frame_51 = function() {
		this.stop();
		
		this.userscore.text = score;
		
		this.username.text = name;
		
		this.printBtn.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5() {
		
			window.print();
		
		}
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.menu.on('click', function () {
			/*
		Loads the URL in a new browser window.
		*/
			window.open('http://senify.co.uk/game', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(5).call(this.frame_29).wait(5).call(this.frame_34).wait(5).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1));

	// userClick
	this.instance = new lib.bronze();
	this.instance.parent = this;
	this.instance.setTransform(117,188,1.557,1.557);

	this.printBtn = new lib.print();
	this.printBtn.name = "printBtn";
	this.printBtn.parent = this;
	this.printBtn.setTransform(1080.6,84.5);

	this.text = new cjs.Text("10", "bold 96px 'Proxima Nova'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 111;
	this.text.lineWidth = 117;
	this.text.parent = this;
	this.text.setTransform(963.7,507.6);

	this.text_1 = new cjs.Text("/", "bold 96px 'Proxima Nova'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 111;
	this.text_1.lineWidth = 32;
	this.text_1.parent = this;
	this.text_1.setTransform(885.2,507.6);

	this.userscore = new cjs.Text("0", "bold 96px 'Proxima Nova'", "#333333");
	this.userscore.name = "userscore";
	this.userscore.textAlign = "center";
	this.userscore.lineHeight = 111;
	this.userscore.lineWidth = 117;
	this.userscore.parent = this;
	this.userscore.setTransform(806.8,507.6);

	this.username = new cjs.Text("USERNAME", "bold 57px 'Proxima Nova'", "#333333");
	this.username.name = "username";
	this.username.textAlign = "center";
	this.username.lineHeight = 66;
	this.username.lineWidth = 450;
	this.username.parent = this;
	this.username.setTransform(889,277);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgfCCQgNgOgBgUQABgTANgNQANgNASAAQAUAAANANQANANAAATQAAAUgNAOQgNANgUAAQgSAAgNgNgAgfg/QgNgNgBgTQABgUANgNQANgOASAAQAUAAANAOQANANAAAUQAAATgNANQgNANgUABQgSgBgNgNg");
	this.shape.setTransform(1071.2,458.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AivC+IAAl7ICWAAQA7AAAtAYQAuAYAZAqQAZAqABA5QgBA6gZAqQgZArguAXQgtAYg7AAgAheB3IBFAAQAlgBAbgQQAagQAOgaQAOgbAAghQAAghgOgbQgNgbgagPQgbgQgmAAIhFAAg");
	this.shape_1.setTransform(1044.4,453.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiFC+IAAl7IEMAAIAABGIi7AAIAABSIC2AAIAABEIi2AAIAABZIC7AAIAABGg");
	this.shape_2.setTransform(1007,453.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AA9C+IhJiIIg8AAIAACIIhRAAIAAl7ICxAAQAnAAAeAQQAcAPAPAcQAPAcAAAjQAAAigMAYQgMAWgTAOQgTAOgUAEIBVCRgAhIgPIBUAAQAZAAAPgOQAQgOABgZQgBgXgQgPQgPgNgZAAIhUAAg");
	this.shape_3.setTransform(972.3,453.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhlCrQgtgZgagsQgZgsgBg6QABg5AZgsQAagsAtgZQAsgZA5gBQA6ABAtAZQAsAZAaAsQAZAsAAA5QAAA6gZAsQgaAsgsAZQgtAZg6ABQg5gBgsgZgAg9hsQgZARgOAcQgOAcgBAjQABAkAOAcQAOAcAZAQQAbARAiAAQAjAAAagRQAagQAOgcQAOgcAAgkQAAgjgOgcQgOgcgagRQgagQgjAAQgiAAgbAQg");
	this.shape_4.setTransform(931.3,453.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhSCsQgsgZgbgsQgagsgBg7QABg6AagsQAbgsAsgZQAugZA3AAQArABAgANQAfANAVAVQAWAVAMAYIhEAiQgNgXgYgQQgYgPgggBQghAAgZAQQgaARgQAcQgPAcgBAjQABAkAPAcQAQAcAaAQQAZARAhAAQAggBAYgPQAYgPANgYIBEAhQgMAYgWAWQgWAVgeANQggANgrABQg3gBgugYg");
	this.shape_5.setTransform(890.4,453.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhZC0QgogQgbgcIAtg9QAUAVAeAPQAfAOAmABQAigBAQgNQAQgMAAgRQAAgUgWgLQgVgKgggIQgYgEgZgIQgZgHgVgMQgVgMgNgUQgNgVAAgfQAAggARgaQARgZAhgQQAggPAsAAQAtAAAmANQAlAOAcAaIgtA7QgYgWgcgKQgdgKgbAAQgbAAgOALQgPALAAARQABATAVAJQAVAJAgAHQAYAFAZAHQAZAIAVAMQAVAMANAUQANAVABAgQAAAigRAcQgRAbgiARQghAPg0AAQg1AAgogQg");
	this.shape_6.setTransform(853,453.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AheCtQgmgUgTgjQgSgkAAgvIAAjkIBSAAIAADhQAAAoAWAZQAWAYArAAQAsAAAWgYQAWgZAAgoIAAjhIBSAAIAADkQAAAvgTAkQgSAjglAUQgmAUg6AAQg5AAglgUg");
	this.shape_7.setTransform(800.8,453.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhmCrQgsgZgagsQgZgsgBg6QABg5AZgsQAagsAsgZQAtgZA5gBQA6ABAtAZQAsAZAaAsQAZAsABA5QgBA6gZAsQgaAsgsAZQgtAZg6ABQg5gBgtgZgAg8hsQgaARgOAcQgOAcAAAjQAAAkAOAcQAOAcAaAQQAaARAiAAQAjAAAagRQAagQAOgcQAOgcAAgkQAAgjgOgcQgOgcgagRQgagQgjAAQgiAAgaAQg");
	this.shape_8.setTransform(758.3,453.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgnC+IAAibIiTjgIBdAAIBeCZIBdiZIBdAAIiSDgIAACbg");
	this.shape_9.setTransform(718.1,453.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AivC+IAAl7ICWAAQA7AAAuAYQAsAXAaArQAaAqAAA5QAAA6gaAqQgaArgsAYQguAWg7ABgAheB3IBFAAQAkAAAbgQQAbgRAOgaQAOgcAAggQAAghgNgbQgOgbgagPQgbgQgmAAIhFAAg");
	this.shape_10.setTransform(1093.9,386.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AA9C+IhJiIIg8AAIAACIIhRAAIAAl7ICxAAQAnAAAeAQQAcAPAPAcQAPAbAAAlQAAAhgMAXQgMAXgTANQgTAPgUAEIBVCRgAhIgPIBUAAQAZAAAPgOQAQgOABgYQgBgZgQgOQgPgOgZABIhUAAg");
	this.shape_11.setTransform(1055.1,386.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("ABtC+IgXhCIipAAIgZBCIhZAAICUl7IBlAAICRF7gAA/A2Ig/itIg+CtIB9AAg");
	this.shape_12.setTransform(1016.4,386.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("ABDC+IhDkEIhBEEIhWAAIhtl7IBbAAIBDESIBIkSIA+AAIBIESIBCkSIBbAAIhsF7g");
	this.shape_13.setTransform(970.7,386.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("ABtC+IgXhCIipAAIgZBCIhZAAICUl7IBkAAICSF7gAA/A2Ig/itIg+CtIB9AAg");
	this.shape_14.setTransform(925,386.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AiFC+IAAl7IEMAAIAABGIi7AAIAABSIC2AAIAABFIi2AAIAABYIC7AAIAABGg");
	this.shape_15.setTransform(874.9,386.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AiQC+IAAhCICzjyIizAAIAAhHIEdAAIAABAIizD0IC3AAIAABHg");
	this.shape_16.setTransform(840.8,386.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("ABcC+Ii0j+IAAD+IhRAAIAAl7IBTAAICvD1IAAj1IBRAAIAAF7g");
	this.shape_17.setTransform(803.2,386.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhlCrQgtgZgagsQgZgsgBg6QABg5AZgsQAagsAtgZQAsgZA5gBQA6ABAtAZQAsAZAaAsQAZAsAAA5QAAA6gZAsQgaAsgsAZQgtAZg6ABQg5gBgsgZgAg9hsQgZARgOAcQgOAcgBAjQABAkAOAcQAOAcAZAQQAaARAjAAQAjAAAagRQAagQAOgcQAOgcABgkQgBgjgOgcQgOgcgagRQgagQgjAAQgjAAgaAQg");
	this.shape_18.setTransform(760.7,386.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AA9C+IhKiIIg7AAIAACIIhRAAIAAl7ICxAAQAoAAAdAQQAcAPAPAcQAPAbAAAlQAAAhgMAXQgMAXgSANQgTAPgWAEIBWCRgAhIgPIBUAAQAZAAAPgOQARgOAAgYQAAgZgRgOQgPgOgZABIhUAAg");
	this.shape_19.setTransform(721.4,386.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AidC+IAAl7IDGAAQAlAAAYAOQAYANANAWQAMAWAAAaQAAAYgJASQgJASgOAMQgPALgTAEQAVADAQAMQARAOAJATQALAUgBAZQAAAcgMAYQgNAWgYAOQgZAOgkAAgAhMB5IBnAAQAXgBANgMQAMgLABgVQAAgSgMgOQgNgMgYAAIhnAAgAhMglIBkAAQAUABANgMQALgMAAgTQAAgSgLgLQgNgMgUAAIhkAAg");
	this.shape_20.setTransform(684,386.7);

	this.menu = new lib.menu();
	this.menu.name = "menu";
	this.menu.parent = this;
	this.menu.setTransform(241.9,84.5);

	this.instance_1 = new lib.silver();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117,193,1.54,1.54);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AA9C+IhJiIIg8AAIAACIIhRAAIAAl7ICxAAQAnAAAdAQQAdAPAPAcQAPAbAAAlQAAAhgMAXQgMAXgTANQgTAPgUAEIBVCRgAhIgPIBUAAQAZAAAPgOQAQgOABgYQgBgZgQgOQgPgOgZABIhUAAg");
	this.shape_21.setTransform(1036.1,386.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("ABDC+IhDkEIhBEEIhWAAIhtl7IBbAAIBCESIBIkSIA/AAIBIESIBCkSIBbAAIhsF7g");
	this.shape_22.setTransform(951.7,386.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("ABtC+IgXhCIipAAIgZBCIhZAAICUl7IBlAAICRF7gAA/A2Ig/itIg+CtIB9AAg");
	this.shape_23.setTransform(906,386.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AA9C+IhJiIIg8AAIAACIIhRAAIAAl7ICxAAQAnAAAeAQQAcAPAPAcQAPAbAAAlQAAAhgMAXQgMAXgTANQgSAPgWAEIBWCRgAhIgPIBUAAQAZAAAPgOQAQgOABgYQgBgZgQgOQgPgOgZABIhUAAg");
	this.shape_24.setTransform(854.5,386.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AiGC+IAAl7IEMAAIAABGIi7AAIAABSIC4AAIAABFIi4AAIAABYIC7AAIAABGg");
	this.shape_25.setTransform(819.3,386.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgyC+IiTl7IBdAAIBoEkIBqkkIBcAAIiSF7g");
	this.shape_26.setTransform(782.5,386.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("Ah4C+IAAl7IBRAAIAAE0ICgAAIAABHg");
	this.shape_27.setTransform(749.1,386.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgnC+IAAl7IBQAAIAAF7g");
	this.shape_28.setTransform(725.5,386.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AhZC0QgogRgbgbIAtg+QAUAWAeAOQAfAPAmABQAigBAQgNQAQgMAAgRQAAgUgWgLQgVgLgggGQgYgGgZgHQgZgHgVgMQgVgMgNgUQgNgVAAgfQAAggARgaQARgaAhgPQAggPAsAAQAtAAAmANQAlAOAcAaIgtA7QgYgWgcgKQgdgKgbAAQgbABgOAKQgPAKAAASQABASAVAJQAVAKAgAHQAYAFAZAHQAZAIAVANQAVALANAUQANAVABAfQAAAkgRAbQgRAcgiAQQghAPg0ABQg1gBgogQg");
	this.shape_29.setTransform(700.3,386.8);

	this.instance_2 = new lib.gold();
	this.instance_2.parent = this;
	this.instance_2.setTransform(117,185,1.568,1.568);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AivC+IAAl7ICWAAQA7AAAuAYQAsAXAaArQAZAqABA5QgBA6gZAqQgaArgsAYQguAWg7ABgAheB3IBFAAQAkAAAbgQQAbgRAOgaQAOgcAAggQAAghgNgbQgOgbgagPQgbgQgmAAIhFAAg");
	this.shape_30.setTransform(1058.4,386.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AivC+IAAl7ICWAAQA7AAAuAYQAsAXAaArQAZAqABA5QgBA6gZAqQgaArgsAYQguAWg7ABgAheB3IBFAAQAlAAAagQQAbgRAOgaQAOgcAAggQAAghgNgbQgOgbgagPQgbgQgmAAIhFAAg");
	this.shape_31.setTransform(835.8,386.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AhmCrQgsgZgagsQgZgsAAg6QAAg5AZgsQAagsAsgZQAtgZA5gBQA6ABAsAZQAtAZAaAsQAZAsABA5QgBA6gZAsQgaAsgtAZQgsAZg6ABQg5gBgtgZgAg8hsQgaARgOAcQgOAcAAAjQAAAkAOAcQAOAcAaAQQAaARAiAAQAjAAAagRQAagQAOgcQAOgcAAgkQAAgjgOgcQgOgcgagRQgagQgjAAQgiAAgaAQg");
	this.shape_32.setTransform(762.9,386.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AhRCtQgtgZgbgsQgbgsgBg8QABg8AbgsQAbgsAtgYQAugYA3AAQAnAAAeALQAfAMAVASQAWAUAPAWIhEAkQgNgUgYgOQgWgNgfAAQghAAgbAQQgbAQgPAdQgPAcgBAjQABAkAPAcQAPAcAbAQQAbAQAhABQAbgBAVgIQAWgJAMgMIAAguIhlAAIAAhFIC1AAIAACRQgdAhgoATQgpAUg0AAQg3AAgugYg");
	this.shape_33.setTransform(720.2,386.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.menu},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:925}},{t:this.shape_13,p:{x:970.7}},{t:this.shape_12,p:{x:1016.4}},{t:this.shape_11,p:{x:1055.1}},{t:this.shape_10,p:{x:1093.9}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.username},{t:this.userscore},{t:this.text_1},{t:this.text},{t:this.printBtn},{t:this.instance}]},49).to({state:[{t:this.menu},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:749.1}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_12,p:{x:997.4}},{t:this.shape_21},{t:this.shape_10,p:{x:1074.9}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.username},{t:this.userscore},{t:this.text_1},{t:this.text},{t:this.printBtn},{t:this.instance_1}]},1).to({state:[{t:this.menu},{t:this.shape_33},{t:this.shape_32},{t:this.shape_27,p:{x:800.5}},{t:this.shape_31},{t:this.shape_14,p:{x:889.5}},{t:this.shape_13,p:{x:935.2}},{t:this.shape_12,p:{x:980.8}},{t:this.shape_11,p:{x:1019.5}},{t:this.shape_30},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.username},{t:this.userscore},{t:this.text_1},{t:this.text},{t:this.printBtn},{t:this.instance_2}]},1).wait(1));

	// next
	this.nxt = new lib.next();
	this.nxt.name = "nxt";
	this.nxt.parent = this;
	this.nxt.setTransform(1094.4,85.6);

	this.timeline.addTween(cjs.Tween.get(this.nxt).wait(44).to({_off:true},5).wait(3));

	// rocketWrong2
	this.wrongAnswer2 = new lib.wrongAnswer3();
	this.wrongAnswer2.name = "wrongAnswer2";
	this.wrongAnswer2.parent = this;
	this.wrongAnswer2.setTransform(1079,453.5,1,1,0,0,0,92.4,202.8);

	this.timeline.addTween(cjs.Tween.get(this.wrongAnswer2).wait(14).to({x:204},0).wait(5).to({x:1079},0).wait(5).to({x:205.1},0).wait(5).to({x:1079},0).wait(5).to({x:205.1},0).wait(5).to({x:1079},0).wait(5).to({_off:true},5).wait(3));

	// rocketWrong1
	this.wrongAnswer1 = new lib.wrongAnswer1();
	this.wrongAnswer1.name = "wrongAnswer1";
	this.wrongAnswer1.parent = this;
	this.wrongAnswer1.setTransform(646.2,453.5,1,1,0,0,0,92.4,202.8);

	this.timeline.addTween(cjs.Tween.get(this.wrongAnswer1).wait(4).to({x:203},0).wait(5).to({x:646.2},0).wait(10).to({x:204.1},0).wait(5).to({x:646.2},0).wait(15).to({x:204.1},0).wait(5).to({x:646.2},0).to({_off:true},5).wait(3));

	// question
	this.question = new cjs.Text("QUESTION", "bold 56px 'Proxima Nova'", "#FFFFFF");
	this.question.name = "question";
	this.question.lineHeight = 65;
	this.question.lineWidth = 652;
	this.question.parent = this;
	this.question.setTransform(235.9,52.9);

	this.timeline.addTween(cjs.Tween.get(this.question).wait(44).to({_off:true},5).wait(3));

	// rocketRight
	this.rightAnswer = new lib.rightAnswer();
	this.rightAnswer.name = "rightAnswer";
	this.rightAnswer.parent = this;
	this.rightAnswer.setTransform(111.2,250.7);

	this.timeline.addTween(cjs.Tween.get(this.rightAnswer).wait(4).to({regX:92.4,regY:202.8,x:645.6,y:453.5},0).wait(5).to({x:203.6},0).wait(5).to({x:1078.6},0).wait(5).to({x:646.7},0).wait(5).to({x:1078.2},0).wait(5).to({x:203.6},0).wait(5).to({x:1078.6},0).wait(5).to({x:645.6},0).wait(5).to({x:203.6},0).to({_off:true},5).wait(3));

	// planet_holder
	this.instance_3 = new lib.planets("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(641.5,615.5);

	this.instance_4 = new lib.yellowPlanet_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1063,601.5,1,1,0,0,0,136.4,136.6);

	this.blue = new lib.bluePlanet_1();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(632.3,601.5,1,1,0,0,0,136.4,136.6);

	this.instance_5 = new lib.redPlanet_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(192,603.1,1,1,0,0,0,136.4,136.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.blue},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},49).wait(3));

	// moon
	this.instance_6 = new lib.moon();
	this.instance_6.parent = this;
	this.instance_6.setTransform(35,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:true},5).wait(3));

	// printBG
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Eh7bBI/MAAAiR+MD23AAAMAAACR+g");
	this.shape_34.setTransform(659.1,322.1);
	this.shape_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(49).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(675,381,1192,735.5);
// library properties:
lib.properties = {
	id: '7BE66CCC83959849B7BF2A50A4627724',
	width: 1280,
	height: 700,
	fps: 30,
	color: "#000024",
	opacity: 1.00,
	manifest: [
		{src:"images/bluePlanet.png", id:"bluePlanet"},
		{src:"images/bronze.jpg", id:"bronze"},
		{src:"images/gold.jpg", id:"gold"},
		{src:"images/moon.png", id:"moon"},
		{src:"images/redPlanet.png", id:"redPlanet"},
		{src:"images/rocketIlustration.png", id:"rocketIlustration"},
		{src:"images/silver.jpg", id:"silver"},
		{src:"images/yellowPlanet.png", id:"yellowPlanet"},
		{src:"sounds/rightAnswerSound.mp3", id:"rightAnswerSound"},
		{src:"sounds/wrongAnswerSound.mp3", id:"wrongAnswerSound"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7BE66CCC83959849B7BF2A50A4627724'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;