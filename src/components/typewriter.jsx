"use client";


import Typewriter from "typewriter-effect";

 const TypewriterT = () =>{
    return (
        <Typewriter 
            options={{loop:true}}
            onInit={(typewriter)=>{
                typewriter
                .typeString("I'm a passionate web developer.<br>")
                .pauseFor(1000)
                .typeString("Always hungry for knowledge and a quick learner as well.<br>")
                .pauseFor(1000)
                .typeString("Excited to explore new technologies and innovations,with an unlimited eagerness for learning.<br>")
                .pauseFor(1000)
                .typeString("Building the future one line of code at a time.<br>")
                .pauseFor(1000)
            }}
            />
    ) ;
}



export default TypewriterT;