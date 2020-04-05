const getAllEmployee = async (req, res, service) => {
    const allEmployees = await service.getAllEmployee();
    res.send(allEmployees);
}
const getEmployeeByName = async (req, res, service) => {
    const name = req.params.name;
    const employee = await service.getEmployeeByName(name);
    res.send(employee);
}
const createEmployee = async (req, res, service) => {
    const newEmployee = req.body;
    const employee = await service.createEmployee(newEmployee);
    res.send(employee);
}
const updateEmployee = async (req, res, service) => {
    const newEmployee = req.body;
    const employee = await service.updateEmployee(newEmployee);
    res.send(employee)
}
const deleteEmployee = async (req, res, service) => {
    const id = req.params.id;
    await service.deleteEmployee(id);
    res.send({ id: id })
}

module.exports = { getAllEmployee, getEmployeeByName, createEmployee, updateEmployee, deleteEmployee }