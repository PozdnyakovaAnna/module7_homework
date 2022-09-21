/* создали обЪект user */
const user = {
  name: 'Andrey',
  surname: 'Ivanov',
  age: 18
};
function getObjOutputProperties(user) {
/* выводим ключ:значение */
for (let key in user) {
    if (user.hasOwnProperty(key))
      console.log (key+ ': ' + user[key])
}
};
getObjOutputProperties(user);