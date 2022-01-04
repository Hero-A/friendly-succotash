sound1 = "";
sound2 = "";

function preload(){
    sound1 = loadSound("music.mp3");
    sound2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500, 460);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 460);
}

function start(){
    sound1.play();
    sound2.play(); 
}