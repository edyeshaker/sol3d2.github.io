console.log("Iniciando el script...");

// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;  // Posicionar la cámara
console.log("Cámara creada y posicionada.");

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
console.log("Renderizador creado y añadido al DOM.");

// Cargar la textura
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('descarga (10).jpg', function(texture) {
    console.log("Textura cargada.");

    // Crear la geometría y el material con la textura
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    console.log("Esfera creada y añadida a la escena.");

    // Función de animación
    function animate() {
        requestAnimationFrame(animate);

        // Rotar la esfera
        sphere.rotation.y += 0.01;

        // Renderizar la escena
        renderer.render(scene, camera);
    }

    // Iniciar la animación
    animate();
    console.log("Animación iniciada.");
}, undefined, function(err) {
    console.error('Error al cargar la textura', err);
});
