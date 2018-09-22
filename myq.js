var MyQ = require('myq-api');
var account = new MyQ('email address', 'password');

//login requires a few seconds hence timeout is set for actions
account.login()
  .then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.error(err);
  });

//3, 15, 17 are the basic device IDs - light, garage door, gateway
setTimeout(function() {
account.getDevices([3, 15, 17])
  .then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.error(err);
  });
}, 3000);

//Exampe of how to get garage door status
setTimeout(function() {
account.getDoorState(door.id)
  .then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.error(err);
  });
}, 4000);

//Example of how to turn garage light on
account.setLightState(light.id, 1)
  .then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.error(err);
  });

//How to open/close garage
setTimeout(function() {
account.setDoorState(door.id, 1)
  .then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.error(err);
  });
}, 3000);
