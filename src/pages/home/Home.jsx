import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import {SignalCellularAlt,ArrowForward,DirectionsCar,Restaurant,PeopleAlt,Home,Feed} from '@mui/icons-material';
import {images} from '../../helpers/reqImgAndSvg'
import './home.css'

export default function UberHome() {
    return (
        <div className='home'>
            <Navbar />
            <div className='uberHomePlataform'>
                  <div className="moreAboutOurPlatform">
                      <div className="moreAboutOurPlatformCont">
                          <div className="platformOpts">
                               <div className="driveOrDeliverPlatf">
                                   <a href="" className='platformItems'>
                                       <SignalCellularAlt style={{color:"#000",fontSize:"14px"}}/>
                                       <span className='platformItemsTxt'>Drive or Deliver</span>
                                   </a>
                               </div>
                               <div className="eatPlatf">
                                  <a href="" className='platformItems'> 
                                      <Restaurant style={{color:"#000",fontSize:"14px"}}/>
                                      <span className='platformItemsTxt'>Eat</span>
                                  </a>
                               </div>
                               <div className="drivePlatf">
                                  <a href="" className='platformItems'>
                                      <DirectionsCar style={{color:"#000",fontSize:"14px"}}/>
                                      <span className='platformItemsTxt'>Drive</span>
                                  </a>
                               </div>
                            </div>
                            <div className='moreaboutPlatformOpts'>
                                <div className='moreaboutPlatformOptsH'>
                                    <h2>Get in the driver’s seat and get paid</h2>
                                </div>
                                <div className='moreaboutPlatformOptsP'>
                                    <span>Drive on the platform with the largest network of active riders.</span>
                                </div>
                                <div className='moreaboutPlatformOptsButt'>
                                    <button className='moreaboutPlatformOptsButton'>Sign up to drive</button>
                                </div>
                                <div className='moreaboutPlatformOptsA'>
                                    <a>Learn more about driving and delivering</a>
                                </div>
                            </div>
                        </div>
                  </div>  
            </div>

            <div className='uberBussiness'>
                   <div className="uberBussinessCont">
                       <div className="uberBussinessH">
                           <h3>Uber for Business</h3>
                       </div>
                       <div className="uberBussinessText">
                           <span>Transform the way your company moves and feeds its people.</span>
                       </div>
                       <div className="uberBussButt">
                           <button className="uberBussButton">See how</button>
                       </div>
                   </div>
            </div>

            <div className='uberSafety'>
                <div className="uberSafetyCont">
                    <div className='uberSafetyH'>
                        <h1>Focused on safety, wherever you go</h1>
                    </div>
                    <div className='uberSafetyComm'>
                        <div className="uberCommitent">
                            <div className="uberCommLogo">
                               <img src={images["uberTaxi.jpg"]} alt="" className='uberTaxiClas'/>
                            </div>
                            <div className="uberComoH">
                               <h2 className="uberComoHeader">Our commitment to your safety</h2>
                            </div>
                            <div className="uberCommP">
                               <p className="uberCommPg">With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                            </div>
                            <div className="uberCommLinks">
                                <div className="uberCommLinksItem">
                                    <a href="" className="uberCommLinksItemLink">Read about our Community Guidelines</a>
                                </div>
                                <div className="uberCommLinksItem">
                                    <a href="" className="uberCommLinksItemLink">See all safety features</a>
                                </div>
                            </div>
                        </div>
                        <div className="uberMotion">
                            <div className="uberCommLogo">
                                <img src={images["ourTaxies.jpg"]} alt="" className='uberTaxiClas' />
                            </div>
                            <div className="uberComoH">
                               <h2 className="uberComoHeader">Setting 10,000+ cities in motion</h2>
                            </div>
                            <div className="uberCommP">
                               <p className="uberCommPg">The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                            </div>
                            <div className="uberCommLinks">
                                <div className="uberCommLinksItem">
                                    <a href="" className="uberCommLinksItemLink">View All cities</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uberOthers">
                <div className="uberOthersD">
                    <div className="uberOtherCont">
                        <div className="uberOtherContItem">
                            <div className="uberOtherContItemLogo">
                               <PeopleAlt style={{color:"#333333",fontSize:"18px"}}/>
                            </div>
                            <div className="uberOtherContItemInf">
                                <div className="otherInfH">
                                    <h3 className="otherInfHeader">About us</h3>
                                </div>
                                <div className="otherInfP">
                                    <p className="otherInfParag">Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
                                </div>
                                <div className="otherInfL">
                                    <a className="otherInfLink">Learn more about Uber</a>
                                </div>
                            </div>
                        </div>
                        <div className="uberOtherContItem">
                            <div className="uberOtherContItemLogo">
                               <Feed style={{color:"#333333",fontSize:"18px"}}/>
                            </div>
                            <div className="uberOtherContItemInf">
                                <div className="otherInfH">
                                    <h3 className="otherInfHeader">Newsroom</h3>
                                </div>
                                <div className="otherInfP">
                                    <p className="otherInfParag">See announcements about our latest releases, initiatives, and partnerships.</p>
                                </div>
                                <div className="otherInfL">
                                    <a className="otherInfLink">Go to newsroom</a>
                                </div>
                            </div>
                        </div>
                        <div className="uberOtherContItem">
                            <div className="uberOtherContItemLogo">
                               <Home style={{color:"#333333",fontSize:"18px"}}/>
                            </div>
                            <div className="uberOtherContItemInf">
                                <div className="otherInfH">
                                    <h3 className="otherInfHeader">Global citizenship</h3>
                                </div>
                                <div className="otherInfP">
                                    <p className="otherInfParag">Read about our commitment to making a positive impact in the cities we serve.</p>
                                </div>
                                <div className="otherInfL">
                                    <a className="otherInfLink">See our partnerships</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='downUber'>
                <div className="downUberD">
                    <div className="downUberCont">
                        <div className="downUberItem">
                            <div className="downUberH">
                               <h1 className='downloadUberHead'>There’s more to love in the apps</h1>
                            </div>
                            <div className="howToDonwl">
                                <div className="howToDownlWith">
                                    <a className='howToDownlWithLink'>
                                        <div className='uberLinkToHomeP'>
                                            <span className='uberTextD'>Uber</span>
                                            <ArrowForward style={{color:"#ffffff",fontSize:"32px"}}/>
                                        </div>
                                        <div className='downDriverAppDiv'>
                                          <h2 className='downDriverApp'>Download the driver App</h2>
                                        </div>
                                        <div className='forwardDivIc'>
                                           <ArrowForward style={{color:"#000",fontSize:"12px"}}/>
                                        </div>
                                    </a>
                                </div>
                                <div className="howToDownlWith">
                                    <a className='howToDownlWithLink'>
                                        <div className='uberLinkToHomeP'>
                                            <span className='uberTextD'>Uber</span>
                                        </div>
                                        <div className='downDriverAppDiv'>
                                          <h2 className='downDriverApp'>Download the Uber App</h2>
                                        </div>
                                        <div className='forwardDivIc'>
                                           <ArrowForward style={{color:"#000",fontSize:"12px"}}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sign-up'>
                <div className="sign-upD">
                    <div className="sign-upCont">
                        <div className="sign-up-links">
                            <a href="" className='sign-up-links-item'>
                                <div>
                                    <h2 className='sign-up-text'>Sign up to drive</h2>
                                </div>
                                <div>
                                   <ArrowForward style={{color:"#000",fontSize:"22px"}} className='forwardIcMove'/>
                                </div>
                            </a>
                        </div>
                        <div className="sign-up-links">
                            <a href="" className='sign-up-links-item'>
                                <div>
                                    <h2 className='sign-up-text'>Sign up to ride</h2>
                                </div>
                                <div>
                                   <ArrowForward style={{color:"#000",fontSize:"22px"}} className='forwardIcMove'/>
                               </div>   
                            </a>
                        </div>
                    </div>
                </div>
            </div>

           <Footer />
        </div>
    )
}
