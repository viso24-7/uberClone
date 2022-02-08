import React from 'react'
import { ArrowForward} from '@mui/icons-material'
import facebook from '../../assets/svg/facebook.svg'
import google from '../../assets/svg/google.svg'
import palma from "../../assets/svg/palma.svg";
import './register.css'

export default function Register() {
    return (
        <div className="register">
            <div className="sign-up-head">
                <div className="head-uberL">
                    <div>
                        <span className="uberL-text">Uber</span>
                    </div>
                </div>
            </div>
           <div className="sign-up-div">
                <div className="sign-up-cont">
                        <div className="soft-tiny">
                            <form action="" className="soft-tiny-form">
                                <div className="tiny-form-head">
                                    <h4 className='sign-inTxt'>Sign In</h4>
                                </div>
                                <div className="tiny-form-in">
                                    <label htmlFor="emailOrNum" className='emailOrNumCl'>Email or Mobile number</label>
                                    <input type="text" id="emailOrNum" placeholder="Email or Mobile number" className="mobOremailCl"/>
                                </div>
                                <div className="tiny-form-but">
                                    <button className="tiny-form-button">
                                        <div className="tiny-form-buttonD"><span className="tiny-form-buttonD">Next</span></div>
                                        <div className="tiny-form-buttonD"><ArrowForward style={{fontSize:"16px"}}/></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="orSign-up-with">
                            <div className="orSign-up-with-item">
                                <h5>Or</h5>
                            </div>
                            <div className="orSign-up-with-item">
                                <button className='sign-up-with-fb'>
                                    <div className='fb-iconD'>
                                        <img src={facebook} alt="" />    
                                    </div>
                                    <div className="sign-up-cont-withD">
                                        <span className="sign-up-cont-with">CONTINUE WITH FACEBOOK</span>
                                    </div>
                                    <div className='sign-up-cont-withIc'>
                                       <ArrowForward style={{fontSize:"16px",color:"#fff"}}/>
                                    </div>
                                </button>
                            </div>
                            <div className="orSign-up-with-item">
                                <button className='sign-up-with-goog'>
                                    <div className='fb-iconD'>
                                        <img src={google} alt="" />  
                                    </div>
                                    <div className="sign-up-cont-withD">
                                        <span className="sign-up-cont-with">CONTINUE WITH FACEBOOK</span>
                                    </div>
                                    <div className='sign-up-cont-withIc'>
                                       <ArrowForward style={{color:"#fff",fontSize:"16px"}}/>
                                    </div>
                                </button>
                            </div>                         
                        </div>
                        <div className="didYhaveAcc">
                            <div className="didYhaveAccD">
                                <p className='didYhaveAccDP'>Don't have an account? <a className="didYhaveAccDLink">Sign up</a></p>                          
                            </div>
                        </div>
                 </div>
            </div>  
            <footer className="regFoot">
                <div className="regFootImgD">
                    <div className="regFootImgDiv"><img src={palma} alt="" className="palmaFootImg"/></div>
                </div>
                <div className="regFootBott">
                    <div className="regFootBottom">
                        <div className="regFootBottRight">
                          <div className="footBottLinks">
                              <a href="" className="UberAl">Uber</a>
                          </div>
                          <div className="footBottLinks">
                              <div className="footBottLinkIt">
                                  <span className="incUberTech">© 2020 Uber Technologies, Inc.</span>
                              </div>
                              <div className="footBottLinkIt">
                                  <a href="" className="incUberTechLink">Privacy</a>
                                  <a href="" className="incUberTechLink">Policy</a>
                                  &nbsp;| &nbsp;
                                  <a href="" className="incUberTechLink">Terms of Use</a>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </footer>  
        </div>
    )
}
