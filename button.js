window.addEventListener('DOMContentLoaded',function(){
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