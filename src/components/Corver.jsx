import React from 'react';
import { Parallax } from 'react-parallax';

const Corver = ({coverImage, ourmenu}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={coverImage}
        bgImageAlt="the meue"
        strength={-200}
    >
          <div
            className="hero h-[700px]"
           
            >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl uppercase font-bold">{ourmenu}</h1>
                <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                
                </div>
            </div>
               
            </div>
    </Parallax>
         
    );
};

export default Corver;