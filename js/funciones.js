function cargarImagenes(){
	let respuesta=new XMLHttpRequest();
	respuesta.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			let direcciones=this.responseText;
			let array_dir=direcciones.split(",");
			let objt_select=document.createElement("select");
			objt_select.id="selector";
			document.getElementById("uno").appendChild(objt_select);
			let op=document.createElement("option");
			op.innerText="Selecciona opción";
			op.selected=true;
			op.disabled=true;
			document.getElementById("selector").appendChild(op);
			for(i=0;i<array_dir.length;i++){
				let opcion=document.createElement("option");
				opcion.value=i;
				opcion.innerText="Imagen "+(i+1);
				document.getElementById("selector").appendChild(opcion);
			}
			objt_select.addEventListener("change",function(){
				if(document.getElementsByTagName("img")[0]!=null){
					document.getElementsByTagName("img")[0].remove();
				}
				let imagen=document.createElement("img");
				let opcion_selected=document.getElementById("selector").value;
				imagen.src=array_dir[opcion_selected];
				imagen.style.width="50%";
				document.getElementById("dos").appendChild(imagen);
			});
		}
	}
	respuesta.open("GET","direcciones.txt",true);
	respuesta.send();
}
