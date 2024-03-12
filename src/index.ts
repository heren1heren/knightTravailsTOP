// import './style.css';
import './style.scss';

class Node {
  next1: Node;
  next2: Node;
  next3: Node;
  next4: Node;
  next5: Node;
  next6: Node;
  next7: Node;
  next8: Node;
  coordinate: number[];
  constructor(x: number, y: number) {
    this.next1 = null;
    this.next2 = null;
    this.next3 = null;
    this.next4 = null;
    this.next5 = null;
    this.next6 = null;
    this.next7 = null;
    this.next8 = null;
    this.coordinate = [x, y];
  }
}

const dx = [-2, -1, 1, 2, -2, -1, 2, 1]; // possible x moves
const dy = [-1, -2, 2, 1, 1, 2, -1, -2]; // possible y moves
function knightMove(startPoint: number[], endPoint: number[]) {
  //
  console.log(startPoint);
  const visitedValues = new Set([startPoint]);
  const queue = [startPoint];
  const rootNode = new Node(startPoint[0], startPoint[1]);
  let index = 1;
  while (queue.length > 0) {
    const coordinate = queue.shift();
    // how to move down one level?

    /**
     *  check  where is the first child before the next child is null
     *  access that child
     * else if all child is already access
     * access the child of child and repeat the process
     */

    let current = rootNode;
    if (index === 8) {
      index = 0;
      current = current.next1;
    }
    if (index === 0) {
    } else if (current[`next${index}`] !== null) {
      while (current[`next${index}`] === null) {
        index++;
      }
      current = current[`next${index}`];
    }

    for (let i = 0; i < 8; i++) {
      current[`next${i + 1}`] = new Node(
        current.coordinate[0] + dx[i],
        current.coordinate[1] + dy[i]
      );

      if (
        isChildOnTheBoard(current[`next${i + 1}`]) &&
        !isChildExisted(current[`next${i + 1}`])
      ) {
        // this current child is on the boarld and the child is not already existed
        visitedValues.add(current[`next${i + 1}`].coordinate);
        // queue.push(current[`next${i + 1}`].coordinate);
      } else {
        current[`next${i + 1}`] = null;
      }
    }

    if (current.coordinate === endPoint) {
      console.log(current);
      console.log('found it');

      break;
    }
    index++;
    console.log(queue);
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
    if (visitedValues.has(node.coordinate)) return true;

    return false;
  }
}

// const visitedValues = new Set([1, 2]);
// visitedValues.add(2);
// console.log(visitedValues.has(2));

knightMove([2, 1], [3, 5]);

//instead of implementing an array
