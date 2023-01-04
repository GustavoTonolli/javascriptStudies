// switch case operation

// case 1, case 2, case 3, default , end.

let placing = 6

switch (placing) {
    case 1:
        console.log("First place!");
        break;
    case 2:
        console.log("Second place!");
        break;
    case 3:
        console.log("Third place!");
        break;
    case 4: case 5: case 6:
        console.log("Participation prize");
        break
    default:
        console.log("Didn't win!")
}