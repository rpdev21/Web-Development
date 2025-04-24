function sum(a)
{
    let sum = 0;
    sum = sum + a;
    return sum;
}

function findtill()
{
    console.log(sum(100));
}

setTimeout(findtill , 1000);
console.log("dont wait buddy");