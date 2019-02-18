import React,{Component} from 'react'
import { Link, NavLink} from 'react-router-dom';
class Zhuce extends Component {
    render () {
        return (
            <div className='Zhuce'>
            <header className="top-header">
		<NavLink className="text texta" to="/home">取消</NavLink>
		<h3>注册</h3>
		<NavLink className="text" to="/login">登录</NavLink>
	</header>
	
	<div className="login">
		<form action="" method="post">
			
			<ul>
				<li>
					<img src="images/login.png"/>
					<label>账号</label>
					<input type="text" placeholder="请输入账号"/>
				</li>
				<li>
					<img src="images/password.png"/>
					<label>密码</label>
					<input type="password" placeholder="请输入密码"/>
				</li>
				<li>
					<img src="images/password.png"/>
					<label>密码</label>
					<input type="password" placeholder="请确认密码"/>
				</li>
			</ul>
			<input type="submit" value="立即注册"/>
		</form>
	</div>
            </div>
        )
    }
}
export default Zhuce