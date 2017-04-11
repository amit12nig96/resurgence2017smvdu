$(document).ready(function() {
    console.log("%cHi!\nGreetings from the developers.", "background:white; color: black; font-size: large");
    
    var gmail = '';
    if(gmail != '') {
        toast("You have been logged in using your google account ("+gmail+"), but we need all your other details to preceed with registration. Please fill in the registration form.", 10000);
    }

    $('.ui.dropdown').dropdown();

    $('.date-picker').calendar({
        type: 'date',
        monthFirst: false,
        formatter: {
            date: function (date, settings) {
                    if (!date) return '';
                    var day = date.getDate();
                    var month = date.getMonth() + 1;
                    var year = date.getFullYear();
                    return day + '/' + month + '/' + year;
                }
        }
    });

    var toast_div = '';
    function toast(content, duration, type) {
        var toast_el = $('#toast');
        if(content== '') {
            return;
        }
        duration = duration || 2000;
        type = type || 'default';
        var toast = $('<div class="toast_content">'+content+'</div>').appendTo('#toast');
        toast_el.removeAttr('style');
        toast_el.show();
        setTimeout(function () {
            toast.animate({
                opacity:'0'
            },500, function() {
                toast.remove();
            });
        }, duration);
        clearTimeout(toast_div);
        toast_div = setTimeout(function () {
                        toast_el.animate({
                            opacity:'0'
                        },500, function() {
                            toast_el.hide();
                        });
                    }, duration);
    }

    $('.google').click(function() {
        $(this).addClass('loading');
    });

    $('#login').click(function() {
        $('#login_modal').modal('show');
    });

    $('#login_form').submit(function(e) {
        e.preventDefault();
        var email = $('#login_email').val();
        var password = $('#login_password').val();
        var error = false;
        if(email == '') {
            $('#login_email').addClass('inputError');
            toast("Email Is Required.");
            error = true;
        } else {
            $('#login_email').removeClass('inputError');
        }
        if(password == '') {
            $('#login_password').addClass('inputError');
            toast("Password Is Required.");
            error = true;
        } else {
            $('#login_password').removeClass('inputError');
        }

        if(error) {
            return false;
        }

        $('#login_button').addClass('loading disabled');
        var form_data = {
                'password' : password,
                'email' : email
            };
        $.ajax({
            'method' : 'POST',
            'url' : 'portal/login',
            'data' : form_data,
            success : function(response) {
                // console.log(response);
                $('#login_button').removeClass('loading disabled');
                if(response['code'] == 0) {
                    toast(response['message']);
                    window.location.href = '/portal/dashboard';
                } else if(response['code'] == 1) {
                    toast(response['message']);
                } else {
                    toast("Error! Please Try Again.");
                }
            }
        });
    });
    
    $('#forgot_pass_button').click(function() {
        $('#forgot_pass_modal').modal('show');
    });
    $('#forgot_pass_form').submit(function(e) {
        e.preventDefault();

        var email = $('#forgot_pass_form input[name=email]').val();
        var phone = $('#forgot_pass_form input[name=phone]').val();
        var dob = $('#forgot_pass_form input[name=dob]').val();
        var error = false;
        if(email == '') {
            $('#forgot_pass_form input[name=email]').addClass('inputError');
            toast("Email Is Required.");
            error = true;
        } else {
            $('#forgot_pass_form input[name=email]').removeClass('inputError');
        }
        if(phone == '') {
            $('#forgot_pass_form input[name=phone]').addClass('inputError');
            toast("Phone Number Is Required.");
            error = true;
        } else {
            $('#forgot_pass_form input[name=phone]').removeClass('inputError');
        }
        if(dob == '') {
            $('#forgot_pass_form input[name=dob]').addClass('inputError');
            toast("Date of Birth Is Required.");
            error = true;
        } else {
            $('#forgot_pass_form input[name=dob]').removeClass('inputError');
        }

        if(error) {
            return false;
        }

        $('#recover_pass').addClass('loading disabled');
        var form_data = {
                'phone' : phone,
                'email' : email,
                'dob' : dob
            };
        $.ajax({
            'method' : 'POST',
            'url' : 'portal/forgot_password',
            'data' : form_data,
            success : function(response) {
                // console.log(response);
                $('#recover_pass').removeClass('loading disabled');
                $('#forgot_pass_form input').val('');
                if(response['code'] == 0) {
                    $('.message').text('Your new password has been sent to your registered email and phone.');
                } else if(response['code'] == -3) {
                    toast(response['message']);
                } else {
                    toast("Error! Please Try Again.");
                }
            }
        });
    });

    function validate(type, check, input, value) {
        var input_capitalize = input.substr(0,1).toUpperCase()+input.substr(1);
        if(type == 'required') {
            if(value == '') {
                $('#'+input+', #'+input+'_div>div').addClass('inputError');
                toast(input_capitalize+' Is Required.',2000);
                return false;
            } else {
                $('#'+input+', #'+input+'_div>div').removeClass('inputError');
                return true ;
            }
        } else if(type == 'max') {
            if(value.length > check) {
                $('#'+input+', #'+input+'_div>div').addClass('inputError');
                toast(input_capitalize+' Can Be Maximum '+check+' Characters.',2000);
                return false;
            } else {
                $('#'+input+', #'+input+'_div>div').removeClass('inputError');
                return true ;
            }
        } else if(type == 'min') {
            if(value.length < check) {
                $('#'+input+', #'+input+'_div>div').addClass('inputError');
                toast(input_capitalize+' Has To Be Minimum '+check+' Characters.',2000);
                return false;
            } else {
                $('#'+input+', #'+input+'_div>div').removeClass('inputError');
                return true ;
            }
        } else if(type == 'match') {
            if(value != check) {
                $('#'+input+', #'+input+'_div>div').addClass('inputError');
                toast('Re Enter Your Password Correctly.',2000);
                return false;
            } else {
                $('#'+input+', #'+input+'_div>div').removeClass('inputError');
                return true ;
            }
        }
        return false;
    }

    function validateEmail(email) {
        var regex_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex_email.test(email)) {
            $('#email').addClass('inputError');
            toast('Please Enter Valid Email.',2000);
            return false;
        } else {
            $('#email').removeClass('inputError');
            return true
        }
    }
    
    $('#register_form').submit(function(e) {
        e.preventDefault();

        var name = $('#name').val();
        if($('#gmail p').attr('data-email')) {
            var email = $('#gmail p').attr('data-email');
        } else {
            var email = $('#email').val();
        }
        var password = $('#password').val();
        var re_password = $('#re_password').val();
        var dob = $('#dob').val();
        var gender = $('#gender').val();
        var college = $('#college').val();
        var other = 0;
        if(college == 'Other') {
            other = 1;
            college = $('#other_college').val();
        }
        var year = $('#yop').val();
        var phone = $('#phone').val();
        var city = $('#city').val();
        var state = $('#state').val();
        var genre = $('#genre').val();

        if( validate('required', null, 'name', name) &&
            validate('max', 64, 'name', name) &&
            validate('required', null, 'email', email) &&
            validate('max', 128, 'email', email) &&
            validateEmail(email) &&
            validate('required', null, 'phone', phone) &&
            validate('max', 10, 'phone', phone) &&
            validate('min', 10, 'phone', phone) &&
            validate('required', null, 'password', password) &&
            validate('max', 64, 'password', password) &&
            validate('min', 8, 'password', password) &&
            validate('match', password, 're_password', re_password) &&
            validate('required', null, 'dob', dob) &&
            validate('max', 10, 'dob', dob) &&
            validate('required', null, 'gender', gender) &&
            validate('required', null, 'college', college) &&
            validate('max', 128, 'college', college) &&
            validate('required', null, 'year', year) &&
            validate('required', null, 'city', city) &&
            validate('max', 64, 'city', city) &&
            validate('required', null, 'state', state) &&
            validate('required', null, 'genre', genre) ) {

            var captcha = grecaptcha.getResponse();

            var form_data = {
                    'name' : name,
                    'password' : password,
                    'email' : email,
                    'dob' : dob,
                    'gender' : gender,
                    'college' : college,
                    'other' : other,
                    'yop' : year,
                    'phone' : phone,
                    'city' : city,
                    'state' : state,
                    'genre' : genre,
                    'captcha' : captcha
                };
            if(captcha != '') {
                $('#register_button').addClass('loading disabled');
                $.ajax({
                    'method' : 'POST',
                    'url' : 'portal/register',
                    'data' : form_data,
                    success : function(response) {
                        // console.log(response);
                        grecaptcha.reset();
                        if(response['code'] == 0) {
                            toast(response['message'],2000);
                            window.location.href = '/portal/dashboard';
                        } else if(response['code'] == -1) {
                            data = $.map(response['message'], function(message) {
                                        for (var i = 0; i < message.length; i++) {
                                            toast(message,2000);
                                        };
                                    });
                        } else {
                            toast('Error! Please Try Again.',2000);
                        }
                        $('#register_button').removeClass('loading disabled');
                     }
                });
            } else {
                toast('Captcha Is Required.',2000);
            }   
         }
     });

    $('#register_form').on('change', '#college', function() {
        if($(this).val() == 'Other') {
            $('#other_college').attr('disabled', false);
        } else {
            $('#other_college').attr('disabled', true);
        }
    });
});