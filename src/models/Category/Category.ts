export enum Category {
    AlwaysForward = 1,
    ThinkingTank = 2,
    Recreation = 3,
    Economic = 4
}
export const CategoryList = Object.values(Category).filter(value => typeof value === 'number');
export function getCategoryString(category: Category): string {
    switch (category) {
        case Category.AlwaysForward:
            return "Siepre Adelante, Ni Un Paso Atrás";
        case Category.ThinkingTank:
            return "Tanque de Pensamiento";
        case Category.Recreation:
            return "Recreación y Acción";
        case Category.Economic:
            return "Desarrollo Económico";
    }
}