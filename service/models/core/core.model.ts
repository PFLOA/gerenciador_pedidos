export interface BaseFilter {
	itemsPerPage: number;
	countTotal: boolean;
	[index: number]: OrdenationAttribute;
	page: number;
}

export interface FilterResponse<T> {
	data: T[];
	count: number;
	page: number;
	pages: number;
	totalCount: number;
}

export interface Entity {
	guid: string;
	dataCadastro: Date;
}

export interface ToQueryParams<T> {
	params: T;
}

interface OrdenationAttribute {
	PropertyName: string;
	Direction: EnumOrderDirection;
}

enum EnumOrderDirection {
	Asc = 0,
	Desc = 1,
}
