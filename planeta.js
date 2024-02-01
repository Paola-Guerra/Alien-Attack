function moveOvni() {
  var ovni = document.querySelector(".ovni");
  var light = document.querySelector("#light");
  var cow = document.querySelector("#cow");

  // Animación inicial del ovni hacia una posición intermedia
  ovni.setAttribute("animation", {
    property: "position",
    to: "0.9 12 0.9",  // Posición intermedia
    dur: 5000,
    easing: "linear",
    loop: false,
  });

  setTimeout(function () {
    // Animación del ovni hacia la posición de la vaca
    ovni.setAttribute("animation", {
      property: "position",
      to: "0.9 9 0.9",  // Posición de la vaca
      dur: 5000,
      easing: "linear",
      loop: false,
    });

    setTimeout(function () {
      light.setAttribute("light", {
        type: "spot",
        target: "#cow",
        angle: 50,
        penumbra: 15,
        decay: -2,
      });
      light.setAttribute("visible", true);

      setTimeout(function () {
        // Obtener la posición actual del ovni y establecerla como la posición final de la vaca
        var ovniPosition = ovni.getAttribute("position");
        cow.setAttribute("animation", {
          property: "position",
          to: ovniPosition.x + " " + ovniPosition.y + " " + ovniPosition.z,
          dur: 5000,
          easing: "linear",
          loop: false,
        });

        // Después de que la vaca llega, se hace invisible
        setTimeout(function () {
          cow.setAttribute("visible", false);
          // Ocultar las luces al hacer invisible la vaca
          light.setAttribute("visible", false);
          reflectedLight.setAttribute("visible", false);

          // Nueva animación para que el ovni se vaya
          ovni.setAttribute("animation", {
            property: "position",
            to: "20 50 20",  // Ajusta la posición final según sea necesario
            dur: 5000,
            easing: "linear",
            loop: false,
          });
        }, 4000);
      }, 1000);
    }, 5000);
  }, 7000);
}

