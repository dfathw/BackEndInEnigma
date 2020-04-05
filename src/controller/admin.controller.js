const getAllAdmin = async (req, res, service) => {
    const admin = await service.getAllAdmin();
    res.send(admin);
}
const getAdminById = async (req, res, service) => {
    const id = req.params.id;
    const admin = await service.getAdminById(id);
    res.send(admin);
}
const createAdmin = async (req, res, service) => {
    const newAdmin = req.body;
    const admin = await service.createAdmin(newAdmin);
    res.send(admin);
}
module.exports = {
    getAllAdmin, getAdminById, createAdmin
}