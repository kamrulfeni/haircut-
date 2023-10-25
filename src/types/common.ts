export interface IMeta{
  limit: number;
  page: number;
  size: number;
  total:number;
}

export type ResponseSuccessType = {
  data: any ;
  meta?:IMeta
}