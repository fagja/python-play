// 結構前
setInterval(
    function () {
        const elem = document.getElementsByClassName("recsGamepad__button");
        elem[3].click();
    }, 1000)

// 結構前
count = setInterval(
function(){
var buttons = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand D(b) Bgc(#fff) Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a");
buttons[2].click()
},1000)

// 結構前
const clickLikeButton = () => {
  const buttons = document.getElementsByClassName("recsGamepad__button");
  if (buttons) {
    const likeButton = buttons[3];
    likeButton.click();
  } else {
    alert("no buttons");
  }
};

setInterval(clickLikeButton, 1000);



// 2022/3/10追記
function tinderLike() {
    const min = 5, max = 10;
    const rand_time = Math.floor(Math.random() * (max - min + 1) + min);
    const rand_flag = Math.floor(Math.random() * (max - min + 1) + min);
    const good_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-like-green):a")[0];
    const bad_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-pink):a")[0];
  
    try{
        if(rand_flag>7){
            good_elem.click();
        }else{
            bad_elem.click();
        }
    }catch(e){
      console.log( e.message );
    }
    setTimeout(tinderLike, rand_time * 1000);
  }
  
  
  tinderLike()

// 2022/7/19~
function tinderLike() {
    const min = 2, max = 4;
    const rand_time = Math.floor(Math.random() * (max - min + 3) + min);
    const rand_flag = Math.floor(Math.random() * (max - min + 17) + min);
    const good_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-like-green):a")[0];
    const bad_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-pink):a")[0];
  
    try{
        if(rand_flag<20){
            good_elem.click();
        }else{
            bad_elem.click();
        }
    }catch(e){
      console.log( e.message );
    }
    setTimeout(tinderLike, rand_time * 1000);
  }
  
  
  tinderLike()


// 2022/9/3 コード
function tinderLike() {
    const min = 2, max = 6;
    const rand_time = Math.floor(Math.random() * (max - min + 3) + min);
    const rand_flag = Math.floor(Math.random() * (max - min + 17) + min);
    const good_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a")[0];
    const bad_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-nope):a")[0];
  
    try{
        if(rand_flag<22){
            good_elem.click();
        }else{
            bad_elem.click();
        }
    }catch(e){
      console.log( e.message );
    }
    setTimeout(tinderLike, rand_time * 1000);
  }
  
  
  tinderLike()
