module.exports = {
    squares: squares
}

function squares(input) {
    //Code here
    var output = [];
    input.forEach(function (value, i) {
        output[i] = value * value;
    })
    return output;
}


