function cambiaColor(nodo){
	nodo.setAttribute("class","clase2");
}

function cambiaColorOriginal(nodo){
	nodo.setAttribute("class","clase1");
}

function visibilidad(visible){
	var tabla1 = document.getElementById ("tabla1") ;
	var tabla2 = document.getElementById ("tabla2") ;

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

function insertarFila(){
	/*si no es mutante, escondemos la sig. dos tablas*/
	visibilidad("false");

	/*el operando antes de document hace que se conviertan los valores de cadenas a enteros*/
	var x = +document.getElementById("x").value;
	var y = +document.getElementById("y").value;
	var z = +document.getElementById("z").value;
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

	/*si es mutante, mostramos las sig. dos tablas*/
	if(n==6 || n==9){
		visibilidad("true");
	}
	
}

function borrarNodos() {
    var list = document.getElementById("tabla1");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
	}
	var list2 = document.getElementById("tabla2");
    while (list2.hasChildNodes()) {
    list2.removeChild(list2.firstChild);
	}
	var list3 = document.getElementById("tabla3");
    while (list3.hasChildNodes()) {
    list3.removeChild(list3.firstChild);
	}
}



