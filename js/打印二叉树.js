function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let tree = new TreeNode(5);
tree.left = new TreeNode(6);
tree.right = new TreeNode(7);
var arr = [];
function Print(pRoot) {
    if(pRoot === null ){
        return null
    }else{
        arr.push(pRoot);
        let i = 0
        while(arr.length!==0){
            let popTree = arr.shift()
            console.log(pop)
            console.log(popTree.val)
            if(popTree.left!==null){
                arr.push(popTree.left)
            }
            if(popTree.right!==null){
                arr.push(popTree.right)
            }
        }
    }
    // write code here
}
Print(tree);
console.log(arr)