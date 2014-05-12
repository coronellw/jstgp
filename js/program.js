var JSGood = {
	contador : 0,
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
	return sum1 + sum2;
};

if (contador === JSGood.contador) {
	alert("condition was true");
};

if (typeof Object.create !== 'function') {
	alert("entering object creation")
	Object.create = function(o){
		var F = function(){};
		f.prototype = o;
		return new F();
	};
}

