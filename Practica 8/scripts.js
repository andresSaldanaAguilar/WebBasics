function setCookie(){

	/*campos de nombre*/
	var nom=document.getElementById("nombre").value;
	var apat=document.getElementById("paterno").value;
	var amat=document.getElementById("materno").value;
	/*campos de direccion*/
	var calle=document.getElementById("calle").value;
	var numero_c=document.getElementById("numero_calle").value;
	var colonia=document.getElementById("colonia").value;
	var cp=document.getElementById("cp").value;
	var estado=document.getElementById("estado").value;
	/*datos personales*/
	if(document.getElementById("masculino").checked==true){
		var sexo=document.getElementById("masculino").value;
	}else{
		var sexo=document.getElementById("femenino").value;
	}
	var dia=document.getElementById("dia").value;
	var mes=document.getElementById("mes").value;
	var anio=document.getElementById("anio").value;
	var curp=document.getElementById("curp").value;
	var correo=document.getElementById("correo").value;
	/*lenguajes de progra*/
	var c=document.getElementById("c").checked;
	var python=document.getElementById("python").checked;
	var cpp=document.getElementById("c++").checked;
	var perl=document.getElementById("perl").checked;
	var java=document.getElementById("java").checked;
	var php=document.getElementById("php").checked;
	var ruby=document.getElementById("ruby").checked;
	var otros=document.getElementById("otros").checked;
	/*pasatiempos*/
	var leer=document.getElementById("leer").checked;
	var internet=document.getElementById("internet").checked;
	var musica=document.getElementById("musica").checked;
	var redsocial=document.getElementById("redsocial").checked;
	var tv=document.getElementById("tv").checked;
	var juegos=document.getElementById("juegos").checked;
	var netflix=document.getElementById("netflix").checked;
	var otros2=document.getElementById("otros2").checked;

	alert(nom+" "+apat+" "+amat+" "+calle+" "+numero_c+" "+colonia+" "+cp+" "+estado+" "+sexo+" "+dia+" "+mes+" "+anio+" "+curp+" "+correo+" c: "+c+" python: "+python+" c++: "+cpp+" perl: "+perl+" java: "+java+" php: "+php+" ruby: "+ruby+" otros: "+otros+" leer: "+leer+" internet: "+internet+" musica: "+musica+"  redsocial: "+redsocial+" tv: "+tv+" juegos: "+juegos+" netflix: "+netflix+" otros: "+otros);

	document.cookie=escape("nombre="+nom+"paterno="+apat+"materno="+amat+"calle="+calle+"numeroc="+numero_c+"colonia="+colonia+"cp="+cp+"estado="+estado+"sexo="+sexo+"dia="+dia+"mes="+mes+"anio="+anio+"curp="+curp+"correo="+correo+"clen="+c+"python="+python+"cpp="+cpp+"perl="+perl+"java="+java+"php="+php+"ruby="+ruby+"otros="+otros+"leer="+leer+"internet="+internet+"musica="+musica+"redsocial="+redsocial+"tv="+tv+"juegos="+juegos+"netflix="+netflix+"otros2="+otros2);
}

function getCookie(){
	var res=unescape(document.cookie).split("=");
	//alert(unescape(document.cookie));
	var x=res[1].split("paterno",1);
	document.getElementById("nombre").value=x;
	x=res[2].split("materno",1);
	document.getElementById("paterno").value=x;
	x=res[3].split("calle",1);
	document.getElementById("materno").value=x;
	x=res[4].split("numero",1);
	document.getElementById("calle").value=x;
	x=res[5].split("colonia",1);
	document.getElementById("numero_calle").value=x;
	x=res[6].split("cp",1);
	document.getElementById("colonia").value=x;
	x=res[7].split("estado",1);
	document.getElementById("cp").value=x;
	x=res[8].split("sexo",1);
	document.getElementById("estado").value=x;
	x=res[9].split("dia",1);
	document.getElementById(x).setAttribute("checked");
	x=res[10].split("mes",1);
	document.getElementById("dia").value=x;
	x=res[11].split("anio",1);
	document.getElementById("mes").value=x;	
	x=res[12].split("curp",1);
	document.getElementById("anio").value=x;	
	x=res[13].split("correo",1);
	document.getElementById("curp").value=x;
	x=res[14].split("clen",1);
	document.getElementById("correo").value=x;
	x=res[15].split("python",1);
	if(x=="true"){
		document.getElementById("c").setAttribute("checked");
	}
	x=res[16].split("cpp",1);
	if(x=="true"){
		document.getElementById("python").setAttribute("checked");
	}
	x=res[17].split("perl",1);
	if(x=="true"){
		document.getElementById("c++").setAttribute("checked");
	}
	x=res[18].split("java",1);
	if(x=="true"){
		document.getElementById("perl").setAttribute("checked");
	}
	x=res[19].split("php",1);
	if(x=="true"){
		document.getElementById("java").setAttribute("checked");
	}
	x=res[20].split("ruby",1);
	if(x=="true"){
		document.getElementById("php").setAttribute("checked");
	}
	x=res[21].split("otros",1);
	if(x=="true"){
		document.getElementById("ruby").setAttribute("checked");
	}
	x=res[22].split("leer",1);
	if(x=="true"){
		document.getElementById("otros").setAttribute("checked");
	}
	x=res[23].split("internet",1);
	if(x=="true"){
		document.getElementById("leer").setAttribute("checked");
	}
	x=res[24].split("musica",1);
	if(x=="true"){
		document.getElementById("internet").setAttribute("checked");
	}
	x=res[25].split("redsocial",1);
	if(x=="true"){
		document.getElementById("musica").setAttribute("checked");
	}
	x=res[26].split("tv",1);
	if(x=="true"){
		document.getElementById("redsocial").setAttribute("checked");
	}
	x=res[27].split("juegos",1);
	if(x=="true"){
		document.getElementById("tv").setAttribute("checked");
	}
	x=res[28].split("netflix",1);
	if(x=="true"){
		document.getElementById("juegos").setAttribute("checked");
	}
	x=res[29].split("otros2",1);
	if(x=="true"){
		document.getElementById("netflix").setAttribute("checked");
	}
	if(res[30]=="true"){
		document.getElementById("otros2").setAttribute("checked");
	}

	//document.getElementById("").value=res[14];

}