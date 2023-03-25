let QrCode = require("qrcode")
let Express = require("express")

let data = {
    name: "Tejas Panditrao Bhadane",
    Age:"24",
    Branch:"Chemical Engineering",
    City:"Dhule"
}

// console.log(data);
let stringData = JSON.stringify(data)
// console.log(stringData);

// QrCode.toString(stringData,{type:"terminal"},function(err,QrCode){
//     if(err){
//         return console.log("Error Occured");
//     }
//     console.log(QrCode);
// });

QrCode.toDataURL(stringData,function(err,code){
    if(err){
        return console.log("Error Occured");
    }
    console.log(code)
})