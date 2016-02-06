if(Meteor.isClient) {
	Template.index.onRendered(function () {
		$(".menu .item").click(function () {
			var rotation = $( this ).get(0).getAttribute("rotation");
			$( this ).get(0).setAttribute("rotation", "");
		});
	});
}
