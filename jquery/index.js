// $(selector).accion()

// $(h1).hide()

// $(document).ready(() => {
//   $("h1").hide();
// });

$(() => {
  // selector:
  // id = "el-1"=> "#el-1"
  // class = "el-1"=> ".el-1"
  // $("#el-1").hide();

  $(".hide-btn").click(() => {
    console.log("Ocultando boton...");
    //$("h1").hide();
    $("h1").fadeOut();
  });

  $(".show-btn").click(() => {
    console.log("Mostrando boton...");
    //$("h1").show();
    $("h1").fadeIn();
  });

  $("li").dblclick(() => {
    $("h1").css({ color: "green" });
  });

  $(".new-element").click(() => {
    //$("ul").append("<li>New Element</li>");
    $("ul").prepend("<li>New Element</li>");
  });

  $("li").mouseenter((elem) => {
    console.log("El raton ha entrado (hover)");
    elem.target.style.color = "blue";
  });

  $("li").mouseleave((elem) => {
    console.log("El raton ha entrado (hover)");
    elem.target.style.color = "black";
  });
});
