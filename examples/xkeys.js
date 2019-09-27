const XKeys = require('./../index.js');

var xKeysPanel = new XKeys(1029);
console.log("Panel: " + xKeysPanel.deviceType.identifier);

xKeysPanel.on("down", keyIndex => {
    console.log("Key pressed: " + keyIndex);
    xKeysPanel.setBacklight(keyIndex, true);
});

xKeysPanel.on("up", keyIndex => {
    console.log("Key released: " + keyIndex);
    xKeysPanel.setBacklight(keyIndex, false);
});
