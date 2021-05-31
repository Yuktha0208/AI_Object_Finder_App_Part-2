status="";

function setup(){
    canvas=createCanvas(350,300);
    canvas.position(510,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,350,300);
}

function start(){
    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects...";
    input_box= document.getElementById("Object_name").value;
}

function modelLoaded(){
    console.log("Your Model Is Loaded");
    status=true;
}