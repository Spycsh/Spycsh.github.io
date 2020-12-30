function getMarkdown(){
    var xmlhttp;
    var markdownPath = "../content.md";
    if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 得到服务器响应后,对得到的Markdown文档进行解析
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            // 调用marked框架marked函数实现Markdown 到HTML的解析
            document.getElementById("test").innerHTML=marked(xmlhttp.responseText);
        }
    }

    // 向服务器发送请求,获取markdown文档
    xmlhttp.open("GET", markdownPath, true);
    xmlhttp.send();
    
}

getMarkdown();
