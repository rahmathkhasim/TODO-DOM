function createNewPage(){
    let page = Number(localStorage.getItem('pageCount'))||0;
    page+=1;
    localStorage.setItem(page,page);
    localStorage.setItem('pageCount',page);
    showPages();
}
function showPages(){
    const x =document.getElementById("unlist");
    x.innerHTML="";
    for(let i=1;i<=localStorage.length;i++){
        const li =document.createElement('button');
        if(localStorage.getItem(i)!=null){
        li.textContent=`page ${localStorage.getItem(i,i)}`;
        li.onclick=function(){
          window.location.href = `pagef/Page.html?page=${i}`;
        }
        li.style.marginBottom='6px';
        li.style.display='block';
        x.appendChild(li);
      }
}
}
showPages();