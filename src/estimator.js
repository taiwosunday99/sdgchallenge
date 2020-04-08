import impact from './impact';
import severeImpact from './severeImpact';


const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: { impact },
    severeImpact: { severeImpact }
  };
};

export default covid19ImpactEstimator;
