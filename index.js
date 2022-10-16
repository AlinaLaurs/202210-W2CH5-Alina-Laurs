const board = [
    [true, true, false, false, false, false, false, false, false, false],
    [true, true, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, true, true, true, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, true, false, false],
    [false, false, false, false, false, false, true, false, false, false],
    [false, false, false, false, false, false, false, true, false, false],
];

const boardTwo = [
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

    if (y === 0 && x === 0) {
        if (board[y][x + 1]) {
            count++;
        }
        if (board[y + 1][x]) {
            count++;
        }
        if (board[y + 1][x + 1]) {
            count++;
        }
        return count;
    }

    if (y === 0 && x === 9) {
        if (board[y][x - 1]) {
            count++;
        }
        if (board[y + 1][x - 1]) {
            count++;
        }
        if (board[y + 1][x]) {
            count++;
        }
        return count;
    }

    if (y === 9 && x === 0) {
        if (board[y - 1][x]) {
            count++;
        }
        if (board[y - 1][x + 1]) {
            count++;
        }
        if (board[y][x + 1]) {
            count++;
        }
        return count;
    }

    if (y === 9 && x === 9) {
        if (board[y - 1][x]) {
            count++;
        }
        if (board[y - 1][x - 1]) {
            count++;
        }
        if (board[y][x - 1]) {
            count++;
        }
        return count;
    }

    //  Superior
    if (y === 0) {
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
        return count;
    }

    // Lateral izquierdo
    if (x === 0) {
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
        return count;
    }

    // Lateral derecho
    if (x === 9) {
        if (board[y - 1][x]) {
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

        return count;
    }

    // Inferior
    if (y === 9) {
        if (board[y - 1][x]) {
            count++;
        }
        if (board[y - 1][x + 1]) {
            count++;
        }
        if (board[y][x + 1]) {
            count++;
        }
        if (board[y][x - 1]) {
            count++;
        }
        if (board[y - 1][x - 1]) {
            count++;
        }
        return count;
    }

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
    return count;
};

const gameOfLife = (y, x) => {
    // Cuando la célula está viva
    let cellsBeside = contiguous(y, x);
    if (board[y][x] === true) {
        if (cellsBeside < 2) {
            boardTwo[y][x] = false;
        }
        if (cellsBeside > 3) {
            boardTwo[y][x] = false;
        }
    }
    // Cuando la célula está muerta
    else {
        if (cellsBeside === 3) {
            boardTwo[y][x] = true;
        }
    }
};

const copyBoardToBoardTwo = () => {
    for (let j = 0; j < board.length; j++) {
        for (let k = 0; k < board.length; k++) {
            boardTwo[j][k] = board[j][k];
        }
    }
};

const copyBoardTwoToBoard = () => {
    for (let j = 0; j < board.length; j++) {
        for (let k = 0; k < board.length; k++) {
            board[j][k] = boardTwo[j][k];
        }
    }
};

console.table(board);
for (let i = 0; i < 5; i++) {
    copyBoardToBoardTwo();
    for (let j = 0; j < board.length; j++) {
        for (let k = 0; k < board.length; k++) {
            gameOfLife(j, k);
        }
    }
    copyBoardTwoToBoard();
    console.table(board);
}
