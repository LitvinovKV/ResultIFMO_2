function findOpred(a1, a2, b1, b2) {
    opred = a1 * b2 - a2 * b1;
    return opred;
}

function KramerMethod(a1, a2, b1, b2, c1, c2) {
    opredGeneral = findOpred(a1, a2, b1, b2);
    if (opredGeneral != 0) {
        x1 = findOpred(c1, c2, b1, b2);
        x1 /= opredGeneral;
        x2 = findOpred(a1, a2, c1, c2);
        x2 /= opredGeneral;
        console.log( "x1 = " + x1 );
        console.log( "x2 = " + x2 );
    }
    else
        console.log("You have problem!");
};


const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];

KramerMethod(a1, a2, b1, b2, c1, c2);