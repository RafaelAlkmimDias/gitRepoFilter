import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Wrapper, FirstLine, Description, Language } from './style'

const RepoCards = ({ item }) => {

    return(
        <Wrapper>
            <FirstLine>
                <a href={item.html_url || item.url }>
                    {item.name}
                </a>
                <div>
                    <FontAwesomeIcon icon={faStar} color='#b4b4b4'/>
                    {item.stargazers_count || item.followers}
                </div>
            </FirstLine>
            { item.description &&
                (<Description>
                    {item.description}
                </Description>)
            }
            <Language>
                {item.language}
            </Language>
        </Wrapper>
    )
}

export default RepoCards