#pragma strict

//var flashlight : GameObject; 
var lightCentral : Light;

function Start () {

}

function Update () {
if (Input.GetKey("f")) { 
		lightCentral.enabled = !lightCentral.enabled; 
	}
}