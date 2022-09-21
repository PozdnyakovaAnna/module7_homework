/* создали обЪект user */
const user = {
    name: 'Andrey',
    surname: 'Ivanov',
    age: 18,
  };
  /* создали строку position */
  const position = 'developer';
  /* создали функцию, которая их принимает */
  function searchPropertiesInObj(user, position) {
    /* задаем переменную, значение которой будет true при наличии свойства position в объекте user */
    let decision;
  /* проверяем, есть ли свойство position у объекта user */
  for (let key in user) {
      if (user.hasOwnProperty('position')) 
        decision = true
        else decision = false;
  }
  /* выводим результат */
    return console.log (decision);
  };
  searchPropertiesInObj(user, position);