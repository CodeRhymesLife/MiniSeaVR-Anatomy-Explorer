if(Meteor.isClient) {
	Template.index.onRendered(function () {
		$(".menuItem").click( function () {
			var organ = $( this ).attr("data-organ");
			$(".organ").get(0).setAttribute("src", '/models/organs/' + organ + '.dae');
		});
		
		$("#rightarrow").click( function () {
			var rotation = $(".heart").get(0).getAttribute("rotation");
			rotation.y += 30;
			$(".organ").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});
	});
}
