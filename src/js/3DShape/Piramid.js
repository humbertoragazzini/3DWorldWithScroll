import * as THREE from "three";

const piramidBuilder = (
  size1,
  size2,
  size3,
  color1,
  color2,
  color3,
  color4,
  rotateX,
  rotateY,
  rotateZ,
  wireframe
) => {
  var pts = [
    // https://en.wikipedia.org/wiki/Tetrahedron#Coordinates_for_a_regular_tetrahedron
    new THREE.Vector3(Math.sqrt(8 / size1), 0, -(1 / 3)),
    new THREE.Vector3(-Math.sqrt(2 / size2), Math.sqrt(2 / 3), -(1 / 3)),
    new THREE.Vector3(-Math.sqrt(2 / size3), -Math.sqrt(2 / 3), -(1 / 3)),
    new THREE.Vector3(0, 0, 1),
  ];

  var faces = [
    // triangle soup
    pts[0].clone(),
    pts[2].clone(),
    pts[1].clone(),
    pts[0].clone(),
    pts[1].clone(),
    pts[3].clone(),
    pts[1].clone(),
    pts[2].clone(),
    pts[3].clone(),
    pts[2].clone(),
    pts[0].clone(),
    pts[3].clone(),
  ];

  var geom = new THREE.BufferGeometry().setFromPoints(faces);
  geom.rotateX(rotateX);
  geom.rotateY(rotateY);
  geom.rotateZ(rotateZ);
  geom.computeVertexNormals();
  geom.wireframe = true;

  geom.setAttribute(
    "uv",
    new THREE.Float32BufferAttribute(
      [
        // UVs
        0.5, 1, 0.06698729810778059, 0.2500000000000001, 0.9330127018922194,
        0.2500000000000001, 0.06698729810778059, 0.2500000000000001,
        0.9330127018922194, 0.2500000000000001, 0.5, 1, 0.06698729810778059,
        0.2500000000000001, 0.9330127018922194, 0.2500000000000001, 0.5, 1,
        0.06698729810778059, 0.2500000000000001, 0.9330127018922194,
        0.2500000000000001, 0.5, 1,
      ],
      2
    )
  );

  geom.addGroup(0, 3, 0);
  geom.addGroup(3, 3, 1);
  geom.addGroup(6, 3, 2);
  geom.addGroup(9, 3, 3); //009986 12B5A4 00A695
  let tetra = new THREE.Mesh(geom, [
    new THREE.MeshBasicMaterial({ color: color1, wireframe: wireframe }),
    new THREE.MeshBasicMaterial({ color: color2, wireframe: wireframe }),
    new THREE.MeshBasicMaterial({ color: color3, wireframe: wireframe }),
    new THREE.MeshBasicMaterial({ color: color4, wireframe: wireframe }),
  ]);
  console.log(tetra);

  return tetra;
};

export default piramidBuilder;
