window.onload = function(){

	$(".send").on('click',function(){
		var txt = $(".mesg").val();
		//console.log(txt);
		if(txt.length > 0){
			var ran = Math.ceil(Math.random()*450);
			var mesgDanmu = $("<p>"+txt+"</p>").css({
				color:getRandomColor,
				top:ran+"px",
				width:"300px"
			}).appendTo($("#wall"));
			$(".mesg").val(null);
			
			function move(){
				var le = parseInt(mesgDanmu.css("left"));
				//console.log(le);
				if(le>-500)
				{	
					le -= 4;
					mesgDanmu.css("left",le+"px");	
				}
				mesgDanmu.movements = setTimeout(move,30);	
			}
			move();
		}
		function getRandomColor() 
		{ 
			var c = '#'; 
			var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; 
			for(var i = 0; i < 6;i++) 
			{ 
				var cIndex = Math.round(Math.random()*15); 
				c += cArray[cIndex]; 
			} 
			return c; 
		} 
	})

	$(".clear").on('click',function(){
		$("p").remove();
	})
}