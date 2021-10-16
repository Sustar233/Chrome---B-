
let blackList = ['啊吗粽', '我的音乐你听吗', '雨哥到处跑', 'TF家族'];

if (window.location.pathname == '/video/online.html') {
    let lis = document.getElementsByClassName('ebox');
    for (let i = 0; i < lis.length; i++) {
        let upName = lis[i].getElementsByClassName('author')[0].innerHTML;
        if (blackList.indexOf(upName) !== -1) {
            console.log( upName + '已被暗杀成功');
            lis[i].style.display = 'none'
        }
    }
}