#pragma strict

var lightFaroDer : Light;

function Start () {

}

function Update () {
if (Input.GetKeyDown("a")) { 
		
		lightFaroDer.enabled = !lightFaroDer.enabled;
		 var c : Behaviour = GetComponent( "Halo" );
		 c.enabled = !c.enabled;
	}
}