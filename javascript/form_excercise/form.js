
function validate()
{

if (document.f1.username.value != "" && document.f1.email.value != "" &&  document.f1.number.value != "" &&  document.f1.role.value != "")
{
var res=document.f1.username.value;
var res1=document.f1.email.value;
var res2=document.f1.number.value;
var res3=document.f1.role.value;

if(res.match(/^[A-Za-z]+$/) && res1.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && res2.match(/^[0-9]+$/) && res2.length == 10 )
{
document.getElementById("dem").innerHTML="Employee Details"
document.getElementById("demo").innerHTML="Your Name: "+ "\t" +res;
document.getElementById("demo1").innerHTML="Your Email :"+res1;
document.getElementById("demo2").innerHTML="Your Contact Info: "+res2;
document.getElementById("demo3").innerHTML="Your Role: "+res3;
}
else
document.getElementById("error").innerHTML=("Enter your  correct details");
}
else 
document.getElementById("error").innerHTML=("Enter your complete details");
}

	function myFunction(x) 
	{
    	x.style.border= "1px solid yellow";  
    	document.getElementById("error").innerHTML=" ";
    }

function check(y){
y.style.border= "";
	

	if(y.name=="username")
	{ 
	var letters = /^[A-Za-z]+$/; 
	if(y.value.match(letters))  
    {  
		document.getElementById("s1").innerHTML="";
		return true;  
    }  
    	else
	{
	document.getElementById("s1").innerHTML="Enter the alphabet characters only";
	y.value="";
	}
	}
	
	if(y.name == "email")
	{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(y.value.match(mailformat) && (y.value.match != "") ) 
	{  
		document.getElementById("s2").innerHTML = "";
		return true;  
	}  
		else  
	{  
		document.getElementById("s2").innerHTML = "Enter a valid email address";  
		y.value="";
	}  
	}

	if(y.name == "number")
	{
	var numbers = /^[0-9]+$/; 
	if(y.value.match(numbers) && (y.value.length == 10))  
	{  	
	   document.getElementById("s3").innerHTML="";
	    return true;  
	}
        else  
  	{  
		document.getElementById("s3").innerHTML="Enter the correct number";
		y.value="";
 	}
	}
	

}
