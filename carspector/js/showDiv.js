  
     
    $(document).ready(function () {

    	
function showDivs(div1)
{
   d0 = document.getElementById(div1);
   

   d0.style.display = "block";
}


  /*$("#filteradder").click(function(){
    showDivs('addFilters');
});

   $("#find-car").click(function(){
    showDivs('results');
});

});*/


    $("#filteradder").click(function(){
    showDivs('addFilters');
});

   $("#find-car").click(function(){
    showDivs('results');

    	var range_budget = $("#range_budget").data("ionRangeSlider");
        var range_km = $("#range_km").data("ionRangeSlider");
        var range_type = $("#range_type").data("ionRangeSlider");

    	var fuelefficiency = $("#fuelefficiency").data("ionRangeSlider");
        var performance = $("#performance").data("ionRangeSlider");
        var styling = $("#styling").data("ionRangeSlider");
        var comfort = $("#comfort").data("ionRangeSlider");
        var space = $("#space").data("ionRangeSlider");
        var convenience = $("#convenience").data("ionRangeSlider");
        var infotainment = $("#infotainment").data("ionRangeSlider");
        var safety = $("#safety").data("ionRangeSlider");
        var service = $("#service").data("ionRangeSlider");

        
        	var budgetArray = new Array();
	budgetArray[0] = "200000";
	budgetArray[1] = "500000";
	budgetArray[2] = "1000000";
	budgetArray[3] = "2000000";
	budgetArray[4] = "3000000";
	budgetArray[5] = "5000000";
	budgetArray[5] = "7500000";
	budgetArray[6] = "10000000";
	budgetArray[7] = "20000000";
	budgetArray[8] = "500000000";
	
	
	var kmArray = new Array();
	kmArray[0] = "500";
	kmArray[1] = "1000";
	kmArray[2] = "2000";
	kmArray[3] = "3000";
	kmArray[4] = "5000";
	kmArray[5] = "7000";
	kmArray[6] = "10000";
	kmArray[7] = "200000";
    

    var typeArray = new Array();
    typeArray[0] = "1";
    typeArray[1] = "2";
    typeArray[2] = "3";
    typeArray[3] = "4";

    console.log( budgetArray[ range_budget.result.from]);
        console.log(infotainment.result.from);
        console.log(convenience.result.from);
var testval= fuelefficiency.result.from+','+performance.result.from+','+styling.result.from+','+comfort.result.from+','+space.result.from+','+convenience.result.from+','+infotainment.result.from+','+safety.result.from+','+service.result.from; 

    var formData = {
    	bd:budgetArray[ range_budget.result.from],
    	mu:kmArray[ range_km.result.from],
    	upr:typeArray[ range_km.result.from],
    	pr:testval
    }; 
         console.log(testval);

$.ajax({
    url : "getcar.php",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {
        //data - response from server
       //console.log(data);

        $('#result-holder').html(data);

        console.log(data);
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
 alert('error');
    }
});

});
    //bd=1000000&mu=3000&upr=3&pr=2,9,8,3,1,5,4,7,6




});
