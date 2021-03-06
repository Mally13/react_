var currencyApp = angular.module("currencyApp", []);
currencyApp.controller('CurrencyRate', function ($rootScope, $scope, $filter, $timeout, $interval, $q, $log, $sce, $compile) {
   
    $scope.selectedCurrency = {};
    $scope.allCountryCurrency = [];
    $scope.GetallCountryCurrency = function () {
        //var companyCode = 'CUK';
        //var channelCode = 'B2C';
        if (window.sessionStorage.getItem("allCurrency") == null) {
            $.ajax({
                url: "/Home/allCountryCurrency",
                type: "GET",
                //data: { "companyCode": companyCode, "channelCode": channelCode },
                dataType: "json",
                async:false,
                success: function (data, status, xhr) {
                    if (data != null && data != "") {
                        var items = JSON.parse(data);
                        $scope.allCountryCurrency = items.data;
                        var jsonOrder = JSON.stringify(items.data);
                        window.sessionStorage.setItem("allCurrency", jsonOrder);
                    }
                    else {

                    }
                },
                error: function (xhr, status, error) {
                    //alert("Error!" + xhr.status);
                },
            });

        } else {
            var items = JSON.parse(window.sessionStorage.getItem("allCurrency"));
            $scope.allCountryCurrency = items;
        }

    }
    $scope.setSelectedCurrency = function (item, ev) {
        
        $scope.selectedCurrency = item;
        var jsonOrder = JSON.stringify(item);
        window.sessionStorage.setItem("selectedCurrency", jsonOrder);
        setSelectedCurrencuSession(window.sessionStorage.getItem("selectedCurrency"));
        if (window.location.href.indexOf("PaxDetail") > -1 || window.location.href.indexOf("ProductRetarget") > -1 || window.location.href.indexOf("Confirm") > -1 || window.location.href.indexOf("Booking") > -1) {
            window.location.reload();
        }
        $('#countrycurrencym').find("li").removeClass('curr-selected');
        $("#countrys").find("a").removeClass("curr-selected");
        $(ev.currentTarget).addClass("curr-selected");
        $("#countrys").slideToggle();   
        $('#countrycurrencym').removeClass('show');
    }
        
    $scope.checkSelectedCurrency = function () {
        if (window.sessionStorage.getItem("selectedCurrency") == null) {
            $.ajax({
                url: "/Home/selectedCurrency",
                type: "GET",
                //data: { "companyCode": companyCode, "channelCode": channelCode },
                dataType: "json",
                async: false,
                success: function (data, status, xhr) {
                    if (data != null && data != "") {
                        //var items = JSON.parse(data);
                        var items = data;
                        $scope.selectedCurrency = items;
                        var jsonOrder = JSON.stringify(items);
                        window.sessionStorage.setItem("selectedCurrency", jsonOrder);                       
                    }
                    else {

                    }
                },
                error: function (xhr, status, error) {
                    //alert("Error!" + xhr.status);
                },
            });            
        }
        else {
            var items = JSON.parse(window.sessionStorage.getItem("selectedCurrency"));
            $scope.selectedCurrency = items;
        }  
        
        setSelectedCurrencuSession(window.sessionStorage.getItem("selectedCurrency"));
    }
    
    $scope.checkSelectedCurrency();
    $scope.GetallCountryCurrency();



});


$(document).ready(function () {

    //allCountryCurrency();
    var selectedCurrency = JSON.parse(window.sessionStorage.getItem("selectedCurrency"));
    $("#countrys").find("a[data-currcode='" + selectedCurrency.currencyCode + "']").addClass("curr-selected");
    $('#countrycurrencym').find("li[data-currcode='" + selectedCurrency.currencyCode + "']").addClass("curr-selected");
});
function setSelectedCurrencuSession(items) {
    var currencyObj = JSON.parse(items);
   
    $.ajax({
        url: "/Home/SetCurrencySession?currencyCode=" + currencyObj.currencyCode + "&currencySymbol=" + currencyObj.currencySymbol + "&conversionRate=" + currencyObj.conversionRate,
        type: "GET",        
        dataType: "json",
        async: false,
        success: function (data) {
            
        },
        error: function () {
            
        },
    });
}

function allCountryCurrency() {
    var companyCode = 'CUK';
    var channelCode = 'B2C';
    if (window.sessionStorage.getItem("allCurrency") == null) {
        $.ajax({
            url: "/Home/allCountryCurrency",
            type: "GET",
            data: { "companyCode": companyCode, "channelCode": channelCode },
            dataType: "json",
            success: function (data, status, xhr) {
                if (data != null && data != "") {
                    var items = JSON.parse(data);
                    var jsonOrder = JSON.stringify(items.data);
                    window.sessionStorage.setItem("allCurrency", jsonOrder);

                    bindallCountryCurrency(items.data);
                }
                else {

                }
            },
            error: function (xhr, status, error) {
                //alert("Error!" + xhr.status);
            },
        });

    } else {
        var items = JSON.parse(window.sessionStorage.getItem("allCurrency"));
        bindallCountryCurrency(items);
    }

}
function bindallCountryCurrency(items) {
    var countryCurrency = $('#countrys');
    var content = '';
    content += '<div class="row">';
    content += '<div class="col-12">';
    content += '<ul>';
    for (var i = 0; i < items.length; i++) {
        content += '<li><a href=""><span class="uk-icon"></span>' + items[i].currencyCode + (items[i].currencySymbol == null || items[i].currencySymbol == '' ? '' : ' - ' + items[i].currencySymbol) + '</a></li>';
    }
    content += '</ul>';
    content += '</div>';
    content += '</div>';
    countryCurrency.empty().html(content);
}
function checkSelectedCurrency() {

    var selectedCurrency = {};
}