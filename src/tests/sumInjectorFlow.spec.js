describe("when enter the percentage of damage of the 3 injectors", () => {
    const { sumInjectorFlow } = require("../utils/sumInjectorFlow");
    
    it("should return useful percentage of the 3 injectors", () => {
      expect(
        sumInjectorFlow( [
          { name: "injectorA", percentage : 100 },
          { name: "injectorB", percentage : 100 },
          { name: "injectorC", percentage : 0 },
        ])
      ).toEqual(200);
      expect(
        sumInjectorFlow( [
          { name: "injectorA", percentage : 100 },
          { name: "injectorB", percentage : 100 },
          { name: "injectorC", percentage : 70 },
        ])
      ).toEqual(270);
    });
  });
  