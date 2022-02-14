export async function getSavedLinks(key) {
    const myLinks = await localStorage.getItem(key)
    let savedLinks = JSON.parse(myLinks) || [];

    return savedLinks;
}

export async function saveLink(key, newLink) {


    let linksStored = await getSavedLinks(key);
    const hasLink = linksStored.some( link => link.id === newLink.id )

    if(hasLink) {
        console.log("This link already exist in your list")
        return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link sucessfuly add')
}


export function deleteLink( links, id) {
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@shortLink', JSON.stringify(myLinks))
    console.log('Link sucessfuly deleted!')
    return myLinks;
}