/**
 * Use for service function that return entity
 */
export interface BaseEntityResponse {
  error: null | string; // error key, like enum
  message?: string;
  entity?: any;
}

export interface BaseEntitiesResponse {
  error: null | string; // error key, like enum
  message?: string;
  entities?: any;
}
