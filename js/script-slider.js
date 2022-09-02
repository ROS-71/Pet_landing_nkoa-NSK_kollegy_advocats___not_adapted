let offset = 0;		// переменная хранящая смещение от левого края
const sliderLine = document.querySelector('.slider-line'); // константа с обращением к классу slider-line

document.querySelector('.slider-next').addEventListener('click', function () {
	offset = offset + 900; //offset +=900   -можно написать альтернативно, знак ПЛЮС перед числом ширины блока ставим, чтобы прокрутка была в лево
	
	if (offset > 7200) {
		offset = 0;
		
	}

	sliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider-prev').addEventListener('click', function () {
	offset = offset - 900; //offset -=900   -можно написать альтернативно, знак МИНУС перед числом ширины блока ставим, чтобы прокрутка была в лево

	if (offset < 0) {
		offset = 7200;
	}

	sliderLine.style.left = -offset + 'px';
})








/* document.querySelector('.slider-line').addEventListener('click', function () {
	offset = offset + 900;	//offset +=900   -можно написать альтернативно, плюс перед числом ширины блока ставим, чтобы прокрутка была вправо
	sliderLine.style.left = offset + 'px';
}) */