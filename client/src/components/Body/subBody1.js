import React,{Fragment} from 'react';
import {Button} from 'antd';
import classes from '../../styles/common.module.css';

const SubBody1 = () => {
    return (
        <Fragment>
            <div className={classes.CenterButton}>
                <div>
                    <p>User's Reach</p>
                    <p className={`${classes.Percent4} ${classes.Col}`}><i className="fas fa-arrow-up"></i>+3.59%</p>
                    <p className={classes.Amount}>7956</p>
                </div>
                <div>
                    <p>Referals</p>
                    <p className={`${classes.Percent4} ${classes.Col}`}><i className="fas fa-arrow-up"></i>+9.01%</p>
                    <p className={classes.Amount}>0662</p>
                </div>
                <div>
                    <p>Shares</p>
                    <p className={`${classes.Percent4} ${classes.Col}`}><i className="fas fa-arrow-up"></i>+39.18%</p>
                    <p className={classes.Amount}>1478</p>
                </div>
                <div>
                    <p>Applications</p>
                    <p className={`${classes.Percent4} ${classes.Col}`}><i className="fas fa-arrow-up"></i>+12.00%</p>
                    <p className={classes.Amount}>0564</p>
                </div>
            </div>
            <div className={classes.CenterButton}>
                <Button type="primary" size="large">Start a New Campaign now</Button>
                <Button type="danger" size="large">Pause All RunningCampaign</Button> 
            </div>
        </Fragment>
    )
}

export default React.memo(SubBody1);
