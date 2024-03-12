// import './style.css';
import './style.scss';

// currently don't know how to store and displace shortest paths. should not try to implement both. Waiting for later implementation;

class Node {
  parent: Node;
  next0: Node;
  next1: Node;
  next2: Node;
  next3: Node;
  next4: Node;
  next5: Node;
  next6: Node;
  next7: Node;

  coordinate: number[];
  constructor(x: number, y: number, parent: Node) {
    this.parent = parent;
    this.next0 = null;
    this.next1 = null;
    this.next2 = null;
    this.next3 = null;
    this.next4 = null;
    this.next5 = null;
    this.next6 = null;
    this.next7 = null;
    this.coordinate = [x, y];
  }
}

const dx = [-2, -1, 1, 2, -2, -1, 2, 1]; // possible x moves
const dy = [-1, -2, 2, 1, 1, 2, -1, -2]; // possible y moves
function knightMove(startPoint: number[], endPoint: number[]) {
  //

  const visitedValues = new Set([startPoint]);
  const rootNode = new Node(startPoint[0], startPoint[1], null);
  const queue = [rootNode];
  const stepsByString = '';
  while (queue.length > 0) {
    const current = queue.shift();

    // how to move down one level?

    for (let i = 0; i < 8; i++) {
      current[`next${i}`] = new Node(
        current.coordinate[0] + dx[i],
        current.coordinate[1] + dy[i],
        current
      );
      console.log(current[`next${i}`].coordinate);
      console.log(isChildOnTheBoard(current[`next${i}`]));
      console.log(!isChildExisted(current[`next${i}`]));

      if (
        isChildOnTheBoard(current[`next${i}`]) &&
        !isChildExisted(current[`next${i}`])
      ) {
        // this current child is on the boarld and the child is not already existed
        visitedValues.add(current[`next${i}`].coordinate.toString());

        queue.push(current[`next${i}`]);
      } else {
        current[`next${i}`] = null;
      }
    }

    if (
      current.coordinate[0] === endPoint[0] &&
      current.coordinate[1] === endPoint[1]
    ) {
      stepsByString += `[${current.coordinate}] -> `;
      while (current.parent !== null) {
        stepsByString += `[${current.parent.coordinate}] -> `;
        current = current.parent;
      }
      console.log(stepsByString.slice(0, stepsByString.length - 3));

      break;
    }
    console.log(current);
  }

  function isChildOnTheBoard(node: Node) {
    if (
      node.coordinate[0] >= 0 &&
      node.coordinate[0] <= 7 &&
      node.coordinate[1] >= 0 &&
      node.coordinate[1] <= 7
    ) {
      return true;
    }
    return false;
  }

  function isChildExisted(node: Node) {
    const string = node.coordinate.toString();

    if (visitedValues.has(string)) return true;

    return false;
  }
}

// const visitedValues = new Set([1, 2]);
// visitedValues.add(2);
// console.log(visitedValues.has(2));

knightMove([2, 1], [7, 7]);

//instead of implementing an array
