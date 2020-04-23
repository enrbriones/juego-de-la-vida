export const lifeGame = (matrix) => {
    const cloneMatrix = (mat) => {
        return mat.map((arr)=> arr.slice());
    };
  
    // Necesary for JS MOD bug.
    const mod = (n, m) => {
      return ((n % m) + m) % m;
    };
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    let newMatrix = cloneMatrix(matrix);
  
    // Let's evaluate neighbours
    newMatrix.forEach((row, x) =>
      row.forEach((cell, y) => {
        let neighbours = matrix[mod(x - 1, rows)][mod(y - 1, cols)]+
        matrix[mod(x, rows)][mod(y - 1, cols)] +
          matrix[mod(x + 1, rows)][mod(y - 1, cols)] +
          matrix[mod(x - 1, rows)][mod(y, cols)] +
          matrix[mod(x + 1, rows)][mod(y, cols)] +
          matrix[mod(x - 1, rows)][mod(y + 1, cols)] +
          matrix[mod(x, rows)][mod(y + 1, cols)] +
          matrix[mod(x + 1, rows)][mod(y + 1, cols)];
  
        // Born cell
        if (matrix[x][y] == 0 && neighbours == 3) {
          newMatrix[x][y] = 1;
        }
  
        // Die cell
        if (matrix[x][y] == 1 && (neighbours < 2 || neighbours > 3)) {
          newMatrix[x][y] = 0;
        }
      })
    );
    return newMatrix;
  };