import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
class Slider2 extends Component {
	constructor(props){
		
		super(props)
		//组件状态 == 内定的实例属性
	
		this.state={
		  list:[],
		  num:110,
		}
	
		
}
componentWillMount(){
	fetch(
		`/data/list.data`
	  ).then(
		res=>res.json()
		// res=>res.text()
	  ).then(
		data=>{
		
			this.setState({
				list:data
			  })
		}
		  
	  )
}
    componentDidMount(){
        let swiper = new Swiper(".swiper-container",{
            autoplay: true,
            loop:true
        })
		
    }
    render(){
        return  (
            <figure className="ban swiper-container">
			
			<ul className="swiper-wrapper">
				<li className="swiper-slide">
					<a href="#">
					      
						<img src={(this.state.list.length==0?"./images/index-ban02.png":this.state.list[this.props.id-1].url)}/>
					</a>
				</li>
				<li className="swiper-slide">
					<a href="#">
					<img src={(this.state.list.length==0?"./images/index-ban02.png":this.state.list[this.props.id-1].url)}/>
					</a>
				</li>
				<li className="swiper-slide">
					<a href="#">
					<img src={(this.state.list.length==0?"./images/index-ban02.png":this.state.list[this.props.id-1].url)}/>
					</a>
				</li>
				
			</ul>
		</figure>
        )
    }
}





export default Slider2