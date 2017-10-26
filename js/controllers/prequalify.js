app.controller('PrequalifyController', ['$scope', '$http', function (scope, http) {

    var page = 'business';

    scope.name = scope.firstName + " " + scope.lastName;
    scope.matchResponseData = [];

    

    scope.showOwners = function () {
        scope.businessOwners = [];
        for (var i = 0; i < scope.numberOfOwners; i++) {
            scope.businessOwners[i] = {
                firstName: "",
                lastName: "",
                percentOwned: "",
                address: "",
                aptNo: "",
                city: "",
                state: "",
                zip: "",
                email: "",
                confirmEmail: "",
                phone: "",
                creditScore: "",
                incomeOutsideBusiness: "",
                housetHoldCost: "",
                transportationCost: "",
                childCareCost: "",
                healthCareCost: "",
                leansJudgmentsBankruptcies: ""
            };
        }
    }

    $('#business-header').on('click', showBusiness);
    $('#financial-header').on('click', showFinancial);
    $('#personal-header').on('click', showPersonal);
    $('.next').on('click', showNext);
    $('.prev').on('click', showPrev);
    $('#submit').on('click', showResults);
    $('.login').on('click', login);
    $('.close, .cancelbtn').on('click', function () {
        $('#login, #register').css('display', 'none');
    });

    $("#scroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior, but optional)
                // window.location.hash = hash;
            });
        } // End if
    });

    function showBusiness() {
        page = 'business';

        $('#business-form').show();
        $('#financial-form, .personal-form, #appSubmit').hide();

        $('#business-header').addClass('active');
        $('#financial-header, #personal-header').removeClass('active');

        $('#business-text').show();
        $('#financial-text, #personal-text').hide();

        $('.progress-bar').css('width', '25%').html('Step 1');
    }
    function showFinancial() {
        page = 'financial';

        $('#financial-form').show();
        $('#business-form, .personal-form, #appSubmit').hide();

        $('#financial-header').addClass('active');
        $('#business-header, #personal-header').removeClass('active');

        $('#financial-text').show();
        $('#business-text, #personal-text').hide();

        $('.progress-bar').css('width', '50%').html('Step 2');
    }
    function showPersonal() {
        page = 'personal';

        $('.personal-form, #appSubmit').show();
        $('#business-form, #financial-form').hide();

        $('#personal-header').addClass('active');
        $('#financial-header, #business-header').removeClass('active');

        $('#personal-text').show();
        $('#business-text, #financial-text').hide();

        $('.progress-bar').css('width', '75%').html('Step 3');
    }
    function showResults() {
        
        /*
            http.get('test-api',
                {
                    params: {
                        biz_name: scope.businessName,
                        biz_addr: scope.businessAddress,
                        biz_city: scope.businessCity,
                        biz_state: scope.businessState,
                        biz_zip: scope.businessZip,
                        biz_ein: scope.fein,
                        bis_years: scope.businessYears,
                        biz_revs: scope.revenue,
                        additional_credit: scope.additionalCredit,
                        own_name: scope.name,
                        own_addr: scope.address,
                        own_city: scope.city,
                        own_state: scope.state,
                        own_zip: scope.zip,
                        own_ssn: scope.ssn
                    }
                }).then(function (response) {
                    scope.matchResponseData = response.data;
                }, function (response) {
    
                });
            */

        $('#search-results').show();
        $('.personal-form, #business-form, #financial-form, #appSubmit').hide();
        $('#complete-header').addClass('active');
        $('#business-header, #financial-header, #personal-header').removeClass('active').off('click').css('cursor', 'default');
        $('#search-text').show();
        $('#business-text, #financial-text, #personal-text').hide();
        $('.progress-bar').css('width', '100%').html('Step 4');
        
    }
    function showNext() {
        if (page == 'business') {
            page = 'financial';
            showFinancial();
        }
        else if (page == 'financial') {
            page = 'personal';
            showPersonal();
        }
    }
    function showPrev() {
        if (page == 'personal') {
            page = 'financial';
            showFinancial();
        }
        else if (page == 'financial') {
            page = 'business';
            showBusiness();
        }
    }
}]);

function login() {
    $('#login').css('display', 'block');
}