$(document).ready(function () {
    
    $(".navbar-toggler").click(function (e) {
        if ($("#navbarSupportedContent").is(":visible")) {
            $("body").css("overflow", "auto");
        }
        else { $("body").css("overflow", "hidden"); }
    });

    //login sign up popup
    $(".logg-continue").click(function () {
       

        if ($.trim($("#txtLoginEmail").val()).length == 0) {
            $("#spnLoginEmailErrorMessage").html('Enter emailId');
            $("#txtLoginEmail").css("border-color", "red");
            return false;
        }
        else {
            if (checkLoginMail($.trim($("#txtLoginEmail").val())) == false) {
                return false;
            }
            else {

                $.ajax({
                    url: "https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signin.php",
                    type: "GET",
                    headers: {Authorization:`YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM=`},
                    data: { "emailId": $("#txtLoginEmail").val() },
                    dataType: "json",
                    success: function (data, status, xhr) {

                        if (data != null && data != "" && data.IsOperationSuccess == true) {
                            $("#btnemail").hide();
                            $(".log-hide").hide();
                            $(".pswd-btn").show();
                        }
                        else {
                            $("#spnLoginEmailErrorMessage").html('EmailId Not Exists !!');
                            $("#txtLoginEmail").css("border-color", "red");
                        }
                    },
                    error: function (xhr, status, error) {
                        alert("Error!" + xhr.status);
                    },
                });

            }
        }
});

    $(".log-toggle").click(function () {
        $(".acc-toggle").slideToggle();
    });

    $(".sng-btn").click(function () {
        $(".sign-in-up").fadeIn();
        resetCreateAccount();
        resetUserLogin();
    });

    $(".signup-show").click(function () {
        $(".sign-in-main").fadeOut();
        $(".sign-up-main").fadeIn();
        resetCreateAccount();
        resetUserLogin();
    });

    $(".log-show").click(function () {
        $(".sign-up-main").fadeOut();
        $(".sign-in-main").fadeIn();
        resetCreateAccount();
        resetUserLogin();
        $(".logg-continue").show();
        $(".log-hide").show();
        $(".pswd-btn").hide();
    });

    $(".sin-close").click(function () {
        resetUserLogin();
        resetCreateAccount();
        $(".logg-continue").show();
        $(".log-hide").show();
        $(".pswd-btn").hide();
        $(".sign-in-up").fadeOut();
    });

    $(".sin-close-sec").click(function () {
        $(".sign-up-main").hide();
        $(".sign-in-main").fadeIn();
    });

    $(".user-den").click(function () {
        $(".sign-toggle").slideToggle();
    });

    $(".sng-btn").click(function () {
        $("body").addClass("over-hidden")
    });

    $(".sin-close").click(function () {
        $("body").removeClass("over-hidden")
    });

    $("#userRegistration .title-tab a").click(function () {
        $(".title-tab a").removeClass("ttab-active");
        $(this).addClass("ttab-active");

    });

    resetCreateAccount();
    resetUserLogin();
    userLoginWithCheckLogin();
    registerUserWithCheckvalidate();


    //Mobile number country code calendar rendering
    // $("#countrycode").intlTelInput({
    //     onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
    //         "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
    //         "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
    //         "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb", "us", "in", "th"]
    // });

    //$(function () {
    //    $('#txtUserRegistrationDOB').datepicker({
    //        singleDatePicker: true,
    //        showDropdowns: true,
    //        minYear: 1901,
    //        maxYear: parseInt(moment().format('YYYY'), 10)
    //    }, function (start, end, label) {
    //    });
    //});
    // setCalendarDOB("#txtUserRegistrationDOB", moment().subtract(100, 'years').format(dateFormat), moment().subtract(0, 'years').format(dateFormat), "DOB");


    //$('#txtUserRegistrationDOB').datepicker();
    //$('#txtUserRegistrationDOB').datepicker('setDate', 'today');
    //$("#txtUserRegistrationDOB").datepicker({ dateFormat: 'dd/mm/yyyy' })

    //$('#txtUserRegistrationDOB').daterangepicker({
    //    singleDatePicker: true,
    //    showDropdowns: true,
    //    startDate: moment().add(5, 'day'),
    //    minDate: moment(),
    //    locale: {
    //        format: 'YYYY-MM-DD'
    //    }
    //});
});

// function setCalendarDOB(controlId, startDate, endDate, calendarType) {

  
    
//     //Setting DOB calendars for each passenger    
//     $(controlId).dateRangePicker({
//         autoClose: true,
//         format: dateFormat,
//         monthSelect: true,
//         yearSelect: [moment(startDate).get('year'), moment(endDate).get('year')],
//         singleDate: true,
//         singleMonth: true,       
//         startDate: startDate,
//         endDate: endDate,
//         container: "#div-dob",
//         showTopbar: false,
//         setValue: function (s, s1, s2) {

//             if (moment(endDate).isAfter(moment(s1).format(dateFormat))) {
//                 $(this).val(moment(s1).format(dateFormat));
//             }
//             else {
//                 $(this).val("");
//             }
//         }
//     }).bind('datepicker-change', function (event, obj) {

