img="";
status="";

function preload()
{
    img = loadImage('https://thumbs.dreamstime.com/b/simple-bedroom-interior-one-bed-creamy-tones-view-white-bedding-43515109.jpg');
}

function setup()
{
    canvas = createCanvas(600,450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
}

function draw()
{
    image(img, 0, 0, 600,500);
    fill("#FF0000");
    text('bed', 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}