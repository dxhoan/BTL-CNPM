listbtn=document.querySelectorAll("#listbutton button");
    listbtn[0].addEventListener('click',function(){
        for(k=0;k<listbtn.length;k++){
            listbtn[k].classList.remove('activebtn');
        }
        this.classList.add('activebtn');
        change=document.getElementsByClassName('item-pr');
        for(i=0;i<change.length;i++){
            // remove tất cả col12
            change[i].classList.remove('col-12');
            change[i].classList.add('col-md-6');
            change[i].classList.add('col-lg-4');
            change[i].classList.add('col-xs-6');
            change[i].setAttribute("style","max-width: 400px;");
        }
        img=document.getElementsByClassName('img-prduct');
        text=document.getElementsByClassName('name-product');
        align=document.getElementsByClassName('fp__wapper');
        // thay css img thành 100%, text thành 100%, style center
        for(i=0;i<img.length;i++){
            img[i].style.width="100%";
            text[i].style.width="100%";
            align[i].removeAttribute("style");
            align[i].setAttribute("style","text-align: center;");
        }
    })
    listbtn[1].addEventListener('click',function(){
        for(k=0;k<listbtn.length;k++){
            listbtn[k].classList.remove('activebtn');
        }
        this.classList.add('activebtn');
        change=document.getElementsByClassName('item-pr');
        for(i=0;i<change.length;i++){
            // add tất cả col12
            change[i].classList.remove("col-md-6");
            change[i].classList.remove("col-lg-4");
            change[i].classList.remove("col-xs-6");
            change[i].classList.add('col-12');
            change[i].removeAttribute("style");
        }
        img=document.getElementsByClassName('img-prduct');
        text=document.getElementsByClassName('name-product');
        align=document.getElementsByClassName('fp__wapper');
        // thay css img thành 30%, text thành 70%, style none
        for(i=0;i<img.length;i++){
            img[i].style.width="30%";
            text[i].style.width="70%";
            align[i].removeAttribute("style");
        }
    })