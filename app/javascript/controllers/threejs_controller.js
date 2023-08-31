import { Controller } from "@hotwired/stimulus";
import * as THREE from "three";
// import { OrbitControls } from "three/examples";

// Connects to data-controller="threejs"
export default class extends Controller {
  connect() {
    const below_navbar = document.getElementById("below_navbar");
    const main_space = document.getElementById("main_space");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, main_space.offsetWidth / main_space.offsetHeight, 0.1, 1000 );

    console.log("Document", document)

    console.log("Document Body", document.body)

    console.log("below_navbar: ", below_navbar)
    console.log("main_space: ", main_space)

    const renderer = new THREE.WebGLRenderer();
    console.log("width", main_space.offsetWidth)
    console.log("height", main_space.offsetHeight)
    renderer.setSize( main_space.offsetWidth, main_space.offsetHeight );
    const canvasElement = renderer.domElement;
    // canvasElement.id = 'your-id';
    canvasElement.classList.add('relative', 'flex-grow');
    main_space.classList.add("hidden")
    below_navbar.appendChild( canvasElement );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function animate() {
      
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
      requestAnimationFrame( animate );
    }
    animate();
  }
}