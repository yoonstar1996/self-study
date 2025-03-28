{
    var Direction = void 0;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
        Direction[Direction["Down"] = 4] = "Down";
    })(Direction || (Direction = {}));
    var dir = Direction.Up;
    console.log("dir: ", dir);
}
