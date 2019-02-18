import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
class Slider extends Component {
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
						<img src="images/index-ban01.png"/>
					</a>
				</li>
				<li className="swiper-slide">
					<a href="#">
						<img src="images/index-ban02.png"/>
					</a>
				</li>
				<li className="swiper-slide">
					<a href="#">
						<img src="images/index-ban03.png"/>
					</a>
				</li>
			</ul>
		</figure>
        )
    }
}





export default Slider