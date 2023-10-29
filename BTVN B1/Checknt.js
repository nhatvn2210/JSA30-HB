// Variable
let InPut = prompt("Nhập số cần kiểm tra");
// Function
function checkNT(x)
{
    let Sqrt = Math.sqrt(x);
    for(let i = 2; i <= Sqrt; i++)
    {
        if(x % i == 0)
        {
            return false;
        }
    }
    return (x > 1);
}
// Main script
let kq = checkNT(Number(InPut));
if(kq == true)
{
    alert(` ${InPut} là một số nguyên tố!`);
}
else
{
    alert(` ${InPut} không phải là một số nguyên tố!`);
}