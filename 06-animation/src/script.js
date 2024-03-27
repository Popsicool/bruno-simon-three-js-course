import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


//? Clock
const clock = new THREE.Clock()

//? time
// let time = Date.now()


gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
//? Animation
const tick = () => {
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

    // //? Clock
    // const elapseTime = clock.getElapsedTime()
    // window.requestAnimationFrame(tick)
    // // mesh.rotation.x += .01
    // mesh.position.y = Math.sin(elapseTime)
    // mesh.position.x = Math.cos(elapseTime)
    renderer.render(scene, camera)
}
tick()