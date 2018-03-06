var options = {
    controls: true,
    plugins: {
      videoJsResolutionSwitcher: {
        default: 'high', // Default resolution [{Number}, 'low', 'high'],
        dynamicLabel: true
      }
    }
};
var video=videojs('my-video', options, function(){
	var player = this;
    window.player = player
    player.updateSrc([
      {
        src: 'http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4',      //低清晰度视频源
		type: 'video/mp4',
		label: '高清',//显示的文字
		res: 360 //码率
      },
      {
        src: 'http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4',   //高清晰度视频源
		type: 'video/mp4',
		label: '原画',//显示的文字
		res: 720 //码率
      }
    ])
    player.on('resolutionchange', function(){
      console.info('Source changed to %s', player.src())
    })
});


video.ready(function() {
	this.play();
	this.hotkeys({
		volumeStep: 0.1,
		seekStep: 5,
		enableModifiersForNumbers: false
	  });
	  //test()
});


function test()
{
	  setInterval(test2,50)
}

function test2(){
	var whereYouAt = video.currentTime();
	if(whereYouAt%5>4.5 ){
		if(whereYouAt%5>4.52){
			alert('已快进');
			video.currentTime(whereYouAt+6);
		}
		else
			alert('后台操作中');
	}
};

video.on('pause',function(){
	if(this.remainingTime()==0)
		alert('视频播放结束');
	else
		alert('还有' + this.remainingTime() + '秒结束');
});
