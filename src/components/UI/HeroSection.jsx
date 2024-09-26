import { FaArrowRight } from "react-icons/fa";

export const HeroSection = () =>{
   
   return (
   <main>
    <div className="hero-section main">
        <div className="container grid grid-two-cols">
            <div className="hero-content">

            <h1 className="heading-xl">
                    explore the world, one country at one Time
            </h1>
            <p className="paragraph">

                Discover the history, culture, and beauty of the nation. Sort 
                search, and filter throught country to find the details you....
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <FaArrowRight />     
                {/* arrow right wala ek react icons se uthaya gaya hai our uppar import kia hai  */}
            </button>                   
            </div>
            <img src="/images/world.png" 
            alt=""
            className="banner-image"
            />
        </div>
    </div>

</main>
   )
}