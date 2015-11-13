$(document).ready(function() {
	var zip = "87122,us"
	var key = "52965110eb4daf6fc4842ebf4e9207aa";
	var uri = "http://api.openweathermap.org/data/2.5/weather?q=" + zip + "&units=imperial&APPID=" + key;
	
	
	$.get(uri, function(r) {
		var currentTemp = Math.floor(r.main.temp);
		var currentWeather = r.weather[0].id;
		
		$(".temp").html(currentTemp + "&#176");
		
		if (currentWeather === 800) {
			$(".icon").append("<i class='fa fa-sun-o fa-4x'></i>");
		} else if (currentWeather >= 500 && currentWeather <= 531) {
			$(".icon").append("<i class='fa fa-tint fa-4x'></i>");
		} else if (currentWeather >= 801 && currentWeather <= 804) {
			$(".icon").append("<i class='fa fa-cloud fa-4x'></i>");
		} else {
			$(".icon").append("<i class='fa fa-coffee fa-4x'></i>");
		}
		
		console.log(currentWeather);
		
	}, "json");
});

//var $temp = $(".temp").html(temp + "&#176");