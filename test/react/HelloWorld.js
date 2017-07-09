"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ReactDOM = require("react-dom");
var Square = (function (_super) {
    tslib_1.__extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.render = function () {
        return (React.createElement("button", { className: "square" }));
    };
    return Square;
}(React.Component));
var Board = (function (_super) {
    tslib_1.__extends(Board, _super);
    function Board() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Board.prototype.renderSquare = function (i) {
        return React.createElement(Square, null);
    };
    Board.prototype.render = function () {
        var status = 'Next player: X';
        return (React.createElement("div", null,
            React.createElement("div", { className: "status" }, status),
            React.createElement("div", { className: "board-row" },
                this.renderSquare(0),
                this.renderSquare(1),
                this.renderSquare(2)),
            React.createElement("div", { className: "board-row" },
                this.renderSquare(3),
                this.renderSquare(4),
                this.renderSquare(5)),
            React.createElement("div", { className: "board-row" },
                this.renderSquare(6),
                this.renderSquare(7),
                this.renderSquare(8))));
    };
    return Board;
}(React.Component));
var Game = (function (_super) {
    tslib_1.__extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.render = function () {
        return (React.createElement("div", { className: "game" },
            React.createElement("div", { className: "game-board" },
                React.createElement(Board, null)),
            React.createElement("div", { className: "game-info" },
                React.createElement("div", null),
                React.createElement("ol", null))));
    };
    return Game;
}(React.Component));
// ========================================
ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));
//# sourceMappingURL=HelloWorld.js.map