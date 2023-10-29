let a = prompt("Nhập độ dài cạnh thứ nhất.");
a = Number(a);
let b = prompt("Nhập độ dài cạnh thứ hai.");
b = Number(b);
let c = prompt("Nhập độ dài cạnh thứ ba.");
c = Number(c);
let p = (a + b + c)/2;
let kq = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log(`Diện tích tam giác có độ dài ba cạnh lần lượt là ${a}, ${b}, ${c} là ${kq}.`);