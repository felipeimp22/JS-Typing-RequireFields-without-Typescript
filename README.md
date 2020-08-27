# how to make a required field without Typescript

## Hello World !!!! 

first we'll create our javascript archive, when we realize that we need some required field,we need to create a function that will throw an Error if the field dont exists, Exemple:

> <p> const isRequired = (text) => { throw new Error(`${text} is required `) } </p>
 
 then we can use this function in out parameter, exemple:
 
> <p> function teste(user = isRequired('user'), policies = isRequired('policy')){}</p>


<img src="https://raw.githubusercontent.com/felipeimp22/JS-required-field-without-Typescript/master/assets/04.png">

> I'm still writing, soon it will be released
