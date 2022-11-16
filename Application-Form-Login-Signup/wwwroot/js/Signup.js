$(document).ready(function () {
    var baseUrl = $("#baseurl").val();
    alert("submit data");
    //Save
    $("#btn").click(function (e) {
        if ($("#fname").val() == '')
            alert("first name  is null");
        var PostData = {
            FirstName: $("#fname").val(),
            LastName: $("#lname").val(),
            Email: $("#email").val()
           
        }

        $.ajax({
            type: "POST",
            url: "/Signup/SaveSignUp",
            data: PostData,
            success: function (result) {
                if (result.Item1 !== "") {
                    if (result.Item1 == 2)
                        swal("", response.Item2, "warning").then((value) => {
                        });
                    else if (response.Item1 == 1) {
                        swal("", response.Item2, "success").then((value) => {
                        });
                    }

                }
            },
            error: function (response) {
            }
        });
    });
});