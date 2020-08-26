import React,{Component} from 'react'
import './home.css'
import { Link, NavLink} from 'react-router-dom';
import Slider from '../../common/Slider/Slider'
class Home extends Component{
    render(){
        return (
            <div className='Home'>
            <header className="page-header">
		<h3>商城</h3>
	</header>
	
	<div className="contaniner fixed-contb">
		<Slider/>
		
		<section className="shop">
			<h3>
				<Link to="/list">
					服装
					<span><img src="./images/right.png"/></span>
				</Link>
			</h3>
			<dl>
				<dd>
					<Link to="/list">
						<img src="./images/index-ph01.png"/>
						<b>男装</b>
					</Link>
				</dd>
				<dd>
					<Link to="/list">
						<img src="./images/index-ph02.png"/>
						<b>女装</b>
					</Link>
				</dd>
			</dl>
		</section>
		
		<section className="shop">
			<h3>
				<Link to="/list">
					食品
					<span><img src="./images/right.png"/></span>
				</Link>
			</h3>
			<dl>
				<dd>
					<Link to="/list">
						<img src="./images/index-03.png"/>
						<b>切糕qqqqqqqq</b>
					</Link>
				</dd>
				<dd>
					<Link to="/list">
						<img src="./images/index-ph04.png"/>
						<b>酥饼</b>
					</Link>
				</dd>
			</dl>
		</section>
	</div>
	


            </div>
        )
    }
}
export default Home