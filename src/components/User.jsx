import React from "react";
import axios from "axios";
import '../App.css'

export const User = ({username,image,followers,following,id,bio,onDelete}) => {

    

    return(
        <div className="col-lg-3 user">
            <div className="top">
                <img src={image} />
            </div>
            <div>
                <p className="name">{username}</p>
            </div>
            <div className="bottom">
                <div className="followSection">
                    <p>Following:{following} </p>
                    <p>Followers:{followers} </p>
                </div>
                <div className="bio">
                    <p>{bio}</p>
                </div>
                <div className="forDelete">
                    <button onClick={onDelete}>DELETE</button>
                </div>
            </div>
        </div>
    )



}