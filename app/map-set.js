// MAP

const organizeByDepartment = (organized, [department, employees]) => {
  employees.forEach((employee) => {
    const { name, age, ...companyInfo } = employee;
    const personalInfo = { name, age };

    organized.set(personalInfo, {department, ...companyInfo});
  })
}

export const organizeEmployessInfo = (personal) => {
  const departmentsAndEmployees = Object.entries(personal);
  const organized = new Map();

  departmentsAndEmployees.map((dept) => organizeByDepartment(organized, dept))

  return organized;
};

export const objectToMap = (object) => new Map(Object.entries(object));

export const mapToObject = (map) => Object.fromEntries(map.entries());

// SET

export const iterableToSet = (iterable) => new Set(iterable);