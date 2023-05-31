var baloon = document.querySelectorAll(".baloon" );
// var ss = new SpeechSynthesisUtterance('こんにちは');

var ref = document.referrer;
var hirai = "thirai";
var gms = "gmsmoodle";

var ss = new Date();
var count = function(){
  var ss2 = new Date();
  var txt = "経過時間：" + Math.floor((ss2-ss)/1000) + "秒";
  dom = document.getElementById("time");
  dom.textContent = txt;
}
var timer = setInterval(count, 1000);

for(var i=0; i<baloon.length;i++){
  baloon[i].addEventListener('click', function() {
      // console.log('クリックされました！');
      console.log(this.textContent);
      var ss = new SpeechSynthesisUtterance(this.textContent);
      // var ss = new SpeechSynthesisUtterance('こんにちは');
      // var v = window.speechSynthesis.getVoices();
      // console.log(v[12]);
      // ss.voice = v[12];
      speechSynthesis.speak(ss);  // 発話
  }, false);
}

// scroll animation setting
ScrollReveal().reveal('.anmt', { duration: 1500, delay: 200, opacity: 0, scale:0.5 });
ScrollReveal().reveal('.anmt2', { duration: 1500, delay: 200, opacity: 0, origin: 'right',distance: '1000px',rotate: { x: 0, y: 0, z: 500 },scale:0.5 });


var correct = document.querySelector("#correct");
correct.onclick = testtest;
console.log(correct);
console.log("testestest");
function testtest(){
  console.log("test");
  var ss2 = new Date();
  var t = Math.floor((ss2-ss)/1000);
  if(t<100){
    window.alert('このページを表示していた時間は'+t+'秒です．解答が早いようですが，きちんと説明を読みましたか？戻る場合は，ブラウザの戻るボタンを押してください．');
  }
}
