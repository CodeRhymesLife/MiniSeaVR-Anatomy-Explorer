if(Meteor.isClient) {
	Template.index.onRendered(function () {
		$("body").on("click", ".heart", function () {
			console.log("Action triggered");
			var rotation = $( this ).get(0).getAttribute("rotation");
			rotation.y += 30;
			$( this ).get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});
	});
}
