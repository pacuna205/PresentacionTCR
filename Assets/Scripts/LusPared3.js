#pragma strict

var light_ : Light;

function Start () {

}

function Update () {
	if (Input.GetKeyDown("g")) { 
		light_.enabled = !light_.enabled;
	}
}