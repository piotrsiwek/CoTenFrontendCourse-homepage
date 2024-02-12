const header = document.querySelector('.page-header__heading--js');

//header.innerHTML = `My name is ${firstName} and my age is ${age}`;

const contenJS = document.querySelector('.my-article__content--js');
contenJS.innerHTML = `wypełniam treść artykułu z JS wypełniam treść artykułu z JS wypełniam treść artykułu z JSr `;

/* const calculate = (myNumber) => {
    myNumber = myNumber +3 ;
    console.log(myNumber);
    return myNumber*23;

} */

const calculate2 = (myNumber) => (myNumber+2)*2;


/* calculate(12);
 */
console.log(calculate2(13));

const deathStar = {

    diameter: 120000,
    fire: (target) => {
        console.log(`${target} desstssstroyed`);
    },
    
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    isLightOn: true,
    commander: {
        name: 'Darth Vader',
        age: 44,
    }
}

console.log(deathStar.commander.name);

deathStar.fire('Rebel ship');
