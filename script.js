const btn=document.querySelector("button");
const para=document.querySelector("p");
const delivery=document.querySelector(".delivery");
const api="https://v2.jokeapi.dev/joke/Any?safe-mode";

btn.addEventListener("click", getJoke);

function  getJoke(){
	fetch(api)
	.then((res)=>res.json())
	.then((data)=>{
		para.innerHTML=`${data.setup}`;
		delivery.innerHTML=`${data.delivery}`;
	})
	.catch(()=>{
     para.innerHTML="Not Found";
	});

}