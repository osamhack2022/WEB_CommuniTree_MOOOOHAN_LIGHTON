
export function signIn({ mNumber, password, users }) {
  const user = users.find(user => user.mNumber === mNumber && user.password === password);
  if (user === undefined) throw new Error();
  return user;
}