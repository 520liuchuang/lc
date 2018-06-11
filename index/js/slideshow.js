
function slideshow() {
	let index = 0;
	let timer = null;

	function move(){
		index++;
		if(index >= $("#picture img").length){
			index = 0;
		}

		// 找获取匹配#picture img的第二个元素及同辈元素 图片为淡入弹出
		$("#picture img").eq(index).fadeIn(1000).siblings().fadeOut(1000);

		$('li').eq(index).addClass("first").siblings().removeClass("first");
	}

	function autoMove(){
		timer = setInterval(()=>{
			move();
		},3000)
	}

	autoMove();

	$("#banner").hover(function(){
		clearInterval(timer);
	},function(){
		autoMove();
	});

	$("li").each((k,v)=>{
		$(v).click(function(){
			index = k;
			$(this).addClass('first').siblings().removeClass('first');
			$("#picture img").eq(index).fadeIn(1000).siblings().fadeOut(1000);
			
		});
	});
}