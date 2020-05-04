"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharacterCollection.prototype.compare = function (left, right) {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    };
    CharacterCollection.prototype.swap = function (left, right) {
        var splitString = this.data.split("");
        var leftHand = splitString[left];
        splitString[left] = splitString[right];
        splitString[right] = leftHand;
        this.data = splitString.join("");
    };
    return CharacterCollection;
}());
exports.CharacterCollection = CharacterCollection;
