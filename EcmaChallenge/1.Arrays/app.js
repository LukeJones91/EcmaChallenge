module.exports = {
    squares: squares,
    sums: sums
}

function squares(input) {
    //Code here
    var output = [];
    input.forEach(function (value, i) {
        output[i] = value * value;
    })
    return output;
}


function sums(input) {
    //Code here
}