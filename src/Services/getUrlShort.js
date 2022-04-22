export const getUrlShort = async(url) => {

    return await (await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)).json()

}