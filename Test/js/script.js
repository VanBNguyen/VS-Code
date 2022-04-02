// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the salary and income.
 */

function calculate () {
    const TAX_RATE = 0.1805 // constant
	
	// Gets hours worked and hourly rate (converts to float)
    let hoursworked = parseFloat(document.getElementById('hours-worked').value)
    let hourlyrate = parseFloat(document.getElementById('hourly-rate').value)
  // Calculates salary pre-tax and post-tax
    let salary = hoursworked * hourlyrate
    let taxed = salary * TAX_RATE
    let real_salary = salary - taxed

  // output
    document.getElementById('salaryuntaxed').innerHTML = 'Your salary before tax is $' + salary.toFixed(2)
    document.getElementById('salarytaxed').innerHTML = 'The governement will be taking 18.05% of your salary or $' + taxed.toFixed(2)
    document.getElementById('realsalary').innerHTML = 'With your income tax deducted from your salary, you will be keeping $' + real_salary.toFixed(2)
}