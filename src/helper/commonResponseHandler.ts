module.exports = {
    sendResponseWithPagination: (responseObj, responseCode, responseMessage, data, paginationData,extra) => {
        return responseObj.send({ 'responseCode': responseCode, 'responseMessage': responseMessage, result: data, paginationData: paginationData,extra })
    },
    sendResponseWithData: (responseObj, responseCode, responseMessage, data, tokn) => {
        return responseObj.send({ 'responseCode': responseCode, 'responseMessage': responseMessage, result: data, token: tokn });
    },
    sendResponseWithoutData: (responseObj, responseCode, responseMessage) => {
        return responseObj.send({ 'responseCode': responseCode, 'responseMessage': responseMessage });
    },
    sendResponsewithError: (responseObj, responseCode, responseMessage, Err) => {
        return responseObj.send({ responseCode: responseCode, responseMessage: responseMessage, Err: Err })
    },
    sendResponseWithToken: (responseObj, responseCode, responseMessage, tokn) => {
        return responseObj.send({ 'responseCode': responseCode, 'responseMessage': responseMessage, token: tokn });
    },
    sendResponseWithTokenAndResult: (responseObj, responseCode, responseMessage, result, tokn) => {
        return responseObj.send({ 'responseCode': responseCode, 'responseMessage': responseMessage, "result": result, token: tokn });
    },

};