const textarea=document.getElementById("text-area");
const total=document.getElementById("total_count");
const remaining=document.getElementById("remaining_count");
textarea.addEventListener("keyup" ,()=>{
update();
});
update();
function update(){
     total.innerText=textarea.value.length;
     remaining.innerText=50-textarea.value.length;
}