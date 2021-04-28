import React from 'react';
import classes from '../../styles/common.module.css';
import DashImg from '../../assets/dash.jpeg';
import User from '../Users/user';

const RightBody = () => {
    return (
        <div className={`${classes.CardElement} ${classes.Body2}`}>
            <div style={{textAlign:'center'}}>
                <p className={classes.Col}>Hello Jalaj Kalra,</p>
                <p>You have 8 New Applications Today!</p>
            </div>
            <img src={DashImg} alt="Dashboard" style={{width:'100%'}}/>
            <div className={classes.Message}>
                <div className={classes.SpacedFlex}>
                    <p>New Applicants</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <User name="Rosie Metts" for="IOS Developer"/>
                <User name="James Scott" for="Node.js Developer"/>
                <User name="Jamie Laurenson" for="IOS Developer"/>
                <User name="Elizabeth Hurton" for="Marketing"/>
                <User name="Danny Watson" for="IOS Developer"/>
                <User name="Reha Scarlett" for="HR"/>
                <User name="Rosie Metts" for="IOS Developer"/>
                <User name="Danny Watson" for="IOS Developer"/>
            </div>
        </div>
    )
}

export default React.memo(RightBody);
