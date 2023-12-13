import { calculateInvestmentResults } from "../util/investment";

const Results = ({ userInput }) => {
    const resultsData = calculateInvestmentResults(userInput)
    console.log(resultsData)
    return <p>Results...</p>
}

export default Results;
