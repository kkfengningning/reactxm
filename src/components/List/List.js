import React,{Component} from 'react'
import { Link, NavLink} from 'react-router-dom';
import pubsub from 'pubsub-js';
import * as types from "../../store/types";
import asyncList from "../../store/actions/asynList";
import {connect} from 'react-redux'
class List extends Component{
	constructor(props){
		 
			super();
			//组件状态 == 内定的实例属性
			props.get();
	console.log(1)
	}
	componentWillMount(){
		console.log(2)
	}
	componentDidMount(){
		console.log(4)
	}
	componentWillReceiveProps(nextProps) {
		console.log("pp")
}
componentWillUpdate() {
	console.log("up1")
}

componentDidUpdate() {
	console.log("up2")
}
	//  componentWillMount(){
	// 	this.props.get()
	//  }
	// componentWillMount(){
	// 	pubsub.publish('view_loading',true);
	// 	fetch(
	// 		`/data/list.data`
	// 	  ).then(
	// 		res=>res.json()
	// 		// res=>res.text()
	// 	  ).then(
	// 		data=>{
	// 			setTimeout(()=>{

  //         pubsub.publish('view_loading',false);

  //         this.setState({list:data});
  //       },1000)
	// 			this.setState({
	// 			list:data
	// 		  })}
	// 	  )
	// }
    render(){
			console.log(3)
			let {list}=this.props
        return (
            <div className='List'>
            <header className="top-header fixed-header">
		<a className="icona" href="javascript:history.go(-1)">
				<img src="./images/left.png"/>
			</a>
		<h3>男装专区</h3>
			
			<a className="iconb" href="shopcar.html">
				<img src="./images/shopbar.png"/>
			</a>
	</header>
	
	<div className="contaniner fixed-conta">
		<section className="list">
			<figure><img src="./images/list-ban01.png"/></figure>
			<div className="search">
				<input type="search" placeholder="韩版卫衣" />
				<label><img src="./images/list-search.png"/></label>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">
							<span>全部</span>
						</a>
					</li>
					<li className="list-active">
						<a href="#">
							<span>销量</span>
							<img src="./images/up-red.png"/>
						</a>
					</li>
					<li>
						<a href="#">
							<span>价格</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>评价</span>
						</a>
					</li>
				</ul>
			</nav>
			<ul className="wall">
		
			{
            list.map((val,index)=>{
              return  (
			        <li className="pic">
					<Link to={"/detail/"+val.id}>
						<img src={val.url}/>
						<p>{val.jieshao}</p>
						<b>￥{val.price}</b><del>￥538</del>
					</Link>
					</li>
			  )
			  
            })
          }
				
			</ul>
		</section>
	</div>

            </div>
        )
    }
}
// export default List
const initMapStateToProps=state=>({
  list:state.list
});
const initMapDispatchToProps=dispatch=>({
  get:()=>dispatch(asyncList({
    url:'/data/list.data',
    type:types.UPDATE_LIST
  }))
}); 


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(List)