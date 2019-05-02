import React from 'react'
class MyRef extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：通过 "current" 取得 DOM 节点
        this.textInput.current.focus();
        console.log(this.textInput)
       // React 会在组件加载时将 DOM 元素传入 current 属性，
       // 在卸载时则会改回 null。ref 的更新会发生在componentDidMount 或 componentDidUpdate 生命周期钩子之前。
        
    }
    // fn(){
    //     const node = this.myRef.current;
    // }
    render() {
        return(
            <div >
                <input
                    type="text"
                    ref={this.textInput} />


                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
            )
        ;
    }
}
export default MyRef;