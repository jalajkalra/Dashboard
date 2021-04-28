import React,{Suspense} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from './components/Home/home';
import { Row, Col } from 'antd';
import Sidebar from './components/Sidebar/sidebar';
import Placeholder from './components/404ErrorPage/error';

const App = ()=> {
  return (
    <Suspense fallback={<Placeholder />}>
      <Row>
        <Col span={1} style={{borderRight:'1px solid rgb(209, 213, 219)',height:'100vh',overflowY:'auto'}}>
          <Sidebar/>
        </Col>
        <Col span={23} flex="auto" style={{height:'100vh',overflowY:'auto'}}>
          <Switch>
            <Route exact path="/Home" component={Home}/> 
          </Switch> 
        </Col>
      </Row>
    </Suspense>
  );
}

export default withRouter(App);
