{
    var Direction = void 0;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Left"] = 1] = "Left";
        Direction[Direction["Right"] = 2] = "Right";
        Direction[Direction["Down"] = 3] = "Down";
    })(Direction || (Direction = {}));
    var dir = Direction.Up;
    console.log("dir: ", dir);
}
