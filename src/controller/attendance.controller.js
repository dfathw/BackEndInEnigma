const getAllAttendance = async (req, res, service) => {
    const attend = await service.getAllAttendance();
    res.send(attend);
}
const getAttendanceList = async (req, res, service) => {
    try {
        let attend;
        if (req.query.site) {
            const site = req.query.site
            attend = await service.getAttendaceBySite(site);
        } else if (req.query.name) {
            const name = req.query.name;
            attend = await service.getEmployeeByName(name);
        }
        res.send(attend);
    } catch (e) {
        res.sendStatus(500)
    }
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

module.exports = { getAllAttendance, getAttendanceList, createAttendance, deleteAttendance, updateAttendance };