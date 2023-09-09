import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../particles-config";

const ParticleBackground = ()=> {
    const particlesInit = useCallback((engine)=> (
        loadFull(engine)
    ),[])
    return (
        <div>
            <Particles 
                options={particlesConfig}
                init={particlesInit}
            >    
            </Particles>
        </div>
        
        )  
}

export default ParticleBackground;