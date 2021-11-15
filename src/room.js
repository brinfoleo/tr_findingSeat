const room = {
    freeSeat: 15,
    seat: [[0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]]
};
/**
* Registers and updates room numbers
*/
const save=(row,col)=>{
    room.seat[row][col] = 1;
    room.freeSeat--;
}

module.exports = {room, save};