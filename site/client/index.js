if(Meteor.isClient) {
	Template.index.onRendered(function () {
<<<<<<< HEAD
		$("#leftarrow").click( function () {
			var rotation = $(".organ").get(0).getAttribute("rotation");
			rotation.y -= 30;
			$(".organ").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
=======
		$(".menuItem").click( function () {
			var organ = $( this ).attr("data-organ");
			$(".organ").get(0).setAttribute("src", '/models/organs/' + organ + '.dae');
>>>>>>> 6b6748a2d286e36a978f368a1698bf53986ee0d1
		});
		
		$("#rightarrow").click( function () {
			var rotation = $(".organ").get(0).getAttribute("rotation");
			rotation.y += 30;
			$(".organ").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});
	});
}
