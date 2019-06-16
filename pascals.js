'use strict';

const pascalsTriange = (rows) => {
    if (rows < 1) {
        throw new Error('The number of rows must be at least 1');
    } else if (!Number.isInteger(rows)) {
        throw new Error('The number of rows must be an intetger');
    }
    const triangle = [[1]];

    for (let i = 1; i < rows; i++) {
        triangle.push(pascalsRow(i, triangle[i - 1]));
    }
    return triangle;
};

const pascalsRow = (currentRowIndex, prevRowValues) => {
    const row = [];

    for (let j = 0; j < currentRowIndex + 1; j++) {
        if (j === 0 || j === currentRowIndex) {
            row.push(1);
        } else {
            row.push(prevRowValues[j - 1] + prevRowValues[j]);
        }
    }
    return row;
};

module.exports = {
    pascalsTriange
};