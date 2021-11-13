
let blackList = localStorage.getItem("shieldBiliRank") ? localStorage.getItem("shieldBiliRank") : ['拜托了小翔哥' ,'中国BOY超级大猩猩' ,'小文哥吃吃吃','在下哲别','记录生活的蛋黄派', '啊吗粽', '我的音乐你听吗', '雨哥到处跑', 'TF家族', '老师好我叫何同学', '力元君'];

// 判断当前地址是否在播放排行页面
if (window.location.pathname == '/video/online.html') {
    // 遍历排行榜的每个视频信息
    let lis = document.getElementsByClassName('ebox');
    for (let i = 0; i < lis.length; i++) {
        // 遍历作者名
        let upName = lis[i].getElementsByClassName('author')[0].innerHTML;
        if (blackList.indexOf(upName) !== -1) {
            console.log( upName + '已被暗杀成功');
            lis[i].style.display = 'none'
        }
    }
}