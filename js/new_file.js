$(function(){
	$(".banner").carousel()
	$(".more i").click(function(){
	if($(".company-info").height()==0){
		$(".company-info").animate({"height":100+"%"})
		$(".more i").addClass("glyphicon glyphicon-minus-sign")
	}else{
		$(".company-info").animate({"height":0})
		$(this).removeClass("glyphicon glyphicon-minus-sign")
		$(".more i").addClass("glyphicon glyphicon-plus-sign")
	}
})
	var n;
	var infoheight;
	$(".p-nav li").click(function(){
		n=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		scrollpage()
		infoheight=$(".company-info").height();
		
	})
	function scrollpage(){
		if(n==0){
			$("html,body").animate({ scrollTop:0},500)
		}
		if(n==1){
			$("html,body").animate({ scrollTop:450+"px"},500)
		}
		if(n==2){
			$("html,body").animate({ scrollTop:950+"px"},500)
		}
		if(n==3){
			$("html,body").animate({ scrollTop:1430+"px"},500)
		}
		if(n==4){
			$("html,body").animate({ scrollTop:(1810+infoheight)+"px"},500)
		}
		if(n==5){
			$("html,body").animate({ scrollTop:(2100+infoheight)+"px"},500)
		}
	}
})
