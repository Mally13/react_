
$(document).ready(function () {
    $("#txtOrigin").autocomplete({
        minLength: 2,
        appendTo: "#divO",
        focus: function (event, ui) {
            $('#txtOrigin').val(ui.item.value);
            $("#pOrigin").text(ui.item.label);
            $("#hdnOriginCity").val(ui.item.city);
            var selectedAirport = ui.item.label;
            selectedAirport.match("All Airports") ? $("#hdnOriginType").val('C') : $("#hdnOriginType").val('A');
            $(".fly-1").removeClass("error");
            return false;
        },
        select: function (event, ui) {
            $('#txtOrigin').val(ui.item.value);
            $("#pOrigin").text(ui.item.label);
            $("#hdnOriginCity").val(ui.item.city);
            var selectedAirport = ui.item.label;
            selectedAirport.match("All Airports") ? $("#hdnOriginType").val('C') : $("#hdnOriginType").val('A');
            $(".fly-1").removeClass("error");
            return false;
        },
        source: function (request, response) {
            $.ajax({
                url: "/common/autosearch",
                type: "POST",
                dataType: "json",
                data: { Prefix: request.term },
                success: function (res) {
                    $("#hdnOriginCity").val("");
                    var masterAirportSequence = 0;
                    var masterCitySequence = 0;
                    var arr = [];
                    for (var i = 0; i < res.length; i++) {
                        masterAirportSequence = res[i].AirportSequence;
                        masterCitySequence = res[i].CitySequence;
                        if (res[i].AirportCode == 0) {

                            var airport = {};
                            airport.value = res[i].CityCode;
                            airport.label = res[i].CityName + "," + res[i].AirportName;
                            airport.city = res[i].CityName;
                            airport.type = "C";
                            airport.icon = "/images/plan-big-icon.png";
                            arr.push(airport);
                        }
                        else {
                            if ((masterAirportSequence != "0" && masterAirportSequence != "99999" && masterCitySequence == "99999") || (masterAirportSequence != "0" && masterAirportSequence == "99999" && masterCitySequence != "99999") || (masterAirportSequence != "0" && masterAirportSequence != "99999" && masterCitySequence != "99999")) {
                                var airport = {};
                                airport.value = res[i].AirportCode;
                                airport.label = res[i].CityName + "," + res[i].AirportName;
                                airport.city = res[i].CityName;
                                airport.type = "CA";
                                airport.icon = "/images/plan-middle-icon.png";
                                arr.push(airport);

                            }
                            else {
                                var airport = {};
                                airport.value = res[i].AirportCode;
                                airport.label = res[i].CityName + "," + res[i].AirportName;
                                airport.city = res[i].CityName;
                                airport.type = "A";
                                airport.icon = "/images/plan-small-icon.png";
                                arr.push(airport);
                            }
                        }
                    }
                    response(arr);
                }
            })
        }
    }).autocomplete("instance")._renderItem = function (ul, item) {
        if (item.type == "C") {
            return $("<li class='city'>")
                .append("<div><a href='javascript:void(0);'><img src='" + item.icon + "'><p>" + item.value + "</p><span>" + item.label + "</span></a></div>")
                .appendTo(ul);
        }
        else if (item.type == "CA") {
            return $("<li  class='city-airport'>")
                .append("<div><a href='javascript:void(0);'><img src='" + item.icon + "'><p>" + item.value + "</p><span>" + item.label + "</span></a></div>")
                .appendTo(ul);
        }
        else {
            return $("<li  class='airport'>")
                .append("<div><a href='javascript:void(0);'><img src='" + item.icon + "'><p>" + item.value + "</p><span>" + item.label + "</span></a></div>")
                .appendTo(ul);
        }
    };
    $("#txtDestination").autocomplete({
        minLength: 2,
        appendTo: "#divD",
        focus: function (event, ui) {           
            $('#txtDestination').val(ui.item.value);
            $("#pDestination").text(ui.item.label);
            var selectedAirport = ui.item.label;
            selectedAirport.match("All Airports") ? $("#hdnDestinationType").val('C') : $("#hdnDestinationType").val('A');
            $("#hdnDesCity").val(ui.item.city);
            $(".fly-1").removeClass("error");
            return false;
        },
        select: function (event, ui) {
            $('#txtDestination').val(ui.item.value);
            $("#pDestination").text(ui.item.label);
            var selectedAirport = ui.item.label;
            selectedAirport.match("All Airports") ? $("#hdnDestinationType").val('C') : $("#hdnDestinationType").val('A');
            $("#hdnDesCity").val(ui.item.city);
            $(".fly-1").removeClass("error");
            return false;
        },
        source: function (request, response) {
            $.ajax({
                url: "/common/autosearch",
                type: "POST",
                dataType: "json",
                data: { Prefix: request.term },
                success: function (res) {
                    $("#hdnDesCity").val("");
                    var masterAirportSequence = 0;
                    var masterCitySequence = 0;
                    var arr = [];
                    for (var i = 0; i < res.length; i++) {
                        masterAirportSequence = res[i].AirportSequence;
                        masterCitySequence = res[i].CitySequence;
                        if (res[i].AirportCode == 0) {

                            var airport = {};
                            airport.value = res[i].CityCode;
                            airport.label = res[i].CityName + "," + res[i].AirportName;
                            airport.city = res[i].CityName;
                            airport.type = "C";
                            airport.icon = "/images/plan-big-icon.png";
                            arr.push(airport);
                        }
                        else {
                            if ((masterAirportSequence != "0" && masterAirportSequence != "99999" && masterCitySequence == "99999") || (masterAirportSequence != "0" && masterAirportSequence == "99999" && masterCitySequence != "99999") || (masterAirportSequence != "0" && masterAirportSequence != "99999" && masterCitySequence != "99999")) {
                                var airport = {};
                                airport.value = res[i].AirportCode;
                                airport.label = res[i].CityName + "," + res[i].AirportName;
                                airport.city = res[i].CityName;
                                airport.type = "CA";
                                airport.icon = "/images/plan-middle-icon.png";
                                arr.push(airport);

                            }
                            else {
                                var airport = {};
                                airport.value = res[i].AirportCode;
                                airport.label = res[i].CityName + "," + res[i].AirportName;
                                airport.city = res[i].CityName;
                                airport.type = "A";
                                airport.icon = "/images/plan-small-icon.png";
                                arr.push(airport);
                            }
                        }
                    }
                    response(arr);
                }
            })
        }
       
    }).autocomplete("instance")._renderItem = function (ul, item) {
        if (item.type == "C") {
            return $("<li class='city'>")
                .append("<div><a href='javascript:void(0);'><img src='" + item.icon + "'><p>" + item.value + "</p><span>" + item.label + "</span></a></div>")
                .appendTo(ul);
        }
        else if (item.type == "CA") {
            return $("<li  class='city-airport'>")
                .append("<div><a href='javascript:void(0);'><img src='" + item.icon + "'><p>" + item.value + "</p><span>" + item.label + "</span></a></div>")
                .appendTo(ul);
        }
        else {
            return $("<li  class='airport'>")
                .append("<div><a href='javascript:void(0);'><img src='" + item.icon + "'><p>" + item.value + "</p><span>" + item.label + "</span></a></div>")
                .appendTo(ul);
        }
    };
    if (document.getElementById("RecentSearchdiv") != null) { ShowRecentSearch(); }

});

