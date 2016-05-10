(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Interpolação2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGwAAQAACzh/B+Qh+B/izAAQiyAAh+h/Qh/h+AAizQAAixB/h/QB+h/CyAAQCzAAB+B/QB/B/AACxg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkxExQh+h+AAizQAAixB+iAQCAh+CxAAQCzAAB+B+QB/CAAACxQAACzh/B+Qh+B/izAAQixAAiAh/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,-44.2,88.5,88.5);


(lib.Interpolação1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGwAAQAACzh/B+Qh+B/izAAQiyAAh+h/Qh/h+AAizQAAixB/h/QB+h/CyAAQCzAAB+B/QB/B/AACxg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkxExQh+h+AAizQAAixB+iAQCAh+CxAAQCzAAB+B+QB/CAAACxQAACzh/B+Qh+B/izAAQixAAiAh/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,-44.2,88.5,88.5);


(lib._1111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAElIkzjgIB2lpIF7AAIB2Fpg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkzBFIB2lpIF7AAIB2FpIk0Dgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-30.3,63.8,60.7);


// stage content:
(lib.Semtítulo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{teste:9});

	// timeline functions:
	this.frame_0 = function() {
		/* Clique para ir até o quadro e reproduzir
		Clicar na instância do símbolo especificado move o indicador de reprodução até o quadro especificado na linha de tempo e continua a reprodução daquele quadro.
		Pode ser usado na linha de tempo principal ou nas linhas de tempo do clipe de filme.
		
		Instruções:
		1. Substitua o número 5 no código abaixo pelo número de quadro para o qual você gostaria que o indicador de reprodução se movesse quando se clica na instância do símbolo.
		2. Números de quadros em EaselJS são iniciados por 0, não 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(10);
		}
	}
	this.frame_1 = function() {
		/* Parar neste quadro
		A linha de tempo do vai parar/pausar no quadro em que você inserir este código.
		Também pode ser usado para parar/pausar a linha de tempo dos clipes de filme.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(16));

	// Camada 2
	this.button_1 = new lib._1111();
	this.button_1.setTransform(39,291.1);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(25));

	// Camada 1
	this.instance = new lib.Interpolação1("synched",0);
	this.instance.setTransform(96.3,128.2);
	this.instance._off = true;

	this.instance_1 = new lib.Interpolação2("synched",0);
	this.instance_1.setTransform(404.2,270.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true,x:404.2,y:270.2},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.1,460.7,63.7,60.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;