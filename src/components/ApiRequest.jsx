const ApiRequest = async (url='', apiOption=null, errorMessage=null) => {
    try{
        const fetchedData = await fetch(url, apiOption);
        if(!(fetchedData.ok)) {
            throw new Error('Error detected in performing API request.')
        }
    } catch(error){
        const errorMessage = error.message;
        console.log(errorMessage);
    } finally{
        return errorMessage
    }

}


export default ApiRequest;