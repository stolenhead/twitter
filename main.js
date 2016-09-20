
window.addEventListener("load", function() {
    var boton = document.getElementById("boton");
    boton.disabled = true;
    boton.addEventListener("click", function(e) {
         e.preventDefault();
         var textoArea =document.getElementById("caracteres");
         var texto = document.getElementById("caracteres").value; 
         crear();

	    function crear(){	
		 var parrafo = document.createElement("div");
		 var padre = document.getElementById("seccion");
		     parrafo.innerHTML = texto ;
		     padre.appendChild(parrafo);
		     parrafo.classList.toggle("divis");
		     padre.insertBefore(parrafo,padre.childNodes[0]);
		     textoArea.value= "";
    	      boton.disabled=true;  
         }
    });
    caracteres.addEventListener("keypress", function() {
        boton.disabled = false;
        contar();
        
	});

     function contar(){
        var maximo = 140;
        var textValue = document.getElementById("caracteres").value;
        var largo = textValue.length;
        var contador =  document.getElementById("contador");
        contador.innerHTML = maximo - largo;
         
        if(largo > maximo) { 
              contador.classList.add("red");
              boton.disabled = true; 
        } else { 
              contador.classList.remove("red");
        } 
     };

});
    
   