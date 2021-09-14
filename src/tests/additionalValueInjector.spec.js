describe('when enter the additional value of the injector', () => {
  const {
    additionalValueInjector,
  } = require('../utils/additionalValueInjector');

  fit('should return uptime', () => {
    expect(
      additionalValueInjector(240, 200, [
        { name: 'injectorA', percentage: 100 },
        { name: 'injectorB', percentage: 100 },
        { name: 'injectorC', percentage: 0 },
      ])
    ).toEqual(20);

    expect(
      additionalValueInjector(420, 270, [
        { name: 'injectorA', percentage: 100 },
        { name: 'injectorB', percentage: 100 },
        { name: 'injectorC', percentage: 70 },
      ])
    ).toEqual(50);
  });
});
