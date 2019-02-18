import React,{Component} from 'react'
import { Link, NavLink} from 'react-router-dom';
class User extends Component{
    render(){
        return (
            <div className='User'>
            	<header className="self-header">
		<figure><img src="./images/self-tou.png"/></figure>
		<dl>
			<dt>弱小喵</dt>
			<dd>
				<img src="./images/self-header.png"/>
				<span>5684</span>
				<span>炒饭大湿</span>
			</dd>
		</dl>
		<button>签到</button>
	</header>
	
	<div className="contaniner fixed-contb">
		<section className="self">
			<dl>
				<dt>
					<a href="order.html">
						<img src="./images/self-icon.png"/>
						<b>全部订单</b>
						<span><img src="./images/right.png"/></span>
					</a>
				</dt>
				<dd>
						<ul>
							<li>
								<a href="go-order.html">
									<img src="./images/order-icon01.png"/>
									<p>待发货</p>
								</a>
							</li>
							<li>
								<a href="go-order.html">
									<img src="./images/order-icon03.png"/>
									<p>待付款</p>
								</a>
							</li>
							<li>
								<a href="go-order.html">
									<img src="./images/order-icon02.png"/>
									<p>待收货</p>
								</a>
							</li>
							<li>
								<a href="go-assess.html">
									<img src="./images/order-icon04.png"/>
									<p>待评价</p>
								</a>
							</li>
						</ul>
				</dd>
			</dl>
			
			<ul className="self-icon">
				<li>
					<a href="datum.html">
						<img src="./images/self-icon01.png"/>
						<p>个人信息</p>
						<span><img src="./images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="mycollect.html">
						<img src="./images/self-icon02.png"/>
						<p>我的收藏</p>
						<span><img src="./images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="integral.html">
						<img src="./images/self-icon03.png"/>
						<p>我的积分</p>
						<span><img src="./images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="addres.html">
						<img src="./images/self-icon04.png"/>
						<p>地址管理</p>
						<span><img src="./images/right.png"/></span>
					</a>
				</li>
			</ul>
			<ul className="self-icon">
				<li>
					<a href="none.html">
						<img src="./images/self-icon05.png"/>
						<p>我的分销</p>
						<span><img src="./images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="./images/self-icon06.png"/>
						<p>邀请好友</p>
						<span><img src="./images/right.png"/></span>
					</a>
				</li>
				
			</ul>
			<Link  to="/login"><input type="button" value="退出" /></Link>
			
		</section>
		
		
	</div>
	

            </div>
        )
    }
}
export default User