const board = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
];

const contiguous = (y, x) => {
    let count = 0;
    for (let i = 0; i < board[y].length; i++) {
        for (let j = 0; j < board[x].length; j++) {
            if (board[y - 1][x]) {
                count++;
            }
            if (board[y - 1][x + 1]) {
                count++;
            }
            if (board[y][x + 1]) {
                count++;
            }
            if (board[y + 1][x + 1]) {
                count++;
            }
            if (board[y + 1][x]) {
                count++;
            }
            if (board[y + 1][x - 1]) {
                count++;
            }
            if (board[y][x - 1]) {
                count++;
            }
            if (board[y - 1][x - 1]) {
                count++;
            }
        }
    }
};
