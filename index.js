var Dog = function(breed, topSpeed, units, price) {
  this.breed = breed;
  this.topSpeed = topSpeed;
  this.units = units;
  this.price = price;
};

Dog.prototype.displayDog = function() {
  document.write("<input type='text' size='100' value=\'" + this.breed +
			": top speed = " + this.topSpeed + " " + this.units +
			", costs $" + this.price.toFixed(2)  + "\'><br><br>");
      this.launchDog();
};

Dog.prototype.launchDog = function () {
  document.write("<textarea rows = '6' cols='50' id=\'" + this.breed + "\'>" + "Text area" + "</textarea><br><br>");
  document.getElementById(this.breed).innerHTML = "Cannot get a " + this.breed;
};

function Bulldog(breed, topSpeed, units, price, numLegs) {

	Dog.call(this, breed, topSpeed, units, price);
	this.numLegs = numLegs;
}
Bulldog.prototype = Object.create(Dog.prototype);
Bulldog.prototype.constructor = Bulldog;
Bulldog.prototype.displayDog = function() {
	document.write("<input type='text' size='100' value=\'" + this.breed +
			": top speed = " + this.topSpeed + " " + this.units +
			", costs $" + this.price.toFixed(2)  + " and has " +
			this.numLegs + " legs"  + "\'><br><br>");
	this.launchDog();
};
Bulldog.prototype.launchDog = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.breed + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	for (var ball = 1; ball <= 5; ball++) {
		output += "Ball " + ball + ", thrown\n";
	}
	output += "Engage playing fetch mode";
	document.getElementById(this.breed).innerHTML = output;
};
function Husky(breed, topSpeed, units, price, nbrMasts) {
	Dog.call(this, breed, topSpeed, units, price);
	this.nbrMasts = nbrMasts;
}
Husky.prototype = Object.create(Dog.prototype);
Husky.prototype.constructor = Husky;

Husky.prototype.displayDog = function() {
	document.write("<input type='text' size='100' value=\'" + this.breed +
			": top speed = " + this.topSpeed + " " + this.units +
			", costs $" + this.price.toFixed(2)  + " and has " +
			this.nbrMasts + " legs"  + "\'><br><br>");
	this.launchDog();
};

Husky.prototype.launchDog = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.breed + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	output += "Bark\n";
	output += "Growl\n";
	output += "Bark!";
	document.getElementById(this.breed).innerHTML = output;
};
function Corgi(breed, topSpeed, units, price, nbrStages) {
	Dog.call(this, breed, topSpeed, units, price);
	this.nbrStages = nbrStages;
}
Corgi.prototype = Object.create(Dog.prototype);
Corgi.prototype.constructor = Corgi;

Corgi.prototype.displayDog = function() {
	document.write("<input type='text' size='100' value=\'" + this.breed +
			": top speed = " + this.topSpeed + " " + this.units +
			", costs $" + this.price.toFixed(2)  + " and has " +
			this.nbrStages + " legs"  + "\'><br><br>");
	this.launchDog();
};
Corgi.prototype.launchDog = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.breed + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	for (var stage = 1; stage <= this.nbrStages; stage++) {
		output += "Dog " + stage + ", run!\n";
	}
	output += "Escape the yard reached!";
	document.getElementById(this.breed).innerHTML = output;
};


function main() {
  var dogArray = [];

  dogArray[0] = new Dog("Pitbull", 156, "steps-per-minute", 0.00);
  dogArray[1] = new Bulldog("Bulldog", 190, "spm", 1000.00, 4);
  dogArray[2] = new Husky("Husky", 178, "spm", 1500.00, 4);
  dogArray[3] = new Corgi("Corgi", 82, "spm", 1000.00, 4);

for (var i = 0; i < dogArray.length; i++) {
  dogArray[i].displayDog();

  }
};
