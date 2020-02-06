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
        return []
    }else{
        arr.push(pRoot);
        let i = 0
        while(arr.length!==0){
            let tmp = [];
            let n = arr.length
            for (let index = 0; index < n; index++) {
                let popTree = arr.shift()
                tmp.push(popTree.val)
                if(popTree.left!==null){
                    arr.push(popTree.left)
                }
                if(popTree.right!==null){
                    arr.push(popTree.right)
                }
            }
            result.push(tmp)
        }
        
    }
    // write code here
}
Print(tree);
console.log(arr)