
var main = function(){

	$('#submit1').click(function(){
	var xInput = $("input[name=salaryInput]").val();
		$('#salary').css("height" ,xInput + "px");
	});

	$('#submit2').click(function(){
	var xInvest = $("input[name=investmentInput]").val();
		$('#investment').css("height" ,xInvest + "px");
	});

	$('#submit3').click(function(){
	var xInterest = $("input[name=interestInput]").val();
		$('#interest').css("height" ,xInterest + "px");
	});

};

var main2 = $(function(){

	var currentValue1 = $('#currentValue1');

	$('input[type=range]').on('input', function () {
    $(this).trigger('change');
	});

	$('#salarySlide1').change(function(){
	    currentValue1.html(this.value);
	        var xSalary2 = $(this).val();
	$('#salary2').css("height" ,xSalary2 + "px");
	});

		var currentValue2 = $('#currentValue2');

	$('#salarySlide2').change(function(){
	    currentValue2.html(this.value);
	        var xSalary22 = $(this).val();
	$('#investment2').css("height" ,xSalary22 + "px");
	});

	var currentValue3 = $('#currentValue3');

	$('#salarySlide3').change(function(){
	    currentValue3.html(this.value);
	        var xSalary23 = $(this).val();
	$('#interest2').css("height" ,xSalary23 + "px");
	});

	$('#salarySlide1').change();
		$('#salarySlide2').change();
			$('#salarySlide3').change();
});

var main3 = $(function(){

	var currentValue1 = $('#currentValue1');

	$('input[type=range]').on('input', function () {
    $(this).trigger('change');
	});

	$('#salarySlide11').change(function(){
	    currentValue1.html(this.value);
	        var xSalary222 = $(this).val();
	$('#salary3').css("height" ,xSalary222 + "px");
		$('#salary3').css("width" ,xSalary222 + "px");

	});

		var currentValue2 = $('#currentValue2');

	$('#salarySlide12').change(function(){
	    currentValue2.html(this.value);
	        var xSalary223 = $(this).val();
	$('#investment3').css("height" ,xSalary223 + "px");
		$('#investment3').css("width" ,xSalary223 + "px");

	});

	var currentValue3 = $('#currentValue3');

	$('#salarySlide13').change(function(){
	    currentValue3.html(this.value);
	        var xSalary224 = $(this).val();
	$('#interest3').css("height" ,xSalary224 + "px");
		$('#interest3').css("width" ,xSalary224 + "px");

	});

	$('#salarySlide11').change();
		$('#salarySlide12').change();
			$('#salarySlide13').change();
});

var main3 = function(){

	$('#eco').click(function(){
		$('#sustainability').css("height",280);
		$('#risk').css("height", 150);
		$('#return').css("height", 30);
	});

	$('#safe').click(function(){
		$('#sustainability').css("height",120);
		$('#risk').css("height", 250);
		$('#return').css("height", 100);
	});

	$('#risky').click(function(){
		$('#sustainability').css("height",80);
		$('#risk').css("height", 30);
		$('#return').css("height", 250);
	});
};

var main4 = function(){

	$('#eco2').click(function(){
		$('#sustainability2').animate({height: '280'});
		$('#risk2').animate({height: '150'});
		$('#return2').css({height: '30'});
	});

	$('#safe2').click(function(){
		$('#sustainability2').animate({height:'120'});
		$('#risk2').animate({height: '250'});
		$('#return2').animate({height: '100'});
	});

	$('#risky2').click(function(){
		$('#sustainability2').animate({height:'80'});
		$('#risk2').animate({height: '30'});
		$('#return2').animate({height: '250'});
	});
};


var main5 = function(){

    var myChart = document.getElementById('myChart').getContext('2d');
    new Chart(myChart).Line(chartData);
};

var chartData = {
	labels : ["20","25","30","35","40","45", "50", "55", "60", "65", "70", "75", "80"],
	datasets : [
		{
			fillColor : "rgba(172,194,132,0.4)",
			strokeColor : "#ACC26D",
			pointColor : "#fff",
			pointStrokeColor : "#9DB86D",
			data : [100,156,99,251,305,247, 300, 450, 508, 694]
		}
	]
};

var main6 = $(function(){


	$('input[type=range]').on('input', function () {
    $(this).trigger('change');
	});

    	var currentValue20 = $('#currentValue20');
	$('#salarySlide20').change(function(){
	    currentValue20.html(this.value);
	});

		var currentValue21 = $('#currentValue21');
	$('#salarySlide21').change(function(){
	    currentValue21.html(this.value);
	});

	var currentValue22 = $('#currentValue22');
	$('#salarySlide22').change(function(){
	    currentValue22.html(this.value);
	    var VAL22 = $(this).val();
	});

	$('#salarySlide20').change();
		$('#salarySlide21').change();
			$('#salarySlide22').change();
});

var main7 = function(){
	    var myChart2 = document.getElementById('myChart2').getContext('2d');
		new Chart(myChart2).PolarArea(chartData2);
};

		var chartData2 = [
    {
        value: 50,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }

	]

	var options = {
		animationSteps : 100
	}






$(document).ready(main);
$(document).ready(main2);
$(document).ready(main3);
$(document).ready(main4);
$(document).ready(main5);
$(document).ready(main6);
$(document).ready(main7);






