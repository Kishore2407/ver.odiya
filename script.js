$(document).ready(function () {
  $(".loading-icon").hide();
  $(".okcta").click(function () {
    $("#myModal").hide();
  });
  $(".desktopSubmitButton").click(function () {
    $("#formValidation").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
          maxlength: 30,
        },
        phone: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
        region: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "ଦୟାକରି ଆପଣଙ୍କର ନାମ ପ୍ରବେଶ କରନ୍ତୁ |",
          minlength: jQuery.validator.format(
            "ଦୟାକରି, ଅତି କମରେ {0} ବର୍ଣ୍ଣଆବଶ୍ୟକ"
          ),
        },
        phone: "ଦୟାକରି ଆପଣଙ୍କ ମୋବାଇଲ୍ ନମ୍ଵର୍ ପ୍ରବେଶ କରନ୍ତୁ",
        region: "ଦୟାକରି ଆପଣଙ୍କ ଅଞ୍ଚଳ ଚୟନ କରନ୍ତୁ",
      },
      submitHandler: function (form) {
        let data = $("#formValidation")
          .serializeArray()
          .reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
          }, {});

        if (data.name && data.phone && data.region) {
          $(`#desktopSubmitButton`).addClass("pointer-events-none");
          $(`#desktopSubmitButton svg`).toggle("hidden");
          $(".desktopSubmitButton").on("click", function () {
            $(".loading-icon").show();
            console.log("Desktop Data", data);
            $.post(
              "https://diupyef7c5.execute-api.ap-south-1.amazonaws.com/dev/product/promotion",
              JSON.stringify({
                name: data.name,
                mobile: data.phone,
                region: data.region,
                state: "odisha",
                subject: "Odisha Retailer Onboarding",
              })
            ).done(function (data) {
              $("#formValidation").trigger("reset");
              $(`#desktopSubmitButton`).removeClass("pointer-events-none");
              $(".loading-icon").hide();
              $("#myModal").show();
              $(`#desktopSubmitButton svg`).toggle("hidden");
            });
          });
        }
      },
    });
  });

  $(".desktopButton").click(function () {
    $("#formValue").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
          maxlength: 30,
        },
        phone: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
        region: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "ଦୟାକରି ଆପଣଙ୍କର ନାମ ପ୍ରବେଶ କରନ୍ତୁ |",
          minlength: jQuery.validator.format(
            "ଦୟାକରି, ଅତି କମରେ {0} ବର୍ଣ୍ଣଆବଶ୍ୟକ"
          ),
        },
        phone: "ଦୟାକରି ଆପଣଙ୍କ ମୋବାଇଲ୍ ନମ୍ଵର୍ ପ୍ରବେଶ କରନ୍ତୁ",
        region: "ଦୟାକରି ଆପଣଙ୍କ ଅଞ୍ଚଳ ଚୟନ କରନ୍ତୁ",
      },
      submitHandler: function (form) {
        let data = $("#formValue")
          .serializeArray()
          .reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
          }, {});

        if (data.name && data.phone && data.region) {
          $(`#desktopButton`).addClass("pointer-events-none");
          $(`#desktopButton svg`).toggle("hidden");
          $(".desktopButton").on("click", function () {
            $(".loading-icon").show();
            // console.log("Desktop Data", data);
            $.post(
              "https://diupyef7c5.execute-api.ap-south-1.amazonaws.com/dev/product/promotion",

              JSON.stringify({
                name: data.name,
                mobile: data.phone,
                region: data.region,
                state: "odisha",
                subject: "Odisha Retailer Onboarding",
              })
            ).done(function (data) {
              $("#formValue").trigger("reset");
              $(`#desktopButton`).removeClass("pointer-events-none");
              $(".loading-icon").hide();
              $("#myModal").show();
              $(`#desktopButton svg`).toggle("hidden");
            });
          });
        }
      },
    });
  });
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 350) {
    $(".bottomMenu").fadeIn();
    $(".fixed-top").css("background-color", "#f8f8f8"); 
    $(".desktopmenu").addClass("shadow");
    $(".logo").attr("src", "images/logo-primary.svg");
  } else {
    $(".fixed-top").css("background-color", "transparent");
    $(".desktopmenu").removeClass("shadow");
    $(".bottomMenu").hide();
    $(".logo").attr("src", "images/aquawhitelogo.svg");
  }
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 550) {
    $(".stickycta").fadeIn();
  } else {
    $(".stickycta").hide();
  }
});

// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if (y > 500) {
//     $(".logo").hide();
//   } else {
//     $(".logo").fadeIn();
//   }
// });
