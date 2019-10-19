
let number = 10;

function setNumber() {
   
    let number =20;
    console.log(number);

    name = 'Adam'; // mozna bez let - wtedy zostaje zadeklarowana globalnie, chyba ze damy strict mode 'use trict'
    console.log(name);
}

setNumber();
console.log(number);
console.log(name);