function resultbyrecentSearch(index) {

    var recentSearchCookies = localStorage.getItem('CKUFlight'); //CKUFlight
    if (recentSearchCookies != null && recentSearchCookies != "undefined") {
        var recentSearch = [];
        recentSearch = $.parseJSON(recentSearchCookies);
        if (recentSearch.length > 0) {
            var tempFdate = recentSearch[index];
            $.ajax({
                url: "/flight/recentsearch",
                type: "POST",
                dataType: "json",
                data: { RQ: JSON.stringify(tempFdate) },
                success: function (res) {
                    window.location.href = "Flight/Results";
                }
            });
        }
    }
}
function ShowRecentSearch() {
    var recentSearchCookies = localStorage.getItem('CKUFlight');
    if (recentSearchCookies != null && recentSearchCookies != "undefined") {
        var recentSearch = [];
        recentSearch = $.parseJSON(recentSearchCookies);
        var cDate = new Date();
        var isdeleted = false;
        for (var cntp = 0; cntp < recentSearch.length; cntp++) {
            if (cDate > new Date(moment(recentSearch[cntp].segments[0].date, 'DD-MM-YYYY', true).format('YYYY-MM-DD'))) {
                recentSearch.splice(cntp, 1);
                isdeleted = true;
            }
        }
        if (isdeleted == true) {
            localStorage.setItem('CKUFlight', JSON.stringify(recentSearch));
        }
        if (recentSearch.length > 0) {
            var recentCnt = "<ul><li><span>RECENT SEARCHES</span></li>";
            for (var cnt = 0; cnt < recentSearch.length; cnt++) {
                var fdate = moment(recentSearch[cnt].segments[0].date, 'DD-MM-YYYY', true).format('MMM') + " " + moment(recentSearch[cnt].segments[0].date, 'DD-MM-YYYY', true).format('DD');
                var journeyType = recentSearch[cnt].journeyType;
                var rdate = journeyType == "R" ? moment(recentSearch[cnt].segments[1].date, 'DD-MM-YYYY', true).format('MMM') + " " + moment(recentSearch[cnt].segments[1].date, 'DD-MM-YYYY', true).format('DD') : " ";
                var noOfAdult = parseInt(recentSearch[cnt].paxDetails.adults);
                var noOfYouth = parseInt(recentSearch[cnt].paxDetails.youth);
                var noOfChild = parseInt(recentSearch[cnt].paxDetails.children);
                var noOfInfant = parseInt(recentSearch[cnt].paxDetails.infants);
                var noOfInfantOnSeat = parseInt(recentSearch[cnt].paxDetails.infantOnSeat);

                var totalPax = noOfAdult + noOfYouth + noOfChild + noOfInfant + noOfInfantOnSeat;
                recentCnt += "<li onclick='resultbyrecentSearch(" + cnt + ");'><div class='re-serch-1'><p><span>" + recentSearch[cnt].segments[0].origin + "</span>";
                recentCnt += journeyType == "R" ? "<img src='/images/arrow-spin-blue.png'/>" : "<img src='/images/arrow-singal.png'/>";
                recentCnt += "<span>" + recentSearch[cnt].segments[0].destination + "</span></p>";
                recentCnt += "<strong><span>" + fdate + "</span><span>" + rdate + "</span></strong></div>";
                recentCnt += "<div class='re-serch-2'></div>";
                recentCnt += "<div class='re-serch-3'><p><img src='/images/traver-icon-white.png' />" + totalPax + " Travellers</p><span><img src='/images/seat-icon-white.png'/>" + recentSearch[cnt].cabinClassName + "</span></div>";
                recentCnt += "<div class='re-serch-4'><i class='fa fa-angle-right'></i></div></li>";
            }
            recentCnt += "</ul>";
            $('#RecentSearchdiv').html(recentCnt);
            //toDo
            var journeyType = recentSearch[recentSearch.length - 1].journeyType;
            if (journeyType == "O") {
                $("#hdnReturnDate").val("");
                $("#divaddreturn").show();
                $("#divreturndate").hide();
                $("#rdbOneWay").prop("checked", true); s
                $("#rdbRoundTrip").prop("checked", false);
            }
            if (journeyType == "R") {
                $("#divaddreturn").hide();
                $("#divreturndate").show();
                $("#rdbRoundTrip").prop("checked", true);
                $("#rdbOneWay").prop("checked", false);
            }
            $("#txtOrigin").val(recentSearch[recentSearch.length - 1].segments[0].origin);
            $("#pOrigin").html(recentSearch[recentSearch.length - 1].segments[0].oriText);
            $("#hdnOriginCity").val(recentSearch[recentSearch.length - 1].segments[0].OriginName);
            $("#hdnOriginType").val(recentSearch[recentSearch.length - 1].segments[0].originType);

            $("#txtDestination").val(recentSearch[recentSearch.length - 1].segments[0].destination);
            $("#pDestination").html(recentSearch[recentSearch.length - 1].segments[0].disText);

            $("#hdnDesCity").val(recentSearch[recentSearch.length - 1].segments[0].destinationName);
            $("#hdnDestinationType").val(recentSearch[recentSearch.length - 1].segments[0].destinationType);
            var departDate = recentSearch[recentSearch.length - 1].segments[0].date;
            $("#hdnDepartDate").val(moment(departDate, 'DD-MM-YYYY', true).format('MM/DD/YYYY'));

            $("#dptDt").html(moment(departDate, 'DD-MM-YYYY', true).format('DD'));
            $("#dptMnth").html(moment(departDate, 'DD-MM-YYYY', true).format('MMM'));
            $("#dptYr").html(moment(departDate, 'DD-MM-YYYY', true).format('YY'));
            $("#dptDay").html(moment(departDate, 'DD-MM-YYYY', true).format('dddd'));

            //Default value set for Return Date
            $("#hdnReturnDate").val($("#hdnDepartDate").val());
            $("#rtrnDt").html(moment($("#hdnReturnDate").val()).format('DD'));
            $("#rtrnMnth").html(moment($("#hdnReturnDate").val()).format('MMM'));
            $("#rtrnYr").html(moment($("#hdnReturnDate").val()).format('YY'));
            $("#rtrnDay").html(moment($("#hdnReturnDate").val()).format('dddd'));
            if (journeyType == "R") {
                var returnDate = recentSearch[recentSearch.length - 1].segments[1].date;
                $("#hdnReturnDate").val(moment(returnDate, 'DD-MM-YYYY', true).format('MM/DD/YYYY'));
                $("#rtrnDt").html(moment(returnDate, 'DD-MM-YYYY', true).format('DD'));
                $("#rtrnMnth").html(moment(returnDate, 'DD-MM-YYYY', true).format('MMM'));
                $("#rtrnYr").html(moment(returnDate, 'DD-MM-YYYY', true).format('YY'));
                $("#rtrnDay").html(moment(returnDate, 'DD-MM-YYYY', true).format('dddd'));
            }

            var noOfAdult = parseInt(recentSearch[recentSearch.length - 1].paxDetails.adults);
            var noOfYouth = parseInt(recentSearch[recentSearch.length - 1].paxDetails.youth);
            var noOfChild = parseInt(recentSearch[recentSearch.length - 1].paxDetails.children);
            var noOfInf = parseInt(recentSearch[recentSearch.length - 1].paxDetails.infants);
            var noOfIns = parseInt(recentSearch[recentSearch.length - 1].paxDetails.infantOnSeat);
            $("#ulAdult li").removeClass("active").eq(noOfAdult - 1).addClass("active");
            $("#ulYouth li").removeClass("active").eq(noOfYouth).addClass("active");
            $("#ulChild li").removeClass("active").eq(noOfChild).addClass("active");
            $("#ulInfant li").removeClass("active").eq(noOfInf).addClass("active");
            $("#ulInfantOnSeat li").removeClass("active").eq(noOfIns).addClass("active");
            var totalPax = noOfAdult + noOfYouth + noOfChild + noOfInf + noOfIns;
            $("#cabinclass").html(recentSearch[recentSearch.length - 1].cabinClassName);
            $(".travel-class li").removeClass("active").each(function () { if ($(this).text() == recentSearch[recentSearch.length - 1].cabinClassName) $(this).addClass("active"); });
            $("#totaltravellers").val(totalPax + " Travellers");
        }
    }
}

