function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var operand1 = document.getElementById("FromValue").value;

        // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var operator;
        if (document.getElementById("cm").checked) {
            operator = document.getElementById("cm").value;
        }
        if (document.getElementById("m").checked) {
            operator = document.getElementById("m").value;
        }
        if (document.getElementById("km").checked) {
            operator = document.getElementById("km").value;
        }
        if (document.getElementById("in").checked) {
            operator = document.getElementById("in").value;
        }
         if (document.getElementById("ft").checked) {
            operator = document.getElementById("ft").value;
        }
         if (document.getElementById("yd").checked) {
            operator = document.getElementById("yd").value;
        }
         if (document.getElementById("mi").checked) {
            operator = document.getElementById("mi").value;
        }

        var operator2;
         if (document.getElementById("cm2").checked) {
            operator2 = document.getElementById("cm2").value;
        }
        if (document.getElementById("m2").checked) {
            operator2 = document.getElementById("m2").value;
        }
        if (document.getElementById("km2").checked) {
            operator2 = document.getElementById("km2").value;
        }
        if (document.getElementById("in2").checked) {
            operator2 = document.getElementById("in2").value;
        }
         if (document.getElementById("ft2").checked) {
            operator2 = document.getElementById("ft2").value;
        }
         if (document.getElementById("yd2").checked) {
            operator2 = document.getElementById("yd2").value;
        }
         if (document.getElementById("mi2").checked) {
            operator2 = document.getElementById("mi2").value;
        }
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        var myMethod = "POST";

        /* AJAX calculator requires Operand1, Operator, and Operand 2 */
        
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the names required by the AJAX page  */
        var myData = {};
        myData.FromValue = operand1;
        myData.FromUnit = operator;
        myData.ToUnit = operator2;
        
        /* Make sure document is ready */
        $(document).ready(function() {

            /* Perform AJAX call to process data */
            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

            /* AJAX complete - display the result */
            .done(function( msg ) {
                document.getElementById("Result").innerHTML = msg;
            });
        });
    }
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("cm").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("km").checked = false;
    document.getElementById("in").checked = false;
    document.getElementById("ft").checked = false;
    document.getElementById("yd").checked = false;
    document.getElementById("mi").checked = false;
    document.getElementById("cm2").checked = false;
    document.getElementById("m2").checked = false;
    document.getElementById("km2").checked = false;
    document.getElementById("in2").checked = false;
    document.getElementById("ft2").checked = false;
    document.getElementById("yd2").checked = false;
    document.getElementById("mi2").checked = false;
    
    document.getElementById("FromValue1Error").innerHTML = "";
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Operator2Error").innerHTML = "";
   // document.getElementById("OperatorMsg").innerHTML = "";
    
  
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});