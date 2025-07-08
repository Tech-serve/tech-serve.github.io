$(document).ready(function () {
  $("a.link.ftBToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

// document.querySelectorAll("a").forEach(function (link) {
//   link.removeAttribute("href");
// });
$(document).ready(function () {
  $("#buy-prefill, .custom-open-list").on("click", function () {
    $("#main").addClass("d-none");
    $("#footer").addClass("d-none");
    $(".prefill-main").removeClass("d-none");
  });
});
  $(document).ready(function () {
    $.get("https://ipapi.co/json/", function (data) {
      let city = data.city;
      $("#city-custom").text(city);
    });
  });

  function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // месяцы с 0
    return `${day}/${month}`;
  }

  $(document).ready(function () {
    let today = new Date();

    let datePlus1 = new Date(today);
    datePlus1.setDate(today.getDate() + 1);

    let datePlus3 = new Date(today);
    datePlus3.setDate(today.getDate() + 3);

    let formatted1 = formatDate(datePlus1);
    let formatted2 = formatDate(datePlus3);

    // Например, вставим в HTML:
    $("#date1").text(formatted1);
    $("#date2").text(formatted2);
  });
  $(document).ready(function () {
    
    $('#custom-scroll-1').on('click', function () {
        $('#ProductSheetAccordion-header-0').click()
    $('html, body').animate({
      scrollTop: $('#presentation-accordion').offset().top
    }, 400); // 800 мс — скорость прокрутки
  });
  });

  $(document).ready(function () {
    
    $('#custom-scroll-2').on('click', function () {
        $('#ProductSheetAccordion-header-2').click()
    $('html, body').animate({
      scrollTop: $('#description-accordion').offset().top
    }, 400); // 800 мс — скорость прокрутки
  });
  });