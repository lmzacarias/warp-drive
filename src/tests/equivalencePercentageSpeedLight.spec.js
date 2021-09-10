describe("when you enter the percentage of the speed of light", () => {
  const {
    equivalencePercentageSpeedLight,
  } = require("../utils/equivalencePercentageSpeedLight");
  
  it("should return required flow", () => {
    expect(equivalencePercentageSpeedLight(80)).toBe(240);
    expect(equivalencePercentageSpeedLight(140)).toBe(420);
  });
});