//         $(this).trigger("onchange");
//     });
// }

function registerUserWithCheckvalidate() {

    $("#registerUserWithCheckvalidate").click(function () {
        
        let errorCount = 0;

        if ($.trim($("#txtname").val()).length == 0) {
            $("#spnfirstNameErrorMessage").html('Enter first name');
            $("#txtname").css('border-color', 'red');
            errorCount++;
        }
        if ($.trim($("#txtlastname").val()).length == 0) {
            $("#spnLastNameErrorMessage").html('Enter last name');
            $("#txtlastname").css('border-color', 'red');
            errorCount++;
        }
        if ($.trim($("#txtemail").val()).length == 0) {
            $("#spnEmailIdErrorMessage").html('Enter email id');
            $("#txtemail").css('border-color', 'red');
            errorCount++;
        }
        if ($.trim($("#txtpassword").val()).length == 0) {
            $("#spnPasswordErrorMessage").html('Enter password');
            $("#txtpassword").css('border-color', 'red');
            errorCount++;
        }


        if ($.trim($("#txtPhoneNumber").number()).length == 0) {
            $("#spnPhoneErrorMessage").html('Enter phone number');
            $("#txtPhoneNumber").css('border-color', 'red');
            errorCount++;
        }

        if ($.trim($("#txtPhoneNumber").number()) == false) {
           $("#spnPhoneErrorMessage").html('Enter valid phone number');
           $("#txtPhoneNumber").css('border-color', 'red');
           errorCount++;
        }


        if ($.trim($("#txtemail").val()).length > 0) {
            if (checkmail($.trim($("#txtemail").val())) == false) {
                $("#spnEmailIdErrorMessage").html('Enter valid email id');
                $("#txtemail").css('border-color', 'red');
                errorCount++;
            }
        }

        if ($("#chktc").is(":checked") == false) {

            $("#spnAgreeErrorMessage").html('Please check terms & conditions');
            $("#chktc").css('border-color', 'red');
            errorCount++;
        }


        $("#txtname").keydown(function () {
            $("#spnfirstNameErrorMessage").html('');
            $("#txtname").css('border-color', '');
        });

        $("#txtlastname").keydown(function () {
            $("#spnLastNameErrorMessage").html('');
            $("#txtlastname").css('border-color', '');
        });

        $("#txtemail").keydown(function () {
            $("#spnEmailIdErrorMessage").html('');
            $("#txtemail").css('border-color', '');
        });

        $("#txtpassword").keydown(function () {
            $("#spnPasswordErrorMessage").html('');
            $("#txtpassword").css('border-color', '');
        });

        $("#txtPhoneNumber").keydown(function () {
            $("#spnPhoneErrorMessage").html('');
            $("#txtPhoneNumber").css('border-color', '');
        });

        if (errorCount > 0) {
            return false;
        }

        let model = {
            "Title": $(".ttab-active").text(),
            "FirstName": $.trim($("#txtname").val()),
            "LastName": $.trim($("#txtlastname").val()),
            "EmailId": $.trim($("#txtemail").val()),
            "MobileNumber": $.trim($("#txtPhoneNumber").number()),
            "DOB": $.trim($("#txtUserRegistrationDOB").val()),
            "Password": $.trim($("#txtpassword").val()),
            // "CountryCode": parseInt($("#countrycode").intlTelInput("getSelectedCountryData").dialCode),
            "Gender": $("#ddlGender").find("option:selected").val()

        }

        $.ajax({
            url: "https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signup.php",
            type: "POST",
            headers: {Authorization:`YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM=` 
                     },
            dataType: "json",
            data: { userDetail: model },
            success: function (data, status, xhr) {
                if (data != null && data != undefined && data.IsOperationSuccess == true) {
                    if (data.Status.message == "OK") {
                        alert("User register successfully");
                        $(".sign-in-up").fadeOut();
                        $.ajax({
                            url: "https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signin.php",
                            headers: {Authorization:`YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM=`},
                            type: "GET",
                            data: { "emailId": data.Data[0].EmailId, "password": $.trim($("#txtpassword").val()) },
                            dataType: "json",
                            success: function (data, status, xhr) {
                                if (data != null && data != "") {
                                    resetUserLogin();
                                    resetCreateAccount();
                                    alert("Login successfully");
                                    $(".sin-close").click();
                                    $(".sin-close-sec").click();
                                    window.location.reload();
                                }
                                else {
                                    alert("Email or Password is incorrect");
                                }
                            },
                            error: function (xhr, status, error) {
                                alert("Error!" + xhr.status);
                            },
                        });
                    }
                    else {
                        alert(data.Status.message);
                    }
                }
                else {
                    alert("Error, Try again");
                }
                return true;
            },
            error: function (xhr, status, error) {
                console.log("Error! " + xhr.status);
            },
        });
    })
}

