export default function createIteratorObject (report) {
  const allEmployees = report.allEmployees
  function* employeeGenerator () {
    for (const dept in allEmployees) {
      for (const employee of allEmployees[dept]) {
        yield employee
      }
    }
  }
  return employeeGenerator()
}

