/**
 * # ROOM #
 * This file is intended to access the DB and retrieve the seats sold, as well as record the next ones.
 */

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