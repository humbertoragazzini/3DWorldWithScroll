import * as THREE from "three";
import GUI from "lil-gui";
import piramidBuilder from "./3DShape/Piramid";
import piramidsData from "./data/piramidsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TextureLoader } from "three";
import { CubeTextureLoader } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as bootstrap from "bootstrap";
gsap.registerPlugin(ScrollTrigger);
// Dev config if is needed
const devConfig = {};

document.addEventListener("DOMContentLoaded", () => {
  // Dev tools
  const gui = new GUI();

  // Loaders
  const textureLoader = new TextureLoader();
  const cubeTextureLoader = new CubeTextureLoader();

  // Textures
  const worldMapTexture = textureLoader.load("textures/map/world.png");
  // worldMapTexture.encoding = THREE.sRGBEncoding;
  const environment = cubeTextureLoader.load([
    "textures/enviromentMaps/px.png",
    "textures/enviromentMaps/nx.png",
    "textures/enviromentMaps/py.png",
    "textures/enviromentMaps/ny.png",
    "textures/enviromentMaps/pz.png",
    "textures/enviromentMaps/nz.png",
  ]);

  // Canvas
  const canvas = document.querySelector("canvas.webgl");

  // Scene
  const scene = new THREE.Scene();
  scene.background = environment;
  scene.backgroundBlurriness = 0.5;
  scene.environment = environment;
  // Main group
  const mainGroup = new THREE.Group();

  // 3D objects

  // World
  const geom = new THREE.SphereGeometry(10, 50, 50);
  const mate = new THREE.MeshStandardMaterial({
    color: "#ffffFF",
    map: worldMapTexture,
    metalness: 0,
    roughness: 0,
  });
  const geomHotspots = new THREE.SphereGeometry(10.25, 50, 50);
  const geoHotspots = new THREE.MeshPhysicalMaterial({
    color: "#999999",
    opacity: 1,
    metalness: 0,
    roughness: 0,
    transmission: 1,
    thickness: 0,
  });
  const hotspotsSphere = new THREE.Mesh(geomHotspots, geoHotspots);
  const wolrd3DObject = new THREE.Mesh(geom, mate);
  // wolrd3DObject.add(hotspotsSphere);
  // const World = gui.addFolder("World");
  wolrd3DObject.position.z = -5;
  wolrd3DObject.position.x = 12;
  wolrd3DObject.rotation.x = 0.9;
  wolrd3DObject.rotation.y = -0.7;
  wolrd3DObject.rotation.z = 0;
  // World.add(wolrd3DObject.position, "x", -50, 50, 0.001);
  // World.add(wolrd3DObject.position, "y", -50, 50, 0.001);
  // World.add(wolrd3DObject.position, "z", -50, 50, 0.001);
  // World.add(wolrd3DObject.rotation, "x", -50, 50, 0.001);
  // World.add(wolrd3DObject.rotation, "y", -50, 50, 0.001);
  // World.add(wolrd3DObject.rotation, "z", -50, 50, 0.001);
  wolrd3DObject.castShadow = true;
  wolrd3DObject.receiveShadow = true;
  mainGroup.add(wolrd3DObject);

  // Hotspots atached to the world3D
  const geometryHotspot = new THREE.SphereGeometry(0.35, 20, 20);
  const hotspotPositions = [
    {
      name: "section1",
      position: { x: -1.423, y: 6.668, z: 7.481 },
      rotation: { x: -0.8, y: -0.1, z: 0.5 },
    },
    {
      name: "section2",
      position: { x: 5.768, y: 8.339, z: 0.2 },
      rotation: { x: 1.7, y: -0.67, z: -0.1 },
    },
    {
      name: "section3",
      position: { x: 3.952, y: -5.623, z: 7.61 },
      rotation: { x: 0.6, y: 0.4, z: 0 },
    },
    {
      name: "section4",
      position: { x: 9.597, y: 2.7, z: 1.2 },
      rotation: { x: -0.9, y: 1.2, z: 0 },
    },
    {
      name: "section5",
      position: { x: -6.398, y: -4.352, z: -6.423 },
      rotation: { x: -0.7, y: 0.7, z: 0 },
    },
    {
      name: "section6",
      position: { x: 6.168, y: 3.694, z: -7.039 },
      rotation: { x: 0.5, y: -0.7, z: 0 },
    },
  ];

  const all3DObjectsHotspot = [];

  hotspotPositions.forEach((hotspot) => {
    // clone.querySelector("#modal_opener").addEventListener("pointerdown", () => {
    //   mymodal.show();
    // });

    const templateModal = document.querySelector("#modal-template");
    const cloneModal = templateModal.content.cloneNode(true);
    cloneModal
      .querySelector("#close-header")
      .addEventListener("pointerdown", () => {
        mymodal.hide();
      });
    cloneModal
      .querySelector("#close-footer")
      .addEventListener("pointerdown", () => {
        mymodal.hide();
      });
    cloneModal.querySelector(".modal").id = hotspot.name;
    cloneModal.querySelector(
      ".modal-body"
    ).innerHTML = `Content of modal: ${hotspot.name}`;
    document.getElementById("the-body").append(cloneModal);

    const mymodal = new bootstrap.Modal(
      document.getElementById(hotspot.name),
      {}
    );
    const materialHotspot = new THREE.MeshStandardMaterial({
      color: "#333399",
      metalness: 0.5,
      roughness: 0.5,
    });
    const newHotspot = new THREE.Mesh(geometryHotspot, materialHotspot);
    newHotspot.position.x = hotspot.position.x;
    newHotspot.position.y = hotspot.position.y;
    newHotspot.position.z = hotspot.position.z;
    newHotspot.rotation.x = hotspot.rotation.x;
    newHotspot.rotation.y = hotspot.rotation.y;
    newHotspot.rotation.z = hotspot.rotation.z;
    newHotspot.scale.z = 0.2;
    // const newGroup = gui.addFolder(hotspot.name);
    // newGroup.add(newHotspot.position, "x", -50, 50, 0.001);
    // newGroup.add(newHotspot.position, "y", -50, 50, 0.001);
    // newGroup.add(newHotspot.position, "z", -50, 50, 0.001);
    // newGroup.add(newHotspot.rotation, "x", -50, 50, 0.001);
    // newGroup.add(newHotspot.rotation, "y", -50, 50, 0.001);
    // newGroup.add(newHotspot.rotation, "z", -50, 50, 0.001);
    // newGroup.close();
    // gui.add(newGroup);

    newHotspot.userData.modal = mymodal;
    newHotspot.userData.name = hotspot.name;
    all3DObjectsHotspot.push(newHotspot);
    wolrd3DObject.add(newHotspot);
  });

  // Light
  const ambientLingth = new THREE.AmbientLight("#ffffff", 0.05);
  mainGroup.add(ambientLingth);

  // Directional Light
  const sunDirectionalLigth = new THREE.DirectionalLight("#ffffff", 10);
  sunDirectionalLigth.lookAt(wolrd3DObject);
  sunDirectionalLigth.position.x = -30;
  sunDirectionalLigth.position.y = 5;
  sunDirectionalLigth.position.z = 10;
  // const sunDirectionalLigthFolder = gui.addFolder("Sun");
  // const positionSun = sunDirectionalLigthFolder.addFolder("Position");
  // const rotationSun = sunDirectionalLigthFolder.addFolder("Rotation");
  // positionSun.add(sunDirectionalLigth.position, "x", -100, 100, 0.001);
  // positionSun.add(sunDirectionalLigth.position, "y", -100, 100, 0.001);
  // positionSun.add(sunDirectionalLigth.position, "z", -100, 100, 0.001);
  // rotationSun.add(sunDirectionalLigth.rotation, "x", -Math.PI, Math.PI, 0.001);
  // rotationSun.add(sunDirectionalLigth.rotation, "y", -Math.PI, Math.PI, 0.001);
  // rotationSun.add(sunDirectionalLigth.rotation, "z", -Math.PI, Math.PI, 0.001);
  mainGroup.add(sunDirectionalLigth);

  // We get sizes for ratio and vp of the renderer
  const sizes = {
    width: document.getElementById("canvas-container").getClientRects()[0]
      .width,
    height: document.getElementById("canvas-container").getClientRects()[0]
      .height,
  };

  // We capture resize event for camera and ratios
  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = document
      .getElementById("canvas-container")
      .getClientRects()[0].width;
    sizes.height = document
      .getElementById("canvas-container")
      .getClientRects()[0].height;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Base camera
  const camera = new THREE.PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    0.001,
    1000
  );
  camera.position.z = 20;
  mainGroup.add(camera);

  // scroll
  function getScrollPercent() {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  }

  // Camera animation
  // var masterPosition = 20;
  // window.addEventListener("scroll", (e) => {
  //   const position = -40 * (getScrollPercent() / 100) + masterPosition;
  //   camera.position.y = position;
  // });

  // Render Object
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  gsap.fromTo(
    mainGroup.rotation,
    { x: 0 },
    { x: Math.PI * 2, duration: 200, repeat: -1, yoyo: true }
  );
  gsap.fromTo(
    mainGroup.rotation,
    { y: 0 },
    { y: Math.PI * 2, duration: 100, repeat: -1, yoyo: true }
  );
  gsap.fromTo(
    mainGroup.rotation,
    { z: 0 },
    { z: Math.PI * 2, duration: 300, repeat: -1, yoyo: true }
  );

  scene.add(mainGroup);

  // Main clock
  const clock = new THREE.Clock();

  // var loop = setInterval(function () {
  //   // change 12 to alter damping higher is slower
  //   cacheX = cacheX + parseInt(((parseInt(mouseX) - cacheX) / 20).toFixed(4));
  //   cacheY = cacheY + parseInt(((mouseY - cacheY) / 20).toFixed(4));
  //   offsetX = cacheX / window.innerWidth - 0.5;
  //   offsetY = cacheY / window.innerHeight - 0.5;
  // }, 10);

  // We execute the animation on the mouse move event
  // window.addEventListener("mousemove", (e) => {
  //   widthScreen = e.view.window.innerWidth;
  //   heightScreen = e.view.window.innerHeight;
  //   (mouseX = e.pageX), (mouseY = e.screenY);
  // });

  // Triggers
  // wolrd3DObject.position.z = -5;
  // wolrd3DObject.position.x = 12;
  const animation1 = new gsap.timeline({
    scrollTrigger: {
      trigger: "#the-body",
      pin: false,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 2,
      // markers: true,
      duration: 100,
      onUpdate: () => {
        console.log("animationtime", animation1.time());
      },
      ease: "none",
    },
  });

  const getAllSectionHeight = () => {
    const section1H = document
      .getElementsByClassName("section1")[0]
      .getClientRects()[0].height;
    const section2H = document
      .getElementsByClassName("section2")[0]
      .getClientRects()[0].height;
    const section3H = document
      .getElementsByClassName("section3")[0]
      .getClientRects()[0].height;
    const section4H = document
      .getElementsByClassName("section4")[0]
      .getClientRects()[0].height;
    const section5H = document
      .getElementsByClassName("section5")[0]
      .getClientRects()[0].height;
    const section6H = document
      .getElementsByClassName("section6")[0]
      .getClientRects()[0].height;
    return [section1H, section2H, section3H, section4H, section5H, section6H];
  };

  const totalHeightAnimation = document
    .getElementById("the-body")
    .getClientRects()[0].height;
  const sectionsHeights = getAllSectionHeight();
  let totalTime = 0;
  let lightz;
  let lightx;
  let lighty;
  console.log(totalHeightAnimation);
  const rotation = [
    {
      x: 0.9,
      y: -1,
      z: 0,
    },
    {
      x: 0.9,
      y: -1,
      z: 0,
    },
    {
      x: 0.5,
      y: 1.5,
      z: -1.1,
    },
    {
      x: -0.4,
      y: -0.1,
      z: 0.4,
    },
    {
      x: -0.4,
      y: -0.1,
      z: 0.4,
    },
    {
      x: -0.4,
      y: -0.1,
      z: 0.4,
    },
  ];
  sectionsHeights.forEach((value, i) => {
    let positionX = 0;
    switch (i) {
      case 1:
        positionX = -12;
        lightz = -20.409;
        lightx = 100;
        lighty = 68.589;
        break;
      case 2:
        positionX = 12;
        lightz = 10;
        lightx = -30;
        lighty = 5;
        break;
      case 3:
        positionX = -12;
        lightz = -20.409;
        lightx = 100;
        lighty = 68.589;
        break;
      case 4:
        positionX = 12;
        lightz = 10;
        lightx = -30;
        lighty = 5;
        break;
      case 5:
        positionX = -12;
        lightz = -20.409;
        lightx = 100;
        lighty = 68.589;
        break;

      default:
        break;
    }
    const timeDelta = 100 / totalHeightAnimation;
    const thisValueTime = timeDelta * value;
    console.log("height", value);
    console.log("timeDelta", timeDelta);
    console.log("thistimeValue", thisValueTime);
    console.log("totalHeightAnimation", totalHeightAnimation);
    console.log("totalTime", totalTime);
    if (i === 0) {
      ////////////////////////////////////// first animation do nothing ///////////////////////////////////////////////////
      animation1.to(
        wolrd3DObject.position,
        { x: 12, duration: thisValueTime, ease: "none" },
        0
      );
      animation1.to(
        wolrd3DObject.rotation,
        { y: Math.PI, duration: thisValueTime, ease: "none" },
        0
      );
      animation1.to(
        wolrd3DObject.position,
        { z: -5, duration: thisValueTime, ease: "none" },
        0
      );
      totalTime += thisValueTime;
    } else {
      ////////////////////////////////////// next animations move ///////////////////////////////////////////////////
      animation1.to(
        sunDirectionalLigth.position,
        {
          z: lightz,
          x: lightx,
          y: lighty,
          duration: thisValueTime / 1.2,
          ease: "none",
        },
        totalTime
      );
      animation1.to(
        wolrd3DObject.position,
        {
          z: -20,
          duration: thisValueTime / 4,
          ease: "none",
        },
        totalTime
      );
      animation1.to(
        wolrd3DObject.position,
        {
          y: -10,
          duration: thisValueTime / 2,
          ease: "none",
        },
        totalTime
      );
      animation1.to(
        wolrd3DObject.position,
        {
          x: positionX,
          duration: thisValueTime / 2,
          ease: "none",
        },
        totalTime
      );
      animation1.to(
        wolrd3DObject.rotation,
        {
          x: rotation[i].x,
          y: rotation[i].y,
          z: rotation[i].z,
          duration: thisValueTime / 2,
          ease: "none",
        },
        totalTime
      );
      animation1.to(
        wolrd3DObject.position,
        {
          y: 5,
          duration: thisValueTime / 2,
          ease: "none",
        },
        totalTime + thisValueTime / 2
      );
      animation1.to(
        wolrd3DObject.position,
        { z: -5, duration: thisValueTime / 3, ease: "none" },
        totalTime + thisValueTime / 3
      );
      totalTime += thisValueTime;
    }
  });

  // Raycaster
  const raycaster = new THREE.Raycaster();

  //
  let prevObjectHover;

  // Cursor
  const mouse = new THREE.Vector2();

  window.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / sizes.width - 0.5) * 2;
    mouse.y = -(e.clientY / sizes.height - 0.5) * 2;
  });

  // click event
  window.addEventListener("click", () => {
    console.log(prevObjectHover.userData.modal.show());
  });

  // const controls = new OrbitControls(camera, canvas);

  const tick = () => {
    // clock and update
    const elapsedTime = clock.getElapsedTime();

    // Cast ray
    raycaster.setFromCamera(mouse, camera);

    if (raycaster.intersectObjects(all3DObjectsHotspot)[0]) {
      // console.log(raycaster.intersectObjects(all3DObjectsHotspot)[0]);
      prevObjectHover =
        raycaster.intersectObjects(all3DObjectsHotspot)[0].object;

      raycaster
        .intersectObjects(all3DObjectsHotspot)[0]
        .object.material.color.set("#FF55ff");

      raycaster.intersectObjects(all3DObjectsHotspot)[0].object.scale.x = 1.5;

      raycaster.intersectObjects(all3DObjectsHotspot)[0].object.scale.y = 1.5;
      document.getElementById("the-body").style.cursor = "pointer";
    } else {
      if (prevObjectHover) {
        console.log(prevObjectHover);
        document.getElementById("the-body").style.cursor = "default";
        prevObjectHover.material.color.set("#333399");
        prevObjectHover.scale.x = 1;
        prevObjectHover.scale.y = 1;
        prevObjectHover = null;
      }
    }

    // controls.update();
    // Main world rotation
    // wolrd3DObject.rotation.y = elapsedTime / 10;
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
});
