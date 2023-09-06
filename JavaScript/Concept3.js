var a= 10;
var b= 20;
var c= 40;

if(a>b)
{
    console.log("a is greater than b");
    if(a>c)
    {
        console.log("a is greater than all");
    }
    else
    {
        console.log("c is greater than all");
    }
}

else
{
    console.log("b is greater than a");
    if(b>c)
    {
        console.log("b is greater than all");
    }
    else{
        console.log("c is greater than all");
    }
}