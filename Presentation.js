function diagonalDifference(input) {
    var lines = input.split("\n");
    var N = parseInt(lines[0]);
    var t = 0;
    for (i = 1; i <= N; i++) {
        var line = lines[i].split(" ");
        t += parseInt(line[i - 1]) - parseInt(line[N - i]);
    }
    console.log(Math.abs(t));
}



console.log(diagonalDifference(
    [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]]))