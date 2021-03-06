//const EmpData = require("./Employee");
const connection = require("../config/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");
const chalk = require("chalk");
//connection.connect();
//const query = connection.query;

sql = `SELECT employee.id,
                    employee.first_name,
                    employee.last_name,
                    role.title,
                    department.name AS 'department',
                    role.salary
                    FROM employee, role, department
                    WHERE department.id = role.department_id
                    AND role.id = employee.role_id
                    ORDER BY employee.id ASC`;

viewAllEmployees12 = () => {
  const query = sql;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("\n");
    console.table(res);
  });
  console.log("\n");
  // return startSearch();
  return promptUser();
};

viewAllEmployees = () => {
  const query = sql;
  return connection
    .promise()
    .query(query)
    .then(([rows, fields]) => {
      //console.log(rows);
      console.table(rows);
    })
    .catch(console.log)
    .then(() => connection.end());
};

const viewAllEmployees1 = () => {
  let sql = `SELECT employee.id,
                    employee.first_name,
                    employee.last_name,
                    role.title,
                    department.department_name AS 'department',
                    role.salary
                    FROM employee, role, department
                    WHERE department.id = role.department_id
                    AND role.id = employee.role_id
                    ORDER BY employee.id ASC`;
  connection.promise().query(sql, (error, response) => {
    if (error) throw error;
    console.log(
      chalk.yellow.bold(
        `====================================================================================`
      )
    );
    console.log(
      `                              ` + chalk.green.bold(`Current Employees:`)
    );
    console.log(
      chalk.yellow.bold(
        `====================================================================================`
      )
    );
    console.table(response);
    console.log(
      chalk.yellow.bold(
        `====================================================================================`
      )
    );
    promptUser();
  });
};

// const viewAllEmployees = () => {
//   let sql = `SELECT employee.id,
//                     employee.first_name,
//                     employee.last_name,
//                     role.title,
//                     department.name AS 'department',
//                     role.salary
//                     FROM employee, role, department
//                     WHERE department.id = role.department_id
//                     AND role.id = employee.role_id
//                     ORDER BY employee.id ASC`;
//   connection.promise().query(sql),(error, response) => {
//       if (error) throw error;
//     console.log(
//       chalk.yellow.bold(
//         `====================================================================================`
//       )
//     );
//   console.log(
//     `                              ` + chalk.green.bold(`Current Employees:`)
//   );
//   console.log(
//     chalk.yellow.bold(
//       `====================================================================================`
//     )
//   );
//   console.table(response);
//   console.log(
//     chalk.yellow.bold(
//       `====================================================================================`
//     )
//   );
//   promptUser();

// };

module.exports = {
  //employeeSearch,
  viewAllEmployees,
  //   viewRoles,
  //   viewDepartments,
  //   viewEmployeesByDept,
  //   viewEmployeesByMgr,
  //   viewBudgetByDept,
};
