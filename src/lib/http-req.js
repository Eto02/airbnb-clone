export async function setHeaderAPI(token, other = {}) {
  return {
    headers: {
      ...other,
      Authorization: token,
    },
  };
}
