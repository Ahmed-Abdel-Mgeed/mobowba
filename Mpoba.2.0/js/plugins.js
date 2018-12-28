$(function() {
	'use strict';

    var body = $("body");

    // Adjust the Body and Footer Positions
    body.css( "padding-bottom", $("footer").innerHeight() -1 );

    $(window).resize(function () {
        $("body").css( "padding-bottom", $("footer").innerHeight() -1 );
    });

    // stop the bootstrap defalut action with dropdown menu
    $(".navbar-brand .dropdown").click(function(e) {
        e.stopPropagation();
    });

    // aside Filters Togglers
    // Get Sections Buttons
    var adv = $(".adv"), // Advertisers Section Button
        pub = $(".pub"), // Publishers Section Button
        exc = $(".exc"), // Exchange of ads Section Button
        pfs = $(".pfs"); // Pages For Sale Section Button

    // Get Filters Panels
    var country = $(".filters .panel:nth-child(1)"),
        city    = $(".filters .panel:nth-child(2)"),
        category= $(".filters .panel:nth-child(3)"),
        bayways = $(".filters .panel:nth-child(4)"),
        price   = $(".filters .panel:nth-child(5)"),
        mempers = $(".filters .panel:nth-child(6)"),
        adsway  = $(".filters .panel:nth-child(7)");

    adv.click(function() {
        // Hide The Mempers filter & show Others
        mempers.fadeOut(500).siblings().fadeIn(500);
    });

    pub.click(function() {
        // show The Mempers filter & show Others If It was Hidden by Another filter
        mempers.fadeIn(500).siblings().fadeIn(500);
    });

    exc.click(function () {
        // Hide The price filter & show Others
        price.fadeOut(500).siblings().fadeIn(500);
        // and Hide Payways filter too
        bayways.fadeOut(500);
    });

    pfs.click(function () {
        // Hide the price filter & Show Others
        adsway.fadeOut(500).siblings().fadeIn(500);
    });

    //Cotact Us page Setting
    $(".panel-body form .btn").click(function (evt) {
        evt.preventDefault();
        alert(" we send you a recovery link please check Your inbox... :) ");
    });


    // Adjust the cost board place in the tow languge.
    if(body.hasClass("arabic")){
        // If Arabic start from the left side Of post.
        $(".minmum-cost").css('left', $(".maxmum-cost").innerWidth()- 1);
        $(".to-sign").css({
            "left": $(".maxmum-cost").innerWidth() - 11,
            "transform": "rotateY(180deg)"
        });
    }else{
        //In English start from the right side Of the post.
        $(".minmum-cost").css('right', $(".maxmum-cost").innerWidth() - 1);
        $(".to-sign").css('right', $(".maxmum-cost").innerWidth() - 12);
    }


});



// Form validation
$('#signup_form').bootstrapValidator({

    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
        full_name: {
            validators: {
                    stringLength: {
                    min: 4,
                },
                    notEmpty: {
                    message: 'Please supply your full name'
                }
            }
        },

        user_name: {
            validators: {
                    stringLength: {
                    min: 4,
                },
                    notEmpty: {
                    message: 'Please choose a user name'
                }
            }
        },


        email: {
            validators: {
                notEmpty: {
                    message: 'Please supply your email address'
                },
                emailAddress: {
                    message: 'Please supply a valid email address'
                }
            }
        },

        password: {
            validators: {
                stringLength: {
                    min: 6,
                },
                notEmpty: {
                    message: 'Please choose a password'
                }
            }
        },

        confirm_password: {
            validators: {
                notEmpty: {
                    message: 'Please confirm the password'
                },
                identical: {
                    field: 'password',
                    message: "The passwords didn't match"
                }
            }
        }
    }

})
.on('success.form.bv', function(e) {
    $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
        $('#signup_form').resetForm();

    // Prevent form submission
    e.preventDefault();
});

$('#login_form').bootstrapValidator({
        feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
        email: {
            validators: {
                notEmpty: {
                    message: 'Please supply your email address'
                },
                emailAddress: {
                    message: 'Please supply a valid email address'
                }
            }
        },

        password: {
            validators: {
                stringLength: {
                    min: 6,
                },
                notEmpty: {
                    message: 'Please type your password'
                }
            }
        }
    }
})
.on('success.form.bv', function(e) {
        $('#signup_form').resetForm();

    // Prevent form submission
    e.preventDefault();
});
