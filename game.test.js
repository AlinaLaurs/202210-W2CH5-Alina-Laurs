import {
    contiguous,
    gameOfLife,
    copyBoardToBoardTwo,
    copyBoardTwoToBoard,
    playGame,
    board,
    boardTwo,
} from './game.js';

describe('Given playGame function', () => {
    test(`When parameters are ${parameters}, then result should be ${result}.`, () => {
        const result = board[0][0];
        const expectedResult = true;
        expect(result).toBe(true);
    });
});
