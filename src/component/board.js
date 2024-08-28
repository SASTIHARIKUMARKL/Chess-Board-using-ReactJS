import React from 'react';
import {
  FaChessRook,
  FaChessKnight,
  FaChessBishop,
  FaChessQueen,
  FaChessKing,
  FaChessPawn
} from 'react-icons/fa';
import './board.css';

const Board = () => {
  const renderSquare = (piece) => {
    return (
      <td className="square">
        {piece}
      </td>
    );
  };

  const createBoard = () => {
    return (
      <table className="chessboard">
        <tbody>
          <tr>
            {renderSquare(<FaChessRook />)}
            {renderSquare(<FaChessKnight />)}
            {renderSquare(<FaChessBishop />)}
            {renderSquare(<FaChessQueen />)}
            {renderSquare(<FaChessKing />)}
            {renderSquare(<FaChessBishop />)}
            {renderSquare(<FaChessKnight />)}
            {renderSquare(<FaChessRook />)}
          </tr>
          <tr>
            {renderSquare(<FaChessPawn />)}
            {renderSquare(<FaChessPawn />)}
            {renderSquare(<FaChessPawn />)}
            {renderSquare(<FaChessPawn />)}
            {renderSquare(<FaChessPawn />)}
            {renderSquare(<FaChessPawn />)}
            {renderSquare(<FaChessPawn />)}
            {renderSquare(<FaChessPawn />)}
          </tr>
          <tr>
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
          </tr>
          <tr>
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
          </tr>
          <tr>
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
          </tr>
          <tr>
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
            {renderSquare('')}
          </tr>
          <tr>
            {renderSquare(<FaChessPawn style={{ color: 'white' }} />)}
            {renderSquare(<FaChessPawn style={{ color: 'white' }} />)}
            {renderSquare(<FaChessPawn style={{ color: 'white' }} />)}
            {renderSquare(<FaChessPawn style={{ color: 'white' }} />)}
            {renderSquare(<FaChessPawn style={{ color: 'white' }} />)}
            {renderSquare(<FaChessPawn style={{ color: 'white' }} />)}
            {renderSquare(<FaChessPawn style={{ color: 'white' }} />)}
            {renderSquare(<FaChessPawn style={{ color: 'white' }} />)}
          </tr>
          <tr>
            {renderSquare(<FaChessRook style={{ color: 'white' }} />)}
            {renderSquare(<FaChessKnight style={{ color: 'white' }} />)}
            {renderSquare(<FaChessBishop style={{ color: 'white' }} />)}
            {renderSquare(<FaChessQueen style={{ color: 'white' }} />)}
            {renderSquare(<FaChessKing style={{ color: 'white' }} />)}
            {renderSquare(<FaChessBishop style={{ color: 'white' }} />)}
            {renderSquare(<FaChessKnight style={{ color: 'white' }} />)}
            {renderSquare(<FaChessRook style={{ color: 'white' }} />)}
          </tr>
        </tbody>
      </table>
    );
  };

  return createBoard();
};

export default Board;
