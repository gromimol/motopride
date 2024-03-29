
$(document).ready(function () {

	if($(window).width() > 1360){
		$(".news-list").niceScroll();
		$(".news-body").niceScroll();
	}

	 // fullpage customization
	 if($(window).width() > 1280){
	 	$('#fullpage').fullpage({
	 		sectionSelector: '.vertical-scrolling',
	 		navigation: true,
	 		slidesNavigation: true,
	 		css3: true,
	 		controlArrows: false,
	 		anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
	 		responsiveWidth: 1280
	 	});
	 };


	 $('#fp-nav li:first-child .fp-sr-only').text('');
	 $('#fp-nav li:nth-child(2) .fp-sr-only').text('о нас');
	 $('#fp-nav li:nth-child(3) .fp-sr-only').text('новости');
	 $('#fp-nav li:nth-child(4) .fp-sr-only').text('фото');
	 $('#fp-nav li:nth-child(5) .fp-sr-only').text('видео');
	 $('#fp-nav li:nth-child(6) .fp-sr-only').text('контакты');


	// popup
	$('.js-popup-link').on('click',function (e) {
		e.preventDefault();

		var popupTarget = $(this).attr('data-popup');

		$('#overlay').addClass('active');
		$('.popup').removeClass('active');
		$('#' + popupTarget).addClass('active')
	});


	// Закрываем попап
	$('.back').on('click',function (e) {
		e.preventDefault();

		$('#overlay').removeClass('active');
		$('.popup').removeClass('active');
	});

	

	// Просто демонстрация попапа после submit
	$('.js-submit').on('click',function (e) {
		e.preventDefault();

		$('.form-content').addClass('blur')
		$('.thanks').addClass('active');

		setTimeout(function () {
			$('.form-content').removeClass('blur')
			$('.thanks').removeClass('active');
		}, 2000);
	});

	// Передача src картинки. Просто для показа. Можно удалять, если не надо
	$('.news__item').on('click',function () {
		var imgSrc = $(this).find('.news__img img').attr('src');

		$('.news-photo').attr('src', imgSrc);
	})

	
	

	// slider
	$('.photo-group').slick({
		rows: 3,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<span class="prev-arrow"><svg id="SVGDoc1" width="40" height="74" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 40 74"><g><g><title>Line 15</title><path d="M2.64468,36.32245l35.35532,35.35527" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Line 14</title><path d="M38,2.32227l-35.6777,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Group 10</title><g><title>Line 14</title><path d="M38,2.32227l-35.6777,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Line 15</title><path d="M2.64468,36.32245l35.35532,35.35527" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg id="SVGDoc2" width="40" height="74" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 40 74"><g><g><title>Line 4</title><path d="M37.35531,36.3223l-35.35534,35.35528" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><path d="M2,2.32239l35.67773,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><g><path d="M2,2.32239l35.67773,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Line 4</title><path d="M37.35531,36.3223l-35.35534,35.35528" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g></g></g></svg></span>',
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					rows: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					rows: 1,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 400,
				settings: {
					rows: 1,
					slidesToShow: 1
				}
			}
		]
	});

	$('.video-slider').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 3,
		centerMode: true,
		prevArrow: '<span class="prev-arrow"><svg id="SVGDoc1" width="40" height="74" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 40 74"><g><g><title>Line 15</title><path d="M2.64468,36.32245l35.35532,35.35527" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Line 14</title><path d="M38,2.32227l-35.6777,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Group 10</title><g><title>Line 14</title><path d="M38,2.32227l-35.6777,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Line 15</title><path d="M2.64468,36.32245l35.35532,35.35527" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg id="SVGDoc2" width="40" height="74" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 40 74"><g><g><title>Line 4</title><path d="M37.35531,36.3223l-35.35534,35.35528" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><path d="M2,2.32239l35.67773,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><g><path d="M2,2.32239l35.67773,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Line 4</title><path d="M37.35531,36.3223l-35.35534,35.35528" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g></g></g></svg></span>',
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 1,
					centerMode: false
				}
			}
		]

	});


	$('.prev-arrow, .next-arrow').on('click', function(){
		$("iframe").each(function() {
			$(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
	});

	$('.photo-popup-slider').slick({
		slidesToShow: 3,
		centerPadding: '0',
		infinite: false,
		initialSlide: 1,
		centerMode: true,
		prevArrow: '<span class="prev-arrow"><svg id="SVGDoc4" width="40" height="74" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 40 74"><g><g><title>Line 15</title><path d="M2.64468,36.32245l35.35532,35.35527" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Line 14</title><path d="M38,2.32227l-35.6777,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Group 10</title><g><title>Line 14</title><path d="M38,2.32227l-35.6777,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Line 15</title><path d="M2.64468,36.32245l35.35532,35.35527" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg id="SVGDoc5" width="40" height="74" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 40 74"><g><g><title>Line 4</title><path d="M37.35531,36.3223l-35.35534,35.35528" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><path d="M2,2.32239l35.67773,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><g><path d="M2,2.32239l35.67773,36.67773" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g><g><title>Line 4</title><path d="M37.35531,36.3223l-35.35534,35.35528" fill-opacity="0" fill="currentColor" stroke-dashoffset="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="5"></path></g></g></g></svg></span>',
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 1,
					centerMode: false
				}
			}
		]

	});



})