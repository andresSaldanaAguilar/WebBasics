/*arreglo que guarda los numeros ingresados, y el indice actual del arreglo*/
var arreglo = [];
var j=0;

function cambiaColor(nodo){
	nodo.setAttribute("class","clase2");
}

function cambiaColorOriginal(nodo){
	nodo.setAttribute("class","clase1");
}

/*muestra o no las tablas 2 y 3*/
function visibilidad(visible){
	var tabla1 = document.getElementById ("tabla2") ;
	var tabla2 = document.getElementById ("tabla3") ;

  if ( visible == "true" ){
      tabla1.style.visibility = "visible" ;
  	  tabla2.style.visibility = "visible" ;
  }
  if ( visible == "false")
  {
      tabla1.style.visibility = "hidden" ;
  	  tabla2.style.visibility = "hidden" ;    
  }
}

/*busca en todo el arreglo si hay mutantes o no*/
function buscadorDeMutante(){
	var n=0;
	visibilidad("false");
	while(n < j){
		if(arreglo[n] == 6 || arreglo[n] == 9){
			visibilidad("true");
		}
		n++;
	}
}


function insertarFila(){
	/*el operando antes de document hace que se conviertan los valores de cadenas a enteros*/
	var x = +document.getElementById("x").value;
	var y = +document.getElementById("y").value;
	var z = +document.getElementById("z").value;

	/*validando que solo sean seis lineas*/
	if(j > 5){
		return null;
	}	
	/*validando enteros*/
	if(x < 2 || y < 2 || z < 2){
		return null;
	}
	if(x > 3 || y > 3 || z > 3){
		return null;
	}

	/*si paso las validaciones, entonces insertamos*/
	else

	var n=x+y+z;
	var str;
	switch (n) {
    case 6:
        str="____X____";
        break;
    case 7:
        str="_________";
        break;
    case 8:
        str="____ ____";
        break;
    case 9:
        str="____O____";
        break;
    default :
    	break;
	}
	if(str != null){
		/*creamos linea*/
		var linea=document.createTextNode(str);	
		var tr=document.createElement("tr");
		var td=document.createElement("td");		
		td.appendChild(linea);
		tr.appendChild(td);
		var tabla1=document.getElementById("tabla1");
		/*insertamos al inicio*/
		tabla1.insertBefore(tr, tabla1.childNodes[0]);
	}


	switch (n) {
    case 6:
        str1="____ ____";
        break;
    case 7:
        str1="_________";
        break;
    case 8:
        str1="____ ____";
        break;
    case 9:
        str1="_________";
        break;
    default :
    	break;
	}
	if(str1 != null){
		/*creamos linea*/
		var linea1=document.createTextNode(str1);	
		var tr1=document.createElement("tr");
		var td1=document.createElement("td");		
		td1.appendChild(linea1);
		tr1.appendChild(td1);
		var tabla2=document.getElementById("tabla2");
		/*insertamos al inicio*/
		tabla2.insertBefore(tr1, tabla2.childNodes[0]);
	}

	switch (n) {
    case 6:
        str2="_________";
        break;
    case 7:
        str2="_________";
        break;
    case 8:
        str2="____ ____";
        break;
    case 9:
        str2="____ ____";
        break;
    default :
    	break;
	}
	if(str2 != null){
		/*creamos linea*/
		var linea2=document.createTextNode(str2);	
		var tr2=document.createElement("tr");
		var td2=document.createElement("td");		
		td2.appendChild(linea2);
		tr2.appendChild(td2);
		var tabla3=document.getElementById("tabla3");
		/*insertamos al inicio*/
		tabla3.insertBefore(tr2, tabla3.childNodes[0]);
	}
	/*si es mutante, mostramos las sig. dos tablas, sino hay, pos no y ya*/
	arreglo[j]=n;
	j++;
	buscadorDeMutante();

}

function borrarNodos() {
    var lista = document.getElementById("tabla1");
    while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
	}
	var lista2 = document.getElementById("tabla2");
    while (lista2.hasChildNodes()) {
    lista2.removeChild(lista2.firstChild);
	}
	var lista3 = document.getElementById("tabla3");
    while (lista3.hasChildNodes()) {
    lista3.removeChild(lista3.firstChild);
	}
	//var i;
	//for(i=0; i<j; i++){
	//	j--;
	//}
	arreglo =[];
	j=0;
}

function borrarNodo() {
    var lista = document.getElementById("tabla1");
    lista.removeChild(lista.firstChild);

	var lista2 = document.getElementById("tabla2");
    lista2.removeChild(lista2.firstChild);

	var lista3 = document.getElementById("tabla3");
    lista3.removeChild(lista3.firstChild);
    j--;
    buscadorDeMutante();
}



