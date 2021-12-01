export const calculatePercentage = (value:number,outOf:number):number => {
    const currentFundingPercentage = (value / outOf) * 100;
    return Math.round(currentFundingPercentage);
}