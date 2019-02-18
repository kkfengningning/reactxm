import React,{Component} from 'react'
import { Link, NavLink} from 'react-router-dom';
class Login extends Component{
    render(){
        return (
            <div className='Login'>
            <header className="top-header">
		<NavLink className="text texta" to="/home">取消</NavLink>
		<h3>登录</h3>
		<NavLink className="text" to="/zhuce">注册</NavLink>
	</header>
	
	<div className="login">
		<form>
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
			</ul>
			<input type="submit" value="登录"/>
		</form>
	</div>
            </div>
        )
    }
}
export default Login