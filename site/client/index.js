if(Meteor.isClient) {
	Template.index.onRendered(function () {
		$("#leftarrow").click( function () {
			var rotation = $(".organ").get(0).getAttribute("rotation");
			rotation.y -= 30;
			$(".organ").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});

		var organToSound = {
			"Brain": "#HighPitchMeduClick",
			"Lungs": "#HighPitchMeduClick",
			"Heart": "#MediumPitchMenuClick",
			"Stomach": "#LowPitchMenuClick",
			"Liver": "#LowPitchMenuClick",
		};
		$(".menuItem").click( function () {
			var organ = $( this ).attr("data-organ");
			$(".organ").get(0).setAttribute("src", '/models/organs/' + organ + '.dae');
			$("#fullbody").get(0).setAttribute("src", '/images/' + organ + '.jpg');
			
			// Play sound when menu button clicked
			$( organToSound[organ] ).get(0).components.sound.play();
		});

		$("#rightarrow").click( function () {
			var rotation = $(".organ").get(0).getAttribute("rotation");
			rotation.y += 30;
			$(".organ").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});
	});
}