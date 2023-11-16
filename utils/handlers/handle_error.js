const handlehttpError = (res, message , code = 403)=>{
    res.status(code).send({error:message})
}

module.exports = {handlehttpError}