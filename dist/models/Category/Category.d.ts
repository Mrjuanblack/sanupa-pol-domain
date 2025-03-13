export interface Category {
    id: number;
    title: string;
}
export declare class CategoryEntity implements Category {
    id: number;
    title: string;
    constructor(id: number, title: string);
}
