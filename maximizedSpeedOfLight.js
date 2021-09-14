const {
  usefulPercentageInjectors,
} = require('./src/utils/usefulPercentageInjectors');
const {
  equivalencePercentageSpeedLight,
} = require('./src/utils/equivalencePercentageSpeedLight');
const {
  flowResultForInjectors,
} = require('./src/utils/flowResultForInjectors');
const { sumInjectorFlow } = require('./src/utils/sumInjectorFlow');
const {
  additionalValueInjector,
} = require('./src/utils/additionalValueInjector');
const { calculateUptime } = require('./src/utils/calculateUptime');

const maximizedSpeedOfLight = (injectors, percentageLightSpeed) => {
  const usefulPerecentage = usefulPercentageInjectors(
    injectors,
    percentageLightSpeed
  );

  const equivalence = equivalencePercentageSpeedLight(percentageLightSpeed);
 

  const sumInjectorFlowResult = sumInjectorFlow(usefulPerecentage);

  const additionalValueInjectorResult = additionalValueInjector(
    equivalence,
    sumInjectorFlowResult,
    usefulPerecentage
  );

  const resultInjectors = flowResultForInjectors(
    additionalValueInjectorResult,
    usefulPerecentage
  );
 

  if (resultInjectors === 'Unable to comply') {
    return 'Unable to comply';
  }

  const calculateUptimeResult = calculateUptime(additionalValueInjectorResult);
  const result = [...resultInjectors, { time: calculateUptimeResult }];
  return result;
};
//maximizedSpeedOfLight(0, 0, 0, 90);
module.exports = { maximizedSpeedOfLight };
