
function codificar() {

var palabra = document.getElementById("texto").value;
var patron = /[^a-z\s]/g;

if(palabra == '') {
    swal({
        title: "Aun no has escrito nada para codificar :/",
      });
    return;
} else if (patron.test(palabra)) {
    swal({
        title: "No se permiten caracteres especiales, numeros o letras Mayusculas :3",
      });
      resetForm();
    return;
}


palabra = palabra.toLowerCase();
palabra = palabra.split('');

for(i=0; i<palabra.length; i++){
    if(palabra[i] == 'e'){
        palabra[i] = 'enter';
    } else if(palabra[i] == 'i'){
        palabra[i] = 'imes';
    } else if(palabra[i] == 'a'){
        palabra[i] = 'ai';
    } else if(palabra[i] == 'o'){
        palabra[i] = 'ober';
    } else if(palabra[i] == 'u'){
        palabra[i] = 'ufat';
    }
}

palabra = palabra.join('');
resultado = palabra;
document.getElementById("resultado").innerHTML = `<p class='resultado1'>${resultado}</p>`;
resetForm();
removeImg();
btnCopy()

}


function decodificar() {
    var palabra = document.getElementById("texto").value;
    var patron = /[^a-z\s]/g;

    if(palabra == '') {
        swal({
            title: "Aun no has escrito nada para Decodificar :/",
          });
        return;
    } else if (patron.test(palabra)) {
        swal({
            title: "No se permiten caracteres especiales, numeros o letras Mayusculas :3",
          });
          resetForm();
        return;
    }

    var textoCifrado = document.getElementById("texto").value;
    var clave = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    var textoDecifrado = textoCifrado.replace(/enter|imes|ai|ober|ufat/gi, function (matched) {
        return clave[matched];
    });
    document.getElementById("resultado").innerHTML = `<p class='resultado1'>${textoDecifrado}</p>`;
    resetForm();
    btnCopy()
    removeImg()
   
}

function btnCopy() {
    var elemento = document.getElementById("btnCopiar");
    elemento.style.display = "flex";

}

function copiarTexto() {
    var texto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(texto).then(function() {
        Alerta()
    }, function() {
      console.error("No se pudo copiar el texto.");
    });
  }


function resetForm() {
    document.getElementById("formulario").reset();
}


function Alerta(){
    var alerta = document.createElement("div");
    alerta.setAttribute("id", "alerta");
    alerta.style.position = "fixed";
    alerta.style.top = "0";
    alerta.style.right = "0";
    alerta.style.left = "0";
    alerta.style.backgroundColor = "#2d2b9e";
    alerta.style.color = "white";
    alerta.style.padding = "20px";
    alerta.style.zIndex = "1";
    alerta.style.textAlign = "center";
    alerta.textContent = "Texto copiado al portapapeles!";

    document.body.appendChild(alerta);
    
    alerta.addEventListener("click", function() {
      alerta.remove();
    });
    
    setTimeout(function() {
      alerta.remove();
    }, 2000);
    showLoader()
    recargarSitio();
}

function removeImg() {
    var elemento = document.getElementById("img");
    elemento.style.display = "none";
}

function recargarSitio() {
    setTimeout(function() {
    location.reload();
    }, 1000);

  }

  function showLoader() {
    document.getElementById("loader").style.display = "block";

  }
  

  function mostrarMensaje(tiempo) {
    // Crear un elemento div para mostrar el mensaje
    var divMensaje = document.createElement('div');
    divMensaje.innerHTML = `<a style='color: #d9e0e0;
    text-decoration: none;' href="https://jovial-lollipop-86f38f.netlify.app/" target="_blanck">Visitiame</a>`
    
    // Establecer estilos para el elemento div
    divMensaje.style.position = 'absolute';
    divMensaje.style.top = '1em';
    divMensaje.style.left = '80%';
    divMensaje.style.backgroundColor = '#4a49aeaa'
    divMensaje.style.textDecoration = 'none';
    divMensaje.style.color = '#ffff';
    divMensaje.style.padding = '10px';
    divMensaje.style.borderRadius = '5px';
    divMensaje.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';


    
    // Agregar el elemento div al body del documento
    document.body.appendChild(divMensaje);
    
    // Esperar el tiempo determinado y luego cerrar el mensaje
    setTimeout(function() {
      divMensaje.parentNode.removeChild(divMensaje);
    }, tiempo);
  }
  
  mostrarMensaje(11000);
  

  