//BnDGames
//Github Game Off 2013
//-----------------------------------------------------------------
//units.js
//Projectiles
//-----------------------------------------------------------------

//Projectile object
//Projectiles are single entities moving with constant speed
//and constant direction until a certain distance
//Reaching that distance or hitting an unit destroys the projectile
var Projectile = function () {
	//Projectile owner
	//Used to assign score
	this.owner = 0;

	//Projectile positional data
	this.distance = 0;
	this.position = [0,0];
	this.speed = [0,0];
	
	//Projectile statistics
	this.damage = 0;//Damage dealt by projectile
	this.range = 0;//Projectile range (when distance > range, projectile is destroyed)
	
	//Projectile graphics, given as an array of primitives
	this.draw = new Array();
}

//Function to move a projectile
function projectileMove ( projectile, time ) {
	projectile.position += vMult ( projectileSpeed, time );
	
}
