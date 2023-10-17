const sharp = require('sharp');

sharp('original.webp')
    .resize(80)
    .grayscale()
    .toFile('resized.webp');