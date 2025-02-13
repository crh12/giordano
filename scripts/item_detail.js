const thumnail = document.querySelectorAll('.thum_wrap a img');
const bigImg = document.querySelector('.p_img img');
console.log(thumnail,bigImg)
console.log(bigImg.src)

function bigSrc(num){
  return bigImg.src = `./images/productImg_00${num}.jpg`;
};

thumnail[0].addEventListener('mouseover', function(){
  bigSrc(1);
})
thumnail[1].addEventListener('mouseover', function(){
  bigSrc(2);
})
thumnail[2].addEventListener('mouseover', function(){
  bigSrc(3);
})
thumnail[3].addEventListener('mouseover', function(){
  bigSrc(4);
})
thumnail[4].addEventListener('mouseover', function(){
  bigSrc(5);
})
thumnail[5].addEventListener('mouseover', function(){
  bigSrc(6);
})