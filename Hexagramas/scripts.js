/*arreglo que guarda los numeros ingresados, y el indice actual del arreglo*/
var arregloUno = [];
var j=0;
var visible=false;

/*muestra las descripciones*/
function muestraAlert(boton){


		if(boton=="b1"){
			alert("1.Cielo. Lo creativo. El principio generador");
		}

		if(boton=="b2"){
			alert("2.Tierra. Lo receptivo. El principio pasivo");
		}

		if(boton=="b3"){
			alert("3.Acumular. El obstáculo inicial. La dificultad del comienzo");
		}

		if(boton=="b4"){
			alert("4.Juventud. El joven necio. La inmadurez");
		}

		if(boton=="b5"){
			alert("5.Esperar. La espera. La maduración");
		}

		if(boton=="b6"){
			alert("6.Disputar. El conflicto. El pleito");
		}

		if(boton=="b7"){
			alert("7.Ejercito. La legión");
		}

		if(boton=="b8"){
			alert("8.solidaridad. La unión");
		}

		if(boton=="b9"){
			alert("9.Animalito doméstico. La pequeña fuerza");
		}

		if(boton=="b10"){
			alert("10.Caminar.El porte. El paso cauteloso");
		}


		if(boton=="b11"){
			alert("11.Prosperidad. La paz. La armonía");
		}

		if(boton=="b12"){
			alert("12.Cierre. El estancamiento. Lo inerte");
		}

		if(boton=="b13"){
			alert("13.Hombres reunidos. La unión comunitaria");
		}

		if(boton=="b14"){
			alert("14.Gran dominio. La gran posición Lo que se tiene de más");
		}

		if(boton=="b15"){
			alert("15.Condescencia. La modestia. La humildad");
		}

		if(boton=="b16"){
			alert("16.Ocuparse. El entusiasmo. La algarabía");
		}

		if(boton=="b17"){
			alert("17.Conformarse. La continuidad. El seguimiento");
		}

		if(boton=="b18"){
			alert("18.Destrucción. La reconstrucción. La labor de lo corrompido");
		}

		if(boton=="b19"){
			alert("19.Acercarse. Lo que va llegando");
		}

		if(boton=="b20"){
			alert("20.Observar. La contemplación");
		}


		if(boton=="b21"){
			alert("21.Quebrar mordiendo. La dentallada. La filosa mordedura");
		}
		

		if(boton=="b22"){
			alert("22.Adornar. La elegancia. La gracia");
		}

		if(boton=="b23"){
			alert("23.Resquebrajar. La desintegración. El derrumbe");
		}

		if(boton=="b24"){
			alert("24.Regresar. El retorno. Lo que vuelve");
		}

		if(boton=="b25"){
			alert("25.Sinceridad. La inocencia. La naturalidad");
		}

		if(boton=="b26"){
			alert("26.Fuerza educadora. El poder de lo fuerte. La gran acumulación");
		}

		if(boton=="b27"){
			alert("27.Nutrirse. La alimentación. Las fauces");
		}

		if(boton=="b28"){
			alert("28.Excesos. La preponderancia de lo grande");
		}

		if(boton=="b29"){
			alert("29.Peligro. Lo abismal. La caida");
		}		
		if(boton=="b30"){
			alert("30.Distinguir. El resplandor. Lo adherente");
		}

		if(boton=="b31"){
			alert("31.Unir. La influencia. La atracción");
		}

		if(boton=="b32"){
			alert("32.Luna creciente. La duración. La permanencia");
		}

		if(boton=="b33"){
			alert("33.Retirarse. El repliegue");
		}
		
		if(boton=="b34"){
			alert("34.Gran fuerza. El gran vigor");
		}

		if(boton=="b35"){
			alert("35.Progresar. El avance");
		}
		if(boton=="b36"){
			alert("36.Luz que se apaga. El oscurecimiento");
		}
		if(boton=="b37"){
			alert("37.Gente con familia. El clan");
		}

		if(boton=="b38"){
			alert("38.Contraste. La oposición. El antagonismo");
		}

		if(boton=="b39"){
			alert("39.Dificultad. El obstáculo. El impedimento");
		}

		if(boton=="b40"){
			alert("40.Explicar. La liberación. El alivio");
		}

		if(boton=="b41"){
			alert("41.Perder. La disminución");
		}


		if(boton=="b42"){
			alert("42.Evolución. El aumento. La ganancia");
		}

		if(boton=="b43"){
			alert("43.Decidir. El desbordamiento. La resolución");
		}


		if(boton=="b44"){
			alert("44.Encontrarse. El acoplamiento");
		}

		if(boton=="b45"){	
			alert("45.Cosechar. La reunión. La convergencia");
		}

		if(boton=="b46"){
			alert("46.Subir. El ascenso. La escalada");
		}

		if(boton=="b47"){
			alert("47.Angustia. La pesadumbre. El agotamiento");
		}

		if(boton=="b48"){
			alert("48.El pozo de agua. La fuente");
		}

		if(boton=="b49"){
			alert("49.Renovar. La revolución. El cambio");
		}

		if(boton=="b50"){
			alert("50.La caldera. Lo alquímico");
		}


		if(boton=="b51"){
			 alert("51.Trueno. La conmoción. Lo suscitativo");
		}

		if(boton=="b52"){
			alert("52.Cimientos. La quietud. La detención");
		}

		if(boton=="b53"){
			alert("53.Evolución. El progreso gradual");
		}

		if(boton=="b54"){
			alert("54.Desposar a la hija menor. La doncella");
		}
		if(boton=="b55"){
			alert("55.Abundancia. La plenitud");
		}	

		if(boton=="b56"){
			alert("56.Viajero. El andariego");
		}

		if(boton=="b57"){
			alert("57.Viento. Lo penetrante. Lo suave");
		}

		if(boton=="b58"){
			alert("58.Recoger. La serenidad. La satisfacción");
		}

		if(boton=="b59"){
			alert("59.Confusión. La dispersión. La disolución");
		}

		if(boton=="b60"){
			alert("60.Moderación. La restricción. La limitación");
		}

		if(boton=="b61"){
			alert("61.Fe interior. La verdad interior");
		}

		if(boton=="b62"){
			alert("62.Pequeñas cosas importantes. La pequeña preponderancia");
		}

		if(boton=="b63"){
			alert("63.Conclusiones. Después de la realización");
		}

		if(boton=="b64"){
			alert("64.Inconcluso. Antes de la realización");
		}	
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

function randomColor(titulo){
	var str="#"+((1<<24)*Math.random()|0).toString(16);
	titulo.style.color=""+str;
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

