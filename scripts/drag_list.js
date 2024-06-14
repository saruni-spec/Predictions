$(function () {
  $(".sortable").sortable();
  $(".sortable").disableSelection();
});

function checkOrder() {
  let order = [];
  $(".sortable li").each(function (index) {
    order.push($(this).text());
  });
}
