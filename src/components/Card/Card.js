import React from "react";
import {NavLink} from "react-router-dom";

export const Card = (props) => {
    return (
        <div className="card col-lg-12 mt-2">
            <div className="row no-gutters">
                <div className="col-lg-4">
                    <img src={props.img} className="card-img"/>
                </div>
                <div className="col-lg-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {props.title}
                        </h5>
                        <p className="card-text">
                            {props.description}
                        </p>
                        <p className="card-text">
                            <strong>
                                {props.develop}
                            </strong>
                        </p>
                        <a href={props.link} target="_blank" className="btn btn-primary">
                            Посмотреть
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
}