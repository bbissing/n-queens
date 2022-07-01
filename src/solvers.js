/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //var solution = undefined; //fixme
  // create a new board
  var board = new Board({'n': n});
  // get rows for that new board
  var rows = board.rows();

  // iterate over rows while rows is less than n
  for (var row = 0; row < n; row++) {
    //iterate over col while col is less than n
    for (col = 0; col < n; col++) {
      // add 1 to that row and col
      rows[row][col] = 1;
      // if the board has any rooks conflicts
      if (board.hasAnyRooksConflicts()) {
        // that row and col equals 0
        rows[row][col] = 0;
      }
    }
  }

  var solution = rows;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n});
  var rows = board.rows();

  var innerFunc = function(columnIndex) {
    if (columnIndex === n) {
      solutionCount++;
    }
    for (var row = 0; row < n; row++) {
      rows[row][columnIndex] = 1;
      if (!board.hasAnyRooksConflicts()) {
        innerFunc(columnIndex + 1);
      }
      rows[row][columnIndex] = 0;
    }
  };


  innerFunc(0);


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solution = undefined; //fixme
  var board = new Board({'n': n});
  var rows = board.rows();

  if (n === 2 || n === 3) {
    return rows;
  }

  var innerFunc = function(columnIndex) {
    if (columnIndex === n) {
      solution = rows;
      return;
    }
    for (var row = 0; row < n; row++) {
      rows[row][columnIndex] = 1;
      if (!board.hasAnyQueenConflictsOn(row, columnIndex)) {
        innerFunc(columnIndex + 1);
      }
      if (solution !== undefined) {
        break;
      }
      rows[row][columnIndex] = 0;
    }
  };


  innerFunc(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n});
  var rows = board.rows();

  var innerFunc = function(columnIndex) {
    if (columnIndex === n) {
      solutionCount++;
    }
    for (var row = 0; row < n; row++) {
      rows[row][columnIndex] = 1;
      if (!board.hasAnyQueenConflictsOn(row, columnIndex)) {
        innerFunc(columnIndex + 1);
      }
      rows[row][columnIndex] = 0;
    }
  };

  innerFunc(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};