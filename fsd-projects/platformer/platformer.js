$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(50, 610, 300, 15, "green");
createPlatform(400, 510, 100, 15, "blue");
createPlatform(600, 410, 100, 15, "blue");
createBadPlatform(800, 310, 100, 15, "blue");
createBadPlatform(1000, 210, 100, 15, "blue");
createBadPlatform(1200, 110, 100, 15, "blue");
createPlatform(400, 310, 100, 15, "red");
createPlatform(200, 210, 100, 15, "red");
createFakePlatform(100, 300, 100, 15, "red");
createPlatform(600, 210, 400, 15, "red");
createPlatform(1100, 210, 100, 15, "red");
createFakePlatform(800, 110, 100, 15, "blue");
createPlatform(1200, 410, 100, 15, "red");

    // TODO 3 - Create Collectables
createCollectable("diamond", 125, 260);
createCollectable("diamond", 825, 70);
createCollectable("diamond", 1225, 370);
    
    // TODO 4 - Create Cannons
createCannon("left", 400, 800);
createCannon("top", 1000, 800)
createCannon("right", 300, 800)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
