document.addEventListener('DOMContentLoaded',function(){
    var textarea = document.getElementById("textarea");
    var warningmsg = document.getElementById("warning");
    var countnum = document.getElementById("Count")
    var maxlength = 200;
    

    function updatenumber(){
        var textlength = textarea.value.length;
        countnum.textContent = textlength +'/'+ maxlength + ' Characters';
        if(textlength > maxlength){
            warningmsg.textContent= "Character limit exceeded!";
            warningmsg.style.display ="block";
            countnum.style.color = "red"
            textarea.style.borderColor ="red"
            textarea.value = textarea.value.slice(0,maxlength);
            countnum.textContent = maxlength + "/" + maxlength + 'characters'
        }
        else{
            warningmsg.style.display ="none";
            countnum.style.color = "black"
            textarea.style.borderColor ="black"
        }
    }
    textarea.addEventListener('input',updatenumber)
    updatenumber();
})