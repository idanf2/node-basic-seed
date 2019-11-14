async function handleRequest(req, res) {
    const {
        payload
    } = req.body;

    if (!(payload)) {
        return res.status(400).send({
            message: 'Request is not in the correct format'
        })
    }


    return res.json({
        message: ``,
    });
}

module.exports = {
    handleRequest
}
