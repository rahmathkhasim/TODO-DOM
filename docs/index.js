let page=0;
function createNewPage(){
    page+=1;
    localStorage.setItem(page,page);
    console.log("the button is clicked");
    showPages();
}
function showPages(){
    const x =document.getElementById("unlist");
    x.innerHTML="";
    for(let i=1;i<=localStorage.length;i++){
        const li =document.createElement('button');
        const br =document.createElement('br');
        if(localStorage.getItem(i)!=null){
        li.textContent=`page ${localStorage.getItem(i,i)}`;
        li.onclick=function(){
          window.location.href = `pagef/Page.html?page=${i}`;
        }
        li.appendChild(br);
        x.appendChild(li);
      }
}
}
showPages();