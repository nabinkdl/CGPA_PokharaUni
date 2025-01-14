// cgpaController.ts
import { calculateGradeAndPercentage } from '../models/cgpaModel';

export const handleCalculateCgpa = (cgpa: string) => {
  const cgpaNumber = parseFloat(cgpa);

  if (isNaN(cgpaNumber)) {
    return { error: 'Please enter a valid CGPA', result: null };
  }

  if (cgpaNumber < 2.0 || cgpaNumber > 4.0) {
    return { error: 'CGPA must be between 2.00 and 4.00', result: null };
  }

  const { percentage, grade, honorPoint } = calculateGradeAndPercentage(cgpaNumber);
  return { error: '', result: { percentage, grade, honorPoint } };
};
