var c=0;


function val_first_name()
{
    var fname = document.frm.firstname.value;
    var fname_cnt=validate(fname, 'first_name_error')
    return fname_cnt;
}

function val_middle_name()
{
    var mname = document.frm.middlename.value;
    var mname_cnt=validate(mname, 'middle_name_error')
    return mname_cnt;   
}

function val_last_name()
{
    var lname = document.frm.lastname.value;
    var lname_cnt=validate(lname, 'last_name_error')
    return lname_cnt;
}

function val_city()
{
    var ct= document.frm.city.value;
    var ct_cnt=validate(ct, 'city_error')
    return ct_cnt;
}

function val_date()
{
    dt_cnt=0
    var date = document.frm.date.value;
    if(date=='' || date==null)
    {
        document.getElementById('date_error').innerHTML="Date field can't be empty";
        dt_cnt++;
    }
    else if(date>'2004-01-01')
    {
        document.getElementById('date_error').innerHTML="User's age must be above 18 years";
        dt_cnt++;
    }
    else if(date>'2023-01-01')
    {
        document.getElementById('date_error').innerHTML="Please enter valid date";
        dt_cnt++;
    }
    else
    {
        document.getElementById('date_error').innerHTML="";
        dt_cnt=0;
    }
    return dt_cnt;
}

function val_mob_num()
{
    mob_cnt=0;
    var num = document.frm.mobilenumber.value;
    if(num=="" || num==null)
    {
        document.getElementById('mob_num_error').innerHTML="Please enter mobile number";
        mob_cnt++;
    }
    else if(isNaN(num))
    {
        document.getElementById('mob_num_error').innerHTML="Only enter numbers between 0-9";
        mob_cnt++;
    }
    else if(num.length != 10  ) 
    {
        document.getElementById('mob_num_error').innerHTML="Mobile number should have 10 digits";
        mob_cnt++;
    }
    else{
        document.getElementById('mob_num_error').innerHTML="";
        mob_cnt=0;
    }
    return mob_cnt;
}

function val_address()
{
    add_cnt=0;
    var add = document.frm.address.value;
    cnt=1
        for(i=0; i<add.length; i++)
        {
            if(add[i]==' ')
            {
                cnt=cnt+1
            }
        }
    if(add=='' || add==null)
    {
        document.getElementById('address_error').innerHTML="Please enter Address";
        add_cnt++;
    }
    
    else if(cnt<5)
    {
        document.getElementById('address_error').innerHTML="Address should contain at least 5 words";
        add_cnt++;
    }
    else
    {
        document.getElementById('address_error').innerHTML="";
        add_cnt=0;
    }
    return add_cnt;
}
function val_email()
{
    mail_cnt=0;
    var mail = document.frm.email.value;
    // var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var mail_format = /\S+@\S+\.\S+/;

    // var atposition=x.indexOf("@");  
    // var dotposition=x.lastIndexOf(".");  
    // if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
    //     {  
    //         alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition); 
    //     }

    if(mail=='' || mail==null)
    {
        document.getElementById('email_error').innerHTML="Enter you Email";
        mail_cnt++;
    }
    else if(!mail_format.test(mail) )
    {
        document.getElementById('email_error').innerHTML='Invalid Email';
        mail_cnt++;
    }
    else
    {
        document.getElementById('email_error').innerHTML='';
        document.getElementById('email_error1').innerHTML='valid Email';
        mail_cnt=0;
    }
    return mail_cnt;
    
}
function val_state()
{
    state_cnt=0;
    var statte= document.frm.state.value;
    if(statte=='none' | statte=='')
    {
        document.getElementById('state_error').innerHTML="please select your State";
        state_cnt++;
    }
    else
    {
        document.getElementById('state_error').innerHTML="";
    }
    return state_cnt;
}

