function pay()
	{
	  var mywindow;
	  if (validation()) // Calling validation function
		{
		document.getElementById("form_id").submit(); //form submission

	   alert("Payment Successful");
	   close();
	   myWindow = window.open("", "myWindow");
	   myWindow.document.write("Go back to <a href='file:///C:/Users/hp-pc/Desktop/book%20my%20ticket/moviex.html#home'>Homepage</a>");
	   }
	  else
		   alert("invalid");
	}
         function validate() {
            if( document.myForm.cardno.value == "" ) {
               alert( "Please provide your card number in the format xxxx-xxxx-xxxx-xxxx!" );
  
               return false;
            }
            if( document.myForm.exp-date.value == "" ) {
               alert( "Please provide the expiry date in the format mm/yy!" );
               
               return false;
            }
            if( document.myForm.cvv.value == "")
			{
               alert( "Please provide a cvv/cvc in the format ###." );
               
               return false;
            }
            if( document.myForm.name.value == "" ) {
               alert( "Please provide your Card holder name!" );
               return false;
            }
            return( true );
         }
  pay();