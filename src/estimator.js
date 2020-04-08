const estimateCurrentlyInfected = (reportedCases) => {
  const currentlyInfected = reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * 1024;
  return infectionsByRequestedTime;
};

const estimateProjectedInfections = (reportedCases) => {
  const currentlyInfected = reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * 1024;
  return infectionsByRequestedTime;
};


const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {
      currentlyInfected: estimateCurrentlyInfected.currentlyInfected,
      infectionsByRequestedTime: estimateCurrentlyInfected.infectionsByRequestedTime
    },
    severeImpact: {
      currentlyInfected: estimateProjectedInfections.currentlyInfected,
      infectionsByRequestedTime: estimateProjectedInfections.infectionsByRequestedTime
    }
  };
};

export default covid19ImpactEstimator;
