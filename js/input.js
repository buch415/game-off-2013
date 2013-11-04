//BnDGames
//Github Game Off 2013
//-----------------------------------------------------------------
//input.js
//Input handling
//-----------------------------------------------------------------

//Key states
//0 = up, 1 = left, 2 = down, 3 = right
var keyStates = [ false, false, false, false ];

//Key codes for keys
var keyCodes = [ 87, 65, 83, 68 ];

//Functions to handle key events
document.onkeydown = function ( event ) {
	for (var i = 0; i < keyStates.length; i++)
		if (event.keyCode == keyCodes[i]) keyStates[i] = true;
}

document.onkeyup = function ( event ) {
	for (var i = 0; i < keyStates.length; i++)
		if (event.keyCode == keyCodes[i]) keyStates[i] = false;
}

//Unit to which keyboard input is sent
var inputBoundUnit = 0;

//Function to apply input to bound unit
function applyInput () {
	if (inputBoundUnit && inputBoundUnit.loaded){
		var force = vRotate ( [ getStat ( inputBoundUnit, stat_engine ), 0 ], inputBoundUnit.angle );
		var turn = getStat ( inputBoundUnit, stat_maneuvrability );
		
		if (keyStates[0]) inputBoundUnit.force = force;
		else if (keyStates[2]) inputBoundUnit.force = vMult ( force, -1 );
		else inputBoundUnit.force = [0,0];
		
		if (keyStates[1]) inputBoundUnit.momentum = -turn;
		else if (keyStates[3]) inputBoundUnit.momentum = turn;
		else inputBoundUnit.momentum = 0;
		
		if (keyStates[0] || keyStates[1] || keyStates[2] || keyStates[3]) inputBoundUnit.gfxModifiers[gfxMod_engineOn] = true;
		else inputBoundUnit.gfxModifiers[gfxMod_engineOn] = false;
	}
}
