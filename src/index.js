// const b = ["10 4 300", "9 2 500"];

// // console.log(b[0].split(''))

// const stringArray = [];

// b.forEach((el) => {
//   stringArray.push(el.split(" "));
// });
// // console.log(stringArray[0])

// stringArray.sort((a, b) => {
//   return b[2] - a[2];
// });

// console.log(stringArray);

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return b - a;
// });
// // console.log(numbers);

class Rover {
  constructor() {
    this.grid = { x: 5, y: 5 };
    this.position = { x: 0, y: 0 };
    this.direction = "N";
    this.directions = ["N", "E", "S", "W"];
  }

  move(command) {
    let index;
    switch (command) {
      case "L":
        index =
          this.direction === "N"
            ? 3
            : this.directions.indexOf(this.direction) - 1;
        this.direction = this.directions[index];
        console.log(this.direction);
        break;
      case "R":
        index =
          this.direction === "W"
            ? 0
            : this.directions.indexOf(this.direction) + 1;
        this.direction = this.directions[index];
        console.log(this.direction);
        break;
      case "M":
        switch (this.direction) {
          case "N":
            this.position.y = this.position.y + 1;
            console.log(this.position);
            break;
          case "E":
            this.position.x = this.position.x + 1;
            console.log(this.position);
            break;
          case "S":
            this.position.y = this.position.y - 1;
            console.log(this.position);
            break;
          case "W":
            this.position.x = this.position.x - 1;
            console.log(this.position);
            break;
          default: {
            throw new Error("Something wrong with M case");
          }
        }
        break;
      default: {
        throw new Error("Something is wrong with move fn");
      }
    }
  }
}

const rover = new Rover();
rover.move("R");
rover.move("M");
