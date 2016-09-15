$(document).ready(function () {


    $("#range_budget").ionRangeSlider({
    grid: true,
    from: 2,
    values: [
        "2 lakh", "5 lakh",
        "10 lakh", "20 lakh",
        "30 lakh", "50 lakh",
        "75 lakh", "1 crore",
        "2 crore", "3 crore",
        "above 3 crore"
    ]
    }); 

    $("#range_km").ionRangeSlider({
    grid: true,
    from:1,
    values: [
        "1,000 km", "2,000 km",
        "4,000 km", "6,000 km",
        "10,000 km", "20,000 km",
        "above 20,000"
    ]
    }); 

    $("#range_type").ionRangeSlider({
    grid: true,
    from: 0,
    values: [
        "Daily use", "weekends trips",
        "performance", "utility"
        
    ],
    onChange: function (obj) {
        var fuelefficiency = $("#fuelefficiency").data("ionRangeSlider");
        var performance = $("#performance").data("ionRangeSlider");
        var styling = $("#styling").data("ionRangeSlider");
        var comfort = $("#comfort").data("ionRangeSlider");
        var space = $("#space").data("ionRangeSlider");
        var convenience = $("#convenience").data("ionRangeSlider");
        var infotainment = $("#infotainment").data("ionRangeSlider");
        var safety = $("#safety").data("ionRangeSlider");
        var service = $("#service").data("ionRangeSlider");

        
        
// Change slider, by calling it's update method

if (obj.from_value=="Daily use") {
// pr1.push([9, 4, 1, 8, 5, 3, 6, 2, 7]);

fuelefficiency.update({
    from: 9
    });
performance.update({
    from: 4
    });
styling.update({
    from: 1
    });
comfort.update({
    from: 8
    });
space.update({
    from: 5
});
convenience.update({
    from: 3
    });
infotainment.update({
    from: 6
    });
safety.update({
    from: 2
    });
service.update({
    from: 7
    });


}


if (obj.from_value=="weekends trips") {
// 3, 4, 2, 7, 9, 8, 6, 5, 1
fuelefficiency.update({
    from: 3
    });
performance.update({
    from: 4
    });
styling.update({
    from: 2
    });
comfort.update({
    from: 7
    });
space.update({
    from: 9
});
convenience.update({
    from: 8
    });
infotainment.update({
    from: 6
    });
safety.update({
    from: 5
    });
service.update({
    from: 1
    });


}
if (obj.from_value=="performance") {
// 2, 9, 8, 3, 1, 5, 4, 7, 6
fuelefficiency.update({
    from: 2
    });
performance.update({
    from: 9
    });
styling.update({
    from: 8
    });
comfort.update({
    from: 3
    });
space.update({
    from: 1
});
convenience.update({
    from: 5
    });
infotainment.update({
    from: 4
    });
safety.update({
    from: 7
    });
service.update({
    from: 6
    });


}


if (obj.from_value=="utility") {
// 7, 5, 1, 8, 9, 6, 3, 2, 4
fuelefficiency.update({
    from: 7
    });
performance.update({
    from: 5
    });
styling.update({
    from: 1
    });
comfort.update({
    from: 8
    });
space.update({
    from: 9
});
convenience.update({
    from: 6
    });
infotainment.update({
    from: 3
    });
safety.update({
    from: 2
    });
service.update({
    from: 4
    });


}


      }


    }); 

    $(".range_filter").ionRangeSlider({
    grid: true,
    from: 0,
    values: [
        "0", "1","2", "3", "4", "5", "6", "7", "8", "9"
        
        ]
        }); 


        var fuelefficiency = $("#fuelefficiency").data("ionRangeSlider");
        var performance = $("#performance").data("ionRangeSlider");
        var styling = $("#styling").data("ionRangeSlider");
        var comfort = $("#comfort").data("ionRangeSlider");
        var space = $("#space").data("ionRangeSlider");
        var convenience = $("#convenience").data("ionRangeSlider");
        var infotainment = $("#infotainment").data("ionRangeSlider");
        var safety = $("#safety").data("ionRangeSlider");
        var service = $("#service").data("ionRangeSlider");

        fuelefficiency.update({
    from: 9
    });
performance.update({
    from: 4
    });
styling.update({
    from: 1
    });
comfort.update({
    from: 8
    });
space.update({
    from: 5
});
convenience.update({
    from: 3
    });
infotainment.update({
    from: 6
    });
safety.update({
    from: 2
    });
service.update({
    from: 7
    });

        console.log('success');
    });