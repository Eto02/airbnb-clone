interface HeaderOptions {
  [key: string]: string;
}

interface HeaderConfig {
  headers: {
    Authorization: string;
    [key: string]: string;
  };
}

export async function setHeaderAPI(
  token: string,
  other: HeaderOptions = { "Content-Type": "application/json" }
): Promise<HeaderConfig> {
  return {
    headers: {
      ...other,
      Authorization: token,
    },
  };
}
