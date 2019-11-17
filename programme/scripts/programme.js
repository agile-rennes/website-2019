		function isotopeLoad() {
			$grid = jQuery('.grid').isotope(
					{
				itemSelector: '.grid-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-sizer'
				}
			});
			
			if(($(window).width() < 767.98) || (window.orientation == 0)) {
				mode = 'desktop'; /* on force l'init pour isotopeResize : faire croire que l'on passe du format paysage au format portrait */
			} else {
				mode = 'telephone'; /* on force l'init pour isotopeResize : faire croire que l'on passe du format portrait au format paysage */
			}

			isotopeResize();

			$('.filter-button-group').on( 'click', '.button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});

			$('.filter-custom-select').on( 'change', function() {
				$('.grid-item').width('99.6%');
				var filterValue = $(this).val();
				$grid.isotope({ filter: filterValue });
			});
		}

		function resizeAll() {
			$('.KN').css({opacity:1});
			$('.CF').css({opacity:1});
			$('.AJ').css({opacity:1});
			$('.TR').css({opacity:1});
			$('.RE').css({opacity:1});
			$('.grid-item').width('16.4%');
			$('.grid-item--width2').width('33%');
			$('.grid-item--width3').width('49.6%');
			$('.grid-item--width4').width('66.2%');
			$('.grid-item--width5').width('82.8%');
			$('.grid-item--width6').width('99.4%');
		}
		function resizeThemes() {
			$('.KN').css({opacity:1});
			$('.CF').css({opacity:1});
			$('.AJ').css({opacity:1});
			$('.TR').css({opacity:1});
			$('.RE').css({opacity:1});
			$('.grid-item').width('99.8%');
		}

		function isotopeResize() {
			if(($(window).width() < 767.98) || (window.orientation == 0)) {
				if(mode == 'desktop') {
					$('.telephone').show();
					$('.ordi').hide();
					$('.grid-item').width('99.6%');
					$grid.isotope({ filter: '.c1' });
					$('#inputGroupSelect01 option[value=".c1"]').prop('selected', true);
					$('body').css('font-size', '1.7em');
					$('select').css('height', '3.55rem');
				}
				mode = 'telephone'
			} else {
				if(mode == 'telephone') {
					$('.ordi').show();
					$('.telephone').hide();
					resizeAll();
					$grid.isotope({ filter: '*' });
					$('body').css('font-size', '1em');
					$('select').css('height', '2.26rem');
				}
				mode = 'desktop';
			}
		}

		function showType(t) {
			if($('.' + t).css('opacity') == 0.99) {
				$('.KN').css({opacity:1});
				$('.CF').css({opacity:1});
				$('.AJ').css({opacity:1});
				$('.TR').css({opacity:1});
				$('.RE').css({opacity:1});
			} else {
				$('.KN').css({opacity:0.3});
				$('.CF').css({opacity:0.3});
				$('.AJ').css({opacity:0.3});
				$('.TR').css({opacity:0.3});
				$('.RE').css({opacity:0.3});
				$('.' + t).css({opacity:0.99});
			}
		}

		window.addEventListener("orientationchange", function() {
			isotopeResize();
		});
