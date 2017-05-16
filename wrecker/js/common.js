$(document).ready(function() {



	$('.tab_content').hide();
		$('.tab_content:first').show();
		$('.container_for_image_but .img_select:first').addClass('active');

	$('.container_for_image_but .img_select').click(function(event){
		$('.container_for_image_but .img_select').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').hide();

		var selectTab = $(this).find('a').attr("name");
		$(selectTab).fadeIn();
	});


	$(".accordeon p").hide().prev().click(function () {
		$(".accordeon p").not(this).slideUp();
		$(this).next().not(":visible").slideDown();
	});

	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".auth-button").click(function() {
		$(this).next().slideToggle();
	});

	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({scrollTop: $(document).height}, "slow");
		return false;
	})

	$(".arrow-bottom").click(function() {
		$("html, body").animate({scrollTop: $(".main-head").height()+40 }, "slow");
		return false;
	})

	$(".homesect .section-head p, .homesect .section-head h2").animated("fadeInRight");

	$(".info-item h4, .info-item p").animated("zoomIn");

	$(".section_2").waypoint(function(){
		$(".s2-item-wrap").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.addClass("on");
			}, 200*index);
		});
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
