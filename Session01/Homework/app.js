// bai 1
// let a = prompt ("nhap so vao day");
// if (Number(a)<0) {
//     console.log("invalid input");
// } else {
//     let result = 1;
//     for (let index = 0; index < Number(a); index++) {
//         result = result * (index + 1);
//     }
//     console.log(result)
// }

// bai 2
// let a = prompt ("nhap ten vao day");
// let b = prompt ("nhap tuoi ");
// let result = ""
// if (Number(b)<18) {
//     result = "Khong du tuoi vao web";
// } else {
//     result = "ban co muon dang nhap vao web";
//     let c = prompt("answer");
//     if (c === "yes") {
//         result = a + "da vao trang web thanh cong";       
//     } else {
//         result = a + "da thoat khoi trang web";
        
//     }

// }
// console.log(result);

//bai 3
// let username2 = "manh dien";
// let password2 = "manh12345";
// let username = prompt("Nhap username");
// let password = prompt("nhap password");
// let result = "";
// if (username === username2 && password === password2) {
//     result = "dang nhap thanh cong";
// } else if (username === username2 && password !== password2) {
//     result = "wrong password";
// } else {
//     result = "wrong name";
// }
// console.log(result)

//bai 4
// let username = prompt("nhap ten");
// let month = prompt("nhap thang sinh");
// let result = ""
// switch(Number(month)){
//     case 1:
//     case 2:
//     case 3:
//         resuslt = username + " sinh mua xuan";
//         break;
//         case 4:
//         case 5:
//         case 6:
//         result = username + " sinh mua ha";
//         break;
//         case 7:
//         case 8:
//         case 9:
//         result = username + " sinh mua thu";
//         break;
//         case 10:
//         case 11:
//         case 12:
//         result = username + " sinh mua dong";
//         break;
//         default:
//         result = "input khong hop le";
// }
// console.log(result);

//bai 5

// let a = prompt("Nhap a : ");
// let b = prompt("Nhap b : ");
// let c = prompt("Nhap c : ");

// let delta = b*b - 4 * a * c; 

// if(delta < 0){
//     console.log("Phuong tinh vo nghiem");
// }else if(delta === 0){
//     console.log("x = " + (-b/(2 * a)));
// }else{
//     console.log("x1 = " + ((-b + Math.sqrt(delta))/ 2 * a));
//     console.log("x1 = " + ((-b - Math.sqrt(delta))/ 2 * a));
// }

//bai6


// let check = true;
// while(check){
//     let a = prompt("Nhập chuỗi cần đảo ngược : ");
//     let aReverse = "";
//     for(let i = a.length; i > 0; i--){
//         aReverse += a[i - 1];
//     }
//     console.log(aReverse);
//     let b = prompt("Bạn có muốn tiếp tục chương trình không");
//     if(b !== "yes"){
//         check = false;
//     }
// }