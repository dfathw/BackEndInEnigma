const getAllEmployee = async (req, res, service) => {
    const allEmployees = await service.getAllEmployee();
    res.send(allEmployees);
}
const getEmployeeList = async (req, res, service) => {
    try {
        let employee;
        if (req.query.site) {
            const site = req.query.site
            employee = await service.getEmployeeBySite(site);
        } else if (req.query.name) {
            const name = req.query.name;
            employee = await service.getEmployeeByName(name);
        }
        res.send(employee);
    } catch (e) {
        res.sendStatus(500)
    }
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

module.exports = { getAllEmployee, getEmployeeList, createEmployee, updateEmployee, deleteEmployee }