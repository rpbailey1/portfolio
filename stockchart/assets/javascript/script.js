function calculate(){


			stocksymbol = document.getElementById("Base Currency").value;
      stocksymbol2 = document.getElementById("Convert to Currency").value;
      fdate = document.getElementById("From Date").value;
      tdate = document.getElementById("To Date").value;

var myURL = "https://api.worldtradingdata.com/api/v1/forex_history?base="+ stocksymbol +"&convert_to="+ stocksymbol2 +"&date_from="+ fdate +"date_to="+ tdate +"&api_token=qt0wXYNoXw21c9FAECw8rYNx1eT5YtFZkarXCQKxCN7V09yNtXs7EU0hJeQU";


/* var myURL = "https://api.worldtradingdata.com/api/v1/forex_history?base=USD&convert_to=GBP&api_token=qt0wXYNoXw21c9FAECw8rYNx1eT5YtFZkarXCQKxCN7V09yNtXs7EU0hJeQU" */ 

/* AJAX Method (POST or GET) */
var myMethod = "GET";

/* Make sure the document is ready */
$(document).ready(function() { 

    /* Perform AJAX call - Note that the AJAX function does not have any data */
    $.ajax({
      method: myMethod,
      url: myURL
    })

    /* AJAX complete - result is in msg */
      .done(function( msg ) {

			/*jsonresult = msg["history"]['2020-01-07']['close']*/
			var dates = [];		// contains the date for each data point
			var values = [];	// contains the closing value for each data point

			i = 0
			// loop through each day and get the keydate - see https://www.w3schools.com/js/js_json_objects.asp
			for (datekey in msg.history) {
				dates[i] = datekey
				// Now that we have the key, get the value
  				values[i] = msg.history[datekey]
				i = i + 1
			}
      


			var ctx = document.getElementById("chartjs-0");
			var myChart = new Chart(ctx, {
			"type":"line",
			"data": {
				"labels": dates,
				"datasets":[{"label": stocksymbol + " Value",
				"data": values,
				"fill":false,
				"borderColor":"rgb(75, 192, 192)",
				"lineTension":0.1}]},
				"options":{ 
					responsive: false,
					maintainAspectRatio: true,
					title: {
						display: true,
						text: stocksymbol + " Converted " + stocksymbol2,
						fontSize : 18
					},
					scales: {
						xAxes: [{
							type: 'time',
							time: {
									displayFormats: {
									day: 'MMM D'
								}
							}
						}],

						yAxes: [{
							scaleLabel: {
								display: true,
								labelString: stocksymbol
							}
						}]

					}
				}
			}
		);

    });
});
}