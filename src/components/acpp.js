// import React,{Component} from 'react'
// import Home from "./Home/Home";
// import User from './User/User'

// import Header from "../common/Header/Header";

// import Footer from "../common/Footer/Footer";
// import Detail from "./Detail/Detail";
// import Column from "./Column/Column";
// import Follow from "./Follow/Follow";


// // import User from "./User/User";
// import Login from "./Login/Login";
// import Reg from "./Reg/Reg";
// import Error from "../common/Error/Error";

// import {Route,Redirect,Switch,BrowserRouter} from 'react-router-dom';
// // import Auth from "../guard/Auth";
// // import Loading from "../common/Loading/Loading";


// class App extends Component{
  
//     constructor(){
//         super();
    
//         this.state={
//           bNav:true,
//           bFoot:true,
//           bLoading:false
//         };
    
//         //订阅loading请求
//         // pubsub.subscribe('view_loading',(mess,bl)=>{
//         //   console.log('app_loading',bl);
//         //   this.setState({bLoading:bl})
//         // })
    
    
//       }
//     render(){
//         return (
//           <div className='App'>
//             {/*rc_root不是响应式数据*/}
    
//             {/* {this.state.bLoading && <Loading/>}
//             {this.state.bNav && <Header/>} */}
    
//             <Switch>
//               <Route path="/home" component={Home} />
//               <Route path="/follow" component={Follow} />
//               <Route path="/column" component={Column} />
//               <Route path="/user" component={User} />
             
    
//               <Route path="/login" component={Login} />
//               <Route path="/reg" component={Reg} />
//               <Route path="/detail/:id" component={Detail} />
//               <Redirect exact from="/" to="/home" />
//               <Route component={Error} />
//             </Switch>
    
    
            
//             </div>
         
//         )
//       }
// }
// export default App
import React, { Component } from 'react';

import Error from '../common/Error/Error';
// import Coupon from './Coupon/Coupon';
// import Slider from '../common/Slider/Slider';
import Detail from './Detail/Detail';
import Reg from './Reg/Reg';
import Login from './Login/Login';

// import Groups from './Groups/Groups';
import Home from './Home/Home';
// import Myorder from './Myorder/Myorder';
import User from './User/User';

import Footer from '../common/Footer/Footer';

import {Route,Redirect,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/home' component={Home}/>
          {/* <Route path='/groups' component={Groups}/> */}
          {/* <Route path='/myorder' component={Myorder}/> */}
          <Route path='/user' component={User}/>
          <Route path='/reg' component={Reg}/>
          <Route path='/detail' component={Detail}/>
          <Route path='/login' component={Login}/>
          <Redirect exact from='/' to='/home'/>
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
