/*
* IE 9+、Firefox、Opera、Chrome 和 Safari 都支持 <audio> 标签
* 支持的格式：mp3(所有浏览器)、ogg(IE不支持)
*
*/

//通过ID获取元素
function getElem(id){
  return document.getElementById(id);
}
window.onload = function(){
  var audioElem = getElem("myAudio");
  var btnPlayElem = getElem("btn-play");
  var btnPauseElem = getElem("btn-pause");
  var btnSlientElem = getElem("btn-slient");
  var btnVolumnElem = getElem("btn-volumn");
  var btnVolumnElemAdd = getElem("btn-volumn-add");
  var btnVolumnElemReduce = getElem("btn-volumn-reduce");
  var btnInfoElem = getElem("btn-info");
  var btnForwardElem = getElem("btn-forward")
  var btnBackElem = getElem("btn-back");
  //播放
  btnPlayElem.onclick = function(){
    audioElem.play();
    this.style.display = "none";
    btnPauseElem.style.display = "inline-block"
  }

  //暂停
  btnPauseElem.onclick = function(){
    audioElem.pause();
    this.style.display = "none";
    btnPlayElem.style.display = "inline-block"
  }

  //静音
  btnSlientElem.onclick = function(){
    audioElem.volume = 0;
    console.lg('6');
  }

  //定时器控制进度
  window.setInterval(function(){
    // console.log("Start: " + audioElem.buffered.start(0) + " End: "  + audioElem.buffered.end(0));
    var num = parseInt(audioElem.currentTime) / parseInt(audioElem.duration);
    window.spanplaybar.style.width = Math.floor(num*100) + "%"
  },1000)


  //点击控制进度
  window.progress.onclick = function(ev){
    // ev.stopPropagation();
    // ev.preventDefault();
    var _self = this;
    var percent = ev.offsetX / _self.offsetWidth;
    audioElem.currentTime = audioElem.duration * percent;
    window.spanplaybar.style.width = Math.floor(percent*100) + "%"
  }

  //拖拽控制进度
  var diffX = 0,flag=false;
  
  window.spanprogress_op.onmousedown = function(ev){
    ev.stopPropagation();
    ev.preventDefault();
    diffX = ev.clientX - this.offsetLeft;
    flag = true;
  }
  window.spanprogress_op.onmousemove = function(ev){
    ev.stopPropagation();
    ev.preventDefault();
    if(flag == true){
      console.log(diffX + 4 - event.clientX)
    }else{

    }
    
  }
  window.spanprogress_op.onmouseover = function(ev){
    ev.stopPropagation();
    ev.preventDefault();
    flag = false;
  }


  //控制音量 0.00-1.00 两位小数
  // btnVolumnElem.onclick = function(){
  //   console.log(audioElem.volume);
  // }

  //增加音量
  // btnVolumnElemAdd.onclick = function(){
  //   let volume = audioElem.volume;
  //   volume += 0.01;
  //   if(volume > 1){
  //     volume = 1;
  //     audioElem.volume = volume
  //   }else{
  //     audioElem.volume = volume
  //   }
  //   console.log(volume);
  // }

  //减少音量
  // btnVolumnElemReduce.onclick = function(){
  //   let volume = audioElem.volume;
  //   volume -= 0.01;
  //   if(volume < 0){
  //     volume = 0;
  //     audioElem.volume = volume
  //   }else{
  //     audioElem.volume = volume
  //   }
  //   console.log(volume);
  // }

  //input的type="range"
  // inputRangeElem.onchange = function(){
  //   console.log(this.value)
  // }

  //前进
  btnForwardElem.onclick = function(){
    var speed = 10;
    audioElem.currentTime += speed
  }

  //后退
  btnBackElem.onclick = function(){
    var speed = 10;
    audioElem.currentTime -= speed
  }
  

  //Audio更多信息
  // btnInfoElem.onclick = function(){
  //   console.log(audioElem.duration)
  //   audioElem.currentTime = 100
  // }


}