//$("#divO").on("click", "ul li", function () {
//    var selectedAirport = $(this).text();
//    var airportEntity = selectedAirport.split(',');
//    var airportCode = airportEntity[0].substring(0, 3);
//    var airportName = airportEntity[0].substring(3);
//    var airportCity = airportEntity[1];
//    var airportCountry = airportEntity[2];
//    selectedAirport.match("All Airports") ? $("#hdnOriginType").val('C') : $("#hdnOriginType").val('A');
//    $('#txtOrigin').val(airportCode);
//    $("#pOrigin").text(airportCity + "," + airportName);
//    $("#hdnOriginCity").val(airportCity);
//    $("#divO").toggle();
//    $(".fly-1").removeClass("error");
//});

//$("#txtOrigin").keydown("ul li", function (e) {

//    if (this.value.length >= 2) {

//        switch (e.which) {
//            case 40:
//                e.preventDefault(); // prevent moving the cursor
//                $('li:not(:last-child).selected').removeClass('selected')
//                    .next().addClass('selected');
//                break;
//            case 38:
//                e.preventDefault(); // prevent moving the cursor
//                $('li:not(:first-child).selected').removeClass('selected')
//                    .prev().addClass('selected');
//                break;
//        }
//    }
//});

//$('#txtOrigin').keyup(function () {
//    if (this.value.length >= 2) {
//        $("#divO").show();
//        $("#ui-id-1").show();
//    } else {
//        $("#divO").show();
//        $("#ui-id-1").show();
//    }
//});

