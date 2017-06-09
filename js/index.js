$(function(){
		var wEi=$('.nav-code');
		var wEi1=$('.nav-weixin');
		var Bar=$('.nav-login span');
		var Ul=$('.nav-login span ul');
		var oBar2=$('.content_bar2');
		var oconul=$('.content_ul');

		// bar('wEi1','wEi');
		wEi1.mouseenter(function(){
			wEi1.css('background','white');
			wEi.css('display','block');
		})		
		wEi1.mouseleave(function(){
			wEi.css('display','none');
			wEi1.css('background','#f2f2f2');
		})		
		Bar.mouseover(function(){
			Ul.css('display','block');
		})
		Bar.mouseout(function(){
			Ul.css('display','none');
		})
	$('.content_bar2').mouseenter(function(){
		$('.content_bar2').removeClass('active');
		$('.content_ul').removeClass('active');
		$(this).addClass('active');
		$('.content_ul').eq($(this).index()).addClass('active');
		})
	$('.content_ul').mouseenter(function(){
		$('.content_bar2').removeClass('active');
		$('.content_ul').removeClass('active');
		$(this).addClass('active');
		$('.content_bar2').eq($(this).index()).addClass('active');
		})
	oconul.mouseleave(function(){
		oBar2.removeClass('active');
		oconul.removeClass('active');
	})
	oBar2.mouseleave(function(){
		oBar2.removeClass('active');
		oconul.removeClass('active');
	})
	var iNow=0;
	$('.yuan a').click(function(){
		$('.yuan a').removeClass('active');
		$('.content_h1 img').removeClass('active');
		$(this).addClass('active');
		iNow=$(this).index()
		$('.content_h1 img').eq(iNow).addClass('active');
		})
	var  oConimg=$('.content_h1 img'); 
	 $('.content_down #down').click=next;
	 clearInterval(tid);
	 var tid=setInterval(next,2000)
			function next(){
				iNow++;
				if (iNow>=6) {
					iNow=0;
				};
			$('.yuan a').removeClass('active');
			$('.content_h1 img').removeClass('active');
			$('.yuan a').eq(iNow).addClass('active');
			$('.content_h1 img').eq(iNow).addClass('active');
		}
		oConimg.mouseenter(function(){
			clearInterval(tid);
		})
		oConimg.mouseleave(function(){
			 tid=setInterval(next,2000)
		})
		// 移入移出
		$('.news').mouseenter(function(){
			$('.news').removeClass('active');
			$('.news-item').removeClass('active');
			$(this).addClass('active');
			$('.news-item').eq($(this).index()).addClass('active');
		})		
		$('.odds').mouseenter(function(){
			$('.odds').removeClass('active');
			$('.hot').removeClass('active');
			$('.lx').removeClass('active');
			$(this).addClass('active');
			$('.hot').eq($(this).index()).addClass('active');
			$('.lx').eq($(this).index()).addClass('active');
		})
		// 广告轮播图
			var iNowo=0;
	$('.yuan1 a').click(function(){
		$('.yuan1 a').removeClass('active');
		$('.gg img').removeClass('active');
		$(this).addClass('active');
		iNowo=$(this).index()
		$('.gg img').eq(iNow).addClass('active');
		})
	 $('.gg1 #down1').click=nextA;
	 clearInterval(tid1);
	 var tid1=setInterval(nextA,2000)
			function nextA(){
				iNowo++;
				if (iNowo>=4) {
					iNowo=0;
				};
			$('.yuan1 a').removeClass('active');
			$('.gg img').removeClass('active');
			$('.yuan1 a').eq(iNowo).addClass('active');
			$('.gg img').eq(iNowo).addClass('active');
		}
		$('.gg img').mouseenter(function(){
			clearInterval(tid1);
		})
		$('.gg img').mouseleave(function(){
			 tid1=setInterval(nextA,2000)
		})
})