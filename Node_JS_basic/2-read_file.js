module.exports = function countStudents(path) {
  const fs = require('fs');
  try {
    const file = fs.readFileSync(path, 'utf-8');
    const content = file.split('\n');
    const headers = content[0].split(',');
    const firstname = [headers[0]]
    const lastname = [headers[1]]
    const age = [headers[2]]
    const field = [headers[3]]
    for (i = 1; i < content.length; i++) {
      let data = content[i].split(',');
      firstname.push(data[0])
      lastname.push(data[1])
      age.push(data[2])
      field.push(data[3])
    }
    const studentsCS = []
    const studentsSWE = []
    for (i = 1; i < field.length; i++) {
      if (field[i] === 'CS') {
        studentsCS.push(firstname[i])
      } else {
        studentsSWE.push(firstname[i])
      }
    }
    console.log(`Number of students: ${firstname.length - 1}`)
    console.log(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.toString().replace(/,/g, ', ')}`)
    console.log(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.toString().replace(/,/g, ', ')}`)
  } catch {
    throw ('Cannot load the database')
  }
}