$(document).ready(function(){


	$('#show').click(function(){
		var v= $('#nam').val();
		$('#city').fadeOut();
		$('#cntry').fadeOut();
		$('#temp').fadeOut();
		$('#cndtn').fadeOut();

		$('#date1').fadeOut();
		$('#cond1').fadeOut();
		$('#t1').fadeOut();


		$('#date2').fadeOut();
		$('#cond2').fadeOut();
		$('#t2').fadeOut();

		getval(v);
	});

	function getval(val){

		$.ajax({
			url :'https://api.apixu.com/v1/forecast.json?key=38d4f4d314c748cb85a134603171302&q='+val+'&days=3',
			dataType:'json',
			success: function(dat){

				if(!dat.error){
				$('#city').text(dat.location.name).fadeIn();
				$('#cntry').text(dat.location.country).fadeIn();
				$('#temp').text(dat.current.temp_c).fadeIn();
				$('#cndtn').text(dat.current.condition.text).fadeIn();

				$('#date1').text(dat.forecast.forecastday[1].date).fadeIn();
				$('#cond1').text(dat.forecast.forecastday[1].day.condition.text).fadeIn();
				$('#t1').text(dat.forecast.forecastday[1].day.avgtemp_c).fadeIn();


				$('#date2').text(dat.forecast.forecastday[2].date).fadeIn();
				$('#cond2').text(dat.forecast.forecastday[2].day.condition.text).fadeIn();
				$('#t2').text(dat.forecast.forecastday[2].day.avgtemp_c).fadeIn();

				}

				else{
					alert("Not Found! Try Again!");
				}

			}
		});
	}

});