import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Wrapper, FirstLine, Description, Language } from './style'

const RepoCards = ({ item }) => {

    return(
        <Wrapper>
            <FirstLine>
                <Link to={item.html_url}>
                    {item.name}
                </Link>
                <div>
                    <FontAwesomeIcon icon={faStar} color='#b4b4b4'/>
                    {item.stargazers_count}
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