$(document).ready(function() {
	
	var start = jQuery(".start");
	var board = jQuery(".board");
	var roll = jQuery(".roll");
	var playerOneDom = jQuery(".playerOne");
	var playerTwoDom = jQuery(".playerTwo");
	var rollResultsDom = jQuery(".rollResults");
	var rollResults = 0;
	var currentPlayer;
	var currentPlayerInd = 0;
	var players = [];
	
	var playerOne = {
		dom: playerOneDom,
		position: 0
	};
	
	var playerTwo = {
		dom: playerTwoDom,
		position: 0
	};
	
	start.click(function(event) {
		start.hide();
		board.show();
		
		players.push(playerOne, playerTwo);
		
	});
	
	roll.click(function(event) {
		currentPlayer = players[currentPlayerInd];
		rollResults = Math.round(Math.random()*5 + 1);
		
		rollResultsDom.html(rollResults);
		//rollResultsDom.fadeIn(400).delay(800).fadeOut(400);
		
		currentPlayer.dom.move(currentPlayer, rollResults, currentPlayerInd);
		
		if (currentPlayerInd == 0) {
			currentPlayerInd = 1;
		} else {
			currentPlayerInd = 0;
		}
		
	});
	
});

jQuery.fn.move = function(currentPlayer, rollResults, currentPlayerInd) {
	
	$.ajax({
		type: "POST",
		url: "rest/Game/Move",
		data: { 
			currentPosition: currentPlayer.position, 
			rollResults: rollResults, 
			playerType: currentPlayer.dom.selector,
			currentPlayerInd: currentPlayerInd,
		}
	})
	.done(function(data) {

		for ( var i = currentPlayer.position + 1; i <= (currentPlayer.position + rollResults); i++) {
		
			var currentObject;
			$.each( data.moves , function(iteration, obj) {
				  if (obj.id === i) currentObject = obj;
			});
		
			currentPlayer.dom.animate({
				right: currentObject.x,
				top: currentObject.y
			},
			400, // Duration
			function() { // Callback when the animation is finished
			        //console.log( "done!" );
			});
		}
		
		setTimeout(function(){ 
			$("#dialog").html(data.content);
			$("#dialog").dialog({
				title: data.title,
				position: { 
					my: "center",
					at: "center", 
					of: jQuery(".board") 
				},
				show: {
					effect: "fade",
			        duration: 400
			    },
			    hide: {
			    	effect: "fade",
			        duration: 400
			    },
			    modal: true,
			    buttons: {
			    	Ok: function(currentPlayerInd) {
			    		$(this).dialog( "close" );
			        }
			    },
			    close: function(event, ui) {
			    	var playerOneDom = jQuery(".playerOne");
			    	var playerTwoDom = jQuery(".playerTwo");

			    	playerOneDom.toggleClass("active");
			    	playerTwoDom.toggleClass("active");		
			    }
			}); 
		}, rollResults * 400);
		currentPlayer.position += rollResults;
	});

};