// src/common/interfaces/api-response.interface.ts
export interface ApiResponse<T> {
  result: 'success' | 'fail';
  list?: T;
  message?: string;
}
