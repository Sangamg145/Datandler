import React from 'react'
// import '../../assets/css/style.css'
// import '../../assets/css/vendor.css'
import Icon from "../../assest/under-construction.svg"
export default function NotFound() {
  return (
    <section className="banner-sec sec-404">
        <div className="content">
            <h1 style={{fontSize: 36,fontWeight: '600',marginBottom: 10}}>We're Launching Soon</h1>
            <p style={{lineHeight:'24px'}}>A journey which might have just initiated with an idea might not result into a success story untill
                and unless handled and controlled by the innovative methods.</p>
            <p>Few things on queue which will make possibilities in the market</p>
            <ul className="contactInfo">
                <li><i className="fas fa-envelope"></i>info@datandler.com</li>
                <li><i className="fas fa-phone"></i>+91 9756068029</li>
            </ul>
            <a href="/" className="btn btn-default">Take me Home</a>
        </div>

        <div className="illu-404">
            <img src={Icon} alt="" style={{maxWidth:600}} />
        </div>
    </section>
  )
}