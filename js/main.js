$(document).ready(function() {
	// Banner Slider
	if ( $('#banner-slider').length ) {
		$('#banner-slider').slick({
			dots: false,
			infinite: true,
			speed: 1000,
			fade: true,
			cssEase: 'linear',
			autoplay: true,
			prevArrow: '<button type="button" class="banner-slick-prev"></button>',
			nextArrow: '<button type="button" class="banner-slick-next"></button>',
		});
	}

	// Logo slider
	if ( $('.logos').length ) {
		$('.logos').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	// Range Slider
	if ( $( '[data-slider]' ).length ) {
		$( '[data-slider]' ).slider({});

		$( '#price_slider' ).on( 'slide', function( evt ) {
			$( '#price_slider_value span' ).html( '$' + evt.value[0] + ' - ' + '$' + evt.value[1] );
		});
	}

	// QTY
	if ( $('.quantity').length ) {
		$('.quantity').each(function() {
			var $this = $(this);
			var $qty = $this.find('.qty');
			var $plusBtn = $this.find('#plus-btn');
			var $minusBtn = $this.find('#minus-btn');

			$plusBtn.click(function(evt) {
				evt.preventDefault();
				$qty.val(parseInt($qty.val()) + 1 );
			});
			$minusBtn.click(function(evt) {
				evt.preventDefault();
				$qty.val(parseInt($qty.val()) - 1 );
				if ($qty.val() == 0) {
					$qty.val(1);
				}
			});
		});
	}
	
});