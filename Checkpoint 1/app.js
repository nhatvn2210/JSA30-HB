// Object
let myInfo = {
    fullName : "Phan Minh Nhật",
    dateOfBirth : "22/10/2010",
    gender : "Female",
    email: "coiminhnhat2210@gmail.com",
    phone : "0898601364",
    address : "Số 11, ngõ 5, đường Phạm Ngọc Thạch, Khối Tân Lâm, Phường Hưng Dũng, Thành Phố Vinh, Tỉnh Nghệ An",
}

// DOM variable

let fullName = document.getElementById("full-name");
let dateOfBirth = document.getElementById("date-of-birth");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let myInfoSaved = JSON.parse(localStorage.getItem("my-info"));
let container = document.getElementById("container");
// Main script

localStorage.setItem("my-info", JSON.stringify(myInfo));

fullName.innerText = "Họ và tên: " + myInfoSaved.fullName;
dateOfBirth.innerText = "Ngày sinh: " + myInfoSaved.dateOfBirth;
gender.innerText = "Giới tính: " + myInfoSaved.gender;
email.innerText = "Email: " + myInfoSaved.email;
phone.innerText = "Số điện thoại: " + myInfoSaved.phone;
address.innerText = "Địa chỉ: " + myInfoSaved.address;

if(myInfoSaved.gender == 'male')
{
    container.style.backgroundColor = "black";
    container.style.color = "white";
}
else
{
    container.style.backgroundColor = "pink";
    container.style.color = "black";
}