export const fetchFromDb = async (route: string) => {
  const response = await fetch(route);
  const data = await response.json();
  return data;
};

export const writeToDb = async (route: string, body: any) => {
  const respone = await fetch(route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return respone;
};

export const checkExistingUser = async (credential: string) => {
  const data = await fetchFromDb(process.env.FIREBASE_BD_USERS!);

  for (const key in data) {
    if (data[key].email === credential) {
      return data[key];
    }
  }
  return false;
};
