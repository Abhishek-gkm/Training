
var c=0;
function val_first_name()
{ 
    var fname = document.frm.firstname.value;
    if(fname=='')
    {
        document.getElementById('first_name_error').innerHTML="First Name can't be empty";

        c++;
    }
    else if(fname.length < 4 || fname.length > 8)
    {
        document.getElementById('first_name_error').innerHTML="Enter input between 4 to 8 characters";
        c++;
    }
    else if(checkNumbers(fname))
    {
        document.getElementById('first_name_error').innerHTML="First Name can't have numbers";
        c++;

    }
    else if(checkSpecialChar(fname))
    {
        document.getElementById('first_name_error').innerHTML="First Name can't have special characters";
        c++;
    } 
    else 
    {
        document.getElementById('first_name_error').innerHTML=""; 
        c=0;  
    }
    // alert(c);
}

function val_middle_name()
{
    var mname = document.frm.middlename.value;
   
    if(mname==''){
        document.getElementById('middle_name_error').innerHTML="Middle Name can't be empty";
    }
    else if(mname.length<5 | mname.length>8)
    {
        document.getElementById('middle_name_error').innerHTML="Enter input between 4 to 8 characters";
    }
    else if(checkNumbers(mname))
    {
        document.getElementById('middle_name_error').innerHTML="Middle Name can't have numbers";
    }
    else if(checkSpecialChar(mname))
    {
        document.getElementById('middle_name_error').innerHTML="Middle Name can't have special characters";
    }
    else
    {
        document.getElementById('middle_name_error').innerHTML="";

    }
}


function val_last_name()
{
    var lname = document.frm.lastname.value;
    if(lname==''){
        document.getElementById('last_name_error').innerHTML="Last Name can't be empty";
    }
    else if(lname.length<5 | lname.length>8)
    {
        document.getElementById('last_name_error').innerHTML="Enter input between 4 to 8 characters";
    }
    else if(checkNumbers(lname))
    {
        document.getElementById('last_name_error').innerHTML="Last Name can't have numbers";
    }
    else if(checkSpecialChar(lname))
    {
        document.getElementById('middle_name_error').innerHTML="middle Name can't have special characters";
    }
    else
    {
        document.getElementById('middle_name_error').innerHTML="";
    }
}


function val_date()
{
    var date = document.frm.date.value;
    if(date=='')
    {
        document.getElementById('date_error').innerHTML="Date field can't be empty";
    }
    else if(date<'2004-01-01')
    {
        document.getElementById('date_error').innerHTML="User's age must be above 18 years"
    }
    else if(date>'2023-01-01')
    {
        document.getElementById('date_error').innerHTML="Please enter valid date";
    }
    else
    {
        document.getElementById('date_error').innerHTML="";
    }
}

function val_mob_num()
{
    var num = document.frm.mobilenumber.value;
    if(num=="")
    {
        document.getElementById('mob_num_error').innerHTML="Please enter mobile number";
    }
    else if(isNaN(num))
    {
        document.getElementById('mob_num_error').innerHTML="Only enter numbers between 0-9";
    }
    else if(num.length < 10 ) 
    {
        document.getElementById('mob_num_error').innerHTML="Mobile number should have 10 digits";
    }
    else{
        document.getElementById('mob_num_error').innerHTML="";
    }
}

function val_address()
{
    var add = document.frm.address.value;
    cnt=1
        for(i=0; i<add.length; i++)
        {
            if(add[i]==' ')
            {
                cnt=cnt+1
            }
        }
    if(add=='')
    {
        document.getElementById('address_error').innerHTML="Please enter Address";
    }
    
    else if(cnt<5)
    {
        document.getElementById('address_error').innerHTML="Address should contain at least 5 words";
    }
    else
    {
        document.getElementById('address_error').innerHTML="";
    }
}

function val_city()
{
    var ct= document.frm.city.value;
    if(ct=='')
    {
        document.getElementById('city_error').innerHTML="Please enter City name";
    }
    else if(ct.length>10)
    {
        document.getElementById('city_error').innerHTML="City name can't exceed 10 characters"
    }
    else if(checkNumbers(ct))
    {
        document.getElementById('city_error').innerHTML="City name can't have numbers"
    }
    else
    {
        document.getElementById('city_error').innerHTML=""
    }
}

function val_state()
{
    var statte= document.frm.state.value;
    if(statte=='none' | statte=='')
    {
        document.getElementById('state_error').innerHTML="please select your State";
    }
    else
    {
        document.getElementById('state_error').innerHTML="";
    }
}

function val_email()
{
    var mail = document.frm.email.value;

}

function val_password()
{
    var password= document.frm.input_password.value;
    

    if(password=='')
    {
        document.getElementById('password_error').innerHTML='Please enter password';
    }
    else if(password.length < 5)
    {
        document.getElementById('password_error').innerHTML='Password too weak';
    }
    else if(!checkSpecialChar(password))
    {
        document.getElementById('password_error').innerHTML='Pasword should contain at lease one special character';
    }
    else if(!caseCheck(password))
    {
        document.getElementById('password_error').innerHTML='password should contain at least one capital letter';
    }
    else
    {
        document.getElementById('password_error').innerHTML='';

    }
}

function val_confirm_password()
{
    var confirmpassword = document.frm.confirm_input_password.value;
    var password= document.frm.input_password.value;
    if(confirmpassword=='')
    {
        document.getElementById("confirm_input_password_error").innerHTML='Please confirm password';
    }
    else if(confirmpassword != password)
    {
        document.getElementById("confirm_input_password_error").innerHTML='Passwords not matching';
    }
    else
    {
        document.getElementById("confirm_input_password_error").innerHTML='';
    }
}


function checkNumbers(str)
{
    for (let i = 0; i < str.length; i++) 
    {
        // if(str.charCodeAt(i)>=65 & str.charCodeAt(i)<=90 | str.charCodeAt(i)>=97 & str.charCodeAt(i)<=122)
        if(str.charCodeAt(i)>=48 & str.charCodeAt(i)<=57)
        {
            return true;
        }
        else
        {
            continue
        }
        
    }
}

function checkSpecialChar(str)
{
    for (let i = 0; i < str.length; i++)
    {
        if(str.charCodeAt(i)>=32 & str.charCodeAt(i)<=47 | str.charCodeAt(i)>=58 & str.charCodeAt(i)<=64 | str.charCodeAt(i)>=91 & str.charCodeAt(i)<=96 | str.charCodeAt(i)>=123 & str.charCodeAt(i)<=126)
        {
            return true;
        }
        else
        {
            continue
        }
    }
    
}
function caseCheck(password)
{
    for (let i = 0; i < password.length; i++) 
    {
        if(password.charCodeAt(i)>= 65 & password.charCodeAt(i) <= 90 )
        {
            return true;
        }
        else
        {
            continue;
        }
    }
}

function ValidationEvent()
{
    var fname = document.frm.firstname.value;
    if(fname=='')
    {
        return false;
    }
    else
    {
        return true;
    }
}