const firstName = 'Piotr Siwek';
let age = 42;



console.log(firstName);
console.log(age);


const header = document.querySelector('.page-header__heading--js');

header.innerHTML = `My name is ${firstName} and my age is ${age}`;