function userLoginWithCheckLogin() {
    $("#btnUserLoginWithCheckLogin").click(function () {
        let errorCount = 0;
      
        if ($.trim($("#txtLoginEmail").val()).length == 0) {
            $("#spnLoginEmailErrorMessage").html('Enter emailId');
            $("#txtLoginEmail").css('border-color', 'red');
            errorCount++;
        }
        if ($.trim($("#txtLoginPassword").val()).length == 0) {
            $("#spnLoginPasswordErrorMessage").html('Enter password');
            $("#txtLoginPassword").css('border-color', 'red');
            errorCount++;
        }

        if ($.trim($("#txtLoginEmail").val()).length > 0) {
            if (checkLoginMail($.trim($("#txtLoginEmail").val())) == false) {
                errorCount++;
            }
        }

        $("#txtLoginEmail").keydown(function () {
            $("#spnLoginEmailErrorMessage").html('');
            $("#txtLoginEmail").css('border-color', '');
        });

       

        if (errorCount > 0) {
            return false;
        }
        let userEmailId = $.trim($("#txtLoginEmail").val());
        let loginPassword = $.trim($("#txtLoginPassword").val());

        $.ajax({
            url: "https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signin.php",
            type: "GET",
            headers: {Authorization:`YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM=`},
            data: { "emailId": userEmailId, "password": loginPassword },
            dataType: "json",
            success: function (data, status, xhr) {
                
                if (data != null && data != "" && data.IsOperationSuccess == true) {
                    resetUserLogin();
                    resetCreateAccount();
                    alert("Login successfully");
                    $(".sin-close").click();
                    $(".sin-close-sec").click();
                    window.location.reload();
                }
                else {
                    alert("Email or Password is incorrect");
                }
            },
            error: function (xhr, status, error) {
                alert("Error!" + xhr.status);
            },
        });
        return true;
    });
}

function phonenumber(inputtxt) {

    var key = [event.keyCode || event.which];
    var keychar = String.fromCharCode([event.keyCode || event.which]);
    keventychar = keychar.toLowerCase();
    checkString = "0123456789";
    if ((key == null) || (key == 0) || (key == 8) ||
        (key == 9) || (key == 13) || (key == 27) || (key == 46)) {
        $("#spnPhoneErrorMessage").html('');
        $("#txtPhoneNumber").css('border-color', '');
        return event.returnValue = true;

    }
    else if (((checkString).indexOf(keychar) > -1)) {
        $("#spnPhoneErrorMessage").html('');
        $("#txtPhoneNumber").css('border-color', '');
        return event.returnValue = true;
    }
    else {
        $("#txtPhoneNumber").css('border-color', 'red');
        $("#txtPhoneNumber").val('');
        $("#spnPhoneErrorMessage").html('Enter valid phone number');
        return event.returnValue = false;
    }

}

function checkmail(email) {
    var emailReg = new RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    $("#txtemail").keydown(function () {
        $("#spnEmailIdErrorMessage").html('');
        $("#txtemail").css('border-color', '');
    });
    if (!emailReg.test(email)) {
        $("#spnEmailIdErrorMessage").html('Enter valid email id');
        $("#txtemail").css('border-color', 'red');
        return false;
    } else {
        $("#spnEmailIdErrorMessage").html('');
        $("#txtemail").css('border-color', '');
        return true;
    }
}

function checkLoginMail(email) {
    var emailReg = new RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    $("#txtLoginEmail").keydown(function () {
        $("#spnLoginEmailErrorMessage").html('');
        $("#txtLoginEmail").css('border-color', '');
    });

    if ($.trim($("#txtLoginEmail").val()).length == 0) {
        $("#spnLoginEmailErrorMessage").html('Enter emailId');
        $("#txtLoginEmail").css('border-color', 'red');
        return false;
    }

    if (!emailReg.test(email)) {
        $("#spnLoginEmailErrorMessage").html('Enter valid email id');
        $("#txtLoginEmail").css('border-color', 'red');
        return false;
    }
    else {
        $("#spnLoginEmailErrorMessage").html('');
        $("#txtLoginEmail").css('border-color', '');
        return true;
    }
}

function resetCreateAccount() {
    $("#txtname").val('');
    $("#txtlastname").val('');
    $("#txtemail").val('');
    $("#txtPhoneNumber").val('');
    $("#txtpassword").val('');

    $("#spnfirstNameErrorMessage").html('');
    $("#spnLastNameErrorMessage").html('');
    $("#spnEmailIdErrorMessage").html('');
    $("#spnPhoneErrorMessage").html('');
    $("#spnDOBErrorMessage").html('');
    $("#spnPasswordErrorMessage").html('');

    $("#txtname").css('border-color', '');
    $("#txtlastname").css('border-color', '');
    $("#txtemail").css('border-color', '');
    $("#txtPhoneNumber").css('border-color', '');
    $("#txtpassword").css('border-color', '');

}

function resetUserLogin() {
    $("#txtLoginEmail").val('');
    $("#txtLoginPassword").val('');

    $("#spnLoginEmailErrorMessage").html('');
    $("#spnLoginPasswordErrorMessage").html('');

    $("#txtLoginEmail").css('border-color', '');
    $("#txtLoginPassword").css('border-color', '');
}

function Showdiv() {
    $("#btnemail").show();
} 