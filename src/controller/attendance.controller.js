const getAllAttendance = async (req, res, service) => {
    const attend = await service.getAllAttendance();
    res.send(attend);
}
const getEmployeeByName = async (req, res, service) => {
    const name = req.params.name;
    const employee = await service.getEmployeeByName(name);
    res.send(employee)
}
const createAttendance = async (req, res, service) => {
    const attendance = req.body;
    const newAttend = await service.createAttendance(attendance);
    res.send(newAttend);
}
const deleteAttendance = async (req, res, service) => {
    const deleted = req.params.date;
    const deletedAttend = await service.deleteAttendance(deleted);
    res.send(deletedAttend)
}
const updateAttendance = async (req, res, service) => {
    const newAttendance = req.body;
    const updateAttendance = await service.updateAttendance(newAttendance);
    res.send(updateAttendance);
}

module.exports = { getAllAttendance, getEmployeeByName, createAttendance, deleteAttendance, updateAttendance };