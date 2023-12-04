export type TokenState = {
  isLoad: boolean,
  error: unknown,
  token: string | null,
}

export type FetchTokenResponse = {
  success: boolean,
  token: string,
}
