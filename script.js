let slides = document.querySelectorAll('.slide');
	arrowLeft = document.querySelector('.arrow-left');
	arrowRight = document.querySelector('.arrow-right');
	current = 0;

function reset(){
	for (let i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}
}

reset();

function startSlider(){
	slides[0].style.display = "block";
}

function slideLeft(){
	reset();	
	slides[current - 1].style.display = "block";
	current--;
}

function slideRight(){
	reset();
	slides[current + 1].style.display = "block";
	current++;
}

function slideLoopEnd(){
	if (current === 0) {
		current = slides.length;
	}		
}

function slideLoopStart(){
	if(current === slides.length - 1){
		current = -1;
	}
}

arrowLeft.addEventListener('click', function(){
	slideLoopEnd();
	slideLeft();
});

arrowRight.addEventListener('click', function(){
	slideLoopStart();
	slideRight();
});

startSlider();

window.setInterval(function(){
	slideLoopStart();
	slideRight();

}, 5000);