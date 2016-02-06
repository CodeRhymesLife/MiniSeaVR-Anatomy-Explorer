if(Meteor.isClient) {
	Template.index.onRendered(function () {
		$(".menu a-model").click(function () {
			var rotation = $( this ).get(0).getAttribute("rotation");
			var changeRot = rotation.y + 30;
			$( this ).get(0).setAttribute("rotation", String(rotation.x) +
				String(changeRot) + String(rotation.z));
		});
	});
}
