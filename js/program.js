var JSGood = {
	contador : 0,
	resultado: 0,
	frutas: {
		name: "name_in",
		color: "color_in",
		setValues: function(name_in, color_in) { 
			this.name = name_in; this.color = color_in;
		}
	},
	printNLines: function(nlines){
		for (var i = 0; i < nlines; i++) {
			writeln(" line "+i);
		};
	},
	listPropertiesOf: function (objeto){
		var name;
		for (name in objeto) {
			if (typeof objeto[name]!== 'function') {
				document.writeln("<span class='atributo'>"+name+ " :</span> <span class='valor'>"+objeto[name] +'</span><br>' )
			}
		};
	},
	myObject: {
		value: 0,
		increment: function(inc){
			this.value += typeof inc === 'number' ? inc : 1;
		}
	}
}

JSGood.myObject.double = function(){
	var that = this;
	var helper = function(){
		that.value = add(that.value, that.value);
	}
	helper();
};

var contador = 1;

function add(sum1, sum2){
	if ((typeof sum1 !== 'number')||(typeof sum2 !== 'number')) {
		throw {
			name: 'TypeError',
			message: 'add needs numbers'
		}
	};
	return sum1 + sum2;
};

JSGood.sumAll = function(){
	var args = Array.prototype.slice.call(arguments);
	this.resultado = 0;
	for (var i = 0; i < args.length; i++) {
		if (typeof args[i]==='number') {
			this.resultado += args[i];
		};
	};
	JSGood.resultado = this.resultado;
	return this.resultado;
};

if (contador === JSGood.contador) {
	alert("condition was true");
}

if (typeof Object.create !== 'function') {
	alert("entering object creation")
	Object.create = function(o){
		var F = function(){};
		f.prototype = o;
		return new F();
	};
}
// var arreglo = [1,2,3,4,5,6,7,8,9,10,11];
// alert(JSGood.sumAll.apply(null, arreglo));

Function.prototype.method = function(name, func){
	this.prototype[name] = func;
	return this;
};

// Number.method('integer',function(){
// 	return Math[this < 0 ? 'ceiling' : 'floor'](this);
// });

Number.method('integer', function ( ) {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

// alert((-10/3).integer());
// alert((10/3).integer());
String.method('trim', function(){
	// replaces multiple sapces between words with single space ' '
	var str = this.replace(/\b\s+|\s+\b/g,' ')
	// the return will take away the white spaces at the beginning and at the end of each line
	return str.replace(/^\s+|\s+$/g, '');
});

var hanoi = function(disc, src, aux, dst) {
	if (disc > 0) {
		hanoi(disc-1, src, dst, aux);
		document.writeln('<span class="valor">Move disc <span class="atributo">'+disc + '</span> from <span class="atributo">'+src +'</span> to <span class="atributo">'+dst+'</span></span><br>');
		hanoi(disc-1, aux, src, dst)
	}
};

var walk_the_DOM = function walk(node, func){
	func(node);
	node = node.firstChild;
	while(node){
		console.log("found node "+node)
		walk(node, func);
		node = node.nextSibling;

	}
};

var getElementsByAttribute = function(att, value) {
	var results = [];

	walk_the_DOM(document.body, function(node){
		var actual = node.nodeType === 1 && node.getAttribute(att);
		if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
			results.push(node);
		};
	});
	return results;
};


var factorial = function factorial(i,a) {
	a = a || 1;
	if (i < 2) {
		return a;
	}
	return factorial(i-1,a*i);
};

var foo = function(){
	var a = 3, b = 5;
	var bar = function(){
		var b = 7, c = 11;
		// at this point, a is 3, b is 7 and c is 11
		a+= b + c;
		// at this point, a is 21, b is 7 and c is 11
	};
	// at this point, a is 3, b is 5 and c IS NOT defined
	bar();
	// at this point, is 21 and b is 5
	alert("a is "+a+", b is "+b);
};

// Function.expression
// foo();

// var foo = function(){
// 	return "hello";
// }

var my2ndObject = function(){
	var value = 0;
	return {
		increment: function(inc){
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function(){
			return value;
		}
	};
}();

var my2ndQuo = function(status){
	return {
		get_status: function(){
			return status;
		}
	};
};

myQuo = my2ndQuo("amazed");
console.log(myQuo.get_status());
// alert(myQuo.get_status());

var fade = function(node) {
	// Define a function that sets a DOM node's color
	// to yellow and then fades it to white.
	console.log("received "+ node +" fade execution begin");
	var level = 0;
	var step = function(){
		var hex = level.toString(16);
		
		node.style.backgroundColor = "#ffff"+hex+hex;
		if (level < 15) {
			level ++;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};

function click_example(){
	document.getElementById("boton_fade").disabled = true;
	document.getElementById("boton_fade").innerHTML = "wait";
	fade(document.getElementById("clickExample"));
	setTimeout(function(){
		document.getElementById("boton_fade").disabled = false;
		document.getElementById("boton_fade").innerHTML = "Fade again!";
	},1000);
};

var add_the_handlers_bad_example = function (nodes) {
	var i;
		for (i = 0; i < nodes.length; i += 1) {
			nodes[i].onclick = function (e) {
			alert(i);
		};
	}
};

var add_the_handlers = function (nodes) {
	console.log("we recived"+nodes);
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (i) {
			return function(e) {
				alert(i);
			};
		}(i);
	}
};

var bad_example = function(){
	add_the_handlers_bad_example(document.getElementsByClassName("div_example"));
	document.getElementById("good").disabled = false;
	document.getElementById("bad").disabled = true;
};

var good_example = function(){
	add_the_handlers(document.getElementsByClassName("div_example"))
	document.getElementById("bad").disabled = false;
	document.getElementById("good").disabled = true;
};

var send_request_async = function(time){
	setTimeout(function(){console.log("done")},time); //waits time in seconds
	return time;
};

var prepare_request = function(){
	setTimeout(function(){console.log("done")},1000); //waits 1 in seconds
	return 1000;
};

var show_response = function(response){
	console.log(response);
};

var sync_example = function(){
	var request = prepare_request();
	var response = send_request_async(5000);
	show_response(response);
	document.getElementById("test").innerHTML = "Sync_example completed";
}

var async_example = function(){
	request = prepare_request();
	send_request_async(request, function(response){
		show_response(response);
	});
	document.getElementById("test").innerHTML = "Async_example completed";
}

var func_multiply = new Function("arg1","arg2", "return arg1*arg2;");

// alert(func_multiply(5,3));

String.method('deentityify', function(){
	// The entity table. It maps entity names to characters.
	var entity = {
		quot: '"',
		lt: "<",
		gt: ">"
	};

	// Return the deentityify method
	return function(){
		// this the deentityify method. It calls the string replace method, looking for substrings that starts 
		// with '&' and end with ';'. If the characters in between are in the entity table, ten replace the 
		// entity with the character from the table. It uses regex
		return this.replace(/&([^&;]+);/g, function(a, b){
			var r = entity[b];
			return typeof r === 'string' ? r : a;
		});
	};
}());

window.onload = function(){
	// fade(document.body);
	// add_the_handlers_bad_example(document.getElementsByClassName("example"));
	// add_the_handlers(document.getElementsByClassName("divex"));
	// sync_example();
	// async_example();
	// alert('&lt;a href=&quot;index.html&quot;&gt;'.deentityify());
};