var bus = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 10.8,
        make: "volvo",
        fuel: "diesel",
        pistons: [{ maker: "volvo1" }, { maker: "volvo2" }]
    },
    drive: function () { return "drive"; }
};

var array = [
    "string",
    100,
    ["embed", 200],
    { car: "scania" },
    function () { return "drive"; }
]