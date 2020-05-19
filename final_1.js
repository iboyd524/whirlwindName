let master_text = "";
let words = ["Smart", "Kind", "Amazing", "Bold", "Strong", "Confident"];
let input, button, greeting;

function setup() {

  var p5Canvas = createCanvas(600,400);
  canvas = p5Canvas.canvas;

  
   frameRate(5);
  
   input = createInput();
   input.position(20, 65);
   button = createButton('submit');
   button.position(input.x + input.width, 65);
   button.mousePressed(update_words);
  
   fill(255);
   greeting = createElement('h2', 'What is your name?');
   greeting.style('color', '#ff0000');
  
   greeting.position(20, 5);






  createCanvas(windowWidth, windowHeight);





}

function update_words(){
    const name = input.value();
    words.push(name);
    greeting.remove();
    input.remove();
    button.remove();

}

function draw() {
  background(0);

  console.log("sadfsad");
  fill(random(255), random(255), 10);
  textSize(30);
  translate(width/2, height/2);

  let ystep = 10;
  let lastx = 20;
  let lasty = 50;
  let y = 50;
  let border = 20;

  for (var x=border; x<=width-border; x+=10) {

    ystep = random(10)-10;
    y += ystep;
    line(x, y, lastx, lasty);
    lastx = x;
    lasty = y;

    text(master_text, 0,0);
    text(words[int(random(words.length-1))],x+50,y);
    text(words[int(random(words.length-1))],x,y+50);

    rotate(y);
  }


}

//add this function make the text be dynamic
function keyReleased() {
  if (keyCode==8) {
    if (master_text.length>0) {
       master_text = master_text.substring(0, master_text.length-1);
    }
  }
  else if (keyCode>=65 && keyCode<=90 || keyCode==32 || keyCode==54) {
    master_text += str(key);
  }else if(keyCode == ENTER || keyCode == RETURN){
    console.log("hi");
    master_text = master_text + " " + master_text;
  }
}

function mousePressed(){
     save('pix.jpg');
}
