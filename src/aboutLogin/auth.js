const users = [
    { mNumber: '22-76025739', email: 'kim@test.com', password: '123', name: 'Kim' },
    { mNumber: '21-76025739', email: 'lee@test.com', password: '456', name: 'Lee' },
    { mNumber: '20-76025739', email: 'park@test.com', password: '789', name: 'Park' }
]

export default users

export function signIn({ mNumber, password }) {
  const user = users.find(user => user.mNumber === mNumber && user.password === password);
  if (user === undefined) throw new Error();
  return user;
}