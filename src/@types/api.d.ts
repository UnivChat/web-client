declare namespace API {
  type DefaultResponse<T> = {
    code: string;
    message: string;
    result: T;
  };
}
