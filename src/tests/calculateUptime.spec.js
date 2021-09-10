describe('when enter the additional value of the injector', () => {
  const {
    calculateUptime,
  } = require('../utils/calculateUptime');

  fit('should return uptime', () => {
    expect(calculateUptime(10)).toEqual(90);
  });
});
