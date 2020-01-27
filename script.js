var dress1 = document.querySelector('#dress1');
var dress2 = document.querySelector('#dress2');
var dress3 = document.querySelector('#dress3');


var star1 = document.querySelector('#dr_star1');
var star_new1 = document.querySelector('.star1');


var star2 = document.querySelector('#dr_star2');
var star_new2 = document.querySelector('.star2');


var star3 = document.querySelector('#dr_star3');
var star_new3 = document.querySelector('.star3');


	if (star1!==null) {
		star1.onclick = function(){
			//убрать серебряную
			star_new1.removeChild(star1);
			// добавить золотую
		
		var new_star =document.createElement('img');
		new_star.src ="star.png";
		star_new1.append(new_star);
		
		}
	}


	if (star2!==null) {
		star2.onclick = function(){
			//убрать серебряную
			star_new2.removeChild(star2);
			// добавить золотую
		
		var new_star =document.createElement('img');
		new_star.src ="star.png";
		star_new2.append(new_star);
		
		}
	}


	if (star3!==null) {
		star3.onclick = function(){
			//убрать серебряную
			star_new3.removeChild(star3);
			// добавить золотую
		
		var new_star =document.createElement('img');
		new_star.src ="star.png";
		star_new3.append(new_star);
		
		}
	}


	dress1.onmouseover=function(){
	dress1.style.backgroundColor='lightblue';
	}

	dress1.onmouseout = function(){
	dress1.style.backgroundColor='white';
	}


	dress2.onmouseover=function(){
	dress2.style.backgroundColor='lightblue';
	}

	dress2.onmouseout = function(){
	dress2.style.backgroundColor='white';
	}


	dress3.onmouseover=function(){
	dress3.style.backgroundColor='lightblue';
	}

	dress3.onmouseout = function(){
	dress3.style.backgroundColor='white';
	}



