const getAllSites = async (req, res, service) => {
    const allSites = await service.getAllSites();
    res.send(allSites);

}
const getSiteById = async (req, res, service) => {
    const id = req.params.id;
    const site = await service.getSiteById(id);
    res.send(site);
}
const addNewSite = async (req, res, service) => {
    const newSite = req.body
    const site = await service.addNewSite(newSite);
    res.send(site)
}
const updateSite = async (req, res, service) => {
    const updatedSites = req.body;
    const site = await service.updateSites(updatedSites);
    res.send(site)
}
const deleteSite = async (req, res, service) => {
    const id = req.params.id;
    await service.deleteSite(id);
    res.send({ id: id });
}

module.exports = {
    getAllSites, getSiteById, addNewSite, updateSite, deleteSite
}