import React from "react";
import { board, blackPiece, whitePiece } from "./Graphics";

const PieceType = Object.freeze({
  EMPTY: 0,
  BLACK: 1,
  WHITE: 2
});

class Piece extends React.PureComponent {
  render() {
    const { type, x, y, ghost } = this.props;
    if (type === PieceType.EMPTY) return null;

    return (
      <svg
        width={36}
        height={36}
        x={7 + x * 40}
        y={7 + y * 40}
        opacity={ghost ? 0.67 : 1}
      >
        {type === PieceType.BLACK ? blackPiece : whitePiece}
      </svg>
    );
  }
}

export default class Board extends React.PureComponent {
  static DISPLAY_WIDTH = "80vh";

  static styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      paddingBottom: 50
    }
  };

  constructor(props) {
    super(props);
    const pieces = new Array(15 * 15).fill(PieceType.EMPTY);
    this.state = {
      pieces,
      pieceToMove: PieceType.BLACK,
      hoverY: -1
    };
    this.containerRef = React.createRef();
  }

  makeMove = (clientX, clientY, offsetWidth, offsetTop) => {
    const { x, y } = this.getBoardCoordinates(
      clientX,
      clientY,
      offsetWidth,
      offsetTop
    );
    if (x < 0 || y < 0) return;

    this.setState(({ pieces, pieceToMove }) => {
      if (pieces[x + y * 15] !== PieceType.EMPTY) return {};

      const newPieces = pieces.slice();
      newPieces[x + y * 15] = pieceToMove;
      return {
        pieces: newPieces,
        pieceToMove:
          PieceType.BLACK === pieceToMove ? PieceType.WHITE : PieceType.BLACK
      };
    });
  };

  handleMouseDown = ({
    clientX,
    clientY,
    currentTarget: { offsetWidth, offsetTop }
  }) => {
    this.makeMove(clientX, clientY, offsetWidth, offsetTop);
  };

  handleMouseMove = ({
    clientX,
    clientY,
    currentTarget: { offsetWidth, offsetTop }
  }) => {
    const { x, y } = this.getBoardCoordinates(
      clientX,
      clientY,
      offsetWidth,
      offsetTop
    );
    this.setState({ hoverX: x, hoverY: y });
  };

  handleMouseOut = () => {
    this.setState({ hoverY: -1 });
  };

  handleTouchStart = e => {
    e.preventDefault();
    const {
      currentTarget: { offsetWidth, offsetTop }
    } = e;
    const { pageX, pageY } = e.touches[0];
    const { x, y } = this.getBoardCoordinates(
      pageX,
      pageY,
      offsetWidth,
      offsetTop
    );
    this.setState({ hoverX: x, hoverY: y });
  };

  handleTouchMove = e => {
    e.preventDefault();
    if (e.changedTouches && e.changedTouches.length) {
      const {
        currentTarget: { offsetWidth, offsetTop }
      } = e;
      const { pageX, pageY } = e.changedTouches[0];
      const { x, y } = this.getBoardCoordinates(
        pageX,
        pageY,
        offsetWidth,
        offsetTop
      );
      this.setState({ hoverX: x, hoverY: y });
    }
  };

  handleTouchEnd = e => {
    e.preventDefault();
    const {
      currentTarget: { offsetWidth, offsetTop }
    } = e;
    const { pageX, pageY } = e.changedTouches[0];
    this.makeMove(pageX, pageY, offsetWidth, offsetTop);
  };

  getBoardCoordinates = (clientX, clientY, offsetWidth, offsetTop) => {
    const squareSize = Math.min(40, (offsetWidth * 40) / 608);
    const edgeSize = (squareSize * 24) / 40;
    const marginX = Math.max(0, (offsetWidth - 608) / 2);
    const x = Math.round((clientX - marginX - edgeSize) / squareSize);
    const y = Math.round((clientY - offsetTop - 40 - edgeSize) / squareSize);
    return { x, y };
  };

  render() {
    const iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    const { pieces, pieceToMove, hoverX, hoverY } = this.state;
    return (
      <div
        style={Board.styles.container}
        onMouseMove={iOS ? undefined : this.handleMouseMove}
        onMouseDown={iOS ? undefined : this.handleMouseDown}
        onMouseOut={iOS ? undefined : this.handleMouseOut}
        onTouchStart={iOS ? this.handleTouchStart : undefined}
        onTouchMove={iOS ? this.handleTouchMove : undefined}
        onTouchEnd={iOS ? this.handleTouchEnd : undefined}
      >
        <svg
          width="608"
          viewBox="0 0 608 608"
          style={{ pointerEvents: "none" }}
        >
          {board}
          {pieces.map((p, i) => (
            <Piece key={i} type={p} x={i % 15} y={Math.floor(i / 15)} />
          ))}
          {pieces[hoverX + hoverY * 15] === PieceType.EMPTY && (
            <Piece ghost type={pieceToMove} x={hoverX} y={hoverY} />
          )}
        </svg>
      </div>
    );
  }
}
