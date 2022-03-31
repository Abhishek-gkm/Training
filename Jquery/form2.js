$(document).ready(function () {
    var date = $('#id_date').val('2000-02-02');

    $("#id_fname").blur(function () {
        var fname = $(this).val();
        validate(fname, '#first_name_error', '#id_fname');
    });

    $("#id_mname").blur(function () {
        var mname = $(this).val();
        validate(mname, '#middle_name_error', '#id_mname');
    })

    $("#id_lname").blur(function () {
        var lname = $(this).val();
        validate(lname, '#last_name_error', '#id_lname');
    })

    $('#id_date').blur(function () {
        var date = $(this).val();
        valid_date(date, '#date_error')
    })

    $('#id_mobile').blur(function () {
        var num = $(this).val();
        valid_mobile(num, '#mob_num_error')
    })

    $('#id_address').blur(function () {
        var add = $(this).val();
        valid_address(add, '#address_error')
    })

    $('#id_city').blur(function () {
        var city = $(this).val();
        validate(city, city_error, id_city)
    })

    $('#id_state').blur(function () {
        var state = $(this).val();
        valid_state(state, '#state_error')
    })

    $('#id_email').blur(function () {
        var mail = $(this).val();
        var format = /\S+@\S+\.\S+/;
        valid_email(mail, format, '#email_error', '#email_error1')
    })

    $('#id_password').blur(function () {
        var pass = $(this).val();
        valid_password(pass, '#password_error')
    })

    $('#id_confirm_password').blur(function () {
        var confpass = $(this).val();
        var pass = $('#id_password').val();
        valid_confirm_password(confpass, pass, '#confirm_password_error')
    })

});

function validate(name, error_id, name_id) {
    count = 0;
    if (name == '') {
        $(error_id).text($(name_id).attr('name') + ' cannot be empty');
        count++;
    }
    else if (name.length < 5 || name.length > 10) {
        $(error_id).text('Enter 5 to 10 characters');
        count++;
    }
    else if (checknumber(name)) {
        $(error_id).text(`${$(name_id).attr('name')} cannot have numbers`);
        count++;
    }
    else if (checkSpecialChar(name)) {
        $(error_id).text($(name_id).attr('name') + ' cannot have special characters');
        count++;
    }
    else {
        $(error_id).html('');
        count = 0;
    }
    return count;
}

function valid_date(date, error_id) {
    count = 0;
    if (date == '') {
        $(error_id).text('Enter your DOB');
        count++;
    }
    else if (date > '2004-01-01') {
        $(error_id).text('user must be above 18 years');
        count++;
    }
    else {
        $(error_id).text('');
        count = 0;
    }
    return count;
}

function valid_mobile(num, error_id) {
    count = 0;
    if (num == '') {
        $(error_id).text('Enter mobile number');
        count++;
    }
    else if (!checknumber(num) || checkSpecialChar(num)) {
        $(error_id).text('Only enter numbers');
        count++;
    }
    else if (num.length != 10) {
        $(error_id).text('Number should have 10 digits');
        count++;
    }
    else {
        $(error_id).text('');
        count = 0;
    }
    return count;
}

function valid_address(add, error_id) {
    cnt = 1;
    count = 0;
    for (i = 0; i < add.length; i++) {
        if (add[i] == ' ') {
            cnt++
        }
    }
    if (add == '') {
        $(error_id).text('Please enter your address');
        count++;
    }
    else if (cnt < 4) {
        $(error_id).text('Adrees should have at least 4 words');
        count++
    }
    else {
        $(error_id).text('');
        count = 0;
    }
    return count;
}

function valid_state(state, error_id) {
    count = 0;
    if (state == '' || state == 'none') {
        $(error_id).text('Select your state');
        count++;
    }
    else {
        $(error_id).text('');
        count = 0;
    }
    return count;
}

