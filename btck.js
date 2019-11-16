window.addEventListener("DOMContentLoaded",function(){
    nav=document.getElementsByClassName("navbar");
    logo=document.getElementById('logoNav');
    cart=document.getElementsByClassName('card1');
    window.addEventListener('scroll',function(){
        trangthai=0;
        if(pageYOffset<200){
            nav[0].classList.remove("scroll-nav");
            logo.style.display='none';
            cart[1].style.display='none';
        }
        else{
            nav[0].classList.add("scroll-nav");
            logo.style.display='inherit';
            cart[1].style.display='unset';
        }
    });
    acc=document.querySelector('.account');
    visacc=document.querySelector('.dropdown-menu');
    $(acc).hover(function () {
            visacc.style.display="inherit";
        }, function () {
            visacc.style.display="none";
        }
    );
    title=document.querySelectorAll('.navbar-nav .nav-link');
    console.log(title);
    for(i=0;i<title.length;i++){
        $(title[i]).hover(function () {
            this.style.color="#f39575 !important";
        }, function () {
            this.style.color="#000 !important";
        })
    }
    butcart=document.querySelector('#car1 .btn');
    $(butcart).attr("onclick","window.location.href='cart.html'");
    sowapper=document.querySelectorAll('.so-wapper');
    $(sowapper[0]).attr("onclick","window.location.href='chanhkhonghat.html'");
    $(sowapper[1]).attr("onclick","window.location.href='dautaydalat.html'");
    sowapper1=document.querySelectorAll('.so-wapper1');
    $(sowapper1[0]).attr("onclick","window.location.href='chanhkhonghat.html'");
    $(sowapper1[1]).attr("onclick","window.location.href='dautaydalat.html'");
    p1=document.querySelectorAll('.p-1')
    for(i=0;i<p1.length;i++){
        $(p1[i]).attr("onclick","window.location.href='dautaydalat.html'");
    }
    feaflip=document.querySelectorAll('.flip-box');
    for(i=0;i<feaflip.length;i++){
        $(feaflip[i]).attr("onclick","window.location.href='chanhkhonghat.html'");
    }
    newimg=document.querySelectorAll('#news img');
    $(newimg[0]).attr('onclick',"window.location.href='newdetail1.html'");
    $(newimg[1]).attr('onclick',"window.location.href='newdetail1.html'");
    newbut=document.querySelector('#news .btn');
    $(newbut).attr('onclick',"window.location.href='news.html'");    
    target=document.getElementById('valsmail');
    button=document.getElementById('btsmail');
    button.addEventListener('click',function(){
        value=target.value;
        if((value.includes("@")==false) || (value.indexOf("@")!=value.lastIndexOf("@")) || (value.length<11) || (value.includes(".com")==false)){
            alert("Kiểm tra lại email");
        }
        else{
            alert("Đăng kí thành công");
        }
    })
    
})