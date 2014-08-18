$(function() {
    $("#wheel").click(function() {
        var wheel = $(this),
        clone = wheel.clone(true);
        wheel.before(clone);
        $("." + wheel.attr("class") + ":last").remove();
    });
});

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Member', 'Chore'],
      ['Jeff',     1],
      ['Gavin',      1],
      ['Curtis',  1]
    ]);

    var options = {
      title: 'Chore Team'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}