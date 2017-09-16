function makeWafflesImg(){
  var el=document.createElement("img");
  el.style.top="50px";
  document.body.appendChild(el);
  el.outerHTML="<img src='http://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/43/14/3/picdxIk5v.jpg'>";
  return el;
}
makeWafflesImg();
document.querySelector("h1").innerHTML="WAFFLE";
var text = document.querySelector("h1");


var f=document.querySelector("img");
setInterval(function(){
  f.style.display=(f.style.display=="none"? "" : "none");
},1000);

function makeSmallWaffles(){
  var el=document.createElement("h2");
  el.style.color="yellow";
  el.style.top="50px";
  document.body.appendChild(el);
  el.innerHTML="WAFFLE";
  return el;
}

var backGround="";
for(var i=0; i<10; i++){
  for(var j=0; j<=10; j++){
    if((i+j)%2==0){
    backGround+="      ";
  }else {
      backGround+=makeSmallWaffles();
    }
    backGround+="\n";
  }

}
