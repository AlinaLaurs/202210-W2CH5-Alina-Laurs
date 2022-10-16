export const board = [
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

export const boardTwo = [
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
// Esquinas
export const contiguous = (y, x) => {
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

    // Borde superior
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

    // Borde izquierdo
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

    // Borde derecho
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

    // Borde inferior
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

export const gameOfLife = (y, x) => {
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

export const copyBoardToBoardTwo = () => {
    for (let j = 0; j < board.length; j++) {
        for (let k = 0; k < board.length; k++) {
            boardTwo[j][k] = board[j][k];
        }
    }
};

export const copyBoardTwoToBoard = () => {
    for (let j = 0; j < board.length; j++) {
        for (let k = 0; k < board.length; k++) {
            board[j][k] = boardTwo[j][k];
        }
    }
};

export const playGame = () => {
    console.table(board);
    // const = paramError new Error ("Error, los parámetros no son válidos.");
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
};

setInterval(() => {
    playGame();
}, 1000);
