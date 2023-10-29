let n = 60;
let kq = `Các số chẵn từ 1 đến ${n} là: `; 
for(let i = 1 ; i <= n; i++)
{
    if(i % 2 == 0)
    {
        kq += `${i}, `;
    }
}
console.log(kq);