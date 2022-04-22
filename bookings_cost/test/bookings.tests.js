describe('Weekly booking', function () {

    it("should return the normal booking costs for weekly days exept Wednesday and Friday", function () {

        assert.equal(135.00, bookingCost({ check_in_day: 'Monday', duration: 3, cat_name : 'Snowy'}));

    });
    it("should return the 25% discounted booking amount from the normal booking costs for Wednesday's bookings", function () {

        assert.equal(101.25, bookingCost({ check_in_day: 'Wednesday', duration: 3, cat_name : 'Snowy'}));

    });
    it("should return the 15% discounted booking amount from the normal booking costs for Friday's bookings", function () {

        assert.equal(114.75, bookingCost({ check_in_day: 'Friday', duration: 3, cat_name : 'Snowy'}));

    });
});
