function update( event ) {
	rotateEarth();
	moveClouds();
}

function rotateEarth() {
	EARTH.rotation.y = EARTH.rotation.y + 0.001;
}

function moveClouds() {
	CLOUDS.rotation.y = CLOUDS.rotation.y + 0.001;
	CLOUDS.rotation.z = CLOUDS.rotation.z - 0.0005;
}

var EARTH = this.getObjectByName( 'earth' );
var CLOUDS = this.getObjectByName( 'clouds' );