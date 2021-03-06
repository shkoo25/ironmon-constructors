/*
  This class represents a character in a video game.

  It contains two default properties:
    - health (which starts at 25)
    - power (which starts at 1)

  It also contains a property passed in as a parameter:
    - name
*/
var Ironmon = function(name, type) {
  this.name = name
  this.health = 25
  this.power = 1
  this.type = type
}

/*
  This function determines a random *integer* between 1 and 5.
  
  It adds that number to the health of the Ironmon.

  An Ironmon's health cannot go above 25. If healing would 
    make the Ironmon's health go above 25, it becomes 25 instead.
*/
Ironmon.prototype.heal = function() {

    var x = Math.floor((Math.random() * 5) + 1);{

      this.health = this.health + x

      if (this.health > 25){
          (this.health = 25)
      }

    }


}

/*
  This function adds one to the power of the Ironmon.
*/
Ironmon.prototype.train = function() {
    this.power = this.power + 1

}

/*
  This function returns true if the Ironmon's health is greater than 0.

  Otherwise, it returns false.
*/
Ironmon.prototype.active = function() {
  if (this.health > 0){
    return true
  }
  else {
    return false
  }
}

/*
  This function accepts another, opponent Ironmon as a parameter.

  It reduces the health of the opponent Ironmon by a random *integer*
    between 1 and whatever this Ironmon's power is.

  This function returns the amount of damage dealt.
*/
Ironmon.prototype.attack = function(opponent) {
  opponent.health = 25
  opponent.power = 1

  var y = Math.floor(Math.random() * this.power) + 1;

  if (this.type === "water" && opponent.type==="fire") {
    y *=2
  };

  if(this.type === "fire" && opponent.type ==="grass"){
    y *= 2
  };

  if (this.type ==="grass" && opponent.type ==="water"){
    y *= 2
  };

  opponent.health = opponent.health - y
  
  return y
}
