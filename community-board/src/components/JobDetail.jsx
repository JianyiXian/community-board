import React from "react";

const JobDetail = (props) => {
    return (
        <div className="Job-describtion">
            <h3 className="company">{props.company}</h3>
            <h4 className="title">{props.title}</h4>
            <p>{props.type}</p>
            <p>{props.place}</p>
        </div>
    )
};

export default JobDetail;