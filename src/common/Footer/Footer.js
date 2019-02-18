import React from 'react'
import { Link, NavLink} from 'react-router-dom';
const Footer =  (props) => (
    <div>
        <div className="footer">

        <footer className="page-footer fixed-footer">
		<ul>
			<li className="active">
            <NavLink  to="/home">
					<img src="./images/footer01.png"/>
					<p>首页</p>
            </NavLink>
			</li>
			<li>
			<NavLink  to="/fenlei">
					<img src="./images/footer002.png"/>
					<p>分类</p>
                    </NavLink>
			</li>
			<li>
            <Link  to="/shopcar">
					<img src="./images/footer003.png"/>
					<p>购物车</p>
         </Link>
			</li>
			<li>
            <Link  to="/user">
					<img src="./images/footer004.png"/>
					<p>个人中心</p>
                    </Link>
			</li>
		</ul>
	</footer>

</div> 
        

    </div>

)
export default Footer