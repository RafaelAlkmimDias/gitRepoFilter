const BaseUrl = 'https://api.github.com';

export const getRepoList = (key, value, aditionalParameter) => {


    const url = `${BaseUrl}/${key}/${value}/repos${aditionalParameter}`;

    return fetch(url).then(response => {
        if(response.ok){
            return response.json().then( data => {
                return data
            })
        }
        return [];
    })
    .catch(err => {
        console.log(err);
        return [];
    })

}

export const getRepoListLanguage = (term, pagginationParameter) => {

    const url = `https://api.github.com/legacy/repos/search/${term}${pagginationParameter}`;

    return fetch(url).then(response => {
        if(response.ok){
            return response.json().then( data => {
                return data.repositories
            })
        }
        return [];
    })
    .catch(err => {
        console.log(err);
        return [];
    })

}

export const getRepoTotalNumber = (key, value) => {
    const url = `${BaseUrl}/${key}/${value}/repos`;

    return fetch(url).then(response => {
        if(response.ok){
            return response.json().then( data => {
                return data.length
            })
        }

        return 0;
    })
    .catch(err => {
        console.log(err);
        return 0;
    })
}

export const getRepoTotalNumberLanguage = (term, language) => {

    const url = `https://api.github.com/legacy/repos/search/${term}?language=${language}`;

    return fetch(url).then(response => {
        if(response.ok){
            return response.json().then( data => {
                return data.repositories.length
            })
        }

        return 0;
    })
    .catch(err => {
        console.log(err);
        return 0;
    })
}