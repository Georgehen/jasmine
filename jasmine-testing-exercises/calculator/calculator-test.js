it('should calculate the monthly rate correctly', function() {
    const values = {
        amount: 100000,
        years: 10,
        rate: 2
    };
    expect(calculateMonthlyPayment(values)).toEqual("920.13");
});


it("should return a result with 2 decimal places", function() {
    const values = {
        amount: 10043,
        years: 8,
        rate: 5.8
    }; 
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
});


