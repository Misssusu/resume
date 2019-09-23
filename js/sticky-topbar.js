let topNavBar = document.querySelector('#topNavBar');
let about = document.querySelector('#about');
let skill = document.querySelector('#skill');
let work = document.querySelector('#work');
let munetrigger = document.querySelector('#munetrigger');
let submenu = document.querySelector('#submenu');
let production = document.querySelector('#production');

//页面滚动
window.onscroll = function (evt) {
  if (window.scrollY > 0) {
    topNavBar.classList.add('sticky');
  } else {
    topNavBar.classList.remove('sticky');
  }
  let aboutTop = about.offsetTop; //170
  let skillTop = skill.offsetTop; //894
  let workTop = work.offsetTop; //1261
};

//当鼠标进入的时候显示下拉列表
//1.onmouseenter
//2.加上active类
//3.onmouseleave
//4.去掉active类
munetrigger.onmouseenter = function() {
  submenu.classList.add('active');
  production.classList.add('active');
};
munetrigger.onmouseleave = function() {
  submenu.classList.remove('active');
  production.classList.remove('active');
};
//点击菜单后页面滚动到指定的元素
let aTags = document.querySelectorAll('.topNavBar ul li a');
for(let i=0;i < aTags.length; i++) {
  aTags[i].onclick = function (evt) {
    evt.preventDefault();
    let top = document.querySelector(evt.currentTarget.getAttribute('href')).offsetTop;
    // window.scrollTo(0, top-80);
    //当点击菜单的时候，页面缓缓的滚动到指定的位置
    //循环增加每次滚动的高度直到到达指定的位置
    //1.须知道当前的高度
    //2.须知道每次增加的高度
    //3.须知道每次滚动的高度
    let currentTop = window.scrollY;
    let n = 25; //滚动25次
    let duration = 500 / n;//每次滚动动画的时间
    let targetTop = top - 80; //目标位置
    let distance = (targetTop - currentTop) / n; //每次要滚动的距离
    let i = 0;
    let durationId = setInterval(() => {
      if (i === n) {
        window.clearInterval(durationId);
        return;
      }
      i = i + 1;
      window.scrollTo(0, currentTop + distance * i);
    }, duration)
  }
}