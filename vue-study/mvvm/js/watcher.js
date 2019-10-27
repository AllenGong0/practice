function Compile(el,vm){
    this.$vm = vm;
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    if(this){
        this.$fragment = this.node2Fragment(this.$el);
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    constructor:Compile,
    node2Fragment: function(el){
        let fragment = document.createDocumentFragment()
            ,child;
        

        while(chile = el.firstChild){
            fragment.appendChild(child);
        }

        return fragment;
    },

    init: function(){
        this,compileElement(this.$fragment)
    },


}