export const calcTotalReal = (total, complete, efficient) => ((total + complete + efficient)/3);

export const persentToDecimal = (decimal) => (Math.round(decimal * 100) + '%');

export const calcGoalProgress = (total, complete, efficient, goal) => (
  persentToDecimal(calcTotalReal(total, complete, efficient)/goal)
);
