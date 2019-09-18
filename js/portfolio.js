let portfolioAll = document.querySelector('#portfolioAll');
let portfolioFrameWork = document.querySelector('#portfolioFrameWork');
let portfolioNative = document.querySelector('#portfolioNative');
let bar = document.querySelector('#bar');

portfolioAll.onclick = function () {
  bar.className = 'portfolioBarInner portfolioBarAll';
};
portfolioFrameWork.onclick = function () {
  bar.className = 'portfolioBarInner portfolioBarFrameWork';
};
portfolioNative.onclick = function () {
  bar.className = 'portfolioBarInner portfolioBarNative';
};