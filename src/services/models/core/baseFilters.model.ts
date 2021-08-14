export interface BaseFilter {
  itemsPerPage: number;
  CountTotal: boolean;
  [index: number]: OrdenationAttribute;
  Page: number;
}

interface OrdenationAttribute {
  PropertyName: string;
  Direction: EnumOrderDirection;
}

enum EnumOrderDirection {
  Asc = 0,
  Desc = 1
}