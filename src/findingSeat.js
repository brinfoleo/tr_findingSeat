const room = require("./room");

const findingSeat = (seat = '', quantity = 1) => {

    //Checking the number of available seats
    if (quantity > room.room.freeSeat) {
        console.log("There are not enough seats available");
        return false;
    }
    //Random seat
    let row = '';
    let col = '';
    if (seat.length == 0) {
        for (row = 0; row < 2; row++) {
            for (col = 0; col < 4; col++) {
                if (checkAvailability(row, col)) break;
            }
            if (checkAvailability(row, col)) break;
        }
    } else {
        const arraySeat = [...seat];
        row = convLetter(arraySeat[0]);
        col = arraySeat[1]-1;
    }

    return sellSeat(row, col);
};

const sellSeat = (row, col) => {

    if (checkAvailability(row, col)) {
        room.save(row, col);
        return true;
    } else {
        return false;
    }

};


const convLetter = (letter) => {
    let row=0;
    switch (letter) {
        case 'A':
            row = 0;
            break;

        case 'B':
            row = 1;
            break;

        case 'C':
            row = 2;
            break;
        default:
            console.log("invalid letter");
            //throw("invalid letter");
            row=-1;
    }
    return row;
}



/**
 * Check if the seat is available
 */
const checkAvailability = (row, col) => {
    if (room.room.seat[row] == undefined) return false;
    
    if (room.room.seat[row][col] == 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = findingSeat;