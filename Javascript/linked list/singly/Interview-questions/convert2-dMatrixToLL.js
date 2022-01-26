// eslint-disable-next-line max-len
// Given a 2-D matrix. You need to convert it into a linked list matrix such that each node is linked to its next right and down node and display it.
// Input 2D array
// 1 2 3
// 4 5 6
// 7 8 9

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// O/p
//   1 -> 2 -> 3 -> null
//   |    |    |
//   4    5    6 -> null
//   |    |    |
//   7    8    9 -> null
//

/**
 * NodeLL
 */
class NodeLL {
/**
 *
 * @param {null | number | string} value
 * @param {null | NodeLL} right
 * @param {null | NodeLL} down
 */
  constructor(value = null, right = null, down = null) {
    this.value = value;
    this.right = right;
    this.down = down;
  }
}

/**
 * LinkList
 */
class LinkList {
  /**
   * initialise head
   */
  constructor() {
    this.mainHead = null;
    this.head = null;
  }

  /**
   *
   * @param {Array<number>} array
   */
  transform(array) {
    let previousList = null;
    let currentList = null;
    const inputArray = array;

    for (let i = 0, leng = inputArray.length; i < leng; i++) {
      for (let j = 0, len = inputArray[i].length; j < len; j++) {
        if (previousList) {
            this.head = new NodeLL(inputArray[i][j], this.head);
        } else {
           const node = new NodeLL(inputArray[i][j], this.mainHead);
           previousList = this.mainHead;
        }
      }
    }
    console.log(previousList);
  }
}


const l1 = new LinkList();
l1.transform([[1, 2, 3], [4, 5, 6]]);