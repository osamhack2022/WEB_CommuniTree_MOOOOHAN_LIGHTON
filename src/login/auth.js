const users = [
    { name: "이동균", email: "020315lee@gmail.com", militaryNum: "22-76025739", password: "djtjdhk", }
];

export default users

export function signIn({ militaryNum, password }) {
    const user = users.find(
        (user) => user.militaryNum === militaryNum && user.password === password
    );
    if (user === undefined) {
        return false
    }
    return true;
}