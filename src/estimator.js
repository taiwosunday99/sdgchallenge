const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;
  return {
    data: reportedCases,
    impact: { currentlyInfected: reportedCases * 10 },
    severeImpact: { currentlyInfected: reportedCases * 50 }
  };
};

export default covid19ImpactEstimator;
