import React from 'react'
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);

        this.textInput = null;

        this.setTextInput = element => {
            console.log(element)
            this.textInput = element;
        };

        this.focusTextInput = () => {
            // 直接使用原生 API 使 text 输入框获得焦点
            console.log("----------")
            console.log(this.textInput)
            console.log("----------")
            if (this.textInput)
                this.textInput.focus();

        };
    }

    componentDidMount() {
        // 渲染后文本框自动获得焦点
        this.focusTextInput();
    }

    render() {
        // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
        // 实例上（比如 this.textInput）
        return (
            <div>
                <input
                    type="text"
                    ref={this.setTextInput}
                />
                <div  ref={this.setTextInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}
export default CustomTextInput;