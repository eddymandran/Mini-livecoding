// mise en place de la scene
let scene = new THREE.Scene();

// mise en place de la camera
// 35 => fov = champ de vision de la camera
//  window.innerWidth / window.innerHeight => rapport hauteur / largeur de la camera
// 0.1 => Frustum de la caméra près du plan.
// 3000 => Plan lointain de la camera ( si trop loin ou trop pres de l'objet, le rendu s'arrete)
let camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  3000
);

// positionnement de la camera sur l'axe Z (profondeur)
camera.position.z = 80;
// -----------------------------------------------------------------------------------------------------------------------------------------
// creation du rendu
let rendu = new THREE.WebGLRenderer();

// definiton de la couleur du fond au format hexadecimal mais accepte d'autres formats. Remplacer le # par 0x
rendu.setClearColor(0x132644);

// definition de la taille du rendu (taille de la fenetre ici )
rendu.setSize(window.innerWidth, window.innerHeight);

//mise en place du rendu dans le document html ( penser a mettre en place le rendu avec la scene et la camera a la fin)
document.body.appendChild(rendu.domElement);

// ----------------- ---------------  creation de la forme   --------------------------------------------------------------------------------
// creation d'un groupe (de la forme) qui va regrouper l'element 3D et le materiel
let forme = new THREE.Group();

// creation de l'élement 3D
// torusKnotGeometry(radius, tube, tubularSegment, radialSegment)
// rayon du tore (espacement), rayon du tube, nombre de segments, nombre de segments le long du tube
let geometrie = new THREE.TorusKnotGeometry(10, 3, 100, 16);

// creation du materiel ( texture en quelque sorte)
let materiel = new THREE.MeshNormalMaterial({
  color: '0xffffff',
  transparent: false,
  opacity: 1,
  wireframe: true, // rendu filaire
  wireframeLinewidth: 2, // epaisseur du fil
});

// on ajoute a la forme l'élément 3D et le materiel
forme.add(new THREE.Mesh(geometrie, materiel));

// ajout de la forme  a la scene
scene.add(forme);

//----------- creation de l'animation -----------------------------------------------------------------------------------------------------------
let animer = function () {
  // appel a la fonction qui va animer notre animation
  requestAnimationFrame(animer);
  // rotation de la forme sur l'axe des X
  forme.rotation.x += 0.005;
  // rotation de la forme sur l'axe des Y
  forme.rotation.y += 0.005;
  // rendre l'animation
  rendu.render(scene, camera);
};
animer();

// ------------ rendu de la scene ------------------------------------------------------------------------------------------------------------------
// integration de la scene et de la camera dans le rendu
rendu.render(scene, camera);
