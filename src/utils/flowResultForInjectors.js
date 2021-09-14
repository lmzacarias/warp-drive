const flowResultForInjectors = (additionalTime, injectors) => {
  if (additionalTime > 99) {
    return 'Unable to comply';
  }

  const result = [];
  injectors.map((element) => {


    result.push({
      name: element.name,
      flow:
        element.percentage === 0
          ? 0
          : Number.isInteger(element.percentage + Number(additionalTime))
          ? Number((element.percentage + Number(additionalTime)).toFixed(0))
          : Number((element.percentage + Number(additionalTime)).toFixed(2)),
    });
  });
  return result;
};

module.exports = { flowResultForInjectors };
