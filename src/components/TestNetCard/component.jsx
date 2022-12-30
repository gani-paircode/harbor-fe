import * as React from 'react';
import './testnetcard.css';

const Card = (props) => {
    const { data } = props;
    return (
        <div className='testNetCardContainer'>
            <div className='infoContainer'>
            <div className="testNetCardTitle">
                { data.name}
            </div>
            <div className='num'>5321</div>
            </div>
            <div className='statusContainer'>
                <div>Created At -- {data.created_at}</div>
                <div>Last modified At  -- {data.updated_at}</div>
                <div>Status {data.status}</div>
            </div>
        </div>
    )
};

export default Card;