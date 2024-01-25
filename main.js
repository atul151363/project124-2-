// Preload function
function preload() {
    // Preload code
  } 
  

let video;
let poseNet;
let poses = [];

function setup() {

  createCanvas(640, 480);
  
  // Hide the default webcam view
  video = createCapture(VIDEO);
  video.hide();
  
  // Initialize poseNet
  poseNet = ml5.poseNet(video, modelReady);

  // This function will be called when model is ready
  function modelReady() {
    console.log('Model Loaded!');
  }

  // Process frames
  poseNet.on('pose', gotPoses); 
}

// Store poses
function gotPoses(results) {
  poses = results;
} 

function draw() {
  image(video, 0, 0, width, height);

  // Check if poses available
  if (poses.length > 0) {
    let nose = poses[0].pose.keypoints[0]; 
    fill(0, 255, 0);
    ellipse(nose.position.x, nose.position.y, 20);
  }
}



  // Save image function
  function saveImage() {
  
    // Get canvas data URL
    let imageURL = canvas.toDataURL();
    
    // Code to save image
  }
  
  // Click handler
  document.getElementById('saveBtn').addEventListener('click', saveImage);
  