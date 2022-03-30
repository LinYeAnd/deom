//ajax 封装
/* method  请求方式
url           请求地址
success  回调函数
data        带给 服务端的数据
type        同步还是异步 */
function ajax(method, url, data, success, type) {
    //1.创建 XMLHttpRequest对象
    try {
        var xhr = new XMLHttpRequest();
    } catch (e) {
        var xhr = ActiveXObject('Microsoft.XMLHTTP');
    }

    //2.判断 提交方式
    if (method == 'get') {
        url += '?' + data;
    }
    //3.打开连接
    xhr.open(method, url, type);
    //4.发送数据
    if (method == 'get') {
        xhr.send();
    } else {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    //5.等待 返回结果； 接收数据，执行回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.responseText);
                //调用回调函数，并将结果传过去
                success && success(xhr.responseText);//先判断 success函数是否存在，如果存在就调用这个函数
            } else {
                console.log("出错了" + xhr.status);
            }


        }
    }

}