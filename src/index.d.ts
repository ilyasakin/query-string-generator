export interface IQueryParam {
  key: string;
  value: string | number | string[] | number[] | null;
}

export function stringify(params: IQueryParam[]): string;
