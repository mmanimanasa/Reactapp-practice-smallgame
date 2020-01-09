import React from 'react';
import Game from './Game';
import Winner from './Winner';
import Board from './Board';

// export default class Square extends React.Component {
//     render() {
//         return (
//             <button className="square"
//             onClick={() => this.props.onClick()} >
//                 {this.props.value}
//             </button>
//         );
//     }
// }
export default function Square(props) {
    return (
        <button className="square" onClick = {props.onClick}>
            {props.value}
        </button>
    )
}