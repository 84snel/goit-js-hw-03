const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user['hobby'] = 'skydiving';
user.premium = !true;

const keys = Object.keys(user);
for (let key of keys) {
  console.log(`${key}:${user[key]}`);
}
