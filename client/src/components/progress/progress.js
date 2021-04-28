import React from 'react'
import classes from './progress.module.css';
import { Progress } from 'antd';

const ProgressLine = (props) => {
    return (
        <div className={classes.ProgressLine}>
            <p style={{color:`${props.color}`,fontSize:'12px'}}>{props.text}</p>
            <div className={classes.Progress}>
                <Progress percent={30} size="small" showInfo={false} strokeColor={props.color}/>
            </div>
        </div>
    )
}

export default React.memo(ProgressLine);
