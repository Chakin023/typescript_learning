//type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[]
type Guitarist = {
    name?: String,
    active: boolean,
    albums: stringOrNumberArray
};

type UserId = stringOrNumber

//Literal types
let userName: 'Chakin' | 'Chakin2' | 'Chakin3'
userName = 'Chakin'

//function

const add = (a:number, b:number):number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello');
logMsg(add(1,2));

const subtract = (c:number, d:number):number => {
    return c - d
}

// type mathFunction = (a:number, b:number) => number //this can write 2 ways using type or interface
interface mathFunction {(a:number, b:number):number}

const multiply: mathFunction = function (c,d) {
    return c*d
}

//optional parameters
const addAll = (a: number, b: number, c?: number):number => {
    if (typeof c !== 'undefined') {
        return a+b+c
    } else {
        return a+b
    }
    
}

//default value
//ps. type aliases cant set the defaul value
const sumAll = (a: number, b: number, c: number =2):number => {
   return a+b+c
    
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3,5))
logMsg(sumAll(2,3))

//Rest parameters (...)
//this mean user must sent at least 1 number to function
const total = (a:number, ...nums: number[]):number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

//Never return type
const createError = (errMsg: string):never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        // if(i> 100) {
        //     break
        // } //if there is no this sentence there will be type :never, but if this sentence exist there will be type :void
    }
}

//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

//use of the never type
const numberOrString = (value: number | string):string => {
    if(typeof value === 'string') {
        return 'string'
    }
    if(isNumber(value)) {
        return 'number'
    }
    return createError('This cannot be happen')
}