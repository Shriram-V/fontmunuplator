function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 140);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotResults);
}


function modeLoaded() {
    console.log("Model is loaded");
}

function gotResults(results) {
    if (results.length > 0) {
        console.log(results);
    }
}


function draw() {
    canvas.background('red');
}