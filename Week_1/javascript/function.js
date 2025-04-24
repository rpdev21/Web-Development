//calllback = passing function inside a function
function sum(num1 , num2 , a)
{
    let result = num1 + num2;
    a(result);
}

function hello(data)
{
    console.log("bevkuf ye dekh :"+ data);
}

function bye(data)
{
    console.log("ye dekh bhai:"+data);
}
const ans = sum(1 , 2 , bye);
