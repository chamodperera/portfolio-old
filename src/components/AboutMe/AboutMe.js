import './AboutMe.scss';
import img from "../../Assets/images/about_me.png"

const AboutMe = () => {
    return ( 
        <div className="container">
            <div className='wrapper'>

                <div className='content-left'>
                    <span className='sec1'>
                        Hi,
                    </span>

                    <div className='sec2'>
                        <span>I'm Chamod Perera</span>
                        <span className='line'></span>
                    </div>

                    <div className='sec3'>
                        <span className='part1'>
                            <span>Web Designer | Developer</span>
                            <span className='line'>
                                <span className='line1'></span>
                                <span className='line2'></span>
                            </span>
                        </span>
                        

                        <span>and a </span>

                        <span className='part2'>
                            <span>Graphics Designer</span>
                            <span className='line'></span>   
                        </span>
                        
                    </div>

                </div>






                <div className='content-right'>

                        <div className='img-container'>
                            <img src={img}  />
                        </div>   

                </div>
                
            </div>
        </div>
     );
}
 
export default AboutMe;