module.exports = {
    calculateSum: function (array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        };
        return sum;
    },
    calculateLength: function (array) {
        var length = 0;
        length = array.length;
        return length;
    }
};

