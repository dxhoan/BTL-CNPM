window.addEventListener("DOMContentLoaded",function(){
    up=document.querySelectorAll(".fa-arrow-circle-o-up");
    down=document.querySelectorAll(".fa-arrow-circle-o-down");
    num=document.querySelectorAll(".ip-cart");
    total=document.querySelectorAll(".total");
    i1=1;
    i2=1;
    i3=1;
    i0=1;
    c0=125;
    $(up[0]).click(function (e) { 
        e.preventDefault();
        i0++;
        c0+=125;
        num[0].setAttribute("value",i0);
        total[0].innerHTML=c0+".000đ";
    });
    $(down[0]).click(function (e) { 
        e.preventDefault();
        i0--;
        c0-=125;
        num[0].setAttribute("value",i0);
        total[0].innerHTML=c0+".000đ";
    });
    $(up[1]).click(function (e) { 
        e.preventDefault();
        i1++;
        num[1].setAttribute("value",i1);
        total[1].innerHTML=i1+"00.000đ";
    });
    $(down[1]).click(function (e) { 
        e.preventDefault();
        i1--;
        num[1].setAttribute("value",i1);
        total[1].innerHTML=i1+"00.000đ";
    });
    $(up[2]).click(function (e) { 
        e.preventDefault();
        i2++;
        num[2].setAttribute("value",i2);
        total[2].innerHTML=i2+"00.000đ";
    });
    $(down[2]).click(function (e) { 
        e.preventDefault();
        i2--;
        num[2].setAttribute("value",i2);
        total[2].innerHTML=i2+"00.000đ";
    });
    $(up[3]).click(function (e) { 
        e.preventDefault();
        i3++;
        num[3].setAttribute("value",i3);
        total[3].innerHTML=i3+"00.000đ";
    });
    $(down[3]).click(function (e) { 
        e.preventDefault();
        i3--;
        num[3].setAttribute("value",i3);
        total[3].innerHTML=i3+"00.000đ";
    });
    restotal=document.querySelectorAll("#table-money td");
    button=document.getElementById("submit-cart");
    $(button).click(function (e) { 
        e.preventDefault();
        restotal[0].innerHTML=i0*125+i1*100+i2*100+i3*100+".000đ";
        restotal[2].innerHTML=i0*125+i1*100+i2*100+i3*100+50+".000đ";
    });
})