//$("#divD").on("click", "ul li", function () {
//    var selectedAirport = $(this).text();
//    var airportEntity = selectedAirport.split(',');
//    var airportCode = airportEntity[0].substring(0, 3);
//    var airportName = airportEntity[0].substring(3);
//    var airportCity = airportEntity[1];
//    var airportCountry = airportEntity[2];
//    selectedAirport.match("All Airports") ? $("#hdnDestinationType").val('C') : $("#hdnDestinationType").val('A');
//    $('#txtDestination').val(airportCode);
//    $("#pDestination").text(airportCity + "," + airportName);
//    $("#hdnDesCity").val(airportCity);
//    $("#divD").toggle();
//    $(".fly-2").removeClass("error");
//});
$("#txtOrigin").on("keyup", function (e) {
    let val = $("#txtOrigin").val();
    if (val.length < 2) {
        $("#pOrigin").text("").append("&nbsp;");
    }
});
$("#txtDestination").on("keyup", function () {
    let val = $("#txtDestination").val();
    if (val.length < 2) {
        $("#pDestination").text("").append("&nbsp;");       
    }
});
var closeAutocompleteDiv = () => {
    $("#divO").hide();
    $("#divD").hide();
};

function IsStringKey(e) {
    var key = [event.keyCode || event.which];
    if ((key > 64 && key < 91) || (key > 96 && key < 123) || (key == 32 || key == 08 || key == 09)) {
        return event.returnValue = true;
    }
    else {
        return event.returnValue = false;
    }
};



