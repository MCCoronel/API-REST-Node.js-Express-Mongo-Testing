const customHeader = (req, res, next) => {
    const {headers} = req
    try {
        const apiKey = headers
    } catch (error) {
        res.status(403)
        res.send ({error: error.message})
    }
}

module.exports = customHeader