import { Row,Col,Progress,Button } from 'antd';
import React, { Fragment } from 'react';
import classes from '../../styles/common.module.css';
import Chart from "react-apexcharts";
import ProgressLine from '../progress/progress';
import DonutChart from '../charts/donutChart';
import SubBody1 from './subBody1';

const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    },
    stroke: {
        curve: 'smooth',
    }
}
const series =[
    {
      name: "series-1",
      data: [35, 60, 40, 55, 80, 75, 60]
    }
] 

const LeftBody = () => {
    return (
        <Fragment>
        <Row className={classes.Card}>
            <Col className={classes.CardElement}>
                <div className={classes.SpacedFlex}>
                    <p>Total Application</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className={classes.SpacedFlex}>
                    <div>
                        <p className={classes.Amount}>7956</p>
                        <p className={classes.Percent1}><i className="fas fa-arrow-up"></i>+3.59%</p>
                    </div>
                    <div>
                        <Progress type="circle" strokeWidth={15} percent={75} strokeColor="#df00ef" width={50}/>
                    </div>
                </div>
            </Col>
            <Col className={`${classes.CardElement} ${classes.CardElementAlt}`}>
                <div className={classes.CardElementAltMove}>
                    <div className={classes.SpacedFlex}>
                        <p>Shortlisted Candidates</p>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className={classes.SpacedFlex}>
                        <div>
                            <p className={classes.Amount}>4658</p>
                            <p className={classes.Percent2}><i className="fas fa-arrow-up"></i>+06%</p>
                        </div>
                        <div>
                            <Progress type="circle" percent={60} strokeWidth={15} strokeColor="white" trailColor="rgb(118, 193, 255)" width={50}/>
                        </div>
                    </div>
                </div>
            </Col>
            <Col className={classes.CardElement}>
                <div className={classes.SpacedFlex}>
                    <p>Total Applications</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className={classes.SpacedFlex}>
                    <div>
                        <p className={classes.Amount}>1501</p>
                        <p className={classes.Percent3}><i className="fas fa-arrow-down"></i>-04%</p>
                    </div>
                    <div>
                        <Progress type="circle" percent={40} strokeColor="#ff2626" width={50} strokeWidth={15}/>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className={classes.Card}>
            <Col className={`${classes.CardElement} ${classes.Chart}`}>
                <div className={classes.SpacedFlex}>
                    <p style={{padding:'10px 10px 0 10px'}}>Applications Received</p>
                    <div className={`${classes.SpacedFlex} ${classes.Extra}`}>
                        <p>This Year</p>
                        <p>This Week</p>
                        <p>Today</p>
                        <Button type="text" color="white" icon={<i className="fas fa-download"></i>}>Download Report</Button>
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Chart
                        options={options}
                        series={series}
                        type="area"
                        height={200}
                        style={{width:'100%'}}
                        />
                </div>
            </Col>
            <Col className={classes.CardElement}>
                <div className={classes.SpacedFlex}>
                    <p>Total Applications</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className={classes.Centered}>
                    <ProgressLine color="#87CEFA" text="Applications"/>
                    <ProgressLine color="steelblue" text="Shortlistd"/>
                    <ProgressLine color="#ff2626" text="Rejected"/>
                    <ProgressLine color="#f4c2c2" text="On hold"/>
                    <ProgressLine color="#df00ef" text="Finalised"/>
                </div>
            </Col>
        </Row>
        <Row className={classes.Card}>
            <Col className={`${classes.CardElement} ${classes.Chart}`}>
                <div className={classes.SpacedFlex}>
                    <p>Refresh and Campaign Stats</p>
                    <div className={`${classes.SpacedFlex} ${classes.SpacedFlexInternal}`}>
                        <div style={{display:'flex',alignItems:'center',marginRight:'15px'}}>
                            <i className="fas fa-location-arrow fa-2x" style={{color:'#ff2626'}}></i>
                        </div>
                        <div>
                            <p style={{color:'#ff2626',margin:'0'}}>40 Campaign sent in total</p>
                            <p>4 Campaign sent in last month</p>
                        </div>
                    </div>
                </div>
                <SubBody1/>
            </Col>
            <Col className={classes.CardElement}>
                <div className={classes.SpacedFlex}>
                    <p>Open Position By Department</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className={classes.Centered}>
                    <DonutChart/>
                </div>
            </Col>
        </Row>
        </Fragment>
    )
}

export default React.memo(LeftBody);
