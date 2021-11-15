const room = {
    freeSeat: 15,
    seat: [[0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]]
};
const save=(row,col)=>{
    room.seat[row][col] = 1;
    room.freeSeat--;
}

module.exports = {room, save};