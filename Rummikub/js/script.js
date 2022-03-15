"use strict"
	function showHide(show_id,hide_id){
		let obj = document.getElementById(show_id);
			obj.style.display = "block";
		let obj2 = document.getElementById(hide_id);
			obj2.style.display = "none";		
	}
	
	function backButton(element_back){
		let last_known_scroll_position = 0;
		let ticking = false;

		function doSomething(scroll_pos) {
			const obj_back = document.getElementById(element_back);
			if(scroll_pos >= 183){
				
				if(obj_back.style.position != "fixed"){
					obj_back.style.position = "fixed";
					obj_back.style.marginTop = "-180px";
				}

				//alert(scroll_pos);
			}
			else{
					/////////////////////////don't work/////////////////////////////////
					if(obj_back.style.position == "fixed"){
						//alert(3);
						obj_back.style.position = "absolute";
						obj_back.style.marginTop = "1px";
					}
			}
		}

		window.addEventListener('scroll', function(e) {
		  last_known_scroll_position = window.scrollY;

		  if (!ticking) {
		    window.requestAnimationFrame(function() {
		      doSomething(last_known_scroll_position);
		      ticking = false;
		    });
		    ticking = true;
		  }
		});
	}

	function make_more_players(){
		let element = document.querySelector("#number_of_playersId");
		let thirdPlayer = document.getElementById("third_playerId");
		let fourthPlayer = document.getElementById("fourth_playerId");

		switch(element.innerHTML *1){
			case 2:
				element.innerHTML = element.innerHTML * 1 + 1;
				thirdPlayer.style.display = "block";
			break;
			case 3:
				element.innerHTML = element.innerHTML * 1 + 1;
				fourthPlayer.style.display = "block";
			break;
			case 4:
				element.innerHTML = 2;
				thirdPlayer.style.display = "none";
				fourthPlayer.style.display = "none";
			break;
		}
	}

	function newPlay(){
		document.querySelector("header").style.marginBottom = "10px";
		document.querySelector("html").style.backgroundImage = "none";
		document.querySelector("html").style.backgroundColor = "black";
	}
	function rules(){
		document.querySelector("header").style.marginBottom = "0px";
		document.querySelector("html").style.backgroundImage = "none";
		document.querySelector("html").style.backgroundColor = "white";
	}


		



