describe('when enter the additional value of the injector', () => {
  const {
    additionalValueInjector,
  } = require('../utils/additionalValueInjector');

  it('should return uptime', () => {
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
    expect(
      additionalValueInjector(240, 140, [
        { name: 'injectorA', percentage: 20 },
        { name: 'injectorB', percentage: 30 },
        { name: 'injectorC', percentage: 40 },
        { name: 'injectorD', percentage: 50 },
      ])
    ).toEqual(25);
  });
});
