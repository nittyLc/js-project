//Net salary :
function calculateNetSalary() {

    let basicSalary = parseFloat(prompt("Enter the basic salary (Ksh):"));
    let benefits = parseFloat(prompt("Enter the benefits (Ksh):"));

    
    let grossSalary = basicSalary + benefits;


    let tier1Limit = 7000;
    let tier2Limit = 36000;
    let nssfTier1 = Math.min(grossSalary, tier1Limit) * 0.06;
    let nssfTier2 = Math.max(0, Math.min(grossSalary - tier1Limit, tier2Limit - tier1Limit)) * 0.06;
    let nssfTotal = nssfTier1 + nssfTier2;

    
    let nhifDeduction = grossSalary * 0.0275;


    let paye = 0;
    let remainingIncome = grossSalary;
    let taxBrackets = [
        { limit: 24000, rate: 0.1 },
        { limit: 32333 - 24000, rate: 0.25 },
        { limit: 500000 - 32333, rate: 0.3 },
        { limit: 800000 - 500000, rate: 0.325 },
        { limit: Infinity, rate: 0.35 },
    ];

    for (let bracket of taxBrackets) {
        if (remainingIncome <= 0) break;
        let taxableIncome = Math.min(remainingIncome, bracket.limit);
        paye += taxableIncome * bracket.rate;
        remainingIncome -= taxableIncome;
    }

    
    let netSalary = grossSalary - (nssfTotal + nhifDeduction + paye);

    
    console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
    console.log(`NSSF Deduction: Ksh ${nssfTotal.toFixed(2)}`);
    console.log(`NHIF Deduction: Ksh ${nhifDeduction.toFixed(2)}`);
    console.log(`PAYE (Tax): Ksh ${paye.toFixed(2)}`);
    console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);

}


calculateNetSalary();
