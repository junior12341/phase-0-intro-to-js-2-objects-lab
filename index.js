const employee = {
    name: "Hubert Jr",
    streetAddress: "LA"
}



function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
       ... employee,
       [key] : value 
    }
}

console.log (updateEmployeeWithKeyAndValue)(employee,"Hubert")
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value 
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "Hubert", value)
console.log(employee)


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {
        ...obj 
    }
    delete newEmployee[key]
    return newEmployee

}
console.log(deleteFromEmployeeByKey(employee ,"JobIdentificationNumber" ))
console.log(employee);

destructivelyDeleteFromEmployeeByKey(employee, key) 