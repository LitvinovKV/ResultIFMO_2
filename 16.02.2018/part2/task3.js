function getRandomValue() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

function getRGB(r = getRandomValue(), g = getRandomValue(), b = getRandomValue()) {
    console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
}

getRGB();