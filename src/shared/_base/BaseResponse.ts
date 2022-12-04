export interface BaseResponse {
  error: null | string; // error key, like enum
  message: string;
  data: any;
}
