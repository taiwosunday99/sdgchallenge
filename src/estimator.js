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
  const { reportedCases } = data;
  return {
    data: reportedCases,
    impact: { estimateCurrentlyInfected },
    severeImpact: { estimateProjectedInfections }
  };
};

export default covid19ImpactEstimator;
