import React,{Component} from 'react'
import Slider2 from '../../common/Slider2/Slider2'
import connect from "react-redux/es/connect/connect";
class Detail extends Component{
	constructor(props){
		
		super(props);
		//组件状态 == 内定的实例属性
	

		
}
// componentWillMount(){
// 	fetch(
// 		`/data/list.data`
// 	  ).then(
// 		res=>res.json()
// 		// res=>res.text()
// 	  ).then(
// 		data=>{
		
// 			this.setState({
// 				list:data
// 			  })
// 		}
		  
// 	  )
// }

    render(){
			let {list}=this.props
        return (
            <div className='Detail'>
            <header className="detail-header fixed-header">
		<a href="javascript:history.go(-1)"><img src="/images/detail-left.png"/></a>
		
		<a href="shopcar.html" className="right"><img src="/images/shopbar.png"/></a>
	</header>
	
	
	<div className="contaniner fixed-contb">
		<section className="detail">
		 {console.log(this.props.match.params.id)}
			<Slider2 list={list} id={this.props.match.params.id}/>
			<dl className="jiage">
				<dt>
					<h3>2015冬季新款韩版加厚中长款小鹿毛呢大衣女系带加厚羊毛呢外套</h3>
					<div className="collect">
						<img src="/images/detail-heart-hei.png"/>
						<p>收藏</p>
					</div>
				</dt>
				<dd>
					<b>￥28.99</b>
					<del>￥139</del>
					<input type="button" value="￥10.00" readonly />
					<small>+356积分</small>
				</dd>
			</dl>
			
			<div className="chose">
				<ul>
					<h3>颜色</h3>
					<li>
						黑色
					</li>
					<li className="chose-active">
						粉色
					</li>
					<li>
						灰色
					</li>
					<li>
						红色
					</li>
				</ul>
				<ul>
					<h3>尺寸</h3>
					<li>
						L
					</li>
					<li className="chose-active">
						XL
					</li>
					<li>
						XXL
					</li>
				</ul>
			</div>
			
			<a href="#" className="seven">
				<b>7</b>天无理由退换货
			</a>
			
			<ul className="same">
				<a href="#">
					<span>
						同类推荐
					</span>
					<li className="one">
						<img src="/images/detail-pp01.png"/>
						<p>￥188.00</p>
					</li>
					<li>
						<img src="/images/detail-pp02.png"/>
						<p>￥188.00</p>
					</li>
					<li>
						<img src="/images/detail-pp03.png"/>
						<p>￥188.00</p>
					</li>
					<li>
						<img src="/images/detail-pp04.png"/>
						<p>￥188.00</p>
					</li>
				</a>
			</ul>
			
			<article className="detail-article">
				<nav>
					<ul>
						<li>商品详情</li>
						<li className="article-active">评价</li>
					</ul>
				</nav>
				<section className="talkbox">
					<ul className="talk">
						<li>
							<figure><img src="/images/detail-tou.png"/></figure>
							<dl>
								<dt>
									<p>弱小喵</p>
									<time>2015.11.17</time>
									<div className="star">
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
									</div>
								</dt>
								<dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
								<small>颜色：豹纹凯特</small>
							</dl>
						</li>
						<li>
							<figure><img src="/images/detail-tou.png"/></figure>
							<dl>
								<dt>
									<p>弱小喵</p>
									<time>2015.11.17</time>
									<div className="star">
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
									</div>
								</dt>
								<dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
								<small>颜色：豹纹凯特</small>
								<div className="picbox">
									<img src="/images/detail-pp01.png"/>
									<img src="/images/detail-pp02.png"/>
									<img src="/images/detail-pp03.png"/>
									<img src="/images/detail-pp04.png"/>
								</div>
							</dl>
						</li>
						<li>
							<figure><img src="/images/detail-tou.png"/></figure>
							<dl>
								<dt>
									<p>弱小喵</p>
									<time>2015.11.17</time>
									<div className="star">
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
									</div>
								</dt>
								<dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
								<small>颜色：豹纹凯特</small>
							</dl>
						</li>
						<li>
							<figure><img src="/images/detail-tou.png"/></figure>
							<dl>
								<dt>
									<p>弱小喵</p>
									<time>2015.11.17</time>
									<div className="star">
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
									</div>
								</dt>
								<dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
								<small>颜色：豹纹凯特</small>
								<div className="picbox">
									<img src="/images/detail-pp01.png"/>
									<img src="/images/detail-pp02.png"/>
									<img src="/images/detail-pp03.png"/>
									<img src="/images/detail-pp04.png"/>
								</div>
							</dl>
						</li>
					</ul>
				</section>
				
			</article>
		</section>
	</div>
	
	
		<footer className="detail-footer fixed-footer">
			<a href="#" className="go-car">
				<input type="button" value="加入购物车"/>
			</a>
			<a href="buy.html" className="buy">
				立即购买
			</a>
		</footer>
            </div>
        )
    }
}
// export default Detail
const initMapStateToProps=state=>({
  list:state.list,
});
const initMapDispatchToProps=dispatch=>({
  // get:(id,dataName)=>dispatch(asyncList({
  //   id:id,
  //   type:types.UPDATE_DETAIL,
  //   url:`/data/article_${dataName}.data`,
	// })),
	
});


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Detail); 