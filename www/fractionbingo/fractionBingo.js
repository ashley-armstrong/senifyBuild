(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"fractionBingo_atlas_", frames: [[0,0,300,300],[292,302,308,262],[292,566,556,50],[602,458,326,50],[236,670,188,50],[602,302,418,50],[602,354,372,50],[0,670,234,50],[0,618,555,50],[602,406,326,50],[602,510,280,50],[302,0,300,300],[0,302,290,291],[557,618,464,50],[604,0,300,300]]}
];


// symbols:



(lib.bronze = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.correct = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_2 = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_3 = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_4 = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_5 = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_6 = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_7 = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_8 = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.gold = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.incorrect = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.question2 = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.silver = function() {
	this.spriteSheet = ss["fractionBingo_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.incorrect();
	this.instance.parent = this;
	this.instance.setTransform(-26,-26.1,0.179,0.179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26.1,52,52.2);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.correct();
	this.instance.parent = this;
	this.instance.setTransform(-40.7,-34.6,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-34.6,81.5,69.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.correct();
	this.instance.parent = this;
	this.instance.setTransform(-40.7,-34.6,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-34.6,81.5,69.3);


(lib.print = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("PRINT", "bold 46px 'Proxima Nova'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 54;
	this.text.lineWidth = 162;
	this.text.parent = this;
	this.text.setTransform(0,-24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#17AA9D").s().p("AuCGOQgeAAAAgeIAArfQAAgeAeAAIcFAAQAeAAAAAeIAALfQAAAegeAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.print, new cjs.Rectangle(-92.8,-39.7,185.8,79.6), null);


(lib.next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjCnIAAkOIhhAAIAAg/IEJAAIAAA/IhhAAIAAEOg");
	this.shape.setTransform(46.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABTCnIhTh6IhTB6IhVAAIB6iqIhyijIBVAAIBLByIBMhyIBVAAIhyCiIB6Crg");
	this.shape_1.setTransform(15,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah1CnIAAlNIDrAAIAAA9IikAAIAABJICgAAIAAA8IigAAIAABNICkAAIAAA+g");
	this.shape_2.setTransform(-15.7,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABRCnIiejfIAADfIhHAAIAAlNIBJAAICZDXIAAjXIBHAAIAAFNg");
	this.shape_3.setTransform(-49.1,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A99D").s().p("AuyFlIAArJIdlAAIAALJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.next, new cjs.Rectangle(-94.6,-35.7,189.4,71.4), null);


(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("MAIN MENU", "bold 38px 'Proxima Nova'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 229;
	this.text.parent = this;
	this.text.setTransform(1,-23.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#17AA9D").s().p("AydF9QgeAAAAgeIAAq9QAAgeAeAAMAk7AAAQAeAAAAAeIAAK9QAAAegeAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.menu, new cjs.Rectangle(-121.2,-38.1,242.5,76.3), null);


(lib.bingoBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A99D").s().p("EggiAAeIAAg7MBBFAAAIAAA7g");
	this.shape.setTransform(0.3,143.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A99D").s().p("EggiAAeIAAg7MBBFAAAIAAA7g");
	this.shape_1.setTransform(0.3,-34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A99D").s().p("EgAdAlcMAAAhK3IA7AAMAAABK3g");
	this.shape_2.setTransform(-1.3,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EggLAlWMAAAhKrMBAXAAAMAAABKrg");
	this.shape_3.setTransform(0,55.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A99D").s().p("EgktAndMAAAhO5MBJbAAAMAAABO5g");
	this.shape_4.setTransform(0,61.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiwCtQhGhHAAhoQAAhmBGhFQBHhGBpAAQBqAABHBGQBGBFAABmQAABohGBHQhHBHhqAAQhpAAhHhHgAhZhjQglAnAAA6QAAA7AlApQAlApA0AAQA1AAAlgpQAlgpAAg7QAAg6glgnQglgmg1AAQg0AAglAmg");
	this.shape_5.setTransform(82.3,-239);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AibCzQhHhFAAhuQABhoBFhFQBHhGBrAAQBLAAA9AgQAeAQAPAPIg3BXQgNgMgUgKQgpgWgpAAQhFAAgmApQggAjAAA5QAABBApAoQAlAlA5ABQAigBAigRQARgJAKgIIAAgkIhCAAIAAhiICpAAIAAEKIhhAAIABghIgBAAQgMALgVAJQgqAVgyAAQheAAhChBg");
	this.shape_6.setTransform(29.5,-239);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABTDsIiCjcQgMgSgPggIgNgdIgBAAIADAdQACAhAAARIAADcIhzAAIAAnXIB0AAICCDdQATAeAVAxIABAAQgFgzAAgcIAAjdIBzAAIAAHXg");
	this.shape_7.setTransform(-21,-239);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5DsIAAnXIBzAAIAAHXg");
	this.shape_8.setTransform(-57.8,-239);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AivDsIAAnXICtAAQBIAAArAgQAsAgABA8QgBAegOAbQgOAcgaAPIAAABQAlAKAUAhQARAcAAAiQgBBIg2AlQgvAghNAAgAg8CJIBEAAQAYAAAOgPQANgNAAgWQgBgUgMgOQgNgOgYABIhFAAgAg8g0IA7AAQAUAAALgOQAKgLAAgSQAAgTgKgKQgLgMgVAAIg6AAg");
	this.shape_9.setTransform(-89.4,-239);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAnBtIg8hmQgGgHgHgPIgFgOIgBAAIACCKIg1AAIAAjZIA2AAIA7BmQAJAOAKAWIAAAAQgCgXAAgNIAAhmIA1AAIAADZg");
	this.shape_10.setTransform(36.6,-278.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhQBQQghghAAgwQAAgvAhggQAgggAwAAQAxAAAhAgQAgAgAAAvQAAAwggAhQghAhgxAAQgwAAggghgAgpgtQgRASAAAaQAAAbARATQASATAXAAQAYAAARgTQASgTAAgbQAAgagSgSQgRgSgYAAQgXAAgSASg");
	this.shape_11.setTransform(12.4,-278.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBtIAAjZIA1AAIAADZg");
	this.shape_12.setTransform(-5.4,-278.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaBtIAAirIhCAAIAAguIC5AAIAAAuIhDAAIAACrg");
	this.shape_13.setTransform(-20,-278.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhFBQQgfggAAgwQAAgwAgggQAhggAwAAQAiAAAbAQQAOAHAHAIIgYAoQgHgFgKgGQgTgLgTAAQgdAAgRATQgPASAAAZQAAAaAQASQARAVAcAAQAUAAAVgOQALgGAFgHIAcAnQgIAJgOAJQgeATgkAAQgxAAghghg");
	this.shape_14.setTransform(-40.2,-278.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAvBtIgNgtIhDAAIgNAtIg3AAIBKjZIA3AAIBKDZgAgUAVIAqAAIgWhPIAAAAg");
	this.shape_15.setTransform(-61.4,-278.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdBtIgmhKIgZAAIAABKIg1AAIAAjZIBMAAQAcAAANAFQATAHAKARQALAQAAAXQAAATgIAQQgJAQgPAIIAAABIAIANIAqBMgAgigJIAXAAQAbAAAAgbQAAgOgGgFQgIgHgSAAIgSAAg");
	this.shape_16.setTransform(-81,-278.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhCBtIAAjZICFAAIAAAuIhPAAIAAAuIBBAAIAAAtIhBAAIAABQg");
	this.shape_17.setTransform(-99.9,-278.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A99D").s().p("EgktAJnIAAuDQAAiIBhhhQBhhhCIAAMA/GAAAQCJAABhBhQBhBhAACIIAAODg");
	this.shape_18.setTransform(0,-252.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bingoBoard, new cjs.Rectangle(-235,-313.7,470,627.5), null);


(lib.incorrect_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.incorrect_1, new cjs.Rectangle(-26,-26.1,52,52.2), null);


(lib.ansf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{wrongPlay:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("wrong");
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		createjs.Sound.stop();
		playSound("wrong");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(13).call(this.frame_29).wait(1));

	// incorrectSymbpol
	this.instance = new lib.incorrect_1();
	this.instance.parent = this;
	this.instance.setTransform(-53,26.6,0.019,0.019,0,0,0,0,2.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:26.1},15).to({_off:true},4).wait(10));

	// text
	this.f = new cjs.Text("f", "bold 72px 'Proxima Nova'", "#333333");
	this.f.name = "f";
	this.f.textAlign = "center";
	this.f.lineHeight = 83;
	this.f.lineWidth = 100;
	this.f.parent = this;
	this.f.setTransform(0,-40.6);

	this.timeline.addTween(cjs.Tween.get(this.f).wait(19).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-42.6,104,85.4);


(lib.anse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"wrongPlay":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("wrong");
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		createjs.Sound.stop();
		playSound("wrong");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(13).call(this.frame_29).wait(1));

	// incorrectSymbpol
	this.instance = new lib.incorrect_1();
	this.instance.parent = this;
	this.instance.setTransform(-53,26.6,0.019,0.019,0,0,0,0,2.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:26.1},15).to({_off:true},4).wait(10));

	// text
	this.e = new cjs.Text("e", "bold 72px 'Proxima Nova'", "#333333");
	this.e.name = "e";
	this.e.textAlign = "center";
	this.e.lineHeight = 83;
	this.e.lineWidth = 100;
	this.e.parent = this;
	this.e.setTransform(0,-40.6);

	this.timeline.addTween(cjs.Tween.get(this.e).wait(19).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-42.6,104,85.4);


(lib.ansd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"wrongPlay":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("wrong");
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		createjs.Sound.stop();
		playSound("wrong");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(13).call(this.frame_29).wait(1));

	// incorrectSymbpol
	this.instance = new lib.incorrect_1();
	this.instance.parent = this;
	this.instance.setTransform(-53,26.6,0.019,0.019,0,0,0,0,2.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:26.1},15).to({_off:true},1).wait(13));

	// text
	this.d = new cjs.Text("d", "bold 72px 'Proxima Nova'", "#333333");
	this.d.name = "d";
	this.d.textAlign = "center";
	this.d.lineHeight = 83;
	this.d.lineWidth = 100;
	this.d.parent = this;
	this.d.setTransform(0,-40.6);

	this.timeline.addTween(cjs.Tween.get(this.d).wait(16).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-42.6,104,85.4);


(lib.ansc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"wrongPlay":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("wrong");
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		createjs.Sound.stop();
		playSound("wrong");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(13).call(this.frame_29).wait(1));

	// incorrectSymbpol
	this.instance = new lib.incorrect_1();
	this.instance.parent = this;
	this.instance.setTransform(-53,26.6,0.019,0.019,0,0,0,0,2.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:26.1},15).to({_off:true},1).wait(13));

	// text
	this.c = new cjs.Text("c", "bold 72px 'Proxima Nova'", "#333333");
	this.c.name = "c";
	this.c.textAlign = "center";
	this.c.lineHeight = 83;
	this.c.lineWidth = 100;
	this.c.parent = this;
	this.c.setTransform(0,-40.6);

	this.timeline.addTween(cjs.Tween.get(this.c).wait(16).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-42.6,104,85.4);


(lib.ansb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"wrongPlay":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("wrong");
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		createjs.Sound.stop();
		playSound("wrong");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(13).call(this.frame_29).wait(1));

	// incorrectSymbpol
	this.instance = new lib.incorrect_1();
	this.instance.parent = this;
	this.instance.setTransform(-53,26.6,0.019,0.019,0,0,0,0,2.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:26.1},15).to({_off:true},4).wait(10));

	// text
	this.b = new cjs.Text("b", "bold 72px 'Proxima Nova'", "#333333");
	this.b.name = "b";
	this.b.textAlign = "center";
	this.b.lineHeight = 83;
	this.b.lineWidth = 100;
	this.b.parent = this;
	this.b.setTransform(0,-40.6);

	this.timeline.addTween(cjs.Tween.get(this.b).wait(19).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-42.6,104,85.4);


(lib.ansa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{correctPlay:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("correct_1");
		score++;
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		createjs.Sound.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// symbol
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-62.7,10.2,0.012,0.014);
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.7,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},18).to({state:[]},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,y:9.7},18).wait(11));

	// text
	this.a = new cjs.Text("a", "bold 72px 'Proxima Nova'", "#333333");
	this.a.name = "a";
	this.a.textAlign = "center";
	this.a.lineHeight = 83;
	this.a.lineWidth = 100;
	this.a.parent = this;
	this.a.setTransform(0,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.a).wait(19).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-47.1,104,85.4);


// stage content:
(lib.fractionBingo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:0,q2:4,q3:9,q4:14,q5:19,q6:24,q7:29,q8:34,q9:39,q10:44,b:49,s:50,g:51});

	// timeline functions:
	this.frame_0 = function() {
		this.denominator.text="6";
		
		this.nxt.mouseEnabled = false;
		this.question.text = "How many sixth are shaded in red?";
		this.ansa.a.text = "4";
		this.ansb.b.text = "1";
		this.ansc.c.text = "2";
		this.ansd.d.text = "3";
		this.anse.e.text = "5";
		this.ansf.f.text = "6";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('q2');
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		this.denominator.text="10";
		
		this.ansa.a.color = "#333333";
		this.ansb.b.color = "#333333";
		this.ansc.c.color = "#333333";
		this.ansd.d.color = "#333333";
		this.anse.e.color = "#333333";
		this.ansf.f.color = "#333333";
		
		this.numerator.text = "?";
		this.numerator.color = "#333333";
		
		this.nxt.mouseEnabaled = false;
		
		this.ansa.gotoAndStop(0);
		this.ansb.gotoAndStop(0);
		this.ansc.gotoAndStop(0);
		this.ansd.gotoAndStop(0);
		this.anse.gotoAndStop(0);
		this.ansf.gotoAndStop(0);
		this.question.text = "How many tenths are shaded in red?";
		this.ansa.a.text = "3";
		this.ansb.b.text = "10";
		this.ansc.c.text = "9";
		this.ansd.d.text = "8";
		this.anse.e.text = "1";
		this.ansf.f.text = "2";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('q3');
		}
	}
	this.frame_9 = function() {
		this.stop();
		
		this.denominator.text="7";
		
		this.ansa.a.color = "#333333";
		this.ansb.b.color = "#333333";
		this.ansc.c.color = "#333333";
		this.ansd.d.color = "#333333";
		this.anse.e.color = "#333333";
		this.ansf.f.color = "#333333";
		
		this.numerator.text = "?";
		this.numerator.color = "#333333";
		
		this.nxt.mouseEnabaled = false;
		
		this.ansa.gotoAndStop(0);
		this.ansb.gotoAndStop(0);
		this.ansc.gotoAndStop(0);
		this.ansd.gotoAndStop(0);
		this.anse.gotoAndStop(0);
		this.ansf.gotoAndStop(0);
		this.question.text = "How many sevenths are shaded in red?";
		this.ansa.a.text = "1";
		this.ansb.b.text = "2";
		this.ansc.c.text = "4";
		this.ansd.d.text = "6";
		this.anse.e.text = "3";
		this.ansf.f.text = "5";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('q4');
		}
	}
	this.frame_14 = function() {
		this.stop();
		
		this.denominator.text="12";
		
		this.ansa.a.color = "#333333";
		this.ansb.b.color = "#333333";
		this.ansc.c.color = "#333333";
		this.ansd.d.color = "#333333";
		this.anse.e.color = "#333333";
		this.ansf.f.color = "#333333";
		
		this.numerator.text = "?";
		this.numerator.color = "#333333";
		
		this.nxt.mouseEnabaled = false;
		
		this.ansa.gotoAndStop(0);
		this.ansb.gotoAndStop(0);
		this.ansc.gotoAndStop(0);
		this.ansd.gotoAndStop(0);
		this.anse.gotoAndStop(0);
		this.ansf.gotoAndStop(0);
		this.question.text = "How many twelths are shaded in red?";
		this.ansa.a.text = "9";
		this.ansb.b.text = "10";
		this.ansc.c.text = "2";
		this.ansd.d.text = "12";
		this.anse.e.text = "4";
		this.ansf.f.text = "8";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('q5');
		}
	}
	this.frame_19 = function() {
		this.stop();
		
		this.denominator.text="5";
		
		this.ansa.a.color = "#333333";
		this.ansb.b.color = "#333333";
		this.ansc.c.color = "#333333";
		this.ansd.d.color = "#333333";
		this.anse.e.color = "#333333";
		this.ansf.f.color = "#333333";
		
		this.numerator.text = "?";
		this.numerator.color = "#333333";
		
		this.nxt.mouseEnabaled = false;
		
		this.ansa.gotoAndStop(0);
		this.ansb.gotoAndStop(0);
		this.ansc.gotoAndStop(0);
		this.ansd.gotoAndStop(0);
		this.anse.gotoAndStop(0);
		this.ansf.gotoAndStop(0);
		this.question.text = "How many fifths are shaded in red?";
		this.ansa.a.text = "2";
		this.ansb.b.text = "1";
		this.ansc.c.text = "6";
		this.ansd.d.text = "4";
		this.anse.e.text = "3";
		this.ansf.f.text = "7";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('q6');
		}
	}
	this.frame_24 = function() {
		this.stop();
		
		this.denominator.text="8";
		
		this.ansa.a.color = "#333333";
		this.ansb.b.color = "#333333";
		this.ansc.c.color = "#333333";
		this.ansd.d.color = "#333333";
		this.anse.e.color = "#333333";
		this.ansf.f.color = "#333333";
		
		this.numerator.text = "?";
		this.numerator.color = "#333333";
		
		this.nxt.mouseEnabaled = false;
		
		this.ansa.gotoAndStop(0);
		this.ansb.gotoAndStop(0);
		this.ansc.gotoAndStop(0);
		this.ansd.gotoAndStop(0);
		this.anse.gotoAndStop(0);
		this.ansf.gotoAndStop(0);
		this.question.text = "How many eighths are shaded in red?";
		this.ansa.a.text = "7";
		this.ansb.b.text = "2";
		this.ansc.c.text = "4";
		this.ansd.d.text = "3";
		this.anse.e.text = "5";
		this.ansf.f.text = "6";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('q7');
		}
	}
	this.frame_29 = function() {
		this.stop();
		
		this.denominator.text="9";
		
		this.ansa.a.color = "#333333";
		this.ansb.b.color = "#333333";
		this.ansc.c.color = "#333333";
		this.ansd.d.color = "#333333";
		this.anse.e.color = "#333333";
		this.ansf.f.color = "#333333";
		
		this.numerator.text = "?";
		this.numerator.color = "#333333";
		
		this.nxt.mouseEnabaled = false;
		
		this.ansa.gotoAndStop(0);
		this.ansb.gotoAndStop(0);
		this.ansc.gotoAndStop(0);
		this.ansd.gotoAndStop(0);
		this.anse.gotoAndStop(0);
		this.ansf.gotoAndStop(0);
		this.question.text = "How many ninths are shaded in red?";
		this.ansa.a.text = "4";
		this.ansb.b.text = "11";
		this.ansc.c.text = "1";
		this.ansd.d.text = "6";
		this.anse.e.text = "2";
		this.ansf.f.text = "3";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('q8');
		}
	}
	this.frame_34 = function() {
		this.stop();
		
		this.denominator.text="4";
		
		this.ansa.a.color = "#333333";
		this.ansb.b.color = "#333333";
		this.ansc.c.color = "#333333";
		this.ansd.d.color = "#333333";
		this.anse.e.color = "#333333";
		this.ansf.f.color = "#333333";
		
		this.numerator.text = "?";
		this.numerator.color = "#333333";
		
		this.nxt.mouseEnabaled = false;
		
		this.ansa.gotoAndStop(0);
		this.ansb.gotoAndStop(0);
		this.ansc.gotoAndStop(0);
		this.ansd.gotoAndStop(0);
		this.anse.gotoAndStop(0);
		this.ansf.gotoAndStop(0);
		this.question.text = "How many fourths are shaded in red?";
		this.ansa.a.text = "2";
		this.ansb.b.text = "10";
		this.ansc.c.text = "9";
		this.ansd.d.text = "1";
		this.anse.e.text = "3";
		this.ansf.f.text = "5";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('q9');
		}
	}
	this.frame_39 = function() {
		this.stop();
		
		this.denominator.text="7";
		
		this.ansa.a.color = "#333333";
		this.ansb.b.color = "#333333";
		this.ansc.c.color = "#333333";
		this.ansd.d.color = "#333333";
		this.anse.e.color = "#333333";
		this.ansf.f.color = "#333333";
		
		this.numerator.text = "?";
		this.numerator.color = "#333333";
		
		this.nxt.mouseEnabaled = false;
		
		this.ansa.gotoAndStop(0);
		this.ansb.gotoAndStop(0);
		this.ansc.gotoAndStop(0);
		this.ansd.gotoAndStop(0);
		this.anse.gotoAndStop(0);
		this.ansf.gotoAndStop(0);
		this.question.text = "How many sevenths are shaded in red?";
		this.ansa.a.text = "5";
		this.ansb.b.text = "6";
		this.ansc.c.text = "1";
		this.ansd.d.text = "3";
		this.anse.e.text = "2";
		this.ansf.f.text = "7";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('q10');
		}
	}
	this.frame_44 = function() {
		this.stop();
		
		this.denominator.text="12";
		
		this.ansa.a.color = "#333333";
		this.ansb.b.color = "#333333";
		this.ansc.c.color = "#333333";
		this.ansd.d.color = "#333333";
		this.anse.e.color = "#333333";
		this.ansf.f.color = "#333333";
		
		this.numerator.text = "?";
		this.numerator.color = "#333333";
		
		this.nxt.mouseEnabaled = false;
		
		this.ansa.gotoAndStop(0);
		this.ansb.gotoAndStop(0);
		this.ansc.gotoAndStop(0);
		this.ansd.gotoAndStop(0);
		this.anse.gotoAndStop(0);
		this.ansf.gotoAndStop(0);
		this.question.text = "How many twelths are shaded in red?";
		this.ansa.a.text = "4";
		this.ansb.b.text = "10";
		this.ansc.c.text = "6";
		this.ansd.d.text = "5";
		this.anse.e.text = "7";
		this.ansf.f.text = "3";
		
		this.ansa.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ansa.gotoAndPlay('correctPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text= this.ansa.a.text;
			this.numerator.color = "green";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansb.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.ansb.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansb.b.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansc.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler()
		{
			this.ansc.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansc.c.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansd.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler()
		{
			this.ansd.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansd.d.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.anse.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		function f5_MouseClickHandler()
		{
			this.anse.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.anse.e.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		
		this.ansf.addEventListener("click", f6_MouseClickHandler.bind(this));
		
		function f6_MouseClickHandler()
		{
			this.ansf.gotoAndPlay('wrongPlay');
			
			this.ansa.mouseEnabled = "false";
			this.ansb.mouseEnabled = "false";
			this.ansc.mouseEnabled = "false";
			this.ansd.mouseEnabled = "false";
			this.anse.mouseEnabled = "false";
			this.ansf.mouseEnabled = "false";
			
			this.ansa.a.color = "green";
			this.ansb.b.color = "red";
			this.ansc.c.color = "red";
			this.ansd.d.color = "red";
			this.anse.e.color = "red";
			this.ansf.f.color = "red";
			
			this.numerator.text=this.ansf.f.text;
			this.numerator.color = "red";
			
			this.nxt.mouseEnabled = true;
		}
		this.nxt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2() {
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
		this.username.text = name;
		this.score.text = score;
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
		this.username.text = name;
		this.score.text = score;
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
		this.username.text = name;
		this.score.text = score;
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

	// question
	this.question = new cjs.Text("question text", "bold 40px 'Proxima Nova'", "#333333");
	this.question.name = "question";
	this.question.lineHeight = 47;
	this.question.lineWidth = 671;
	this.question.parent = this;
	this.question.setTransform(567,49.1);

	this.timeline.addTween(cjs.Tween.get(this.question).wait(44).to({_off:true},5).wait(3));

	// answers
	this.denominator = new cjs.Text("?", "bold 72px 'Proxima Nova'", "#333333");
	this.denominator.name = "denominator";
	this.denominator.textAlign = "center";
	this.denominator.lineHeight = 83;
	this.denominator.lineWidth = 100;
	this.denominator.parent = this;
	this.denominator.setTransform(873.2,376.6,1.41,1.41);

	this.numerator = new cjs.Text("?", "bold 72px 'Proxima Nova'", "#333333");
	this.numerator.name = "numerator";
	this.numerator.textAlign = "center";
	this.numerator.lineHeight = 83;
	this.numerator.lineWidth = 100;
	this.numerator.parent = this;
	this.numerator.setTransform(873.2,205.6,1.41,1.41);

	this.ansf = new lib.ansf();
	this.ansf.name = "ansf";
	this.ansf.parent = this;
	this.ansf.setTransform(386.7,572.7);

	this.anse = new lib.anse();
	this.anse.name = "anse";
	this.anse.parent = this;
	this.anse.setTransform(172.7,572.7);

	this.ansd = new lib.ansd();
	this.ansd.name = "ansd";
	this.ansd.parent = this;
	this.ansd.setTransform(386.7,407.4);

	this.ansc = new lib.ansc();
	this.ansc.name = "ansc";
	this.ansc.parent = this;
	this.ansc.setTransform(172.7,242.9);

	this.ansb = new lib.ansb();
	this.ansb.name = "ansb";
	this.ansb.parent = this;
	this.ansb.setTransform(386.7,242.9);

	this.ansa = new lib.ansa();
	this.ansa.name = "ansa";
	this.ansa.parent = this;
	this.ansa.setTransform(172.7,411.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ArqAcIAAg4IXVAAIAAA4g");
	this.shape.setTransform(874.6,347.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.ansa,p:{y:411.9,x:172.7}},{t:this.ansb,p:{x:386.7,y:242.9}},{t:this.ansc,p:{y:242.9}},{t:this.ansd,p:{x:386.7,y:407.4}},{t:this.anse,p:{y:572.7}},{t:this.ansf,p:{x:386.7,y:572.7}},{t:this.numerator},{t:this.denominator}]}).to({state:[{t:this.shape},{t:this.ansa,p:{y:246.2,x:172.7}},{t:this.ansb,p:{x:386.7,y:242.9}},{t:this.ansc,p:{y:407.4}},{t:this.ansd,p:{x:386.7,y:407.4}},{t:this.anse,p:{y:572.7}},{t:this.ansf,p:{x:386.7,y:572.7}},{t:this.numerator},{t:this.denominator}]},4).to({state:[{t:this.shape},{t:this.ansa,p:{y:411.9,x:386.7}},{t:this.ansb,p:{x:386.7,y:242.9}},{t:this.ansc,p:{y:407.4}},{t:this.ansd,p:{x:172.7,y:242.9}},{t:this.anse,p:{y:572.7}},{t:this.ansf,p:{x:386.7,y:572.7}},{t:this.numerator},{t:this.denominator}]},5).to({state:[{t:this.shape},{t:this.ansa,p:{y:577.2,x:386.7}},{t:this.ansb,p:{x:386.7,y:242.9}},{t:this.ansc,p:{y:407.4}},{t:this.ansd,p:{x:386.7,y:407.4}},{t:this.anse,p:{y:572.7}},{t:this.ansf,p:{x:172.7,y:242.9}},{t:this.numerator},{t:this.denominator}]},5).to({state:[{t:this.shape},{t:this.ansa,p:{y:247.4,x:386.7}},{t:this.ansb,p:{x:172.7,y:242.9}},{t:this.ansc,p:{y:407.4}},{t:this.ansd,p:{x:386.7,y:407.4}},{t:this.anse,p:{y:572.7}},{t:this.ansf,p:{x:386.7,y:572.7}},{t:this.numerator},{t:this.denominator}]},5).to({state:[{t:this.shape},{t:this.ansa,p:{y:246.2,x:172.7}},{t:this.ansb,p:{x:386.7,y:242.9}},{t:this.ansc,p:{y:407.4}},{t:this.ansd,p:{x:386.7,y:407.4}},{t:this.anse,p:{y:572.7}},{t:this.ansf,p:{x:386.7,y:572.7}},{t:this.numerator},{t:this.denominator}]},5).to({state:[{t:this.shape},{t:this.ansa,p:{y:577.2,x:172.7}},{t:this.ansb,p:{x:386.7,y:242.9}},{t:this.ansc,p:{y:407.4}},{t:this.ansd,p:{x:386.7,y:407.4}},{t:this.anse,p:{y:242.9}},{t:this.ansf,p:{x:386.7,y:572.7}},{t:this.numerator},{t:this.denominator}]},5).to({state:[{t:this.shape},{t:this.ansa,p:{y:411.9,x:172.7}},{t:this.ansb,p:{x:386.7,y:242.9}},{t:this.ansc,p:{y:242.9}},{t:this.ansd,p:{x:386.7,y:407.4}},{t:this.anse,p:{y:572.7}},{t:this.ansf,p:{x:386.7,y:572.7}},{t:this.numerator},{t:this.denominator}]},5).to({state:[{t:this.shape},{t:this.ansa,p:{y:577.2,x:172.7}},{t:this.ansb,p:{x:386.7,y:242.9}},{t:this.ansc,p:{y:407.4}},{t:this.ansd,p:{x:386.7,y:407.4}},{t:this.anse,p:{y:242.9}},{t:this.ansf,p:{x:386.7,y:572.7}},{t:this.numerator},{t:this.denominator}]},5).to({state:[{t:this.shape},{t:this.ansa,p:{y:247.5,x:386.7}},{t:this.ansb,p:{x:172.7,y:243}},{t:this.ansc,p:{y:407.4}},{t:this.ansd,p:{x:386.7,y:407.4}},{t:this.anse,p:{y:572.7}},{t:this.ansf,p:{x:386.7,y:572.7}},{t:this.numerator},{t:this.denominator}]},5).to({state:[]},5).wait(3));

	// blockAnswers
	this.instance = new lib.flash0ai_8();
	this.instance.parent = this;
	this.instance.setTransform(565,530);

	this.instance_1 = new lib.question2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(565,530);

	this.instance_2 = new lib.flash0ai_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(565,530);

	this.instance_3 = new lib.flash0ai_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(565,530);

	this.instance_4 = new lib.flash0ai_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(565,530);

	this.instance_5 = new lib.flash0ai_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(565,530);

	this.instance_6 = new lib.flash0ai_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(565,530);

	this.instance_7 = new lib.flash0ai_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(565,530);

	this.instance_8 = new lib.flash0ai_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(565,530);

	this.instance_9 = new lib.flash0ai();
	this.instance_9.parent = this;
	this.instance_9.setTransform(565,530);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},5).to({state:[]},5).wait(3));

	// bingoBoard
	this.instance_10 = new lib.bingoBoard();
	this.instance_10.parent = this;
	this.instance_10.setTransform(281.5,351.1);

	this.text = new cjs.Text("BRONZE AWARD\nYOU SCORED:", "bold 52px 'Proxima Nova'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 61;
	this.text.lineWidth = 617;
	this.text.parent = this;
	this.text.setTransform(905.9,292.5);

	this.text_1 = new cjs.Text("10", "bold 112px 'Proxima Nova'", "#333333");
	this.text_1.lineHeight = 129;
	this.text_1.lineWidth = 124;
	this.text_1.parent = this;
	this.text_1.setTransform(921.4,439.7);

	this.text_2 = new cjs.Text("/", "bold 112px 'Proxima Nova Black'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 129;
	this.text_2.lineWidth = 52;
	this.text_2.parent = this;
	this.text_2.setTransform(891.6,439.7);

	this.score = new cjs.Text("0", "bold 112px 'Proxima Nova'", "#333333");
	this.score.name = "score";
	this.score.textAlign = "right";
	this.score.lineHeight = 129;
	this.score.lineWidth = 135;
	this.score.parent = this;
	this.score.setTransform(861.4,439.7);

	this.username = new cjs.Text("username", "bold 46px 'Proxima Nova'", "#333333");
	this.username.name = "username";
	this.username.textAlign = "center";
	this.username.lineHeight = 54;
	this.username.lineWidth = 611;
	this.username.parent = this;
	this.username.setTransform(908.8,203.2);

	this.instance_11 = new lib.bronze();
	this.instance_11.parent = this;
	this.instance_11.setTransform(121,199,1.383,1.383);

	this.instance_12 = new lib.silver();
	this.instance_12.parent = this;
	this.instance_12.setTransform(121,199,1.38,1.38);

	this.instance_13 = new lib.gold();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120,199,1.393,1.393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_11},{t:this.username},{t:this.score},{t:this.text_2},{t:this.text_1},{t:this.text,p:{text:"BRONZE AWARD\nYOU SCORED:"}}]},5).to({state:[{t:this.username},{t:this.score},{t:this.text_2},{t:this.text_1},{t:this.text,p:{text:"SILVER AWARD\nYOU SCORED:"}},{t:this.instance_12}]},1).to({state:[{t:this.username},{t:this.score},{t:this.text_2},{t:this.text_1},{t:this.text,p:{text:"GOLD AWARD\nYOU SCORED:"}},{t:this.instance_13}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({_off:true},5).wait(3));

	// next
	this.nxt = new lib.next();
	this.nxt.name = "nxt";
	this.nxt.parent = this;
	this.nxt.setTransform(1144.9,651.1);

	this.menu = new lib.menu();
	this.menu.name = "menu";
	this.menu.parent = this;
	this.menu.setTransform(152.6,79.2);

	this.printBtn = new lib.print();
	this.printBtn.name = "printBtn";
	this.printBtn.parent = this;
	this.printBtn.setTransform(1168.2,65.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nxt}]}).to({state:[{t:this.nxt}]},4).to({state:[{t:this.nxt}]},5).to({state:[{t:this.nxt}]},5).to({state:[{t:this.nxt}]},5).to({state:[{t:this.nxt}]},5).to({state:[{t:this.nxt}]},5).to({state:[{t:this.nxt}]},5).to({state:[{t:this.nxt}]},5).to({state:[{t:this.nxt}]},5).to({state:[{t:this.printBtn},{t:this.menu}]},5).to({state:[{t:this.printBtn},{t:this.menu}]},1).to({state:[{t:this.printBtn},{t:this.menu}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.nxt).wait(44).to({_off:true},5).wait(3));

	// backgroundColour
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC99").s().p("EhnsA7lMAAAh3JMDPaAAAMAAAB3Jg");
	this.shape_1.setTransform(638.4,350);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(44).to({_off:true},5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(614.6,318.8,1327.5,762.6);
// library properties:
lib.properties = {
	id: 'D3BA200B689EA545B94E1C5CE05825F2',
	width: 1280,
	height: 700,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fractionBingo_atlas_.png", id:"fractionBingo_atlas_"},
		{src:"sounds/correct_1.mp3", id:"correct_1"},
		{src:"sounds/wrong.mp3", id:"wrong"}
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
an.compositions['D3BA200B689EA545B94E1C5CE05825F2'] = {
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