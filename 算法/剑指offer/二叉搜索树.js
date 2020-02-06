function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let tree = new TreeNode(8);
tree.left = new TreeNode(6)
tree.left.left = new TreeNode(5);
tree.left.right = new TreeNode(7);

tree.right = new TreeNode(10);
tree.right.left = new TreeNode(9);
tree.right.right = new TreeNode(11);

// function printTreeO(tNode){
//     let tmp = []
//     if(tNode.left!==null){
//         tmp = [...tmp,...printTreeO(tNode.left)]
//         }
//     tmp.push(tNode.val)
//     if(tNode.right!==null){
//         tmp = [...tmp,...printTreeO(tNode.right)]
//     }
//     return tmp
// }

var count = 0;
function printTree(tNode,k){
    if(tNode!==null){
        var node = printTree(tNode.left,k)
        if(node!==null){
            return node;
        }
        count++;
       // console.log(count)
        if(count===k){
            return tNode;
        }
        node = printTree(tNode.right,k)
        if(node!==null){
            return node
        }
    }
    return null;
}
console.log(printTree(tree,2))