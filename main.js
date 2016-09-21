
window.addEventListener("load", function() {
  var boton = document.getElementById("boton");
    boton.disabled = true;
    boton.addEventListener("click", function(e) {
      e.preventDefault();
      var textoArea =document.getElementById("caracteres");
      var texto = document.getElementById("caracteres").value;
      var repla = texto.replace(/\n/g, "<br>");//salto de linea global 
      crear();
    function crear(){	
		  var parrafo = document.createElement("div");
		  var padre = document.getElementById("seccion");
		    parrafo.innerHTML = repla ;
		    padre.appendChild(parrafo);
		    parrafo.classList.toggle("divis");
		    padre.insertBefore(parrafo,padre.childNodes[0]);
        var horitas =new Date();
        var horas=horitas.getHours();
         var min= horitas.getMinutes();
        var hor = document.createElement("h5");
        hor.classList.toggle("divi");
        hor.innerHTML= " "+ horas+":"+ min;
        parrafo.insertBefore(hor,parrafo.childNodes[0]);
		    textoArea.value= "";
    	  boton.disabled=true; 
    }//noborrar
  });
      var textBox =document.getElementById("caracteres");
      textBox.addEventListener("keyup", deleted); 
    function deleted(){
       var botons = document.getElementById("boton");
       var longi = this.value.length;
       var breakLines = this.value.match(/\n/g);

       if (this.value.trim().length == 0){
           botons.disabled= true;
       }
       else{
           botons.disabled= false;
       }
     }  
      //nope
      var textBox =document.getElementById("caracteres");
      textBox.addEventListener("keydown", autosize); 
        function autosize(){
          var limit = this;
          limit.style.cssText = 'height:auto; padding:0';
          limit.style.cssText = 'height:' + limit.scrollHeight + 'px';
        }
      caracteres.addEventListener("keydown",function(){
      contador();
      });
    function contador(){
      boton.disabled=false;
      var limite = 140;
      var contadorDeNumbers=document.getElementById("contador");
      var longitud = document.getElementById("caracteres").value.length;
      contadorDeNumbers.innerHTML= limite-longitud;
        if(longitud>=140){ 
            contadorDeNumbers.style.color ="red";                              
            boton.disabled=true;
        }else if(longitud>=130){
            contadorDeNumbers.style.color= "blue";
            boton.disabled=false;
        }
        else if(longitud>=120){
            contadorDeNumbers.style.color ="green";
            boton.disabled=false;
        }
      }
});

    