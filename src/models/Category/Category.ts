export interface Category {
    id: number
    title: string
}

export class CategoryEntity implements Category {
    constructor(
        public id: number,
        public title: string
    ) { }
}