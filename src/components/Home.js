import React from 'react'


export default function Home() {
  return (
    <section  className="section is-medium is-flex is-flex-direction-column">
        <div className="is-flex is-flex-direction-column is-align-items-center">
        <div className="is-flex is-flex-direction-column is-align-items-center	 ">
          <span className="is-flex ">
    <h1 className="title m-1">Priyanshi Jain</h1> <img style={{width:'40px', height:'40px'}} src="/peace.png" />
    </span><h2 className="subtitle"> Developer & Designer
    </h2>
    <h3 className="quote subtitle is-6 has-text-centered">A Software Developer with a passion of Learning and Creating.</h3>
    </div>
    <div className="container is-flex is-justify-content-center is-flex-direction-column m-3">
        <figure className="image is-256x256 " >
            <img className="is-rounded " style={{width:'250px', height:'250px', borderRadius:'50%'}}
                src=
"/profile.jpg"
                alt="Gfg logo"/>
        </figure>
    </div>
    <a href='#contact_section'>
    <button className='button' style={{borderRadius:"10px", background:"#f1dbf7"}}>Get In Touch</button></a>
    </div>
  </section>
  )
}
