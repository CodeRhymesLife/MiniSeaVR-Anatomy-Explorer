if(Meteor.isClient) {
	Template.index.onRendered(function () {
		$(".menuItem").click( function () {
			var organ = $( this ).attr("data-organ");
			alert("'" + organ + "' clicked!");
		});
	});
}