function val_password()
{
    pass_cnt=0;
    var password= document.frm.input_password.value;
    

    if(password=='' || password==null)
    {
        document.getElementById('password_error').innerHTML='Please enter password';
        pass_cnt++;
    }
    else if(password.length < 5)
    {
        document.getElementById('password_error').innerHTML='Password too weak';
        pass_cnt++;
    }
    else if(!checkSpecialChar(password))
    {
        document.getElementById('password_error').innerHTML='Pasword should contain at lease one special character';
        pass_cnt++;
    }
    else if(!caseCheck(password))
    {
        document.getElementById('password_error').innerHTML='password should contailn at least one capital letter';
        pass_cnt++;
    }
    else
    {
        document.getElementById('password_error').innerHTML='';
        pass_cnt=0;
    }
    return pass_cnt;
}

function val_confirm_password()
{
    cpass_cnt=0;
    var confirmpassword = document.frm.confirm_input_password.value;
    var password= document.frm.input_password.value;
    if(confirmpassword=='' || confirmpassword==null)
    {
        document.getElementById("confirm_input_password_error").innerHTML='Please confirm password';
        cpass_cnt++;
    }
    else if(confirmpassword != password)
    {
        document.getElementById("confirm_input_password_error").innerHTML='Passwords not matching';
        cpass_cnt++;
    }
    else
    {
        document.getElementById("confirm_input_password_error").innerHTML='';
        cpass_cnt=0;
    }
    return cpass_cnt;
}




function validate(name, error)
{
    if(name=='' || name=='null')
    {
        document.getElementById(error).innerHTML="Can't leave this field empty";

        c++;
    }
    else if(checkNumbers(name))
    {
        document.getElementById(error).innerHTML="Cannot enter numbers";
        c++;

    }
    else if(checkSpecialChar(name))
    {
        document.getElementById(error).innerHTML="cannot enter special characters";
        c++;
    }
    else if(name.length <=5 || name.length >=10)
    {
        document.getElementById(error).innerHTML="Enter input between 5 to 10 characters";
        c++;
    }
     
    else 
    {
        document.getElementById(error).innerHTML=""; 
        c=0;  
    }
    return c;
}

function checkNumbers(str)
{
    for (let i = 0; i < str.length; i++) 
    {
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

function val_gender()
{
    if(genders[0].checked==true || genders[1].checked==true)
    {
        document.getElementById('radio_error').innerHTML='';
    }
}

// function checkRadio()
// {
//     var rad1 = document.getElementById('id_male').value;
//     var rad2 = document.getElementById('id_female').value;
    
//     if(document.getElementById('id_male').checked== true)
//     {
//         document.getElementById('radio_error').innerHTML='Select Gender';
//     }
// }

function ValidationEvent()
{
    var fname_cnt=val_first_name()
    var mname_cnt=val_middle_name()
    var lname_cnt=val_last_name()
    var ct_cnt=val_city()
    var dt_cnt=val_date()
    var mob_cnt=val_mob_num()
    var add_cnt=val_address()
    var state_cnt=val_state()
    var mail_cnt=val_email()
    var pass_cnt=val_password()
    var cpass_cnt=val_confirm_password()

    var genders = document.getElementsByName('gender');
    var rad_cnt=0;
    // alert(c);
    // alert(fname_cnt);
    
    
    if(genders[0].checked==true || genders[1].checked==true)
    {
        document.getElementById('radio_error').innerHTML='';
    }
    else
    {
        document.getElementById('radio_error').innerHTML='Please select your gender';
        rad_cnt++;
    }
    // var check = document.frm.checkk.value;
    // var check_cnt=0;
    // if(check.checked==true)
    // {
    //     document.getElementById('check_error').innerHTML='';
    // }
    // else
    // {
    //     document.getElementById('check_error').innerHTML="Please agree to terms and conditions";
    //     check_cnt++;
    // }
    var total = fname_cnt+rad_cnt+mname_cnt+lname_cnt+ct_cnt+dt_cnt+mob_cnt+add_cnt+state_cnt+mail_cnt+pass_cnt+cpass_cnt;
    
    if(total>0)
    {
        return false;
    }
    else
    {
        if(!this.frm.checkk.checked)
        {
            alert('Agree to terms and Conditions');
            // document.getElementById('check_error').innerHTML='error';
            return false;
        }
        else
        {
            return true;
        }
        
    }
}