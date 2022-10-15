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
    if ((y = 0) && (x = 0)) {
        if (board[y][x + 1]) {
            count++;
        }
        if (board[y + 1][x]) {
            count++;
        }
        if (board[y + 1][x + 1]) {
            count++;
        }
    }

    if ((y = 0) && (x = 0)) {
        if (board[y][x - 1]) {
            count++;
        }
        if (board[y + 1][x - 1]) {
            count++;
        }
        if (board[y + 1][x]) {
            count++;
        }
    }

    if ((y = 0) && (x = 0)) {
        if (board[y - 1][x]) {
            count++;
        }
        if (board[y - 1][x + 1]) {
            count++;
        }
        if (board[y][x + 1]) {
            count++;
        }
    }

    if ((y = 0) && (x = 0)) {
        if (board[y - 1][x]) {
            count++;
        }
        if (board[y - 1][x - 1]) {
            count++;
        }
        if (board[y][x - 1]) {
            count++;
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let count = 0;
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
    return count;
};
