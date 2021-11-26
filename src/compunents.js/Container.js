import React,{useState} from 'react'
import { BsPlayCircle } from "react-icons/bs";
import logo3 from '../imgApp/package-01-150x150.jpg'
import logo4 from '../imgApp/package-02-150x150.jpg'
import logo5 from '../imgApp/package-03-150x150.jpg'
import logo6 from '../imgApp/package-04-150x150.jpg'
import logo7 from '../imgApp/ico-02.png'
import logo8 from '../imgApp/ico-06.png'
import logo9 from '../imgApp/ico-01.png'
import logo10 from '../imgApp/ico-03.png'
import logo11 from '../imgApp/ico-05.png'
import logo12 from '../imgApp/ico-04.png'

import ContainerIMG from './ContainerIMG';

const Container = () => {
    const [Vdeos,setVdeos] = useState()
    
    const OfImg = () =>{
        setVdeos({display: 'block',display: 'flex'})
        
    }
    const OnImg = () =>{
        setVdeos({display:'none'})
    }

    return (
        <div id='containet_all'>
        <div id='container'>
            <div className='container_text' >
                <p>WALK TOUR AND SUGWAY</p>
                <h1>The Paris  <span>Experience !</span><p></p></h1>
                <div className='container_list'>
                    <p className='container_list1'>Lorem ipsum dolor sit amet, consect etur adip iscing elit. Proin rhoncus urn a dictum neque molestie ultricies.</p>
                    <p className='container_list1'>Lorem ipsum dolor sit amet, consect etur adip iscing elit. Proin rhoncus urn a dictum neque molestie ultricies.
</p>
                </div>
                <li>VIEW ALL PACKAGES</li>
                <img src={logo3} alt="" className="container_img_list-1" />
                <img src={logo4} alt="" className="container_img_list-2"/>
                <img src={logo5} alt="" className="container_img_list-3"/>
                <img src={logo6} alt="" className="container_img_list-4"/>
                <p className="container_img_list-5">700 $</p>
                <p className="container_img_list-6">500 %</p>
                <p className="container_img_list-7">400 $</p>
                <p className="container_img_list-8">1200 $</p>
            </div>
           
            <div className='container_img'> 
            <li className ="icon_img" onClick = {OfImg}><BsPlayCircle className ="icon_img2"/></li>

            <ContainerIMG imgVideo = {Vdeos}
                        imgVideo2 = {OnImg}/>
            </div>
           
        </div>

        <div id = 'list_Container'>

            <div className='list_Container-Header'>
                <p>MULTIPLE BENEFITS INCLUDED</p>
                <h1>OUR <span>SERVICES</span><p></p></h1>
            </div>

            <div className = 'Container_list-time'>
                <div className = 'list_Container-1'>
                    <img src={logo7} alt="" className = 'list_Container-2'/>
                    <div className='list_Container-3'>
                        <h3>Insurance</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <a href="" className = 'list_Container-link' style={{background: '#1bbc9b'}}>View More</a>
                    </div>                  
                </div>

                <div className = 'list_Container-1'>
                    <img src={logo8} alt="" className = 'list_Container-2'/>
                    <div className='list_Container-3'>
                        <h3>Medical Care</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <a href="" className = 'list_Container-link' style={{background: '#ff6868'}}>View More</a>
                    </div>                  
                </div>

                <div className = 'list_Container-1'>
                    <img src={logo9} alt="" className = 'list_Container-2'/>
                    <div className='list_Container-3'>
                        <h3>Meals Included</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <a href="" className = 'list_Container-link' style={{background: '#14b9d5'}}>View More</a>
                    </div>                  
                </div>

                </div>




                <div className = 'Container_list-time'>
                <div className = 'list_Container-1'>
                    <img src={logo10} alt="" className = 'list_Container-2'/>
                    <div className='list_Container-3'>
                        <h3>Accessibility</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <a href="" className = 'list_Container-link' style={{background: '#f3a46b'}}>View More</a>
                    </div>                  
                </div>

                <div className = 'list_Container-1'>
                    <img src={logo11} alt="" className = 'list_Container-2'/>
                    <div className='list_Container-3'>
                        <h3>Customer Care</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <a href="" className = 'list_Container-link' style={{background: '#c755da'}}>View More</a>
                    </div>                  
                </div>

                <div className = 'list_Container-1'>
                    <img src={logo12} alt="" className = 'list_Container-2'/>
                    <div className='list_Container-3'>
                        <h3>Shuttle Included</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <a href="" className = 'list_Container-link' style={{background: '#ff6868'}}>View More</a>
                    </div>                  
                </div>

                </div>
                
                </div>
            


            



            
                
        </div>
            
       
        

    )
}

export default Container
