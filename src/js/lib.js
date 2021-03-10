$(document).ready(function () {
	AOS.init();
	$(".carousel__1").click(function () {
		$.fancybox.open([
			{
				src: $(".slider1__1").attr("data-slide"),
			},
			{
				src: $(".slider1__2").attr("data-slide"),
			},
			{
				src: $(".slider1__3").attr("data-slide"),
			},
			{
				src: $(".slider1__4").attr("data-slide"),
			},
			{
				src: $(".slider1__5").attr("data-slide"),
			},
			{
				src: $(".slider1__6").attr("data-slide"),
			},
			{
				src: $(".slider1__7").attr("data-slide"),
			},
		], {
			loop: true,
		}
		);
	});

	$(".carousel__2").click(function () {
		$.fancybox.open([
			{
				src: $(".slider2__1").attr("data-slide"),
			},
			{
				src: $(".slider2__2").attr("data-slide"),
			},
			{
				src: $(".slider2__3").attr("data-slide"),
			},
			{
				src: $(".slider2__4").attr("data-slide"),
			},
			{
				src: $(".slider2__5").attr("data-slide"),
			},
			{
				src: $(".slider2__6").attr("data-slide"),
			},
			{
				src: $(".slider2__7").attr("data-slide"),
			},
		], {
			loop: true,
		});
	});
});
