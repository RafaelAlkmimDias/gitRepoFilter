import React from "react";

const RepoCards = ({ item }) => {
    
    return(
        <div style={{padding:'10px'}}>
            nome: {item.name} <br/>
            descrição: {item.description} <br/>
            url: {item.html_url} <br/>
            language: {item.language} <br/>
            stargazers: {item.stargazers_count} <br/>
        </div>
    )
}

export default RepoCards