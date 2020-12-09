// THE PROPOSED TASK WAS: 
// ***YOU GET AN OBJECT CONTAINING DEPARTMENTS OF A COMPANY WITH EMPLOYEES FOR EVERY DEPARTMENT
// 1. BASED ON THE DATE WHEN EVERY EMPLOYEE STARTED TO WORK, CALCULATE HOW MANY DAYS HAS HE/SHE BEEN WORKING FOR THAT COMPANY
// 2. BASED ON THE SALARY OF EVERY EMPLOYEE, CALCULATE THE PERCENTAGE OF HIS/HER SALARY OUT OF THE TOTAL AMOUNT OF SALARIES

const calculateEmploymentDays = (employDate, currDate) => Math.round(
  (currDate.getTime() - employDate.getTime()) / (1000 * 3600 * 24)
);

const calculatePercentageOfSalary = (salary, totalSalariesAmount) => Number(
  (salary / totalSalariesAmount * 100).toFixed(2)
);

export const calculateTotalPerDepartments = (personal) => Object.keys(personal).map((dept) => ({ 
    total: personal[dept].reduce((acc, currEmployee) => acc + currEmployee.salary, 0),
    department: dept 
  })
);

export const calculateTotalSalariesAmount = (totalPerDepartments) => totalPerDepartments.reduce(
  (acc, currDept) => acc + currDept.total, 0
);

const addEmploymentDays = ({ employDate }) => ({
  employmentDays: calculateEmploymentDays(employDate, new Date())
});

const addPercentageOfSalary = ({ salary }, totalSalariesAmount) => ({
  percentageOfTotal: calculatePercentageOfSalary(salary, totalSalariesAmount)
});

const mapByDepartment = (department, totalSalariesAmount) => department.map((employee) => ({
  ...employee,
  ...addEmploymentDays(employee),
  ...addPercentageOfSalary(employee, totalSalariesAmount),
}));

export const addSpecificFieldsToEmployee = (personal) => {
  const departmentsAndEmployees = Object.entries(personal);
  const totalSalariesAmount = calculateTotalSalariesAmount(
    calculateTotalPerDepartments(personal)
  );

  const withSpecificFields = departmentsAndEmployees.map(
    (dept) => mapByDepartment(dept[1], totalSalariesAmount)
  );

  const specificFieldsAdded = departmentsAndEmployees.map(
    (dept, index) => withSpecificFields[index]
  );

  return specificFieldsAdded.reduce(
    (acc, group, idx) => ({
      ...acc,
      [departmentsAndEmployees[idx][0]]: group 
    }), {}
  );
};