import React,{Fragment} from 'react'
import classes from '../../styles/common.module.css';
import Nav from '../Nav/nav';

const Icons = [
    {id:1,name:"Home",icon:"fas fa-home fa-2x"},
    {id:2,name:"Stats",icon:"far fa-chart-bar fa-2x"},
    {id:3,name:"About",icon:"fas fa-briefcase fa-2x"},
    {id:4,name:"Documents",icon:"fas fa-folder fa-2x"},
    {id:5,name:"Calander",icon:"fas fa-calendar-week fa-2x"},
    {id:6,name:"User",icon:"fas fa-user fa-2x"},
    {id:7,name:"Message",icon:"fas fa-envelope fa-2x"},
    {id:8,name:"Sign-Out",icon:"fas fa-sign-out-alt fa-2x"}
]

const Sidebar = (props) => {
    return (
        <Fragment>
            <div className={classes.Logo}>
                <i className="fab fa-500px fa-3x"></i>
            </div>
            <div className={classes.Flexed}>
                {
                    Icons.map(item=>
                        <Nav icon={item} key={item.id}/>
                    )
                }
            </div>
            <div className={classes.Nav}>
                <i className="fas fa-cog fa-2x"></i>
            </div>
        </Fragment>
    )
}

export default Sidebar;
