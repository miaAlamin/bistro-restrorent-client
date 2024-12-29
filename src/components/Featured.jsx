import SectionTitlel from "./SectionTitlel";
import freaturedImag from '../assets/featured.jpg';
// import "./FeatureImage.css";

const Featured = () => {
    return (
        <div className="bg-fixed"
        style={{ backgroundImage: `url(${freaturedImag})` }}
        
        >
            
            <section>
                <SectionTitlel
                    subHeading={'Ceck It Out'}
                    Heading={'Featured Item'}
                
                ></SectionTitlel>
                <div className="md:flex justify-center items-center pb-20 pt-12 px-36 gap-10 bg-slate-500 bg-opacity-10">
                    <div>
                        <img src={freaturedImag} alt="img"/>
                    </div>
                    <div  className="text-white">
                        <p className="font-semibold">Aug 20, 2029</p>
                        <p className="uppercase">where can i get some</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat deserunt laudantium in delectus inventore quo esse incidunt, dicta quis laboriosam perferendis quas, maxime illo, sit excepturi rem iste minus?</p>
                        <button className="btn border-0 border-b-4 uppercase btn-outline mt-4">order Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;