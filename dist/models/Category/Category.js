"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryList = exports.Category = void 0;
exports.getCategoryString = getCategoryString;
var Category;
(function (Category) {
    Category[Category["AlwaysForward"] = 1] = "AlwaysForward";
    Category[Category["ThinkingTank"] = 2] = "ThinkingTank";
    Category[Category["Recreation"] = 3] = "Recreation";
    Category[Category["Economic"] = 4] = "Economic";
})(Category || (exports.Category = Category = {}));
exports.CategoryList = Object.values(Category).filter(value => typeof value === 'number');
function getCategoryString(category) {
    switch (category) {
        case Category.AlwaysForward:
            return "Siempre Adelante, Ni Un Paso Atrás";
        case Category.ThinkingTank:
            return "Tanque de Pensamiento y Liderazgo";
        case Category.Recreation:
            return "Recreación y Acción";
        case Category.Economic:
            return "Desarrollo Económico";
    }
}
