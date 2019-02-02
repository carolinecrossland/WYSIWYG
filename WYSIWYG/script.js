function updateOutput(){
  $("#outputCodePanel").contents().find("html").html(
    "<html><head><style type = 'text/css'>" +
    $("#cssCodePanel").val() + "</style></head><body>" + $("#htmlCodePanel").val() + "</body></html>");

    document.getElementById("outputCodePanel").contentWindow.eval($("#jsCodePanel").val());

}

$(".button").hover(function(){
  $(this).addClass("hoveredOverButton")}, function(){
    $(this).removeClass("hoveredOverButton");
  });

$(".button").click(function(){
  $(this).toggleClass("selectedButton");
  $(this).removeClass("hoveredOverButton");

  let panelID = $(this).attr("id") + "CodePanel";
  $("#" + panelID).toggleClass("hidden");

  let numSelectedPanels = 4 - $(".hidden").length;
  $(".codePanel").width(($(window).width()/numSelectedPanels) - 9);
});

$(".codePanel").height($(window).height() - $("#topBar").height());
$(".codePanel").width(($(window).width()/2) - 10);

updateOutput();

$("textArea").on("change keyup paste", function(){
  updateOutput();
  });
