const getAllAttendance = async(req, res, service) => {
    const attend = await service.getAllAttendance();
    res.send(attend);
}
const getAttendanceList = async(req, res, service) => {
    try {
        let attend;
        if (req.query.site) {
            const site = req.query.site
            attend = await service.getAttendaceBySite(site);
        } else if (req.query.name) {
            const name = req.query.name;
            attend = await service.getAttendanceByName(name);
        } else if (req.query.date) {
            const date = req.query.date;
            attend = await service.getAttendanceByDate(date);
        } else if (req.query.id) {
            const id = req.query.id;
            attend = await service.getAttendanceByEmployeeID(id);
        }
        res.send(attend);
    } catch (e) {
        res.sendStatus(500)
    }
}
const getAttendanceDateBetween = async(req, res, service) => {
    const date1 = req.body.from;
    const date2 = req.body.to;
    const attend = await service.getAttendanceDateBetween(date1, date2);
    res.send(attend);
}
const createAttendance = async(req, res, service) => {
    const attendance = req.body;
    const newAttend = await service.createAttendance(attendance);
    res.send(newAttend);
}
const deleteAttendance = async(req, res, service) => {
    const deleted = req.params.date;
    const deletedAttend = await service.deleteAttendance(deleted);
    res.send(deletedAttend)
}
const updateAttendance = async(req, res, service) => {
    const newAttendance = req.body;
    const updateAttendance = await service.updateAttendance(newAttendance);
    res.send(updateAttendance);
}

module.exports = { getAllAttendance, getAttendanceList, createAttendance, deleteAttendance, updateAttendance, getAttendanceDateBetween };