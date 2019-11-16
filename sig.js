window.addEventListener('DOMContentLoaded',function(){
    name=document.getElementById('name');
    email=document.getElementById('email');
    pass=document.getElementById('password');
    pass2=document.getElementById('password-v2');
    button=document.getElementById('submitSign');
    button.addEventListener('click',function(){
        evalue=email.value;
        pvalue=pass.value;
        p2value=pass2.value;
        if((evalue.includes("@")==false) || (evalue.indexOf("@")!=evalue.lastIndexOf("@")) || (evalue.length<11) || (evalue.includes(".com")==false)){
            alert("Kiểm tra lại email");
        }
        else if(pvalue.length<9){
            alert("Pass phải trên 8 kí tự");
        }
        else if(p2value.localeCompare(pvalue)!=0){
            alert("Nhập lại pass không đúng")
        }
        else{
            alert("Đăng kí thành công");
        }
    })
})