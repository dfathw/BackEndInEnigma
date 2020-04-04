const getAllEmployee = async(req, res, service) => {
    allEmployees = await service.getAllEmployee();
    res.send(allEmployees);
}

module.exports = { getAllEmployee }