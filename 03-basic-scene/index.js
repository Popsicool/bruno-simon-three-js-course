const canvas = document.querySelector(".webgl")

//? Create a scene
const scene = new THREE.Scene();
//? Craete a box geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
//? Create a material
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}
//? Add a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)

//? create a renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

//? resize the renderer
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


