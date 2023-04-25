const curries = [" Eur", " Usd", " Gbp"]
const colors = [    // RGB colors
    ["rgb(107, 107, 164)", "rgb(28, 25, 52)",'rgb(56, 56, 116)'],
    ["rgb(0, 148, 211)", "rgb(93, 25, 94)",'rgb(36, 85, 153)'],
]
const math = [   // Currency calculation
    [1, 1.18, 0.86],
    [0.85, 1, 0.73],   
    [1.17, 1.38, 1]   
]
let i = 0
function functionbut(){     // function that calculates
    let cur1 = document.getElementById("select1").value*1
    let cur2 = document.getElementById("select2").value*1
    let sk1 = document.getElementById("input1").value*1
    document.getElementById("final1").innerHTML = (sk1 * math[cur1][cur2]).toFixed(2) + curries[cur2]
    document.getElementById("curd1").innerHTML = curries[cur1]
    document.getElementById('lygu').innerHTML = "="
}

function changeColor(){     // function that changes color
    var styles = `
    body{
        font-family: Arial, Helvetica, sans-serif;
        color:`+ colors[i][0] +`;
        background-color:`+ colors[i][1] +`;
        
    }
    .input1:hover{
        box-shadow: 0px 0px 20px 0px `+ colors[i][0] +`;
    }
    .input1:active{
        box-shadow: 0px 0px 30px 0px `+ colors[i][0] +`;
    }
    .input1{
        padding: 8px;
        font-size: 32px;
        
        margin-left: 20px; 
        margin-right: 20px;
        background-color:`+ colors[i][2] +`;
        color:`+ colors[i][0] +`;
        border: solid 1px `+ colors[i][2] +`;
        border-radius: 10px;
    }
    ::placeholder{
        color:`+ colors[i][0] +`;
        opacity: 0.7;
    }
    .p2{
        font-size: 24px; 
        background-color: `+ colors[i][2] +`;
    }
    footer{
        width: 100%;
        padding: 0px 0px 0px 0px;
        background-color: `+ colors[i][2] +`;
        position: fixed;
        bottom: 0;
        left: 0;
        text-align: center;
    }
`
var styleSheet = document.createElement("style")    // this puts everything to css, yk
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
i++
if(i >= colors.length){     // this makes, that the colors can go again, idk
    i = 0
}
}




// --- Navyciok 2023 --- //