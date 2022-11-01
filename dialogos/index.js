const boton = document.querySelector("#btn");
//console.log(boton);

boton.addEventListener("click", () => {
  //console.log("click");
  //alert("Se ha hecho click");
  //confirm("Estas de acuerdo") && console.log("ok");
  // confirm("Estas de acuerdo") ? console.log("OK") : console.log("NO");

  const respuesta = confirm("¿Seguro?");
  if (respuesta) {
    console.log("¿Está de acuerdo?");
  } else {
    console.log("¿No está de acuerdo?");
  }
});

const botonInfo = document.querySelector("#info");
boton.addEventListener("click", () => {
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre) {
    console.log(`Tu nombre es ${nombre}`);
  } else {
    console.log("No has introducido nada");
  }
});
