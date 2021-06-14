export interface ICategory {
    id: number | string;
    name: string;
    isSelected: boolean;
}

export interface IFilter {
    countries: ICategory[];
    states: ICategory[];
    regions: ICategory[];
    towns: ICategory[];
}

export interface IOption {
    isSelected: boolean
}