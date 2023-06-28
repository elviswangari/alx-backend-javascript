export default function createEmployeesObject(departmentName, employees) {
  const dpt = {};
  dpt[departmentName] = employees;
  return dpt;
}
