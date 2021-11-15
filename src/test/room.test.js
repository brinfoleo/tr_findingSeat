const createRoom = require("../room");

test('Creating a room in the database', () => {
    const room={
        freeSeat: 15,
        seat: [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]
    };
    
    expect(createRoom()).toBe(room);
  });