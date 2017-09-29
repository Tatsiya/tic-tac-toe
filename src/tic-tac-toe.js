class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.matrix = [[],[],[]];
        this.prevPlayerSymbol = '';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === undefined) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.prevPlayerSymbol = this.matrix[rowIndex][columnIndex];
            if (this.currentPlayerSymbol === 'x') {
                this.currentPlayerSymbol = 'o';
            } else {
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        if (this.noMoreTurns() || this.getWinner() !== null) {
            return true;

        } else {
            return false;
        }
        
    }

    getWinner() {
       
        if ((this.matrix[0][0] === this.prevPlayerSymbol && this.matrix[0][1] === this.prevPlayerSymbol && this.matrix[0][2] === this.prevPlayerSymbol) ||
            (this.matrix[1][0] === this.prevPlayerSymbol && this.matrix[1][1] === this.prevPlayerSymbol && this.matrix[1][2] === this.prevPlayerSymbol) ||
            (this.matrix[2][0] === this.prevPlayerSymbol && this.matrix[2][1] === this.prevPlayerSymbol && this.matrix[2][2] === this.prevPlayerSymbol) || 
            (this.matrix[0][0] === this.prevPlayerSymbol && this.matrix[1][0] === this.prevPlayerSymbol && this.matrix[2][0] === this.prevPlayerSymbol) ||
            (this.matrix[0][1] === this.prevPlayerSymbol && this.matrix[1][1] === this.prevPlayerSymbol && this.matrix[2][1] === this.prevPlayerSymbol) ||
            (this.matrix[0][2] === this.prevPlayerSymbol && this.matrix[1][2] === this.prevPlayerSymbol && this.matrix[2][2] === this.prevPlayerSymbol) || 
            (this.matrix[0][0] === this.prevPlayerSymbol && this.matrix[1][1] === this.prevPlayerSymbol && this.matrix[2][2] === this.prevPlayerSymbol) ||
            (this.matrix[2][0] === this.prevPlayerSymbol && this.matrix[1][1] === this.prevPlayerSymbol && this.matrix[0][2] === this.prevPlayerSymbol)) {

            return this.prevPlayerSymbol;
            
        } else {
            return null;
        }
    }

      noMoreTurns() {
        var innerMatrix;
        if ((this.matrix[0].length === 3) && (this.matrix[1].length === 3) && (this.matrix[2].length === 3)) {
            
            for (var i = 0; i < this.matrix.length; i++) {
                innerMatrix = this.matrix[i];

                for (var j = 0; j < innerMatrix.length; j++) {
                    if (innerMatrix[j] === undefined) {
                        return false;
                    } 
                }
            }
            return true;

        } else {
            return false;
        }
    }


    isDraw() {
        if ((this.getWinner() === null) && this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        var fieldValue = this.matrix[rowIndex][colIndex];
        if (fieldValue !== undefined) {
            return fieldValue;
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
