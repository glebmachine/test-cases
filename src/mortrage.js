
export function calculateMortgagePayments(principal, years, rate) {
    let monthlyRate = rate / 100 / 12;
    let n = years * 12;
    let denominator = Math.pow((1 + monthlyRate), n) - 1;
    let monthlyPayment = principal * monthlyRate * (Math.pow((1 + monthlyRate), n)) / denominator;
    let balance = principal;
    let payments = [];

    for(let i = 0; i < n; i++) {
        let interestPayment = balance * monthlyRate;
        let principalPayment = monthlyPayment - interestPayment;

        balance -= principalPayment;

        payments.push({
            month: i + 1,
            totalPayment: monthlyPayment,
            interestPayment: interestPayment,
            principalPayment: principalPayment,
            remainingBalance: balance
        });
    }

    return payments;
}
