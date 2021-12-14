function preload(){
redDot=loadImage("redDot.jpg")
}

function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(200,200)
video.hide()
poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on("pose",gotPoses)
}

function draw(){
image(video,0,0,300,300)
//image(redDot,dotX,dotY)
}

function modelLoaded(){
console.log("Model is initialized")
}

function gotPoses(results){
    //console.log(results)
    if(results.length>0){
        console.log("Left Eye X="+results[0].pose.leftEye.x)
        console.log("Right Eye X="+results[0].pose.rightEye.x)
    var leftEye = results[0].pose.leftEye.x
    var rightEye = results[0].pose.rightEye.x
    var distance = rightEye - leftEye
    console.log(distance/2)
    dotX=leftEye+distance/2
    dotY=results[0].pose.leftEye.y
}
}