function fncValidate() 
{
			var fn=document.form1.fname.value; 
			var mn=document.form1.mname.value; 
			var ln=document.form1.lname.value; 
			var patt = /[^a-z]/i; 
			var fname = patt.test(fn); 
			var mname = patt.test(mn); 
			var lname = patt.test(ln); 
			
	if(fn == "") 
	{
		alert('Please enter Firstname'); 
	
		return false;
	}
			if ( fn == null || fname == true ) 
			{
				alert("Enter only Alphabet for Firstname"); 
				return false;
			}
					
	
			if ( ln == null || lname == true )
			{
				alert("Enter only Alphabet for Lastname");
				return false;
			}
			
var m = document.getElementById('male'); 
var f = document.getElementById('female'); 

if ( (m.checked == false ) && (f.checked == false ) ) 
{
alert ( "Please choose Gender" );
document.getElementById("gen").style.border = "2px solid red"; 
return false;
}
 else {
document.getElementById("gen").style.border = ""; 
}

	var add=document.form1.address.value;
	var patt2 = /[^a-z, ]/i;
			var address = patt2.test(add);
	if(add == "")
	{
		alert('Please enter your address');
	
		return false;
	}
	if ( add == null || address == true )
			{
				alert("Enter only Alphabet for Address with ,");
				return false;
			}
	
var c = document.getElementById("country") 
if(c.value == null || c.value == "") { 
alert("Please select a country"); 
return false;
}
var p=document.form1.phone.value; 
if(isNaN(p)) 
{
alert("Enter only numbers");
return false;
}
if(p=="") 
{
alert("Enter 10 digits");
return false;
}
if(p.length>10) 
{
alert("Enter 10 digits");
return false;
}
if(p.length<10) 
{
alert("Enter 10 digits");
return false;
}
var pi=document.form1.pin.value;
if(isNaN(pi))
{
	alert("enter only numbers");
	
	return false;
}
	if(pi=="")
	{
		alert("enter pincode");
		return false;
	}
	if(!((/^[0-9]{6}$/.test(pi) )))
		{
			alert("pin code must be 6 digits");
		}
	if(pi<6)
	{
		alert("pincode shouldnot less than 6 digits");
		return false;
	}
var em=document.form1.email.value; 
var atpos=em.indexOf("@"); 
var dotpos=em.lastIndexOf("."); 
if(atpos<1 || dotpos<atpos+2 || dotpos+2>=em.length)
{
alert("Ivalid email id");
return false;
}

			
var sci = document.getElementById('science'); 
var comm = document.getElementById('commerce'); 
var ar = document.getElementById('arts'); 

if ( (sci.checked == false ) && (comm.checked == false )&& (ar.checked == false ) ) 
{
alert ( "Please choose Branch" );
document.getElementById("bran").style.border = "2px solid red"; 
return false;
}
 else {
document.getElementById("bran").style.border = ""; 
}
	alert('Successfully submitted.');
	document.form1.submit();
}