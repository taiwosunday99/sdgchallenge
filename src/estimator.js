const estimateCurrentlyInfected = (reportedCases) => {
  const currentlyInfected = reportedCases * 10;
  return currentlyInfected;
};

const estimateProjectedInfections = (reportedCases) => {
  const currentlyInfected = reportedCases * 50;
  return currentlyInfected;
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
