

	var myVideo=document.getElementById('video1');
	function playPause()
		{ 
		if(myVideo.paused) 
			{myVideo.play();} 
		else 
			{myVideo.pause();} 
		} 
	function makeBig()
		{ 
		myVideo.width=600; 
		} 
	function makeSmall()
		{ 
		myVideo.width=320; 
		} 
	function makeNormal()
		{
		myVideo.width=420; 
		}
	function enablePreload()
		{ 
		myVideo.preload='auto';
		}