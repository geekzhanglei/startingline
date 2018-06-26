<!--
	//设计Mario类
	function Mario()
	{

		
		//设计移动0上1右2下3左的方法
		this.move=move;
		function move(direct)
		{		
			switch(direct)
			{
				case 0:
					//上移动
					var mymario=document.getElementById('mymario');
					var top=mymario.style.top;
					top=parseInt(top);     //parseInt用来解析字符串中的数字
																//substr提取从参数1开始参数2长度的字符串,该函数可以省略
					mymario.style.top=(top-30)+"px";
    				break;
				case 1:
					//右移动
					var mymario=document.getElementById('mymario');
					var left=mymario.style.left;
					left=parseInt(left.substr(0,left.length-2));
					mymario.style.left=(left+30)+"px";
					break;
				case 2:
					//下移动
					var mymario=document.getElementById('mymario');
					var top=mymario.style.top;
					top=parseInt(top.substr(0,top.length-2));
					mymario.style.top=(top+30)+"px";
					break;
				case 3:
					//左移动
					var mymario=document.getElementById('mymario');
					var left=mymario.style.left;
					left=parseInt(left.substr(0,left.length-2));
					mymario.style.left=(left-30)+"px";
					break;
			}
		// 设计接触处理
			var mymario=document.getElementById('mymario');
			
			var mysurprise=document.getElementById('surprise');
			mysurprise.src="../image/祝福.gif";
			var top=mymario.style.top;
			var left=mymario.style.left;
			top=parseInt(top);
			left=parseInt(left);
			if ((top<280)&&(top>120))
				if((left<380)&&(left>220))
				{
				var	vbool=confirm("摸摸哒(*^__^*) 亲！");
				mysurprise.src="../image/相濡以沫.gif";	
				}
				
		}
		

	}
	var mario=new Mario();
	


//-->