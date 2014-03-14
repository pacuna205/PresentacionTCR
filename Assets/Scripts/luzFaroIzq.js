#pragma strict

var lightFaroIzq : Light;

function Start () {

}

function Update () {
	if (Input.GetKeyDown("a")) { 
		lightFaroIzq.enabled = !lightFaroIzq.enabled; 
		var c : Behaviour = GetComponent( "Halo" );
		 c.enabled = !c.enabled;
	}
}