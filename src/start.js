// Import jsbarcode
var JsBarcode = require('jsbarcode');
// Create a canvas
var { createCanvas } = require("canvas");
var canvas = createCanvas();

// Generate a barcode
JsBarcode(canvas, "Hello");

// Do what you want with the canvas
// For example, save it as an image
var fs = require('fs');
var out = fs.createWriteStream(__dirname + '/barcode.png');
var stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () =>  console.log('The PNG file was created.'));
