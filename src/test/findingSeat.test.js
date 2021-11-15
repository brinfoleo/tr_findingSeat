const fSeat = require("../findingSeat.js");

test('Selling 01 specific seat.', () => {
     expect(fSeat("A1")).toBe(true);
  });

  test('Selling 01 specific vacancy occupied.', () => {
    expect(fSeat("A1")).toBe(false);
 });
 
  
test('Selling 01 wrong specific vacancy.', () => {
    expect(fSeat("H1")).toBe(false);
 });