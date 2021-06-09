var camera, renderer;

function init(){
    var scene = new THREE.Scene();
    
    scene.physicallyCorrectLights = false;
    scene.fog = new THREE.FogExp2(0x333333,0.4);
    var sphere = getSphere(1);
    sphere.name = 'ball';
    var pointLight = getPointLight(2);

    pointLight.position.y = 3.5;
    pointLight.position.x = 0.0;
    pointLight.position.z = 0.0;

    sphere.position.y = 0;
    sphere.position.z = 0;
    sphere.position.x = 0;
      scene.add(sphere);

    scene.add(pointLight);

    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth/window.innerHeight,
        1,
        1000
    );
    camera.position.z = 0;
    camera.position.y = 3;
    camera.position.x = 2;
    camera.lookAt(new THREE.Vector3(0,0,0,0));
    renderer = new THREE.WebGLRenderer(
        {
        antialias: true
        }
    );

    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x333333);
    document.getElementById('webgl').appendChild(renderer.domElement);

    update(renderer, scene, camera);
    
    return scene;
}

function getBox(w,h,d){
    var geometry = new THREE.BoxGeometry(w,h,d);
    var material = new THREE.MeshStandardMaterial({
        color: 0xcccccc
    });

    var mesh = new THREE.Mesh(
        geometry,
        material
    );
        mesh.castShadow = true;
    return mesh;
}

function getSphere(r){
    var geometry = new THREE.SphereGeometry(r, 32, 32);
    var loader = new THREE.TextureLoader();

    var material = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        roughness: 0.9
    });

    material.map = loader.load('baseball.jpg');
    material.bumpMap = loader.load('baseball.jpg');
    material.bumpScale = 0.002;
    
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    
    return mesh;
}

function update(renderer, scene, camera){
    scene.getObjectByName('ball').rotation.y += 0.005;
    scene.getObjectByName('ball').rotation.x += 0.005;
    renderer.render(
        scene,
        camera
    );

    requestAnimationFrame(function(){
        update(renderer, scene, camera);
    });
}

function getPointLight(intensity){
    var light = new THREE.PointLight(0xffffff, intensity);
    light.castShadow = true;
    return light;
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}



var scene = init();