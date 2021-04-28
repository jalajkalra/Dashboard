import React from 'react';
import classes from '../../styles/common.module.css';

const User = (props) => {
    return (
        <div className={classes.SpacedFlex}>
            <div className={classes.SpacedFlex}>
                <div className={classes.CenterIcon}>
                    <i className="far fa-user-circle fa-2x"></i>
                </div>
                <div>
                    <p className={classes.Col}>{props.name}</p>
                    <p style={{fontSize:'10px'}}>Applied for <span style={{color:'steelblue'}}>{props.for}</span></p>
                </div>
            </div>
            <div className={`${classes.SpacedFlex} ${classes.CenterIcon}`}>
                <i className="fas fa-envelope-square fa-2x"></i>
                <i className="fas fa-phone-square-alt fa-2x"></i>
            </div>
        </div>
    )
}

export default React.memo(User);
