var upnp = require("./lib/upnp.js");

var controlPoint = new upnp.ControlPoint();

controlPoint.on("DeviceAvailable", function(device) {
  console.log(device.nt);
    //-> "urn:schemas-upnp-org:device:InternetGatewayDevice:1"
  console.log(device.location);
    //-> "http://192.168.0.1/root.sxml"
});

controlPoint.on("DeviceFound", function(device) {
  console.log(device.st);
    //-> "urn:schemas-upnp-org:device:InternetGatewayDevice:1"
  console.log(device.location);
    //-> "http://192.168.0.1/root.sxml"
});

controlPoint.search('urn:schemas-upnp-org:device:InternetGatewayDevice:1');
