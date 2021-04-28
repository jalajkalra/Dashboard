import React,{useState,useEffect} from 'react';
import { Button,Input } from 'antd';
import classes from '../../styles/common.module.css';

const getDate = ()=>{
    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return [weekday[d.getDay()],d.getDate(),d.getMonth(),d.getFullYear()];
}

const Header = () => {
    const [date,updateDate] = useState([]);
    useEffect(() => {
        const interval = setInterval(()=>{
            const d = getDate();
            updateDate(d);
        },1000)
        return () => {
            clearTimeout(interval);
          };
    }, [])
    return (
        <div className={classes.Header}>
            <div>
                <h1 style={{color: 'rgb(209, 213, 219)',marginBottom:'0'}}>Dashboard</h1>
                <p style={{color:'steelblue'}}>
                    {
                        date.length>0?`${date[0]}, ${date[1]}-${date[2]}-${date[3]}`:null
                    }
                </p>
            </div>
            <div style={{display:'flex'}}>
                <Button type="primary" icon={<i className="fas fa-plus"></i>} >
                    <span style={{marginLeft:'5px'}}>ADD</span>
                </Button>
                <Input placeholder="Search For Application Here" 
                    bordered={false}
                    id="forceColor"
                    style={{height:'30px'}} 
                    prefix={<i className="fas fa-search" style={{color:'white'}}></i>} />
            </div>
        </div>
    )
}

export default React.memo(Header);
