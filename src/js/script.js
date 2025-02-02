//TODO.setFromSphericalCoords ( radius : Float, phi : Float, theta : Float ) : this
//Sets this vector from the spherical coordinates radius, phi and theta. To position object in the sphere

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

////////////////////////////////// width height helper ///////////////////////////////////
const visibleHeighAtZDepth = (depth, camera) => {
  // compensate for cameras not positioned at z=0
  const cameraOffset = camera.position.z;
  if (depth < cameraOffset) depth -= cameraOffset;
  else depth += cameraOffset;

  // vertical fov in radians
  const vFOV = (camera.fov * Math.PI) / 180;

  // Math.abs to ensure the result is always positive
  return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
};

const visibleWidthAtZDepth = (depth, camera) => {
  const height = visibleHeighAtZDepth(depth, camera);
  return height * camera.aspect;
};

document.addEventListener("DOMContentLoaded", () => {
  // Dev tools
  const gui = new GUI();

  // Loaders
  const textureLoader = new TextureLoader();
  const cubeTextureLoader = new CubeTextureLoader();
  //hotspot

  const hotspotMapTexture = textureLoader.load("textures/hotspot/hotspot5.png");
  hotspotMapTexture.colorSpace = THREE.SRGBColorSpace;

  // Textures
  // const worldMapTexture = textureLoader.load("textures/map/world.png");
  const worldMapTexture = textureLoader.load(
    "textures/map/8081_earthmap10k.jpg"
  );
  worldMapTexture.colorSpace = THREE.SRGBColorSpace;
  worldMapTexture.offset.x = 0.255;
  worldMapTexture.wrapS = 5;
  const roughnessworldMapTexture = textureLoader.load(
    "textures/map/landmask4K.png"
  );

  roughnessworldMapTexture.offset.x = 0.255;
  roughnessworldMapTexture.wrapS = 5;
  console.log("worldmap", worldMapTexture);
  const bumpMapworldMapTexture = textureLoader.load(
    "textures/map/earth_bumpmap.jpg"
  );
  bumpMapworldMapTexture.colorSpace = THREE.SRGBColorSpace;
  bumpMapworldMapTexture.offset.x = 0.25;
  bumpMapworldMapTexture.wrapS = 5;
  const cloudsdMapTexture = textureLoader.load("textures/map/clouds.jp2");
  cloudsdMapTexture.colorSpace = THREE.SRGBColorSpace;
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

  // 5
  const geom = new THREE.SphereGeometry(10, 150, 150);
  // const geomCloud = new THREE.SphereGeometry(10.2, 150, 150);
  const mate = new THREE.MeshStandardMaterial({
    // color: "#ffffFF",
    map: worldMapTexture,
    roughnessMap: roughnessworldMapTexture,
    metalnessMap: roughnessworldMapTexture,
    roughness: 0.6,
    // opacity: 0.5,
    // transparent: true,
    // wireframe: true,
    metalness: 0.15,
    bumpMap: bumpMapworldMapTexture,
    bumpScale: 0.2,
    envMapIntensity: 0,
  });

  // const cloudMate = new THREE.MeshStandardMaterial({
  //   alphaMap: cloudsdMapTexture,
  //   // color: "#000000",
  //   transparent: true,
  // });
  // const cloudMesh = new THREE.Mesh(geomCloud, cloudMate);
  const wolrd3DObject = new THREE.Mesh(geom, mate);
  wolrd3DObject.scale.x = 1.5;
  wolrd3DObject.scale.y = 1.5;
  wolrd3DObject.scale.z = 1.5;
  // wolrd3DObject.add(hotspotsSphere);
  const World = gui.addFolder("World");
  wolrd3DObject.position.z = -5;
  wolrd3DObject.position.x = 12;
  wolrd3DObject.updateMatrixWorld();
  wolrd3DObject.rotation.x = 0;
  wolrd3DObject.rotation.y = 0;
  wolrd3DObject.rotation.z = 0;
  // World.add(wolrd3DObject.position, "x", -50, 50, 0.001);
  // World.add(wolrd3DObject.position, "y", -50, 50, 0.001);
  // World.add(wolrd3DObject.position, "z", -50, 50, 0.001);
  World.add(wolrd3DObject.rotation, "x", -50, 50, 0.001);
  World.add(wolrd3DObject.rotation, "y", -50, 50, 0.001);
  World.add(wolrd3DObject.rotation, "z", -50, 50, 0.001);
  wolrd3DObject.castShadow = true;
  wolrd3DObject.receiveShadow = true;
  mainGroup.add(wolrd3DObject);

  // Hotspots atached to the world3D
  // const geometryHotspot = new THREE.PlaneGeometry(0.5, 0.5);
  const geometryHotspot = new THREE.IcosahedronGeometry(0.25, 0);
  const hotspotPositions = [
    {
      name: "section1",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      position: {
        lat: 48.864716,
        lon: 2.349014,
      },
      rotation: { x: -0.8, y: -0.1, z: 0.5 },
    },
    {
      name: "section2",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      position: {
        lat: 162.3007,
        lon: -103.188,
      },
      rotation: { x: 1.7, y: -0.67, z: -0.1 },
    },
    {
      name: "section3",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      position: {
        lat: 42.8308,
        lon: 82.6541,
      },
      rotation: { x: 0.6, y: 0.4, z: 0 },
    },
    {
      name: "section4",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      position: {
        lat: -32.121,
        lon: 22.8864,
      },
      rotation: { x: -0.9, y: 1.2, z: 0 },
    },
    {
      name: "section5",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      position: {
        lat: -156.2858,
        lon: 51.6804,
      },
      rotation: { x: -0.7, y: 0.7, z: 0 },
    },
    {
      name: "section6",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      position: {
        lat: 16.2819,
        lon: 126.9022,
      },
      rotation: { x: 0.5, y: -0.7, z: 0 },
    },
  ];

  const all3DObjectsHotspot = [];

  const adjustPosition = (hotspot, wolrd3DObject, newHotspot) => {
    var hotspotSpherical = {
      lat: THREE.MathUtils.degToRad(90 - hotspot.position.lat),
      lon: THREE.MathUtils.degToRad(hotspot.position.lon),
    };

    var radius = 10.25;

    var newHotspotVector = new THREE.Vector3().setFromSphericalCoords(
      radius,
      hotspotSpherical.lat,
      hotspotSpherical.lon
    );
    // check we did it correctly
    var spherical = new THREE.Spherical().setFromVector3(newHotspotVector);

    newHotspot.position.setFromSphericalCoords(
      spherical.radius,
      spherical.phi,
      spherical.theta
    );

    var lookDirection = new THREE.Vector3();
    var target = new THREE.Vector3();
    const object3d = new THREE.Object3D();
    lookDirection
      .subVectors(newHotspot.position, new THREE.Vector3(0, 0, 0))
      .normalize();
    target.copy(wolrd3DObject.position).add(lookDirection);

    newHotspot.lookAt(target);

    gsap.to(newHotspot.rotation, {
      z: 3.14 * 2,
      repeat: -1,
      duration: 15,
    });
  };

  // Light
  const ambientLingth = new THREE.AmbientLight("#ffffff", 5);
  // mainGroup.add(ambientLingth);

  // We get sizes for ratio and vp of the renderer
  const sizes = {
    width: document.getElementById("canvas-container").getClientRects()[0]
      .width,
    height: document.getElementById("canvas-container").getClientRects()[0]
      .height,
  };

  // Directional Light
  const sunDirectionalLigth = new THREE.DirectionalLight("#ffffff", 3);
  sunDirectionalLigth.shadow.camera.left = -10;
  sunDirectionalLigth.shadow.camera.right = 10;
  sunDirectionalLigth.shadow.camera.top = 10;
  sunDirectionalLigth.shadow.camera.bottom = -10;
  sunDirectionalLigth.shadow.mapSize.width = sizes.height;
  sunDirectionalLigth.shadow.mapSize.height = sizes.width;
  sunDirectionalLigth.shadow.camera.near = 1;
  sunDirectionalLigth.shadow.camera.far = 2000;
  sunDirectionalLigth.shadow.camera.fov = 75;
  sunDirectionalLigth.lookAt(wolrd3DObject);
  sunDirectionalLigth.position.x = -30;
  sunDirectionalLigth.position.y = 5;
  sunDirectionalLigth.position.z = 10;
  sunDirectionalLigth.castShadow = true;

  // mainGroup.add(new THREE.CameraHelper(sunDirectionalLigth.shadow.camera));
  // const sunDirectionalLigthFolder = gui.addFolder("Sun");
  // const positionSun = sunDirectionalLigthFolder.addFolder("Position");
  // const rotationSun = sunDirectionalLigthFolder.addFolder("Rotation");
  // positionSun.add(sunDirectionalLigth.position, "x", -100, 100, 0.001);
  // positionSun.add(sunDirectionalLigth.position, "y", -100, 100, 0.001);
  // positionSun.add(sunDirectionalLigth.position, "z", -100, 100, 0.001);
  // rotationSun.add(sunDirectionalLigth.rotation, "x", -Math.PI, Math.PI, 0.001);
  // rotationSun.add(sunDirectionalLigth.rotation, "y", -Math.PI, Math.PI, 0.001);
  // rotationSun.add(sunDirectionalLigth.rotation, "z", -Math.PI, Math.PI, 0.001);
  // mainGroup.add(sunDirectionalLigth.shadow.camera);
  mainGroup.add(sunDirectionalLigth);

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
    scene.environment,
    { offset: 0, rotation: 0 },
    {
      offset: 1,
      rotation: Math.PI * 2,
      duration: 2,
      repeat: -1,
      yoyo: true,
    }
  );
  // gsap.fromTo(
  //   mainGroup.rotation,
  //   { y: 0 },
  //   { y: Math.PI * 2, duration: 100, repeat: -1, yoyo: true }
  // );
  // gsap.fromTo(
  //   mainGroup.rotation,
  //   { z: 0 },
  //   { z: Math.PI * 2, duration: 300, repeat: -1, yoyo: true }
  // );

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
        // console.log("animationtime", animation1.time());

        wolrd3DObject.updateMatrixWorld();
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
  // console.log(totalHeightAnimation);
  const rotation = [
    {
      x: 1,
      y: -6.8,
      z: 0.8,
    },
    {
      x: 0.1,
      y: -0.5,
      z: -0.1,
    },
    {
      x: -0.6,
      y: -2.5,
      z: -1.2,
    },
    {
      x: -0.5,
      y: 0.2,
      z: 0.9,
    },
    {
      x: 0.3,
      y: 1.2,
      z: -0.8,
    },
    {
      x: 0.5,
      y: -1.3,
      z: 0,
    },
  ];
  sectionsHeights.forEach((value, i) => {
    let positionX = 0;
    switch (i) {
      case 1:
        positionX = -visibleWidthAtZDepth(20, camera) / 2 + 15;
        lightz = -20.409;
        lightx = 100;
        lighty = 68.589;
        break;
      case 2:
        positionX = visibleWidthAtZDepth(20, camera) / 2 - 15;
        lightz = 10;
        lightx = -30;
        lighty = 5;
        break;
      case 3:
        positionX = -visibleWidthAtZDepth(20, camera) / 2 + 15;
        lightz = -20.409;
        lightx = 100;
        lighty = 68.589;
        break;
      case 4:
        positionX = visibleWidthAtZDepth(20, camera) / 2 - 15;
        lightz = 10;
        lightx = -30;
        lighty = 5;
        break;
      case 5:
        positionX = -visibleWidthAtZDepth(20, camera) / 2 + 15;
        lightz = -20.409;
        lightx = 100;
        lighty = 68.589;
        break;

      default:
        break;
    }
    const timeDelta = 100 / totalHeightAnimation;
    const thisValueTime = timeDelta * value;
    // console.log("height", value);
    // console.log("timeDelta", timeDelta);
    // console.log("thistimeValue", thisValueTime);
    // console.log("totalHeightAnimation", totalHeightAnimation);
    // console.log("totalTime", totalTime);
    if (i === 0) {
      ////////////////////////////////////// first animation do nothing ///////////////////////////////////////////////////
      animation1.to(
        wolrd3DObject.position,
        {
          x: visibleWidthAtZDepth(20, camera) / 2 - 15,
          duration: thisValueTime,
          ease: "none",
        },
        0
      );
      animation1.to(
        wolrd3DObject.rotation,
        {
          x: rotation[i].x,
          y: rotation[i].y,
          z: rotation[i].z,
          duration: thisValueTime,
          ease: "none",
        },
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
          // z: lightz,
          x: lightx,
          // y: lighty,
          duration: thisValueTime / 1.2,
          ease: "none",
        },
        totalTime
      );
      animation1.to(
        wolrd3DObject.position,
        {
          z: -30,
          duration: thisValueTime / 4,
          ease: "none",
        },
        totalTime
      );
      animation1.to(
        wolrd3DObject.position,
        {
          y: -visibleWidthAtZDepth(20, camera) / 2 + 10.25,
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
    if (prevObjectHover.userData) {
      console.log(prevObjectHover.userData.modal._element);
      gsap.fromTo(
        prevObjectHover.userData.modal._element,
        {
          backdropFilter: "blur(0px)",
          zIndex: 0,
        },
        {
          backdropFilter: "blur(10px)",
          zIndex: 9999,
          duration: 1,
        }
      );
      prevObjectHover.userData.modal.show();
    }
  });

  // const controls = new OrbitControls(camera, canvas);
  // console.log("Position for zDepth Height: ", visibleHeighAtZDepth(20, camera));
  // console.log("Position for zDepth Width: ", visibleWidthAtZDepth(20, camera));
  hotspotPositions.forEach((hotspot) => {
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
    cloneModal.querySelector(".modal-body").innerHTML = `${hotspot.content}`;
    document.getElementById("the-body").append(cloneModal);

    const mymodal = new bootstrap.Modal(
      document.getElementById(hotspot.name),
      {}
    );
    const materialHotspot = new THREE.MeshBasicMaterial({
      color: "#aaa",
      // map: hotspotMapTexture,
      side: THREE.DoubleSide,
      transparent: true,
      envMapIntensity: 1,
      roughness: 0,
      // alphaTest: 0.75,
    });
    // const materialHotspot = new THREE.MeshPhysicalMaterial({
    //   color: "#fff",
    //   // map: hotspotMapTexture,
    //   // side: THREE.DoubleSide,
    //   // transparent: true,
    //   envMapIntensity: 0,
    //   roughness: 1,
    //   // opacity: 0.5,
    //   // thickness: 0.15,
    //   reflectivity: 0.8,
    //   transmission: 0.1,
    //   ior: 1,
    //   // alphaTest: 0.75,
    // });
    const pointerLight = new THREE.PointLight("#fff", 0);
    const newHotspot = new THREE.Mesh(geometryHotspot, materialHotspot);
    newHotspot.add(pointerLight);
    newHotspot.castShadow = true;
    // newHotspot.receiveShadow = true;
    // newHotspot.scale.z = 0.75;
    wolrd3DObject.updateMatrixWorld({ force: true });
    wolrd3DObject.updateWorldMatrix(true, true);

    const newGroup = gui.addFolder(hotspot.name).close();
    newHotspot.rotation.x = -Math.PI * 2;
    const hotspotGuiObj = {
      position: {
        lat: 0,
        lon: 0,
      },
    };
    newGroup
      .add(hotspotGuiObj.position, "lat")
      .min(-180)
      .max(180)
      .step(0.0001)
      .onChange((value) => {
        adjustPosition(hotspotGuiObj, wolrd3DObject, newHotspot);
      });
    newGroup
      .add(hotspotGuiObj.position, "lon")
      .min(-180)
      .max(180)
      .step(0.0001)
      .onChange((value) => {
        adjustPosition(hotspotGuiObj, wolrd3DObject, newHotspot);
      });

    newHotspot.userData.modal = mymodal;
    newHotspot.userData.name = hotspot.name;
    all3DObjectsHotspot.push(newHotspot);
    wolrd3DObject.add(newHotspot);

    adjustPosition(hotspot, wolrd3DObject, newHotspot);
  });

  const tick = () => {
    // clock and update
    const elapsedTime = clock.getElapsedTime();
    sunDirectionalLigth.target = wolrd3DObject;
    sunDirectionalLigth.lookAt(wolrd3DObject.position);
    // Cast ray
    raycaster.setFromCamera(mouse, camera);

    if (raycaster.intersectObjects(all3DObjectsHotspot)[0]) {
      // console.log(raycaster.intersectObjects(all3DObjectsHotspot)[0]);
      prevObjectHover =
        raycaster.intersectObjects(all3DObjectsHotspot)[0].object;

      if (
        !(raycaster.intersectObjects(all3DObjectsHotspot)[0].object.scale.x > 1)
      ) {
        gsap.to(
          raycaster.intersectObjects(all3DObjectsHotspot)[0].object.children[0],
          { intensity: 5, ease: "elastic.out(1,0.3)", duration: 1 }
        );
        gsap.to(
          raycaster.intersectObjects(all3DObjectsHotspot)[0].object.scale,
          { x: 1.25, y: 1.25, z: 1.25, ease: "elastic.out(1,0.3)", duration: 1 }
        );
        gsap.to(
          raycaster.intersectObjects(all3DObjectsHotspot)[0].object.material
            .color,
          { b: 255, g: 255, r: 255, ease: "elastic.out(1,0.3)", duration: 1 }
        );
      }
      document.getElementById("the-body").style.cursor = "pointer";
    } else {
      if (prevObjectHover) {
        prevObjectHover.material.color.set("#bbbbbb");
        document.getElementById("the-body").style.cursor = "default";
        gsap.to(prevObjectHover.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "elastic.out(1,0.3)",
          duration: 1,
        });
        gsap.to(prevObjectHover.children[0], {
          intensity: 0,
          duration: 0.5,
          onComplete: () => {
            prevObjectHover = null;
          },
        });
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
