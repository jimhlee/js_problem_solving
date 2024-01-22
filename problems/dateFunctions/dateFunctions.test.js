describe("dateFunctions", function () {

  describe("getToday", function () {
    it("returns a date", function () {
      expect(getToday() instanceof Date).toBe(true);
    });
    it("returns the current date", function () {
      expect(getToday()).toBeCloseTo(new Date(), -1);
    });
  });

  describe("isWeekend", function () {
    it("works", function () {
      expect(isWeekend(new Date("8/19/2021"))).toEqual(false);
      expect(isWeekend(new Date("8/21/2021"))).toEqual(true);
    });
  });

  describe("getMonthName", function () {
    it("works", function () {
      expect(getMonthName(new Date("2/19/2021"))).toEqual("February");
      expect(getMonthName(new Date("12/19/2021"))).toEqual("December");
    });
  });
});