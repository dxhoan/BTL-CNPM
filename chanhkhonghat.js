window.addEventListener('DOMContentLoaded',function(){
    imgchanh=document.querySelectorAll("#gallery_01 a");
    for(i=0;i<imgchanh.length;i++){
        imgchanh[i].addEventListener('click',function(){
            srcimg=this.getAttribute("data-image");
            target=document.getElementById('zoom_03');
            target.removeAttribute("src");
            target.setAttribute("src",srcimg);
        })
    }
})