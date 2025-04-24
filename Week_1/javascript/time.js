function greet ()
{
    console.log("hello world");
}

function greet1()
{
    console.log("bye world");
}

setTimeout(greet , 5*1000);
//inbuilt global function in js used to set the time to display the output
setInterval(greet , 1*1000);