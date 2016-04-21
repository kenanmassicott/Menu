$(function() {

	//height calculator
	$("#height-submit").click(function(){
		var heightstring = $("height").val();
		var height = parseInt(heightstring);

		if (height >= 71) {
			$('#answer').text('All aboard!');
		} esle if (height < 71){
			$('#answer').text('Get your height up');
		}
		};
	}
}