var searchReq = (e) => {
    var journeyType = $("#rdbRoundTrip").prop("checked") == true ? "R" : "O";
    $("#hdnTripType").val(journeyType);
    var origin = $("#txtOrigin").val();
    var originCity = $("#hdnOriginCity").val();
    var destination = $("#txtDestination").val();
    var destinationCity = $("#hdnDesCity").val();
    var OriginAirportName = $("#pOrigin").text();
    var DestinationAirportName = $("#pDestination").text();

    $("#hdnOriginCity").val(originCity);
    $("#hdnDesCity").val(destinationCity);

    var OriginType = $("#hdnOriginType").val();
    $("#hdnOriginType").val(OriginType);
    var DesType = $("#hdnDestinationType").val();
    $("#hdnDestinationType").val(DesType);

    $("#hdnOriginAirportName").val(OriginAirportName);
    $("#hdnDesAirportName").val(DestinationAirportName);

    var noOfAdult = parseInt($("#ulAdult").find("li.active").html().trim());
    var noOfYouth = parseInt($("#ulYouth").find("li.active").html().trim());
    var noOfChild = parseInt($("#ulChild").find("li.active").html().trim());
    var noOfInfant = parseInt($("#ulInfant").find("li.active").html().trim());
    var noOfInfantOnSeat = parseInt($("#ulInfantOnSeat").find("li.active").html());

    var totalPax = noOfAdult + noOfYouth + noOfChild + noOfInfant + noOfInfantOnSeat;

    $("#hdnAdt").val(noOfAdult);
    $("#hdnYth").val(noOfYouth);
    $("#hdnChd").val(noOfChild);
    $("#hdnInf").val(noOfInfant);
    $("#hdnInfOnSeat").val(noOfInfantOnSeat);

    var cabinClass = $(".travel-class").find("li.active").data("cabinclass");
    $("#hdnCabinClass").val(cabinClass);
    var cabinClassName = $(".travel-class li.active").text();;
    $("#hdnCabinClassName").val(cabinClassName);

    if ($("#txtOrigin").val() == "" || $("#txtOrigin").val().length < 2 || $("#hdnOriginCity").val().trim() == "") {
        $("#pOrigin").text("Please select From city or airport");
        $(".fly-1").focus().addClass("error");
        e.preventDefault();
        return false;
    }

    if ($("#txtDestination").val() == "" || $("#txtDestination").val().length < 2 || $("#hdnDesCity").val().trim() == "") {
        $("#pDestination").text("Please select To city or airport");
        $(".fly-2").focus().addClass("error");
        e.preventDefault();
        return false;
    }

    if (noOfInfant > noOfAdult || noOfInfantOnSeat > noOfAdult) {
        e.preventDefault();
        return false;
    }

    if (totalPax > 9) {
        e.preventDefault();
        return false;
    }

    var departDate = moment($("#hdnDepartDate").val()).format('DD-MM-YYYY');
    $("#hdnDepartDate").val(departDate);

    var returnDate = "";
    if (journeyType == "O") {
        returnDate = "";
        $("#hdnReturnDate").val("");
    }
    else {
        returnDate = moment($("#hdnReturnDate").val()).format('DD-MM-YYYY');
        $("#hdnReturnDate").val(returnDate);
    }
    var searchRequest = {
        'journeyType': journeyType,
        'origin': origin,
        'destination': destination,
        'noOfAdult': noOfAdult,
        'noOfChild': noOfChild,
        'noOfInfant': noOfInfant,
        'noOfInfantOnSeat': noOfInfantOnSeat,
        'cabinClass': cabinClass,
        'cabinClassName': cabinClassName,
        'departDate': departDate,
        'returnDate': returnDate
    };

    $("#hdnSearchRequest").val(JSON.stringify(searchRequest));
}

