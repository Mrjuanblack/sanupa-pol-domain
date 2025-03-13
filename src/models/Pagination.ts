export interface PaginationRequest {
    page: number,
    pageSize: number
}

export interface PaginationResult<T> {
    items: T[],
    totalItems: number,
    page: number,
    pageSize: number
}