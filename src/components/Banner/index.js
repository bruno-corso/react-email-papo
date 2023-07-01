import './Banner.css'
import banner from './Banner_Papo.png'

const Banner = (props) => {
    return (
        <div className='banner'>
            <img src={banner} alt="banner papo paralello" />
        </div>
    );
}

export default Banner;