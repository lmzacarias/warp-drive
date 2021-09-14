describe('when enter the additional value of the injector', () => {
  const {
    calculateUptime,
  } = require('../utils/calculateUptime');

  it('should return uptime', () => {
    expect(calculateUptime(10)).toEqual(90);
    expect(calculateUptime(50)).toEqual(50);
  });
});
