
// import * as THREE from 'three';

let app = {
	el: document.getElementById("app"),
	scene: null,
	renderer: null,
	camera: null
}

const init = () => {
	app.renderer = new THREE.WebGLRenderer();
	console.log(app.renderer);
	app.renderer.setSize ( window.innerWidth, window.innerHeight);
	app.el.appendChild (app.renderer.domElement);

	app.scene = new THREE.Scene();

	

	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	 app.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

	const geometryWF = new THREE.SphereGeometry(100, 100, 100);
	const materialWF = new THREE.MeshBasicMaterial({ color: 'purple', wireframe: true });
	const mywireframe = new THREE.Mesh(geometryWF, materialWF);
	app.scene.add(mywireframe);


};

const render = () => {
	requestAnimationFrame(render);
	app.renderer.render(app.scene, app.camera);
};

init();
render();

