const room = require("./room");

const findingSeat = (seat, quantity = 1) => {


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
    if (room.seat[row][arraySeat[1]] == 0) {
        room.seat[row][arraySeat[1]] = 1;
        room.freeSeat--;
        return true;
    } else {
        return false;
    }

};


module.exports = findingSeat;