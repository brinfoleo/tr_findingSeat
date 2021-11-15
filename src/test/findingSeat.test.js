const fSeat = require("../findingSeat.js");

test('Selling 01 specific seat.', () => {
     expect(fSeat("A1")).toBe("A1");
  });