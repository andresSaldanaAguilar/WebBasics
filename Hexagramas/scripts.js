/*arreglo que guarda los numeros ingresados, y el indice actual del arreglo*/
var arregloUno = [];
var j=0;
var visible=false;

/*muestra las descripciones*/
function muestraAlert(boton){
	if(boton=="b1"){
		alert("1.Cielo.Lo creativo. El principio creador.");
	}
	if(boton=="b34"){
		alert("34.Tierra. Lo perceptivo. El principio pasivo.");
	}
	//..... siguen las demas validaciones
}
//regresa el color de las celdas de la tabla al original.
function resetearColor(){
    var x = document.getElementById("nombreTriagramas").getElementsByTagName("td");
    var n=0;
    while(n<x.length){
    	x[n].style.backgroundColor = "#5882FA"; 
    	n++;
    }
}

function cambiaColor(nodo){
	nodo.setAttribute("class","clase2");
}

function cambiaColorOriginal(nodo){
	nodo.setAttribute("class","clase1");
}

function insertarFila(){
/*el operando antes de document hace que se conviertan los valores de cadenas a enteros*/
	var x = +document.getElementById("x").value;
	var y = +document.getElementById("y").value;
	var z = +document.getElementById("z").value;

	if(x==0 || y==0 || z==0) /*Validacion para que no se dejen campos vacios*/
		alert("Se requiere un valor numérico en todos los campos");
	else if(x>3 || y>3 || z>3)
		alert("Los valores exceden los permitidos");
	else if(x<2 || y<2 || z<2)
		alert("Los valores son menores los permitidos");
	else if(j>5)
		alert("Una línea mas excedería el tamaño de un Hexagrama");	
	else{
		arregloUno[j] =x+y+z;
			switch (arregloUno[j]) {
    			case 6:
    				var filaHexagramaX ="____X____";
    				var filaHexagramaY ="____ ____";
    				var filaHexagramaZ ="_________";
    				visible=true;
        		break;
    		case 7:
    				var filaHexagramaX ="_________";
    				var filaHexagramaY ="_________";
    				var filaHexagramaZ ="_________";
        		break;
    		case 8:
    				var filaHexagramaX ="____ ____";
    				var filaHexagramaY ="____ ____";
    				var filaHexagramaZ ="____ ____";
        		break;
    		case 9:
    				var filaHexagramaX ="____O____";
    				var filaHexagramaY ="_________";
    				var filaHexagramaZ ="____ ____";
		    		visible=true;
        		break;
			}
		//Agregamos los valores a las tablas
    				var valorHexagramaX=document.createTextNode(filaHexagramaX);
					var valorHexagramaY=document.createTextNode(filaHexagramaY);
					var valorHexagramaZ=document.createTextNode(filaHexagramaZ);
							var trX=document.createElement("tr");
							var trY=document.createElement("tr");
							var trZ=document.createElement("tr");

						trX.appendChild(valorHexagramaX);
						trY.appendChild(valorHexagramaY);
						trZ.appendChild(valorHexagramaZ);

					var anexa_a_X=document.getElementById("tabla1");    			
						anexa_a_X.insertBefore(trX, anexa_a_X.childNodes[0]);
					var anexa_a_Y=document.getElementById("tabla2");    			
						anexa_a_Y.insertBefore(trY, anexa_a_Y.childNodes[0]);
					var anexa_a_Z=document.getElementById("tabla3");    			
						anexa_a_Z.insertBefore(trZ, anexa_a_Z.childNodes[0]);

		visibilidad_Hexagrama();
		visibilidadNombreTriagramas(j);
		j++;
	}
}
/*muestra o no las hexagramaY y hexagramaZ*/
function visibilidad_Hexagrama(){
	var HexagraY = document.getElementById("tabla2");
	var HexagraZ = document.getElementById("tabla3");

		if(visible==false){
			HexagraY.style.display="none";
			HexagraZ.style.display="none";
		}
		else{
			HexagraY.style.display="";
			HexagraZ.style.display="";
		}
}
//Limpiamos una linea de las tablas de Hexagramas
function borrarNodo() {
    var listaDeX = document.getElementById("tabla1");
	var listaDeY = document.getElementById("tabla2");
	var listaDeZ = document.getElementById("tabla3");
    	listaDeX.removeChild(listaDeX.firstChild);
    	listaDeY.removeChild(listaDeY.firstChild);
    	listaDeZ.removeChild(listaDeZ.firstChild);

    //Revisamos que en el arreglo no wxistan mas compuestos
    arregloUno[j-1]= 0;
		for (var x=0; x<j;  x++){
    		if(arregloUno[x]==6 || arregloUno[x]==9){
   	    		visible=true;
   	    	break;
    		}
	    	else
	    		visible=false;			
		}
	if(j==0){
		j=0;
	}
	else if(j>4){
		j--;	  
		visibilidadNombreTriagramas(0);	
	}
	else{
		j--;	  
	}
	resetearColor();
	visibilidad_Hexagrama();
}
//Limpiamos la tabla HexagramaX, HexagramaY y HexagramaZ
function limpiarTabla() {
    var listaDeX = document.getElementById("tabla1");
    var listaDeY = document.getElementById("tabla2");
    var listaDeZ = document.getElementById("tabla3");
    	while (listaDeX.hasChildNodes()) {
    		listaDeX.removeChild(listaDeX.firstChild);
    		listaDeY.removeChild(listaDeY.firstChild);
    		listaDeZ.removeChild(listaDeZ.firstChild);
		}
//Reiniciamos todos los valores de la taba
	arregloUno= [];
	j=0;
	visible=false;
	visibilidadNombreTriagramas(j);
	resetearColor();
}
/*Muestra la tabla de nombres de triagramas*/
function visibilidadNombreTriagramas(j){
	var Triagramas = document.getElementById("nombreTriagramas");
	if(j==5){	
			Triagramas.style.display="";
				colorearCasilla();
	}
	else{
		Triagramas.style.display="none";
	}
}
function colorearCasilla(){
	var Chien = ["1", "1", "1"];
	var Chen = ["1", "0", "0"];
	var Kan = ["0", "1", "0"];
	var Ken = ["0", "0", "1"];
	var Kun = ["0", "0", "0"];
	var Sun = ["0", "1", "1"];
	var Li = ["1", "0", "1"];
	var Tui = ["1", "1", "0"];
	var fila;
	var columna;
	var ban1, ban2, ban3;
	var aux =[];
	//Esta condicion se ejecuta solo cuando existe una sola tabla de Hexagramas
	if(visible==false){
		for (var i=0; i<3; i++) {
			if (arregloUno[i]==7) {
				aux[i] =1;
			}
			else{
				aux[i] =0;
			}
		}

		//Primero Fila
		if(Chien[0]==aux[0] && Chien[1]==aux[1] && Chien[2]==aux[2])
				fila ="1";
		else if(Chen[0]==aux[0] && Chen[1]==aux[1] && Chen[2]==aux[2])
				fila ="2";
		else if(Kan[0]==aux[0] && Kan[1]==aux[1] && Kan[2]==aux[2])
				fila ="3";
		else if(Ken[0]==aux[0] && Ken[1]==aux[1] && Ken[2]==aux[2])
				fila ="4";
		else if(Kun[0]==aux[0] && Kun[1]==aux[1] && Kun[2]==aux[2])
				fila ="5";
		else if(Sun[0]==aux[0] && Sun[1]==aux[1] && Sun[2]==aux[2])
				fila ="6";
		else if(Li[0]==aux[0] && Li[1]==aux[1] && Li[2]==aux[2])
				fila ="7";
		else if(Tui[0]==aux[0] && Tui[1]==aux[1] && Tui[2]==aux[2])
				fila ="8";

		for (var i=3; i<6; i++) {
			if (arregloUno[i]==7) {
				aux[i-3] =1;
			}
			else{
				aux[i-3] =0;
			}
		}
		//Ahora columna
		if(Chien[0]==aux[0] && Chien[1]==aux[1] && Chien[2]==aux[2])
				columna ="1";
		else if(Chen[0]==aux[0] && Chen[1]==aux[1] && Chen[2]==aux[2])
				columna ="2";
		else if(Kan[0]==aux[0] && Kan[1]==aux[1] && Kan[2]==aux[2])
				columna ="3";
		else if(Ken[0]==aux[0] && Ken[1]==aux[1] && Ken[2]==aux[2])
				columna ="4";
		else if(Kun[0]==aux[0] && Kun[1]==aux[1] && Kun[2]==aux[2])
				columna ="5";
		else if(Sun[0]==aux[0] && Sun[1]==aux[1] && Sun[2]==aux[2])
				columna ="6";
		else if(Li[0]==aux[0] && Li[1]==aux[1] && Li[2]==aux[2])
				columna ="7";
		else if(Tui[0]==aux[0] && Tui[1]==aux[1] && Tui[2]==aux[2])
				columna ="8";
	 var listaDeX = document.getElementById(fila+columna);
	 listaDeX.style.backgroundColor="#f34";
	}
	else{
	//Hexagrama Y
		for (var i=0; i<3; i++) {
			if (arregloUno[i]==7 || arregloUno[i]==9) {
				aux[i] =1;
			}
			else{
				aux[i] =0;
			}
		}

		//Primero Fila
		if(Chien[0]==aux[0] && Chien[1]==aux[1] && Chien[2]==aux[2])
				fila ="1";
		else if(Chen[0]==aux[0] && Chen[1]==aux[1] && Chen[2]==aux[2])
				fila ="2";
		else if(Kan[0]==aux[0] && Kan[1]==aux[1] && Kan[2]==aux[2])
				fila ="3";
		else if(Ken[0]==aux[0] && Ken[1]==aux[1] && Ken[2]==aux[2])
				fila ="4";
		else if(Kun[0]==aux[0] && Kun[1]==aux[1] && Kun[2]==aux[2])
				fila ="5";
		else if(Sun[0]==aux[0] && Sun[1]==aux[1] && Sun[2]==aux[2])
				fila ="6";
		else if(Li[0]==aux[0] && Li[1]==aux[1] && Li[2]==aux[2])
				fila ="7";
		else if(Tui[0]==aux[0] && Tui[1]==aux[1] && Tui[2]==aux[2])
				fila ="8";

		for (var i=3; i<6; i++) {
			if (arregloUno[i]==7 || arregloUno[i]==9) {
				aux[i-3] =1;
			}
			else{
				aux[i-3] =0;
			}
		}
		//Ahora columna
		if(Chien[0]==aux[0] && Chien[1]==aux[1] && Chien[2]==aux[2])
				columna ="1";
		else if(Chen[0]==aux[0] && Chen[1]==aux[1] && Chen[2]==aux[2])
				columna ="2";
		else if(Kan[0]==aux[0] && Kan[1]==aux[1] && Kan[2]==aux[2])
				columna ="3";
		else if(Ken[0]==aux[0] && Ken[1]==aux[1] && Ken[2]==aux[2])
				columna ="4";
		else if(Kun[0]==aux[0] && Kun[1]==aux[1] && Kun[2]==aux[2])
				columna ="5";
		else if(Sun[0]==aux[0] && Sun[1]==aux[1] && Sun[2]==aux[2])
				columna ="6";
		else if(Li[0]==aux[0] && Li[1]==aux[1] && Li[2]==aux[2])
				columna ="7";
		else if(Tui[0]==aux[0] && Tui[1]==aux[1] && Tui[2]==aux[2])
				columna ="8";

	 var listaDeX = document.getElementById(fila+columna);
	 listaDeX.style.backgroundColor="#f34";
	//Hexagrama Z
		for (var i=0; i<3; i++) {
			if (arregloUno[i]==7 || arregloUno[i]==6) {
				aux[i] =1;
			}
			else{
				aux[i] =0;
			}
		}

		//Primero Fila
		if(Chien[0]==aux[0] && Chien[1]==aux[1] && Chien[2]==aux[2])
				fila ="1";
		else if(Chen[0]==aux[0] && Chen[1]==aux[1] && Chen[2]==aux[2])
				fila ="2";
		else if(Kan[0]==aux[0] && Kan[1]==aux[1] && Kan[2]==aux[2])
				fila ="3";
		else if(Ken[0]==aux[0] && Ken[1]==aux[1] && Ken[2]==aux[2])
				fila ="4";
		else if(Kun[0]==aux[0] && Kun[1]==aux[1] && Kun[2]==aux[2])
				fila ="5";
		else if(Sun[0]==aux[0] && Sun[1]==aux[1] && Sun[2]==aux[2])
				fila ="6";
		else if(Li[0]==aux[0] && Li[1]==aux[1] && Li[2]==aux[2])
				fila ="7";
		else if(Tui[0]==aux[0] && Tui[1]==aux[1] && Tui[2]==aux[2])
				fila ="8";

		for (var i=3; i<6; i++) {
			if (arregloUno[i]==7 || arregloUno[i]==6) {
				aux[i-3] =1;
			}
			else{
				aux[i-3] =0;
			}
		}
		//Ahora columna
		if(Chien[0]==aux[0] && Chien[1]==aux[1] && Chien[2]==aux[2])
				columna ="1";
		else if(Chen[0]==aux[0] && Chen[1]==aux[1] && Chen[2]==aux[2])
				columna ="2";
		else if(Kan[0]==aux[0] && Kan[1]==aux[1] && Kan[2]==aux[2])
				columna ="3";
		else if(Ken[0]==aux[0] && Ken[1]==aux[1] && Ken[2]==aux[2])
				columna ="4";
		else if(Kun[0]==aux[0] && Kun[1]==aux[1] && Kun[2]==aux[2])
				columna ="5";
		else if(Sun[0]==aux[0] && Sun[1]==aux[1] && Sun[2]==aux[2])
				columna ="6";
		else if(Li[0]==aux[0] && Li[1]==aux[1] && Li[2]==aux[2])
				columna ="7";
		else if(Tui[0]==aux[0] && Tui[1]==aux[1] && Tui[2]==aux[2])
				columna ="8";

	 var listaDeX = document.getElementById(fila+columna);
	 listaDeX.style.backgroundColor="#f34";
	}

}

