var func = (x, y) =>
    (y != 0) ? func(++x, y - 1) : x;


console.log(func(3, 2));