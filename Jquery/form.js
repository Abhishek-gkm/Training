$(document).ready(function () 
{
  count=1;
  fname_count=1; 
  mname_count=1; 
  lname_count=1; 
  dt_count=1;
  mob_count=1;
  add_count=1;
  city_count=1;
  state_count=1;
  mail_count=1;
  pass_count=1;
  cpass_count=1;

  $("#id_fname").blur(function () 
  {
    var fname = $(this).val();
    fname_count=validate(fname, '#first_name_error', '#id_fname');
  });

  $("#id_mname").blur(function () 
  {
    var mname = $(this).val();
    mname_count=validate(mname, '#middle_name_error', '#id_mname');
  })

  $("#id_lname").blur(function () 
  {
    var lname = $(this).val();
    lname_count=validate(lname, '#last_name_error', '#id_lname');
  })

  $('#id_date').blur(function () 
  {
    var date = $(this).val();
    // var year = date.getFullYear();

    if (date == '') {
      $('#date_error').text('Enter your DOB');
      count++;
    }
    else if (date > '2004-01-01') {
      $('#date_error').text('user must be above 18 years');
      count++;
    }
    else {
      $('#date_error').text('');
      dt_count=0;
    }
  })

  $('#id_mobile').blur(function () 
  {
    var num = $(this).val();
    if (num == '') {
      $('#mob_num_error').text('Enter mobile number');
    }
    else if (!checknumber(num) || checkSpecialChar(num)) {
      $('#mob_num_error').text('Only enter numbers');
    }
    else if (num.length != 10) {
      $('#mob_num_error').text('Number should have 10 digits');
    }
    else {
      $('#mob_num_error').text('');
      mob_count=0;
    }
  })

  $('#id_address').blur(function () 
  {
    var add = $(this).val();

    count = 1;
    for (i = 0; i < add.length; i++) {
      if (add[i] == ' ') {
        count++
      }
    }
    if (add == '') {
      $('#address_error').text('Please enter your address');
    }
    else if (count < 4) {
      $('#address_error').text('Adrees should have at least 4 words');
    }
    else {
      $('#address_error').text('');
      add_count=0;
    }
  })

  $('#id_city').blur(function()
  {
    var city = $(this).val();
    city_count=validate(city, '#city_error', '#id_city')
  })

  $('#id_state').blur(function()
  {
    var state = $(this).val();

    if(state == '' || state=='none')
    {
      $('#state_error').text('Select your state');
    }
    else
    {
      $('#state_error').text('');
      state_count=0;
    }
  })

  $('#id_email').blur(function()
  {
    var mail= $(this).val();
    var format = /\S+@\S+\.\S+/;
    if(mail=='')
    {
      $('#email_error').text('Enter your Email address');
    }
    else if(!format.test(mail))
    {
      $('#email_error').text('Enter valid Email');
    }
    else
    {
      $('#email_error').text('');
      $('#email_error1').text('Valid email').fadeIn().delay(3000).fadeOut();
      mail_count=0;
    }
  })

  $('#id_password').blur(function(){
    var pass = $(this).val();

    if(pass=='') {
      $('#password_error').text('Enter password');
    }
    else if(pass.length<5)
    {
      $('#password_error').text('Password too weak');
    }
    else if(!checknumber(pass))
    {
      $('#password_error').text('Password should contain at least 1 number');
    }
    else if(!checkSpecialChar(pass))
    {
      $('#password_error').text('password should contain at lease 1 special character');
    }
    else if(!checkCase(pass))
    {
      $('#password_error').text('Password should contain at least 1 upper case');
    }
    else
    {
      $('#password_error').text('');
      pass_count=0;
    }
  })

  $('#id_confirm_password').blur(function()
  {
    var confpass = $(this).val();
    var pass = $('#id_password').val();

    if(confpass=='')
    {
      $('#confirm_password_error').text('Confirm your password');
    }
    else if(confpass != pass)
    {
      $('#confirm_password_error').text('passwords not matching');
    }
    else
    {
      $('#confirm_password_error').text('Password matched').fadeIn().delay(3000).fadeOut();
      cpass_count=0;
    }
  })

  function validate(name, error_id, name_id) 
  {

    if (name == '') 
    {
      $(error_id).text($(name_id).attr('name') + ' cannot be empty');
      count++;
    }
    else if (name.length < 5 || name.length > 10) 
    {
      $(error_id).text('Enter 5 to 10 characters');
      count++;
    }
    else if (checknumber(name)) 
    {
      $(error_id).text(`${$(name_id).attr('name')} cannot have numbers`);
      count++;
    }
    else if (checkSpecialChar(name)) 
    {
      $(error_id).text($(name_id).attr('name') + ' cannot have special characters');
      count++;
    }
    else 
    {
      $(error_id).html('');
      count=0;
      return count;

    }
  }

  function checknumber(str) 
  {
    for (i = 0; i < str.length; i++) 
    {
      if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) 
      {
        return true;
      }
      else 
      {
        continue;
      }
    }
  }
  function checkSpecialChar(str) 
  {
    for (i = 0; i < str.length; i++) 
    {
      if (str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 47 || str.charCodeAt(i) >= 58 && str.charCodeAt(i) <= 64 || str.charCodeAt(i) >= 91 && str.charCodeAt(i) <= 96 || str.charCodeAt(i) >= 123 && str.charCodeAt(i) <= 126) 
      {
        return true;
      }
      else 
      {
        continue;
      }
    }
  }
  function checkCase(str)
  {
    for(i=0; i<str.length ; i++)
    {
      if(str.charCodeAt(i)>= 65 && str.charCodeAt(i)<=90)
      {
        return true;
      }
      else
      {
        continue;
      }
    }
  }


});

function validateForm(){

  var genders = document.getElementsByName("gender");
    var radio_count = 0

    var msg = '<span style="color:red;">You must select your gender!</span><br /><br />';
    if (genders[0].checked == true || genders[1].checked == true) {
        msg = "";
        document.getElementById('radio_error').innerHTML = msg;
        radio_count = 0;
    }
    else {
        document.getElementById('radio_error').innerHTML = '';
        radio_count = 1
    }

  if(fname_count==0 && radio_count == 0 && mname_count==0 && lname_count==0 && dt_count==0 && mob_count==0 && add_count==0 && city_count==0 && state_count==0 && mail_count==0 && pass_count==0 && cpass_count==0){
    if (!this.frm.checkbx.checked) {
      alert('You must agree to the terms first.');
      return false;
  }
  else {
      alert("Form submitted successfully");
      return true;
  }
  }
  else{
    alert('Fill all the fields');
    return false;
  }
}