$(".apply-btn").click(function (e) {

    var noOfAdult = parseInt($("#ulAdult").find("li.active").html());
    var noOfYouth = parseInt($("#ulYouth").find("li.active").html());
    var noOfChild = parseInt($("#ulChild").find("li.active").html());
    var noOfInfant = parseInt($("#ulInfant").find("li.active").html());
    var noOfInfantOnSeat = parseInt($("#ulInfantOnSeat").find("li.active").html());

    $("#hdnAdt").val(noOfAdult);
    $("#hdnYth").val(noOfYouth);
    $("#hdnChd").val(noOfChild);
    $("#hdnInf").val(noOfInfant);
    $("#hdnInfOnSeat").val(noOfInfantOnSeat);
    var totalPax = noOfAdult + noOfYouth + noOfChild + noOfInfant + noOfInfantOnSeat;

    if (noOfInfant > noOfAdult || noOfInfantOnSeat > noOfAdult) {
        $("#divError").addClass("AddError").html("Number of Infant (lap and Seat) can not exceed number of Adult selected").show();
        e.stopImmediatePropagation();
        return false;
    }

    if (totalPax > 9) {
        $("#divError").addClass("AddError").html("Total no of person should not be more than 9!").show();
        e.stopImmediatePropagation();
        return false;
    }
    if (totalPax == 0) {
        $("#divError").addClass("AddError").html("Please Choose passenger!!").show();
        e.stopImmediatePropagation();
        return false;
    }
    else {
        var cabinClass = $(".travel-class").find("li.active").html();
        $("#totaltravellers").val(totalPax + " Travellers");
        $("#cabinclass").html(cabinClass);
        $("#divError").removeClass("AddError").hide();

        $(".travlerr-data").toggle();
        $(".traveller").removeClass("add-color");
        e.stopImmediatePropagation();
    }
});
$(document).ready(function () {
    $(".travel-data li").click(function (e) {
        $(this).parent("ul").find("li").removeClass("active");
        $(this).addClass("active");
        e.stopImmediatePropagation();
    });
    $(".travel-class li").click(function (e) {
        $(this).parent("ul").find("li").removeClass("active");
        $(this).addClass("active");
        e.stopImmediatePropagation();
    });

    $("#divdepartdate").dateRangePicker({
        autoClose: true,
        format: dateFormat,
        startDate: moment().add(2, 'days').format(dateFormat),
        monthSelect: false,
        yearSelect: false,
        selectForward: false,
        container: "#divdepartdate",
        setValue: function (s, s1, s2) {
            $("#hdnDepartDate").val(moment(s1).format('MM/DD/YYYY'));
            $("#dptDt").html(moment(s1).format('DD'));
            $("#dptMnth").html(moment(s1).format('MMM'));
            $("#dptYr").html(moment(s1).format('YY'));
            $("#dptDay").html(moment(s1).format('dddd'));
            $("#hdnReturnDate").val(moment(s2).format('MM/DD/YYYY'));
            $("#rtrnDt").html(moment(s2).format('DD'));
            $("#rtrnMnth").html(moment(s2).format('MMM'));
            $("#rtrnYr").html(moment(s2).format('YY'));
            $("#rtrnDay").html(moment(s2).format('dddd'));
        }
    }).bind('datepicker-change', function (event, obj) {
        if (obj.date2 != undefined) {
            $("#divreturndate").data('dateRangePicker').setStart(moment(obj.date1).format(dateFormat), true);
            $("#divreturndate").data('dateRangePicker').setEnd(moment(obj.date2).format(dateFormat), true);
            $("#divreturndate").data('dateRangePicker').setDateRange(moment(obj.date1).format(dateFormat), moment(obj.date2).format(dateFormat), true);
        }
    });

    $("#divreturndate").dateRangePicker({
        autoClose: true,
        format: dateFormat,
        startDate: moment().add(2, 'days').format(dateFormat),
        selectForward: false,
        singleDate: false,
        monthSelect: false,
        yearSelect: false,
        container: "#divreturndate",
        setValue: function (s, s1, s2) {
            $("#hdnDepartDate").val(moment(s1).format('MM/DD/YYYY'));
            $("#dptDt").html(moment(s1).format('DD'));
            $("#dptMnth").html(moment(s1).format('MMM'));
            $("#dptYr").html(moment(s1).format('YY'));
            $("#dptDay").html(moment(s1).format('dddd'));

            $("#hdnReturnDate").val(moment(s2).format('MM/DD/YYYY'));
            $("#rtrnDt").html(moment(s2).format('DD'));
            $("#rtrnMnth").html(moment(s2).format('MMM'));
            $("#rtrnYr").html(moment(s2).format('YY'));
            $("#rtrnDay").html(moment(s2).format('dddd'));
        }
    }).bind('datepicker-first-date-selected', function (event, obj) {

        if (moment(moment($("#hdnDepartDate").val()).format('MM/DD/YYYY')).isAfter(moment(obj.date1).format('MM/DD/YYYY'))) {
            $("#hdnDepartDate").val(moment(obj.date1).format('MM/DD/YYYY'));
            $("#dptDt").html(moment(obj.date1).format('DD'));
            $("#dptMnth").html(moment(obj.date1).format('MMM'));
            $("#dptYr").html(moment(obj.date1).format('YY'));
            $("#dptDay").html(moment(obj.date1).format('dddd'));
        }
        $("#hdnReturnDate").val(moment(obj.date1).format('MM/DD/YYYY'));
        $("#rtrnDt").html(moment(obj.date1).format('DD'));
        $("#rtrnMnth").html(moment(obj.date1).format('MMM'));
        $("#rtrnYr").html(moment(obj.date1).format('YY'));
        $("#rtrnDay").html(moment(obj.date1).format('dddd'));
        $("#divreturndate").data('dateRangePicker').close();
    })
});
$(document).ready(function () {

    $("input[name='TripType']").click(function () {
        var journeyType = $("#rdbRoundTrip").prop("checked") == true ? "R" : "O";
        $('#divdepartdate').data('dateRangePicker').destroy();
        if (journeyType == "R") {
            $("#img-close").show();
            $("#divreturndate").show();
            $("#divaddreturn").hide();
            $("#rdbRoundTrip").prop("checked", true);
            $("#rdbOneWay").prop("checked", false);

            if (moment(moment($("#hdnDepartDate").val()).format('MM/DD/YYYY')).isAfter(moment($("#hdnReturnDate").val()).format('MM/DD/YYYY'))) {
                $("#hdnReturnDate").val(moment($("#hdnDepartDate").val()).format('MM/DD/YYYY'));
                $("#rtrnDt").html(moment($("#hdnDepartDate").val()).format('DD'));
                $("#rtrnMnth").html(moment($("#hdnDepartDate").val()).format('MMM'));
                $("#rtrnYr").html(moment($("#hdnDepartDate").val()).format('YY'));
                $("#rtrnDay").html(moment($("#hdnDepartDate").val()).format('dddd'));
            }
            $("#divdepartdate").dateRangePicker({
                autoClose: true,
                format: dateFormat,
                startDate: moment().add(2, 'days').format(dateFormat),
                selectForward: false,
                singleDate: false,
                monthSelect: false,
                yearSelect: false,
                container: "#divdepartdate",
                setValue: function (s, s1, s2) {
                    $("#hdnDepartDate").val(moment(s1).format('MM/DD/YYYY'));
                    $("#dptDt").html(moment(s1).format('DD'));
                    $("#dptMnth").html(moment(s1).format('MMM'));
                    $("#dptYr").html(moment(s1).format('YY'));
                    $("#dptDay").html(moment(s1).format('dddd'));
                    $("#hdnReturnDate").val(moment(s2).format('MM/DD/YYYY'));
                    $("#rtrnDt").html(moment(s2).format('DD'));
                    $("#rtrnMnth").html(moment(s2).format('MMM'));
                    $("#rtrnYr").html(moment(s2).format('YY'));
                    $("#rtrnDay").html(moment(s2).format('dddd'));
                }
            }).bind('datepicker-change', function (event, obj) {

                $("#divreturndate").data('dateRangePicker').setStart(moment(obj.date1).format(dateFormat), true);
                $("#divreturndate").data('dateRangePicker').setEnd(moment(obj.date2).format(dateFormat), true);
                $("#divreturndate").data('dateRangePicker').setDateRange(moment(obj.date1).format(dateFormat), moment(obj.date2).format(dateFormat), true);
            });

        }
        else {
            $("#img-close").hide();
            $("#divreturndate").hide();
            $("#divaddreturn").show();
            $("#rdbOneWay").prop("checked", true);
            $("#rdbRoundTrip").prop("checked", false);

            $("#divdepartdate").dateRangePicker({
                autoClose: true,
                format: dateFormat,
                startDate: moment().add(2, 'days').format(dateFormat),
                singleDate: false,
                monthSelect: false,
                yearSelect: false,
                container: "#divdepartdate",
                setValue: function (s, s1, s2) {

                    $("#hdnDepartDate").val(moment(s1).format('MM/DD/YYYY'));
                    $("#dptDt").html(moment(s1).format('DD'));
                    $("#dptMnth").html(moment(s1).format('MMM'));
                    $("#dptYr").html(moment(s1).format('YY'));
                    $("#dptDay").html(moment(s1).format('dddd'));

                    $("#rtrnDt").html(moment($("#hdnReturnDate").val()).format('DD'));
                    $("#rtrnMnth").html(moment($("#hdnReturnDate").val()).format('MMM'));
                    $("#rtrnYr").html(moment($("#hdnReturnDate").val()).format('YY'));
                    $("#rtrnDay").html(moment($("#hdnReturnDate").val()).format('dddd'));
                }
            }).bind('datepicker-first-date-selected', function (event, obj) {
                var journeyType = $("#rdbRoundTrip").prop("checked") == true ? "R" : "O";
                if (journeyType == "O") {

                    $("#hdnDepartDate").val(moment(obj.date1).format('MM/DD/YYYY'));
                    $("#dptDt").html(moment(obj.date1).format('DD'));
                    $("#dptMnth").html(moment(obj.date1).format('MMM'));
                    $("#dptYr").html(moment(obj.date1).format('YY'));
                    $("#dptDay").html(moment(obj.date1).format('dddd'));
                    $("#divdepartdate").data('dateRangePicker').close();
                }
            })
        }

    });

    $("#divaddreturn").click(function (e) {
        $("#rdbRoundTrip").prop("checked", true);
        $("#rdbOneWay").prop("checked", false);
        $("#divaddreturn").hide();
        $("#divreturndate").show();
        $("#img-close").show();
        $("#rdbRoundTrip").trigger("click");
        e.stopPropagation();
        $('#divreturndate').trigger("click");
    });
    $("#img-close").click(function () {
        $("#rdbRoundTrip").prop("checked", true);
        $("#rdbOneWay").prop("checked", false);
        $("#divaddreturn").hide();
        $("#divreturndate").show();
        $("#rdbOneWay").trigger("click");
        $("#img-close").hide();
    });
    var journeyType = $("#rdbRoundTrip").prop("checked") == true ? "R" : "O";

    if (journeyType == "O") {
        $("#img-close").hide();
        $("#rdbOneWay").trigger("click");
    }
    else {
        $("#img-close").show();
    }
});
$('#divdepartdate').click(function (evt) {
    $("#DivTravelPopData").hide();
    evt.stopPropagation();
    $('#divreturndate').data('dateRangePicker').close();
    var journeyType = $("#rdbRoundTrip").prop("checked") == true ? "R" : "O";
    if (journeyType == "O") {
        $("#divdepartdate").data('dateRangePicker').setDateRange(moment($("#hdnDepartDate").val()).format(dateFormat), moment($("#hdnDepartDate").val()).format(dateFormat), true);
    }
    else {
        $("#divdepartdate").data('dateRangePicker').setDateRange(moment($("#hdnDepartDate").val()).format(dateFormat), moment($("#hdnReturnDate").val()).format(dateFormat), true);
    }

});
$('#divreturndate').click(function (evt) {

    evt.stopPropagation();
    $('#divdepartdate').data('dateRangePicker').close();
    $("#divreturndate").data('dateRangePicker').setDateRange(moment($("#hdnDepartDate").val()).format(dateFormat), moment($("#hdnReturnDate").val()).format(dateFormat), true);
});


