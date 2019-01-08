var numsquares=6
var colors=generatecolors(numsquares);
var pickedcolor=pickcolor();
var squares= document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;
var messagedisplay=document.getElementById("message");
var reset=document.querySelector("#reset");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares=3
	colors=generatecolors(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i =0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}

})

hardbtn.addEventListener("click",function(){
	numsquares=6
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	colors=generatecolors(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i =0; i <squares.length; i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
})

reset.addEventListener("click",function(){
	colors=generatecolors(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i =0; i <squares.length; i++) {
	squares[i].style.background=colors[i]
	}
	h1.style.background="steelblue";
	reset.textContent="New Game";
	messagedisplay.textContent="";



})


for (var i =0; i <squares.length; i++) {
	squares[i].style.background=colors[i]

	squares[i].addEventListener("click",function(){
		var clickedcolor= this.style.background;
		console.log(clickedcolor);
		console.log(pickedcolor);
		if(clickedcolor == pickedcolor){
			messagedisplay.textContent="CORRECT";
			changecolors(clickedcolor);
			h1.style.background=clickedcolor;
			reset.textContent="Play Again";
		}
		else{
			this.style.background="#232323";
			messagedisplay.textContent="TRY AGAIN";
		}
	});
}

function changecolors(color){
	for (var i =0; i <squares.length; i++){
		squares[i].style.background=color;
	}

}

function pickcolor(){
	var random=Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generatecolors(num){
	var arr=[]

	for(var i=0;i<num;i++){
		arr.push(randomcolor())
	}


	return  arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	return "rgb("+r+", "+g+", "+b+")";

}