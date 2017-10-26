app.filter('lenderFilter', function() {
    return function(rate) {
        if (rate < 7) {
            return 'Tier 1';
        } else if (rate < 10) {
            return 'Tier 2';
        } else if (rate < 14) {
            return 'Tier 3';
        } else {
            return 'Tier 4';
        }
    }
})