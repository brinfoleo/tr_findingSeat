const room = require("./room");

const sellSeat = (seat, quantity = 1) => {

    //Checking the number of available seats
    if (quantity > room.room.freeSeat) {
        console.log("There are not enough seats available");
        return false;
    }

    return findingSeat(seat);

};

const findingSeat = (seat) => {
    const arraySeat = [...seat];
    let row = '';
    let col = arraySeat[1];
    for (let i = 0; i < arraySeat.length; i++) {
        if (isNaN(arraySeat[i])) {
            switch (arraySeat[i]) {
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
                    console.log("invalid letter")
                    return false;

            }
        }
    }
    if (checkAvailability(row, col)) {
        room.save(row, col);
        return true;
    } else {
        return false;
    }

};

/**
 * Check if the seat is available
 */
const checkAvailability = (row, col) => {
    if (room.room.seat[row][col] == 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = sellSeat;