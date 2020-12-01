 function calculate() {
   if ($( "#myform" ).valid()) {
        
          /* get the operands from the form */
          var operand1 = document.getElementById("Operand1").value;
          var operand2 = document.getElementById("Operand2").value;
  function calculate() {    "use strict";
       // Get a reference to the form - Use the ID of the form
      var form = $( "#myform" );
        
            /* Make sure that the form is valid */
       if ($( "#myform" ).valid()) {
       // If all of the form elements are valid, the get the form values
       if (form.valid()) {
                
           /* get the operands from the form */
          // Operand 1
                var operand1 = document.getElementById("Operand1").value;
           var operand2 = document.getElementById("Operand2").value;
               var operand3 = document.getElementById("Operand3").value;
               
          /* convert the operands from string to floating point */
          // Operator
           // Get the value associated with the operator that was checked (+, -, *, or /)
           /* convert the operands from string to floating point */
           var operand1fp = parseFloat (operand1);
         var operand2fp = parseFloat (operand2);
          var operand3fp = parseFloat (operand3);

                 /* figure out which operator was checked and place the value in operator */

 var operator;   
        if (document.getElementById("MinOperator").checked) {
                   operator = document.getElementById("MinOperator").value;
          }
          if (document.getElementById("AddOperator").checked) {
              operator = document.getElementById("AddOperator").value;
                            }
     if (document.getElementById("MaxOperator").checked) {
              operator = document.getElementById("MaxOperator").value;
                    }
     operator = document.getElementById("MaxOperator").value;
        if (document.getElementById("SubtractOperator").checked) {
              operator = document.getElementById("SubtractOperator").value;
                }
               if (document.getElementById("AvgOperator").checked) {
              operator = document.getElementById("AvgOperator").value;
   }

    var result;        
          /* if the operator was "Min" then set result to the minimum */
          if (operator == "Min") {
             if(operand1fp <= operand2fp && operand1fp <= operand3fp) {
                  result = operand1fp;
              }
              if(operand2fp <= operand1fp && operand2fp <= operand3fp) {
                  result = operand2fp;
              }
              if(operand3fp <= operand1fp && operand3fp <= operand2fp) {
                  result = operand3fp;
              }
         }
        
       
          
          /* convert the result to a string and display it */
          document.getElementById("Result").innerHTML = result.toString();
      } }
 function clearform() {
      
      /* Set all of the form values to blank or false */
      document.getElementById("Operand1").value = "";
      document.getElementById("Operand2").value = "";
     document.getElementById("Operand3").value = "";
      document.getElementById("Operand1Error").innerHTML = "";
      document.getElementById("Operand2Error").innerHTML = "";
      document.getElementById("Operand3Error").innerHTML = "";
      document.getElementById("MinOperator").checked = false;
      document.getElementById("MaxOperator").checked = false;
      document.getElementById("AvgOperator").checked = false;
      document.getElementById("OperatorError").innerHTML = "";
      document.getElementById("Result").innerHTML = "";
  }

  /* Form Validation */
  $( "#myform" ).validate({

    });

