import { FaLink } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import image from './test.jpg'
import './cart.css';
// props.image
// props.title
// props.description
// props.linkDemo
// props.linkGitHup
// props.linkMore
export default function Cart(props) {
    return (
        <article
            className="cart">
            <img loading="lazy" src={props.image || image} alt="" />
            <div className="box">
                <h1 className="title">{props.title || "title"}</h1>
                <p className="sub-title">{props.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, mollitia."}</p>
                <div className="flex icons">
                    <div className="flex">
                        <button onClick={() => window.location.href = props.linkDemo || '/'} className="btn"><FaLink /></button>
                        <button onClick={() => window.location.href = props.linkGitHup || '/'} className="btn"><IoLogoGithub /></button>
                    </div>
                    <a href={props.linkMore || '/'} className="btn">more  <FaArrowRight /></a>
                </div>
            </div>
        </article>
    )
}
