function muestrafactorial(){
		borrarNodos();
		var num = prompt("Introduzca el numero a encontrar su factorial: ");
    	if (num != null) {
			var i = 0;
			while (i <= num) {
				insertarFila(i);
				i++;
			}
		}
	}

	function factorial(n){
		if(n==0)
			return 0;
		if(n==1)
			return 1;
		else
			return n*factorial(n-1);
	}

	function insertarFila(n){
			var res=factorial(n);
			var tr=document.createElement("tr");
			var tdnum=document.createElement("td");
			var tdres=document.createElement("td");
			var num=document.createTextNode(""+n);			
			var texto=document.createTextNode(""+res);
			tdres.appendChild(texto);
			tdnum.appendChild(num);
			tr.appendChild(tdnum);
			tr.appendChild(tdres);
			document.getElementById("tablebody").appendChild(tr); 		
	}

	function borrarNodos() {
    var list = document.getElementById("tablebody");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

function cambiaColor(){
  document.getElementById("mybutton").style.backgroundColor = "#A4A4A4" ;
}
function cambiaColorOriginal(){
  document.getElementById("mybutton").style.backgroundColor = "#BDBDBD";
}