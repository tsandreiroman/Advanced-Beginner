import { expect } from 'chai';
import personal from '@mocks/personal';
import {
  addSpecificFieldsToEmployee,
  calculateTotalSalariesAmount,
  calculateTotalPerDepartments
} from '@app/objects';

describe('>>> objects.js <<<', () => {
  it("Should check if a random employee from any department has employmentDays field included", async () => {
    const randomItEmployeeIndex = Math.floor(Math.random() * 4);
    const randomHrEmployeeIndex = Math.floor(Math.random() * 3);

    const result = addSpecificFieldsToEmployee(personal);

    expect(result.it[randomItEmployeeIndex]).to.have.property('employmentDays');
    expect(result.hr[randomHrEmployeeIndex]).to.have.property('employmentDays');
  });

  it("Should check if a random employee from any department has percentageOfTotal & is correctly calculated", async () => {
    const randomItEmployeeIndex = Math.floor(Math.random() * 4);
    const randomHrEmployeeIndex = Math.floor(Math.random() * 3);

    const totalSalariesAmount = calculateTotalSalariesAmount(calculateTotalPerDepartments(personal));

    const expectedPercentages = {
      itEmployee: Number((personal.it[randomItEmployeeIndex].salary / totalSalariesAmount * 100).toFixed(2)),
      hrEmployee: Number((personal.hr[randomHrEmployeeIndex].salary / totalSalariesAmount * 100).toFixed(2))
    }

    const result = addSpecificFieldsToEmployee(personal);

    expect(result.it[randomItEmployeeIndex]).to.deep.include({ percentageOfTotal: expectedPercentages.itEmployee  });
    expect(result.hr[randomHrEmployeeIndex]).to.deep.include({ percentageOfTotal: expectedPercentages.hrEmployee  });

  });
});
