if(Meteor.isClient) {
	Template.index.onRendered(function () {
		$("#hello").click( function () {
			console.log("Action triggered");
			var rotation = $(".heart").get(0).getAttribute("rotation");
			rotation.y += 30;
			$(".heart").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});
	});
}
