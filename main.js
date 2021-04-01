canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");


 nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];


  random_number = Math.floor(Math.random() * 4);
   console.log(random_number);
    rover_width = 100;
    rover_height = 90;
    
    background_image = nasa_mars_images_array[random_number];
     console.log("background_image = " + background_image); 

rover_image = "rover.png"; 

rover_x = 10;
 rover_y = 10;

 function add() {
     background_imgTag = new Image();
     background_imgTag.onload = uploadBackground;
     background_imgTag.src = background_image;

     car1_imgTag = new Image();
     car1_imgTag.onload = uploadcar1;
     car1_imgTag.src = car1_image;
 }
 function uploadBackground() {
     ctx.drawImage (background_imgTag, 0, 0, canvas.width, canvas.height);
 }

 function uploadcar1() {
     ctx.drawImage(car1_imgTage, car1_x, car1_y, car1_width, car1_height);
 };
 window.addEventListener("keydown", my_keydown);
 
 function my_keydown(e)
 {
     keyPressed = e.keyCode;
     console.log(keyPressed);
     if(keyPressed == '38')
     {
         car1_up(); 
         console.log("up");
     }
     if(keyPressed =='40')
     {
         car_1down();
         console.log("down");
     }
     if(keyPresed == '37')
     {
         car_1left()
         console.log("left");
     }
     if(keyPressed == '39')
     {
         car_1right();
         console.log("right");
     }
      }
      function up()
      {
          if(rover_y >=0)
          {
              rover_y -= 10;
              console.log("When up arrow is pressed= " + rover_x + " _ " + rover_y);
          uploadBackground();
          uploadrover();
          }
        }
function down()
{
    if(rover_y <=500)
    {
        rover_y += 10;
        console.log("When down arrow is pressed, x ="+ _x +"| y ="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x -= 10;
        console.log("When left arrow is pressed, x =" +rover_x + "| y =" +rover_y);
        uploadBackground()
        uploadrover()
    }
}
function right()
{
    if(rover_x <= 700)
    {
        rover_x += 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y =" + rover_y);
        uploadBackground()
        uploadrover()
    }
}
