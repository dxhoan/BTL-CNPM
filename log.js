window.addEventListener('DOMContentLoaded',function(){
    user=document.getElementById('username');
    pass=document.getElementById('password');
    button=document.getElementById('submit');
    button.addEventListener('click',function(){
        uvalue=user.value;
        pvalue=pass.value;
        flag=1;
        console.log(uvalue);
        for(i=0;i<uvalue.length;i++){
            if( (uvalue.charCodeAt(i)<48) || (uvalue.charCodeAt(i)>57) ){
                flag=0;
                break;
            }
        }
        if( ( (uvalue.includes("@")==true) && (uvalue.indexOf("@")==uvalue.lastIndexOf("@")) && (uvalue.length>=11) && (uvalue.includes(".com")==true) || ( (flag==1) && ( (uvalue.length==9) || (uvalue.length==10)) ) ) && (pvalue.length>8)){
            alert("Đăng kí thành công");
        }
        else{
            alert("Thông tin nhập lỗi, yêu cầu nhập lại");
        }
    })
})