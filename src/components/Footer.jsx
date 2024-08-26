import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div style={{ width: '100%', height: '300px' }} className='d-flex justify-content-center align-items-center flex column mt-5 bg-primary'>
                <div className='d-flex justify-content-evenly align-items-center mb-5 w-100 ' style={{ color: 'white' }}>
                    <div style={{ width: '400px' }} className='ms-5'>
                        <h4 style={{ color: 'orange' }}>
                            <i className="fa-solid fa-cart-shopping text-success me-2"></i>
                            e-kart
                        </h4>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vero harum in? Hic illo aliquam odit vitae repellat, temporibus fugit iste minima distinctio natus laboriosam repudiandae, perspiciatis dolorum excepturi saepe!
                        </h6>
                    </div>
                    <div className='d-flex flex-column ms-4' >
                        <h4 style={{ color: 'orange' }}>Links</h4>
                        <Link className='Links' to={"/"} >Home</Link>
                        <Link className='Links' to={"/cart"} >Cart</Link>
                        <Link className='Links' to={"/whishlist"} >Whishlist</Link>
                    </div>
                    <div className='d-flex flex-column'>
                        <h4 style={{ color: 'orange' }}>Guides</h4>
                        <Link to={'https://react.dev/'} target='_blank' className='Links'>React</Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} target='_blank' className='Links'>React Bootstrap</Link>
                        <Link to={'https://bootswatch.com/'} target='_blank' className='Links'>Bootswatch</Link>
                    </div>
                    <div >
                        <h4 style={{ color: 'orange' }}>Contact</h4>
                        <div className='d-flex'>
                            <input type="text" className='form-control rounded' placeholder='enter your mail id' />
                            <button className='btn btn-danger ms-2'>SUBSCRIBE</button>
                        </div>
                        <div className='d-flex justify-content-evenly mt-3'>
                            <Link className='Links'><i className="fa-brands fa-instagram fa-2x"></i></Link>
                            <Link className='Links'><i className="fa-brands fa-reddit fa-2x"></i></Link>
                            <Link className='Links'><i className="fa-brands fa-github fa-2x"></i></Link>
                            <Link className='Links'><i className="fa-brands fa-facebook fa-2x"></i></Link>

                        </div>

                    </div>
                </div>
                {/* <p style={{color:'white'}}>Copyright&copy; 2024 e-kart built with react redux</p> */}
            </div>
          
            
        </>
    )
}

export default Footer