function valid_email(mail, format, error_id, error_id1) {
    count = 0;
    if (mail == '') {
        $(error_id).text('Enter your Email address');
        count++;
    }
    else if (!format.test(mail)) {
        $(error_id).text('Enter valid Email');
        count++;
    }
    else {
        $(error_id).text('');
        $(error_id1).text('Valid email').fadeIn().delay(2000).fadeOut();
        count = 0;
    }
    return count;
}

function valid_password(pass, error_id) {
    count = 0;
    if (pass == '') {
        $(error_id).text('Enter password');
        count++;
    }
    else if (pass.length < 5) {
        $(error_id).text('Password too weak');
        count++;
    }
    else if (!checknumber(pass)) {
        $(error_id).text('Password should contain at least 1 number');
        count++;
    }
    else if (!checkSpecialChar(pass)) {
        $(error_id).text('password should contain at lease 1 special character');
        count++;
    }
    else if (!checkCase(pass)) {
        $(error_id).text('Password should contain at least 1 upper case');
        count++;
    }
    else {
        $(error_id).text('');
        count = 0;
    }
    return count;
}

function valid_confirm_password(confpass, pass, error_id) {
    count = 0;
    if (confpass == '') {
        $(error_id).text('Confirm your password');
        count++;
    }
    else if (confpass != pass) {
        $(error_id).text('passwords not matching');
        count++;
    }
    else {
        $(error_id).html('<span style="color:green;">Password matched</span>').fadeIn().delay(2000).fadeOut();
        count = 0;
    }
    return count;
}
function checknumber(str) {
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            return true;
        }
        else {
            continue;
        }
    }
}
function checkSpecialChar(str) {
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 47 || str.charCodeAt(i) >= 58 && str.charCodeAt(i) <= 64 || str.charCodeAt(i) >= 91 && str.charCodeAt(i) <= 96 || str.charCodeAt(i) >= 123 && str.charCodeAt(i) <= 126) {
            return true;
        }
        else {
            continue;
        }
    }
}
function checkCase(str) {
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            return true;
        }
        else {
            continue;
        }
    }
}

function validateForm() {
    count = 0;
    var fname = $('#id_fname').val();
    count += validate(fname, '#first_name_error', '#id_fname')

    var mname = $('#id_mname').val();
    count += validate(mname, '#middle_name_error', '#id_mname')

    var lname = $('#id_lname').val();
    count += validate(lname, '#last_name_error', '#id_lname')

    var date = $('#id_date').val();
    count += valid_date(date, '#date_error')

    var num = $('#id_mobile').val();
    count += valid_mobile(num, '#mob_num_error')

    var add = $('#id_address').val();
    count += valid_address(add, '#address_error')

    var city = $('#id_city').val();
    count += validate(city, '#city_error', '#id_city')

    var state = $('#id_state').val();
    count += valid_state(state, '#state_error')

    var mail = $('#id_email').val();
    var format = /\S+@\S+\.\S+/;
    count += valid_email(mail, format, '#email_error', '#email_error1')

    var pass = $('#id_password').val();
    count += valid_password(pass, '#password_error')

    var pass = $('#id_password').val();
    var confpass = $('#id_confirm_password').val();
    count += valid_confirm_password(confpass, pass, '#confirm_password_error')

    var genders = document.getElementsByName("gender");
    var radio_count = 0

    var msg = '<span style="color:red;">You must select your gender!</span><br /><br />';
    if (genders[0].checked == true || genders[1].checked == true) {
        msg = ""
        document.getElementById('radio_error').innerHTML = msg;
        radio_count = 0;
    }
    else {
        document.getElementById('radio_error').innerHTML = msg;
        radio_count = 1
    }
    count += radio_count;

    if (count == 0) {
        if (!this.frm.checkbx.checked) {
            alert('You must agree to the terms first.');
            return false;
        }
        else {
            alert("Form submitted successfully");
            return true;
        }
    }

    else {
        alert('Fill al the fields');
        return false;
    }
}

