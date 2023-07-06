export class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
export class BinaryTree {
    constructor() {
      this.root = null;
    }
    
    // Вставка данных в бинарное дерево поиска (BST)
    insert(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const searchTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }
  
    // Поиск данных в бинарном дереве поиска (BST)
    find(data) {
      let current = this.root;
      while (current) {
        if (data === current.data) {
          return current;
        }
        current = data < current.data ? current.left : current.right;
      }
      return null;
    }
  }