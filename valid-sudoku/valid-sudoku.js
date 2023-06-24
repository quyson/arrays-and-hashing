/* The solution is to run through the entire board once, however for each element we will check if it is a 
repeatable number within it's row, column, and grouping through the use of sets and a hashmap. time complexity
should just be O(1) because it's in constant time. Space complexity is O(n) because of the generation of
a rows, cols, box sets as well as a box hashmap*/


const getSolution = (sudokuBoard) => {
    const rows = [];
    const cols = [];
    const box = {};

    for(let i = 0;i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(sudokuBoard[i][j] == "."){
                continue;
            }
            if(rows[i].has(sudokuBoard[i][j])){
                return false
            }
            if(cols[j].has(sudokuBoard[i][j])){
                return false
            }
            if(box[`${Math.floor(i / 3)}-${Math.floor(j / 3)}`].has(sudokuBoard[i][j])){
                return false
            }
            rows[i].add(sudokuBoard[i][j]);
            cols[j].add(sudokuBoard[i][j]);
            box[(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`)].add(sudokuBoard[i][j]);
        }
    } return true
} 