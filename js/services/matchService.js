app.factory('matches', [function() {
    var matches = {
        results: [
            {
                "lender_name": "Jane Bank of CA",
                "interest_rate": 12.5,
                "loan_term": 60,
                "est_mo_pmt": 1250.00,
                "funding_time": 1,
                "pmt_type": "Daily ACH",
                "fees": {
        
                }
            },
            {
                "lender_name": "John Bank",
                "interest_rate": 10.0,
                "loan_term": 36,
                "est_mo_pmt": 1000.00,
                "funding_time": 2,
                "pmt_type": "Monthly",
                "fees": {
        
                }
            },
            {
                "lender_name": "Josh Bank",
                "interest_rate": 11.5,
                "loan_term": 60,
                "est_mo_pmt": 1150.00,
                "funding_time": 1.5,
                "pmt_type": "Seasonal",
                "fees": {
        
                }
            },
            {
                "lender_name": "James Bank",
                "interest_rate": 5.5,
                "loan_term": 36,
                "est_mo_pmt": 1250.00,
                "funding_time": 1.5,
                "pmt_type": "Seasonal",
                "fees": {
        
                }
            }
        ]
    };
    return matches;
}])