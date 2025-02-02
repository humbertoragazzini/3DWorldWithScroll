let newLat = 0;
let newLon = 0;
if (this.prevLat === null && this.prevLon === null) {
  this.prevLat = targetModel.lat;
  this.prevLon = targetModel.lon;
}
// if (event.key === 'W' || event.key === 'ArrowUp') {
//   newLat = this.prevLat + this.ySpeed;
//   newLon = this.prevLon;
// } else if (event.key === 'S' || event.key === 'ArrowDown') {
//   newLat = this.prevLat - this.ySpeed;
//   newLon = this.prevLon;
// } else if (event.key === 'A' || event.key === 'ArrowLeft') {
//   newLon = this.prevLon - this.xSpeed;
//   newLat = this.prevLat;
// } else if (event.key === 'D' || event.key === 'ArrowRight') {
//   newLon = this.prevLon + this.xSpeed;
//   newLat = this.prevLat;
// } else if (event.key === 'Spacebar') {
//   //existedObject.position.set(0, 0, 0);
// }
let { newPosition, newRotation } = this.getNewPositionOfTheObjectOnTheSphere(newLat, newLon, targetModel.radiusOffset);
let tempObjForRotation = existedObject.clone();
tempObjForRotation.rotation.x = newRotation.x;
tempObjForRotation.rotation.y = newRotation.y;
tempObjForRotation.rotation.z = newRotation.z;
this.rotateObject(tempObjForRotation, targetModel.rotation);
newRotation = {
  x: tempObjForRotation.rotation.x,
  y: tempObjForRotation.rotation.y,
  z: tempObjForRotation.rotation.z
};
this.prevLat = newLat;
this.prevLon = newLon;

let vectorOfExistedObj = existedObject.rotation.toVector3();
vectorOfExistedObj.x = Math.abs(vectorOfExistedObj.x);
vectorOfExistedObj.y = Math.abs(vectorOfExistedObj.y);
vectorOfExistedObj.z = Math.abs(vectorOfExistedObj.z);
let vectorOfTempObj = tempObjForRotation.rotation.toVector3();
//let vectorOfTempObj = new THREE.Vector3(newRotation.x, newRotation.y, newRotation.z);
vectorOfTempObj.x = Math.abs(vectorOfTempObj.x);
vectorOfTempObj.y = Math.abs(vectorOfTempObj.y);
vectorOfTempObj.z = Math.abs(vectorOfTempObj.z);
let angleInRad = vectorOfExistedObj.angleTo(vectorOfTempObj);
let angleDifference = THREE.MathUtils.radToDeg(angleInRad);

let rotationModel = {
  x: 0,
  y: 0,
  z: 0
};

// if (event.key === 'W' || event.key === 'ArrowUp') {
//   rotationModel.z = -angleDifference;
// } else if (event.key === 'S' || event.key === 'ArrowDown') {
//   rotationModel.z = angleDifference;
// } else if (event.key === 'A' || event.key === 'ArrowLeft') {
//   rotationModel.x = -angleDifference;
// } else if (event.key === 'D' || event.key === 'ArrowRight') {
//   rotationModel.x = angleDifference;
// } else if (event.key === 'Spacebar') {
//   //existedObject.position.set(0, 0, 0);
// }

this.rotateObject(existedObject, rotationModel);

let positionTween = new TWEEN.Tween(existedObject.position)
  .to(newPosition, 1000)
  .onStart(() => {
    this.blockPositionMovement = true;
  })
  .onComplete(() => {
    this.blockPositionMovement = false;
  })
  .start();

getNewPositionOfTheObjectOnTheSphere(lat: number, lon: number, radiusOffset: number) {
  let planetSize = this.getPlanetSize();
  let radius = this.getMaxSize(planetSize) / 2 + radiusOffset;
  let latRad = lat * (Math.PI / 180);
  let lonRad = -lon * (Math.PI / 180);
  return {
    newPosition: new THREE.Vector3(
      Math.cos(latRad) * Math.cos(lonRad) * radius,
      Math.sin(latRad) * radius,
      Math.cos(latRad) * Math.sin(lonRad) * radius
    ),
    newRotation: { x: 0.0, y: -lonRad, z: latRad - Math.PI * 0.5 }
  };
}


rotateObject(object: any, rotation: EulerAngles) {
  if (rotation.x !== 0) {
    object.rotateX(THREE.MathUtils.degToRad(rotation.x));
  }
  if (rotation.y !== 0) {
    object.rotateY(THREE.MathUtils.degToRad(rotation.y));
  }
  if (rotation.z !== 0) {
    object.rotateZ(THREE.MathUtils.degToRad(rotation.z));
  }
}