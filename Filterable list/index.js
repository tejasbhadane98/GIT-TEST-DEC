let parentdiv = document.querySelector("#div");
let arr;
countrySearch();

function countrySearch() {
    fetch("/data.json").then((res) => {
        return res.json()
    }).then((data) => {
        arr = data
        for (let i = 0; i < arr.length; i++) {
            let p = document.createElement("p")
            parentdiv.appendChild(p);
            p.innerHTML = data[i].region;
        }
    })
}

document.querySelector("#Search").addEventListener(".input", (e) => {
    let val = e.target.value;
    document.querySelectorAll("p").forEach((para) => {
        if (para.innerText.toLowerCase().includes(val) && val.length > 0) {
            para.style.display = "block";
        } else {
            para.style.display = "none";
        }
    })
})
// let srch = document.getElementById("ipt").value
// let output
// fetch("./data.json")
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//         output = data
//     })

// function datafilter() {
//     let countryName = output.filter((user) => {
//         return user.completed === true
//     })
//     // console.log(countryName);
//     document.getElementById("result").innerHTML=`
//     <ul>
//      ${countryName.map((user) => {
//         return `<li>${user.title} ${user.completed}</li>`
//     })}
//     </ul>`

// }