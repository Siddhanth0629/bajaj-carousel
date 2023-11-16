// Set up Three.js scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.lookAt(0, 0, 0);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
const container = document.querySelector(".canvas-container");
container.appendChild(renderer.domElement);

// Add lighting (optional)
const light = new THREE.PointLight(0xffffff);
light.position.set(5, 5, 5);
scene.add(light);

//Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Color can be adjusted (hex format)
scene.add(ambientLight);

//Directional Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Color and intensity
directionalLight.position.set(1, 1, 1); // Set the light's direction
scene.add(directionalLight);

let model;
// let frontwheel;
// let backwheel;
// let engine;


const adjustModelScale = () => {
    console.log("resize");
    const width = window.innerWidth;
    console.log(width);
    if (width <= 768) {
      console.log("inside");
      model.scale.set(1, 1, 1);
    } else {
      model.scale.set(4, 4, 4);
    }
  };


  // GLTF Loader
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load("assets/bajaj.glb", (gltf) => {
  model = gltf.scene;
  console.log(model);
//   frontwheel = model.children[20];
//   backwheel = model.children[21];
//   engine = model.children[17];
//   backwheel.scale.set(1,1,1)
  adjustModelScale();
  model.position.y = -3.2;
  model.rotation.y = -1.55;
  model.scale.set(3.5, 3.5, 3.5);
  scene.add(model);
});

function onWindowResize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  }


  // Render the scene
function animate() {
    requestAnimationFrame(animate);
    // frontwheel.rotation.x += 0.09;
    // backwheel.rotation.x += 0.09;
    // engine.rotation.x += -.09;
    renderer.render(scene, camera);
  }
  
  animate();