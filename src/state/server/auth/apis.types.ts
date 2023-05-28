type JWTDTO = {
  grantType: "Bearer";
  accessToken: string;
  refreshToken: string;
};

export type SignInRequestDTO = {
  email: string;
  password: string;
};

export type SignInResponseDTO = API.DefaultResponse<{
  email: string;
  nickname: string;
  gender: string;
  jwtDto: JWTDTO;
}>;
