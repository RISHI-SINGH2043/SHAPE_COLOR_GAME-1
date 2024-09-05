let x1=document.getElementById(("sq1"));
x1.addEventListener("mouseenter",function(){
let r=Math.floor(Math.random()*100)
x1.innerHTML= `<h1>${r}</h1>`               //backtis
});
x1.addEventListener("mouseleave",function(){
x1.innerHTML=`<h1>1</h1>`;

});
x1.addEventListener("dblclick",function(){
    
        let a=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        let c=Math.floor(Math.random()*256);
        x1.style.backgroundColor=`rgb(${a},${b},${c})`;

})


let x2=document.getElementById(("sq2"));
let clr="greenyellow";
x2.addEventListener("mouseenter",function(){
if(clr=="greenyellow"){
    x2.style.backgroundColor="greenyellow";
    clr="red";
}
else if(clr=="red") {
    x2.style.backgroundColor="red";
    clr="blue";
}
// else if(clr=="blue"){
//     x2.style.backgroundColor="blue";
//     clr="pink";
// }


else {
    x2.style.backgroundColor="blue";
    clr="greenyellow";
}
              
});
x2.addEventListener("mouseleave",function(){
x2.style.backgroundColor="white";
x2.style.color="black";

})
 //rgb(a,b,c) where a,b,c are lies between0 to 255.
let x3=document.getElementById(("sq3"));
x3.addEventListener("mouseenter",function(){
let a=Math.floor(Math.random()*256);
let b=Math.floor(Math.random()*256);
let c=Math.floor(Math.random()*256);
x3.style.backgroundColor=`rgb(${a},${b},${c})`;

});
x3.addEventListener("mouseleave",function(){
x3.style.backgroundColor="white";

})

let x4=document.getElementById(("sq4"));
x4.addEventListener("click",function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    x1.style.backgroundColor=`rgb(${a},${b},${c})`;
    x2.style.backgroundColor=`rgb(${b},${c},${a})`;
    x3.style.backgroundColor=`rgb(${c},${a},${b})`;


});
x4.addEventListener("mouseleave",function(){
x1.style.backgroundColor="white";
x2.style.backgroundColor="white";
x3.style.backgroundColor="white";


});


let main=document.getElementById("main");
let crsr=document.getElementById("crsr");
main.addEventListener("mousemove",function(details){
    crsr.style.left = details.x +"px";
    crsr.style.top = details.y +"px";
});



