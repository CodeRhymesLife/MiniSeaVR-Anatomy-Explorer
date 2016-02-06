if(Meteor.isClient) {
	Template.index.onRendered(function () {
		$("#leftarrow").click( function () {
			var rotation = $(".organ").get(0).getAttribute("rotation");
			rotation.y -= 30;
			$(".organ").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});

		$("#rightarrow").click( function () {
			var rotation = $(".organ").get(0).getAttribute("rotation");
			rotation.y += 30;
			$(".organ").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});

		$("#lungsButton").click( function () {
			$(".organ").get(0).setAttribute("src", '/models/lungs/Lungs.dae');
		});
	});
}
