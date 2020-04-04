const getAllSites = async(req, res, service) => {
    const allSites = await service.getAllSites();
    res.send(allSites);
}

module.exports = {
    getAllSites
}