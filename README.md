# how to make a required field without Typescript

## Hello World !!!! 

first we'll create our javascript archive, when we realize that we need some required field,we need to create a function that will throw an Error if the field dont exists, Exemple:

> <p> const isRequired = (text) => { throw new Error(`${text} is required `) } </p>
 
 then we can use this function in out parameter, exemple:
 
> <p> function teste(user = isRequired('user'), policies = isRequired('policy')){}</p>

<img src="https://raw.githubusercontent.com/felipeimp22/JS-required-field-without-Typescript/master/assets/04.png">


### what if I call the function whitout the fields ?
HERE is the result:

<img src="https://github.com/felipeimp22/JS-required-field-without-Typescript/blob/master/assets/01.png?raw=true">

<img src="https://github.com/felipeimp22/JS-required-field-without-Typescript/blob/master/assets/03.png?raw=true">


### If everything is right 

<img src="https://github.com/felipeimp22/JS-required-field-without-Typescript/blob/master/assets/05.png?raw=true">


>  I hope you enjoy, will be back for more articles like that

<img src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/programador-de-game.jpg">
