#pragma strict

var light_del : Light;
var light_tra : Light;
var light_izq : Light;
var light_der : Light;
var light_arriba : Light;

function Start () {

}

function Update () {
	if (Input.GetKeyDown("f")) { 
		light_del.enabled = !light_del.enabled; 
		light_tra.enabled = !light_tra.enabled;
		light_izq.enabled = !light_izq.enabled;
		light_der.enabled = !light_der.enabled;
	}
	
	if (Input.GetKey("p")) { 
		light_arriba.enabled = !light_arriba.enabled;
	}
}