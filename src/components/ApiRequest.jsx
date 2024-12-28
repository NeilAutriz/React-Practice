const ApiRequest = async (url='', apiOption=null, errorMessage=null) => {
    try{
        const dataProcessed = await fetch(url, apiOption);
        if(!(dataProcessed.ok)){
            throw new Error('Error in performing the API request.');
        }
        console.log(dataProcessed);
    } catch (error){
        errorMessage = error.message;
    } finally{
        return errorMessage;
    }

}


export default ApiRequest;