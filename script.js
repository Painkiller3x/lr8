var name = prompt("Введіть ваше ім'я");
if(name==""){name="NoName";}
const Geralt = document.querySelector('#w1');
Geralt.addEventListener('click',() => { duel(1,name)},{once:true});
const Ciri = document.querySelector('#w2');
Ciri.addEventListener('click',() => { duel(2,name)},{once:true});
const Triss = document.querySelector('#w3');
Triss.addEventListener('click',() => { duel(3,name)},{once:true});
var player=0, comp=0;
function duel(w,name){
	if(w==1){
		$('#w2').remove();
		$('#w3').remove();
	}
	if(w==2){
		$('#w1').remove();
		$('#w3').remove();
	}
	if(w==3){
		$('#w1').remove();
		$('#w2').remove();
	}
	Start()
}
function Start(){
h1.textContent="";
const imge = document.createElement('img');
imge.src ="img/Eredin.jpg";
imge.title = "Eredin"
div1.appendChild(imge);
const div2 = document.createElement('div');
div2.id = "div2";
const body = document.body;
body.appendChild(div2);
const br = document.createElement('br');
div2.appendChild(br);
const btn = document.createElement('button');
btn.innerHTML="Hit";
btn.id = "btn";
btn.addEventListener('click', () => {
	if((player!=3)&&(comp!=3)){
		var r1 = Math.floor(Math.random() * 4);
		var r2 = Math.floor(Math.random() * 4);
	if (r1>=r2){
		player++;
	}
	if (r1<=r2){
		comp++;
	}
	score.textContent = name +":"+player+" Comp:"+comp;
	if((player==3)&&(comp!=3)){alert("Виграв:"+name)}
	if(comp==3){alert("Виграв бот")}
}});
div2.appendChild(btn);
const btn2 = document.createElement('button');
btn2.innerHTML="Restart";
btn2.id = "btn2";
btn2.addEventListener('click', () => {
    player = 0;
	comp = 0;
	score.textContent = name +":"+player+" Comp:"+comp;
});
div2.appendChild(btn2);
const score = document.createElement("p");
div2.appendChild(score);
score.id = "score"
score.textContent = name +":"+player+" Comp:"+comp;
}