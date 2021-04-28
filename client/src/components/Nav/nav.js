import React from 'react'
import classes from '../../styles/common.module.css';
import {useHistory} from 'react-router-dom';

const Nav = (props) => {
    const history = useHistory();
    return (
        <div 
            className={classes.Nav} 
            onClick={()=>history.push(`/${props.icon.name}`)}
            style={{borderRight:`${`/${props.icon.name}`===history.location.pathname?"8px solid steelblue":""}`}}
        >
            <i 
                className={props.icon.icon} 
                style={{color:`${`/${props.icon.name}`===history.location.pathname?"steelblue":""}`}}
            ></i>
        </div>
    )
}

export default Nav;
