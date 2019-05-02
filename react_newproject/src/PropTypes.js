import React from 'react';
import PropTypes from 'prop-types';
function Greeting(props) {
    return (
        <div className="App">
            {props.name}
        </div>
    );
}
// class Greeting extends React.Component {
//     render() {
//         return (
//             <h1>Hello, {this.props.name}</h1>
//         );
//     }
// }
Greeting.propTypes = {
    name: PropTypes.number,
    // name: 'Stranger'//默认值
};
export default Greeting;
