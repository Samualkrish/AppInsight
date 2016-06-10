$(document).ready(function(){
	var currentTile = 0;
	$(".icon").click(function(e){
		console.log(e.target.id)
		$("#dash_one").removeClass("tile_toggle_one");
		$("#dash_two").removeClass("tile_toggle_two");
		$("#dash_three").removeClass("tile_toggle_three");
		$("#dash_four").removeClass("tile_toggle_four");
		switch(e.target.id){
			case "icon_one" :   $("#dash_one").addClass("tile_toggle_one");
								break;
			case "icon_two" :   $("#dash_two").addClass("tile_toggle_two");
								break;
			case "icon_three" :   $("#dash_three").addClass("tile_toggle_three");
								break;
			case "icon_four" :   $("#dash_four").addClass("tile_toggle_four");
								break;
		}
	})
})