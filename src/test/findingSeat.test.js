const sellSeat = require("../findingSeat.js");

test('Selling 01 specific seat.', () => {
    expect(sellSeat("A1")).toBe(true);
});

test('Selling 01 specific vacancy occupied.', () => {
    expect(sellSeat("A1")).toBe(false);
});

test('Selling 01 wrong specific seat.', () => {
    expect(sellSeat("H1")).toBe(false);
});

test('Selling seats beyond those available', () => {
    expect(sellSeat("B1", 15)).toBe(false);
});

test('Selling 01 random seat', () => {
    expect(sellSeat()).toBe(true);
});
