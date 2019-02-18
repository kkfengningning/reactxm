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
  
    // constructor(){
    //     super();
    
    //     this.state={
    //       bNav:true,
    //       bFoot:true,
    //       bLoading:false
    //     };
    
    //     订阅loading请求
    //     pubsub.subscribe('view_loading',(mess,bl)=>{
    //       console.log('app_loading',bl);
    //       this.setState({bLoading:bl})
    //     })
    
    
    //   }
//     render(){
//         return (
//           <div className='App'>
//             {/*rc_root不是响应式数据*/}
    
            //  {this.state.bLoading && <Loading/>}
            // {this.state.bFooter && <Footer/>} 
    
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
import Slider from '../common/Slider/Slider'
import Error from '../common/Error/Error';
// import Coupon from './Coupon/Coupon';
// import Slider from '../common/Slider/Slider';
import Detail from './Detail/Detail';
import Shopcar from './Shopcar/Shopcar';
import Login from './Login/Login';
import List from './List/List'
import Auth from "../guard/Auth";
// import Groups from './Groups/Groups';
import Home from './Home/Home';
// import Myorder from './Myorder/Myorder';
import User from './User/User';
import Fenlei from './Fenlei/Fenlei';
import Footer from '../common/Footer/Footer'; 
import Zhuce from './Zhuce/Zhuce'
import Loading from '../common/Loading/Loading'
import {Route,Redirect,Switch} from 'react-router-dom';
import pubsub from 'pubsub-js'
import {connect} from 'react-redux'
import * as types from '../store/types'
class App extends Component {
  componentWillReceiveProps(nextProps){
   console.log(nextProps.location.pathname);
   let path=nextProps.location.pathname  ;
  //  if(/home|user|fenlei|shopcar.test(path)){
  //    this.setState({
  //      bFoot:true
  //    })
  //  }
  let {viewNav,viewFoot}=this.props;
  if(/home|user|fenlei|shopcar/.test(path)){
    viewFoot(true)

  }
  if(/login|list|zhuce|detail/.test(path)){
    viewFoot(false)

  }
  }
 
  // constructor(props){
  //   super(props);

  //   this.state={
  //     bNav:true,
  //     bFoot:true,
  //     bLoading:false
  //   };

  //   // 订阅loading请求
  //   pubsub.subscribe('view_loading',(mess,bl)=>{
  //     console.log('app_loading',bl);
  //     this.setState({bLoading:bl})
  //   })


  // }
  render() {
    let {bNav,bFoot,bLoading} = this.props;
    return (
      <>
      {bLoading && <Loading/>}
        <Switch>
      
          <Route path='/home' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/fenlei' component={Fenlei}/>
          {/* <Route path='/user' component={User}/> */}
          <Auth path="/user" component={User} />

          <Route path='/detail/:id' component={Detail}/>
          <Route path='/shopcar' component={Shopcar}/>
          <Route path='/login' component={Login}/>
          <Route path='/zhuce' component={Zhuce}/>
          <Redirect exact from='/' to='/home'/>
          <Route component={Error}/>
        </Switch>
        
        {bFoot && <Footer/>} 
      </>
    )
  }
}

const initMapStateToProps=state=>({
  bNav:state.bNav,
  bFoot:state.bFoot,
  bLoading:state.bLoading,
});
const initMapDispatchToProps=dispatch=>({
  viewNav:(bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
  viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
});


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App);