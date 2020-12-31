function getMarkdown(markdownPath){
    var xmlhttp;
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

//获取用户语言的顺序是
//1.获取本地缓存里的内容
//2.用户浏览器的语言设置
//如果上面2个都没有获取到，就直接使用'en'作为用户选择的语言
var language = localStorage.getItem('locale') || window.navigator.language.toLowerCase() || 'en'
//把用户的语言写入缓存，供下次获取使用
localStorage.setItem('locale', language);

var markdownPath = "content.md";
//判断用户的语言，跳转到不同的地方
if (language.indexOf("zh-") !== -1) {
    markdownPath = "../content_zh-cn.md"
} // 其它的都用英文

getMarkdown(markdownPath);
