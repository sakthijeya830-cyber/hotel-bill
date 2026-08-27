// conditional
type car<T>=T extends number?true:false;
type work1=car<number>
type work2=car<number>
type work3=car<56>

let a:car<number>;
let b:car<number>;
const check =(value:unknown):boolean=>{
    return typeof value==="number"?true:false;
}
console.log(check("33"));
console.log(check("number"));
console.log(check("88"));


//namespace

namespace math{
    export function adds(a:number,b:number):number{
        return a+b;
    }
    export function subs(a:number,b:number):number{
        return a-b;
    }
    export function multi(a:number,b:number):number{
        return a*b;
        }
    export function divs(a:number,b:number):number{
        return a/b;
        }
    export function mods(a:number,b:number):number{
        return a%b;
        }}


    
let result1=math.adds(34,56);
let result2=math.subs(34,56);
let result3=math.multi(34,56);
let result4=math.divs(34,56);
let result5=math.mods(34,56);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);