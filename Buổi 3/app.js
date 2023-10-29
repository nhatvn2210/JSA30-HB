// Variable
let n = 60;
// Function
function checkDivideto2(x) {
    return (x % 2 == 0);
}
// Main script
for (let i = 1; i <= n; i++) {
    if( checkDivideto2(i) )
    {
        console.log(i);
    }
}