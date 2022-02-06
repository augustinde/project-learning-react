import React, {useContext} from "react";
import BtnToggle from "../BtnToggle/BtnToggle";
import "./Content.css";
import {ThemeContext} from "../../Context/ThemeContext";

export default function Content(){

    const {theme} = useContext(ThemeContext)


    return (
        <div className="container">
            <BtnToggle/>
            <h1>Titre</h1>
            <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque dicta dolore doloremque, dolores eaque earum maxime minima nesciunt quaerat quam quia quibusdam unde veritatis, voluptates! Culpa illo, officia. Autem consequatur et expedita harum minus quae voluptatum. Ab ad architecto atque consectetur culpa cumque debitis deserunt distinctio dolore dolorem eaque est et expedita hic ipsum minima molestiae mollitia nam nisi non nulla numquam pariatur perspiciatis praesentium, provident quasi quibusdam, reprehenderit repudiandae saepe similique sunt tempore ullam unde. Aperiam aspernatur, beatae culpa eaque expedita fuga id in iusto nemo, odio omnis porro recusandae sunt. A ad aperiam laudantium molestias soluta unde.</p>
        </div>
    );

}