function contar() { 
         var max = "150"; 
         var cadena = document.getElementById("caracteres").value; 
         var longitud = cadena.length; 

             if(longitud <= max) { 
                  document.getElementById("contador").value = max-longitud; 
             } else { 
                  document.getElementById("caracteres").value = cadena.substr(0, max); 
             } 
}
window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function() {

		 var cadena = document.getElementById("caracteres").value;
		 var parrafo = document.createElement("div");
		 var padre = document.getElementById("seccion");
		 parrafo.innerHTML = cadena ;
		 padre.appendChild(parrafo);
		 padre.insertBefore(parrafo,padre.childNodes[0]);
	});
});


    