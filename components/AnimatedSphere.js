import React from "react";
import {Sphere, MeshDistortMaterial} from "@react-three/drei";

export default function AnimatedSphere(props) {
    return (
        <Sphere visable position={props.position} args={[1, 100, 200]} scale={props.scale} className="absolute right-1">
            <MeshDistortMaterial
                color={props.color}
                attach="material"
                distort={0.3}
                speed={1.5}
            />
        </Sphere>
    );
}