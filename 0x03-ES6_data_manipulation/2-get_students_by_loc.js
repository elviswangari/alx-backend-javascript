export default function getStudentsByLocation(students, city) {
  const filterCity = students.filter((item) => item.location === city);

  return filterCity;
}
