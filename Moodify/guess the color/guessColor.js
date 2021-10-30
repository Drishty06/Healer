var ans = ".option0";

document.getElementById("newColor").addEventListener("click",generateNewColor);

for(let i = 1; i <= 6; i++){
    const clicked = ".option"+i;
    document.querySelector(clicked).addEventListener("click", function(){
        if(clicked === ans){
            alert("right answer");
        }else{
            alert("wrong answer");
        }
    });
}
function generateNewColor(){
    const RGB = document.querySelector('.color');
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    
    var value = "RGB(" + red + ", " + green + ", " + blue + ")";
    const color = [];
    color.push(value);
    RGB.innerHTML = value;
    
    ans = ".option" + Math.floor(Math.random()*6+1);
    document.querySelector(ans).style.backgroundColor = value;
    
    for(let i = 1; i <= 6; i++){
        const colori = ".option" + i;
        if(colori !== ans){
            red = Math.floor(Math.random()*255);
            green = Math.floor(Math.random()*255);
            blue = Math.floor(Math.random()*255);
            
            var option = "RGB(" + red + ", " + green + ", " + blue + ")";
            if(color.indexOf(option) === -1){
                document.querySelector(colori).style.backgroundColor = option;
            }else{
                i--;
            }
        }
    }
}