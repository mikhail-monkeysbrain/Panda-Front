$(document).ready(function () {
  $('#pagepiling').pagepiling();
  $('#pagepiling .pageDown').click(function () {
    $.fn.pagepiling.moveSectionDown();
  });
  $('#pagepiling .pageUp').click(function () {
    $.fn.pagepiling.moveTo(1);
  });
});
