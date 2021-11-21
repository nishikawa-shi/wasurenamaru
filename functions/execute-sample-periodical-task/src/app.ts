export const lambdaHandler = async(event: any): Promise<any> => {
    return {
        statusCode: 200,
        body: "Succeeded!!"
    }
}
