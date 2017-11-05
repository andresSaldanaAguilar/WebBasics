/*arreglo que guarda los numeros ingresados, y el indice actual del arreglo*/
var arregloUno = [];
var j=0;
var visible=false;

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
		alert(j);
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
	arreglo =[];
	j=0;
	visible=false;
	visibilidadNombreTriagramas(j);
}
/*Muestra la tabla de nombres de triagramas*/
function visibilidadNombreTriagramas(j){
	var Triagramas = document.getElementById("nombreTriagramas");
	if(j==5){	
			Triagramas.style.display="";
			alert(j);
	}
	else{
		Triagramas.style.display="none";
	}
}