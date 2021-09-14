describe("when enter the percentage of damage of the 3 injectors", () => {
    const { sumInjectorFlow } = require("../utils/sumInjectorFlow");
    
    it("should return useful percentage of the 3 injectors", () => {
      expect(
        sumInjectorFlow([
          { name: "injector1", percentage : 100 },
          { name: "injector2", percentage : 100 },
          { name: "injector3", percentage : 0 },
        ])
      ).toEqual(200);
      expect(
        sumInjectorFlow([
          { name: "injector1", percentage : 100 },
          { name: "injector2", percentage : 100 },
          { name: "injector3", percentage : 70 },
        ])
      ).toEqual(270);
      expect(
        sumInjectorFlow([
          { name: 'injector1', percentage: 20 },
          { name: 'injector2', percentage: 30 },
          { name: 'injector3', percentage: 40 },
          { name: 'injector4', percentage: 50 },
        ])
      ).toEqual(140);
    });
  });
  