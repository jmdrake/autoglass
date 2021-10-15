$(document).ready(function () {
    $("#submitquote").click(function () {
        alert("Submitting quote");
        var year = $("#year").val();
        var make = $("#make").val();
        var model = $("#model").val();
        var name = $("#name1").val();
        var email = $("#email1").val();
        var phone = $("#phone1").val();
        var window = $("#window").val();
        var vin = $("#vin").val();
        var doortype = $("#twodoor").is(":checked") ? "two-door" : "four-door";
        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'name=' + name + '&email=' + email + '&phone=' + phone + '&year=' + year + '&make=' + make +
            '&model=' + model + "&window=" + window + "&doortype=" + doortype + "&vin=" + vin + "&emailtype=quote";
        if (name == '' || email == '' || phone == '' || year == '' || make == '' || model == '' || window == '' || (!($("#twodoor").is(":checked") || $("#fourdoor").is(":checked")))) {
            alert("Please Fill All Fields");
        }
        else {
            // AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "./php/phpmail.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    if (result.indexOf("Message has been sent") >= 0) {
                        alert("Quote request received");
                        $("#name1").val("");
                        $("#email1").val("");
                        $("#phone1").val("");
                        $("#year").val("");
                        $("#make").val("");
                        $("#model").val("");
                        $("#window").val("");
                        $("#vin").val("");
                        $("#twodoor").prop("checked", false);
                        $("#fourdoor").prop("checked", false);
                    } else {
                        alert("Server error while sending quote");
                        console.log(result);
                    }
                }
            });
        }
        return false;
    });

    $("#submitmsg").click(function () {
        var name = $("#name2").val();
        var email = $("#email2").val();
        var phone = $("#phone2").val();
        var message = $("#message").val();
        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'name=' + name + '&email=' + email + '&phone=' + phone + '&message=' + message + "&emailtype=message";
        console.log(dataString);
        if (name == '' || email == '' || phone == '' || message == '') {
            alert("Please Fill All Fields");
        }
        else {
            // AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "./php/phpmail.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    if (result.indexOf("Message has been sent") >= 0) {
                        alert("Message received");
                        $("#name2").val("");
                        $("#email2").val("");
                        $("#phone2").val("");
                        $("#message").val("");
                    } else {
                        alert("Server error while sending message");
                        console.log(result);
                    }
                }
            });
        }
        return false;
    });

    $("#submitapplication").click(function () {
        var name = $("#name3").val();
        var email = $("#email3").val();
        var phone = $("#phone3").val();
        var startdate1 = $("#startdate1").val();
        var enddate1 = $("#enddate1").val();
        var jobtitle1 = $("#jobtitle1").val();
        var employername1 = $("#employername1").val();
        var employerphone1 = $("#employerphone1").val();
        var startdate2 = $("#startdate2").val();
        var enddate2 = $("#enddate2").val();
        var jobtitle2 = $("#jobtitle2").val();
        var employername2 = $("#employername2").val();
        var employerphone2 = $("#employerphone2").val();
        var startdate3 = $("#startdate3").val();
        var jobtitle3 = $("#jobtitle3").val();
        var enddate3 = $("#enddate3").val();
        var employername3 = $("#employername3").val();
        var employerphone3 = $("#employerphone3").val();

        var yearsexp = $("#yearsexp").val();
        var tools = $("#tools").val();
        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'name=' + name + '&email=' + email + '&phone=' + phone +
            '&startdate1=' + startdate1 + '&enddate1=' + enddate1 + '&jobtitle1=' + jobtitle1 + '&employername1=' + employername1 + '&employerphone1=' + employerphone1 +
            '&startdate2=' + startdate2 + '&enddate2=' + enddate2 + '&jobtitle2=' + jobtitle2 + '&employername2=' + employername2 + '&employerphone2=' + employerphone2 +
            '&startdate3=' + startdate3 + '&enddate3=' + enddate3 + '&jobtitle3=' + jobtitle3 + '&employername3=' + employername3 + '&employerphone3=' + employerphone3 +
            '&yearsexp=' + yearsexp + '&tools=' + tools + '&emailtype=jobapp';
        if (name == '' || email == '' || phone == '' || startdate1 == '' || startdate2 == '' || startdate3 == '' || enddate1 == '' || enddate2 == '' || enddate3 == '' ||
           jobtitle1 == '' || jobtitle2 == '' || jobtitle3 == '' || employername1 == '' || employername2 == '' || employername3 == '' ||
           employerphone1 == '' || employerphone2 == '' || employerphone3 == '' || yearsexp == '' || tools == '') {
            alert("Please Fill All Fields");
        }
        else {
            // AJAX Code To Submit Form.
            console.log(dataString);
            $.ajax({
                type: "POST",
                url: "./php/phpmail.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    if (result.indexOf("Message has been sent") >= 0) {
                        alert("Application received");
                        $("#name3").val("");
                        $("#email3").val("");
                        $("#phone3").val("");
                        $("#startdate1").val("");
                        $("#enddate1").val("");
                        $("#jobtitle1").val("");
                        $("#employername1").val("");
                        $("#employerphone1").val("");
                        $("#startdate2").val("");
                        $("#enddate2").val("");
                        $("#jobtitle2").val("");
                        $("#employername2").val("");
                        $("#employerphone2").val("");
                        $("#startdate3").val("");
                        $("#jobtitle3").val("");
                        $("#enddate3").val("");
                        $("#employername3").val("");
                        $("#employerphone3").val("");
                        $("#yearsexp").val("");
                        $("#tools").val("");
                    } else {
                        alert("Server error while sending application");
                        console.log(result);
                    }
                }
            });
        }
        return false;
    });


    if (window.innerWidth < 800) {
        document.getElementsByClassName("w3-opennav")[0].style.display = "";
        document.getElementsByTagName("nav")[0].style.display = "none";
        document.getElementsByTagName("nav")[0].className = "w3-dropnav w3-red w3-top";
        e = document.getElementsByClassName("banner");
        for (var i = 0; i < e.length; i++) {
            e[i].width = window.innerWidth - window.innerWidth / 10;
        }
    } else {
        document.getElementsByClassName("w3-opennav")[0].style.display = "none";
        document.getElementsByTagName("nav")[0].style.display = "";
    }
});

var reply_click = function(target)
{
    if(document.getElementsByClassName("w3-opennav")[0].style.display != "none")
        close_dropnav();
    e = document.getElementsByClassName("page");
    for(var i = 0; i < e.length; i++) {
        e[i].style.display = "none";
    }
    document.getElementById(target).style.display = "";     
    return false;
}

function open_dropnav() {
    document.getElementsByClassName("w3-dropnav")[0].style.display = "block";
}

function close_dropnav() {
    document.getElementsByClassName("w3-dropnav")[0].style.display = "none";
}

$( window ).scroll(function() {
    if(window.pageYOffset > 60) {
        $("header").css("top", "0")
    } else {
        $("header").css("top", 60 - window.pageYOffset)
    }
});