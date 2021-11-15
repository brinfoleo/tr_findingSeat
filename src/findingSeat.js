const room = require("./room");



const findingSeat = (seat, quantity = 1) => {

    //Checking the number of available seats
    if (quantity > room.room.freeSeat) {
        console.log("There are not enough seats available");
        return false;
    }
    return sellSeat(seat);

};

const sellSeat = (seat) => {
    const arraySeat = [...seat];
    let row = '';
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
    if (checkAvailability(row, arraySeat[1])) {
        room.save(row, arraySeat[1]);
        return true;
    } else {
        return false;
    }

};
const checkAvailability = (row, col) => {
    if (room.room.seat[row][col] == 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = findingSeat;