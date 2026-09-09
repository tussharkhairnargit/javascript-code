//numericFieldCheckOn.js

const providerRates = [
    {
        "billRateCodeId": "BR_HOURLY_HIGH_RATE",
        "billRateCode": "Hourly High Rate",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": null,
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": null,
        "jobTypeId": "PERM",
        "value": "Hourly High Rate",
        "label": "Hourly High Rate"
    },
    {
        "billRateCodeId": "BR_HOURLY_LOW_RATE",
        "billRateCode": "Hourly Low Rate",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": null,
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": "0.00",
        "jobTypeId": "PERM",
        "value": "Hourly Low Rate",
        "label": "Hourly Low Rate"
    },
    {
        "billRateCodeId": "BR_SALARY_MAXIMUM_RATE",
        "billRateCode": "Salary Maximum",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": null,
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": 99999,
        "jobTypeId": "PERM",
        "value": "Salary Maximum",
        "label": "Salary Maximum"
    },
    {
        "billRateCodeId": "BR_SALARY_MINIMUM_RATE",
        "billRateCode": "Salary Minimum",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": null,
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": 888.88, //"100e",
        "jobTypeId": "PERM",
        "value": "Salary Minimum",
        "label": "Salary Minimum"
    },
    {
        "billRateCodeId": "relocationPackage",
        "billRateCode": "Relocation Assistance",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": null,
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": 'Text should be diplay as it is',
        "jobTypeId": "PERM",
        "value": "Relocation Assistance",
        "label": "Relocation Assistance"
    },
    {
        "billRateCodeId": "signOnBonus",
        "billRateCode": "Sign On Bonus",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": null,
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": "0.00",
        "jobTypeId": "PERM",
        "value": "Sign On Bonus",
        "label": "Sign On Bonus"
    },
    {
        "billRateCodeId": "studentLoanReimb",
        "billRateCode": "studentLoanReimb",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": '00',
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": "10",
        "jobTypeId": "PERM",
        "value": "studentLoanReimb",
        "label": "studentLoanReimb"
    },
    {
        "billRateCodeId": "cme",
        "billRateCode": "cme",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": '00',
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": 10,
        "jobTypeId": "PERM",
        "value": "cme",
        "label": "cme"
    },
    {
        "billRateCodeId": "ceu",
        "billRateCode": "ceu",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": '00',
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": 10888.66,
        "jobTypeId": "PERM",
        "value": "ceu",
        "label": "ceu"
    },
    {
        "billRateCodeId": "ceu1",
        "billRateCode": "ceu ",
        "unit": "Dollar",
        "multiplyingFactor": false,
        "type": '00',
        "billRateMultiplierCodeId": null,
        "billRateMultiplierCode": null,
        "multiplyingFactorValue": null,
        "rate": "10888.66",
        "jobTypeId": "PERM",
        "value": "ceu",
        "label": "ceu"
    }

]

function numericCostAndRates(id) {
    return ['relocationPackage', 'signOnBonus', 'studentLoanReimb', 'cme', 'ceu', 'ceu1'].includes(id) ? false : true;
}

function setRates(billRates = []) {
    billRates.forEach(billRate => {
        if (!billRate.rate) billRate.rate = "0.00";
        if (!numericCostAndRates(billRate.billRateCodeId) && isNaN(billRate.rate)) {
            console.log("*" + billRate.billRateCodeId + ' rate \t\t: ', billRate.rate);
        } else {
            billRate.rate = parseFloat(billRate.rate).toFixed(2);
            console.log(billRate.billRateCodeId + ' rate \t\t: ', billRate.rate);
        }
    });
    return billRates;
}

setRates(providerRates);