import React from 'react'
import useDocumentTitle from '../../helpers/useDocumentTitle'
import {FmdGood,ArrowForwardIos,PhoneIphone,Facebook,Twitter,LinkedIn,Instagram,Language,Apple} from '@mui/icons-material';
import {svg} from '../../helpers/reqImgAndSvg'
import './help.css'

export default function Help() {
    useDocumentTitle("Uber Help")
    return (
        <div className='help'>
            <div className="helpD">
                <nav className='helpNavigator'>
                    <div className="helpNavDiv">
                        <div className="helpNavLeft">
                             <a href="" className='hNavLink'>
                                 <div>
                                     <i className='uberL'></i>
                                 </div>
                                 <div>
                                     <span className='uberLTxt'>Help</span>
                                 </div>
                             </a>
                        </div>
                        <div className="helpNavRight">
                            <button className='selCity'>
                                <a href="" className='goSelACity'>SELECT A CITY</a>
                                <FmdGood style={{color:"#000",fontSize:"12px",paddingLeft:"3px"}}/>
                            </button>
                            <div className='siUpBut'>
                                <button className='siUpButton'>SIGN IN</button>
                            </div>
                            <div className='loGButi'>
                                <button className='loGButton'>SIGN UP</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="theme-pattern">
                    <div className="theme-patternD">
                       <img src={svg["pattern.svg"]} alt="" />
                    </div>
                </div>
                <div className="searchInhp">
                    <div className="searchDhp">
                        <div className="serachForRiders">
                           <div className="searchForRidersH">
                               <h1 className='arYhavTr'>Having trouble?</h1>
                           </div>
                           <div className="searchForRidersH">
                               <h1 className='herTHelpY'>We're here to help</h1>
                           </div>
                           <div className="srchCont">
                                 <div className="rdersDiv">
                                     <div className='riderTxt'>Riders</div>
                                 </div>
                                 <div className="dscYourIss">
                                     <input type="text" placeholder="Describe your issue" className='yourIssToDesb'/>
                                 </div>
                                 <div className="goSrchFor">
                                     <button className='goSearchIss'>Search</button>
                                 </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="helpTopics">
                    <div className="helpTopicsD">
                        <div className="helpSideNav">
                            <ul className="helpSideNavList">
                                <li className="helpSideNavItems">
                                   <a href="" className="helpSideNavItem">RIDERS</a>
                                </li>
                                <li className="helpSideNavItems">
                                   <a href="" className="helpSideNavItem">DRIVING & DELIVERING</a>
                                </li>
                                <li className="helpSideNavItems">
                                   <a href="" className="helpSideNavItem">UBER EATS</a>
                                </li>
                                <li className="helpSideNavItems">
                                   <a href="" className="helpSideNavItem">MERCHANTS & RESTAURANTS</a>
                                </li>
                                <li className="helpSideNavItems">
                                   <a href="" className="helpSideNavItem">BIKES & SCOOTERS</a>
                                </li>
                                <li className="helpSideNavItems">
                                   <a href="" className="helpSideNavItem">BUSINESS</a>
                                </li>
                                <li className="helpSideNavItems">
                                   <a href="" className="helpSideNavItem">FREIGHT</a>
                                </li>
                            </ul>
                        </div>
                        <main className="helpRNavCont">
                           <div className='RNavContTop'>
                                 <div className="RNavContTopH">
                                     <div className="accHelpTrickD">
                                        <h3 className="accHelpTrick">Sign in to get help with your account and trips.</h3>
                                     </div>
                                     <div className="shkoSign">
                                         <a href="" className="shkoSignLink">SIGN IN</a>
                                     </div>
                                 </div>
                           </div>
                           <div className='RNavContCenter'>
                               <div className="RNavContCentH">
                                   <h2 className="findAllTops">All Topics</h2>
                               </div>
                               <div className="RNavContCentLayout">
                                   <div className="rNavLayoutList">
                                       <div className="rNavLayoutListItem">
                                          <div className='layListItemIc'>
                                             <img src={svg["refunds.svg"]} alt="" />
                                          </div>
                                          <div className='layListItemLinks'>
                                              <div className='layListItemLIt'>
                                                 <h5 className="tripARef">Trip Isuues and Refunds</h5>
                                              </div>
                                              <div className='layListItemLIt'>
                                                 <ArrowForwardIos style={{color:"#000",fontSize:"10px"}}/>
                                              </div>
                                          </div>
                                       </div>
                                   </div>
                                   <div className="rNavLayoutList">
                                       <div className="rNavLayoutListItem">
                                          <div className='layListItemIc'>
                                              <img src={svg["payment.svg"]} alt="" />
                                           </div>
                                          <div className='layListItemLinks'>
                                              <div>
                                                 <h5 className="tripARef">Account and Payment Option</h5>
                                              </div>
                                              <div>
                                                 <ArrowForwardIos style={{color:"#000",fontSize:"10px"}} />
                                              </div>
                                          </div>
                                       </div>
                                   </div>
                                   <div className="rNavLayoutList">
                                       <div className="rNavLayoutListItem">
                                          <div className='layListItemIc'>
                                           <img src={svg["question.svg"]} alt="" />  
                                         </div>
                                          <div className='layListItemLinks'>
                                              <div>
                                                 <h5 className="tripARef">More</h5>
                                              </div>
                                              <div>
                                                  <ArrowForwardIos style={{color:"#000",fontSize:"10px"}}/>
                                              </div>
                                          </div>
                                       </div>
                                   </div>
                                   <div className="rNavLayoutList">
                                       <div className="rNavLayoutListItem">
                                          <div className='layListItemIc'>
                                             <img src={svg["navigation.svg"]} alt="" />
                                          </div>    
                                        <div className='layListItemLinks'>
                                              <div>
                                                 <h5 className="tripARef">A Guide to Uber</h5>
                                              </div>
                                              <div>
                                                 <ArrowForwardIos style={{color:"#000",fontSize:"10px"}}/>
                                              </div>
                                          </div>
                                       </div>
                                   </div>
                                   <div className="rNavLayoutList">
                                       <div className="rNavLayoutListItem">
                                          <div className='layListItemIc'>
                                             <img src={svg["question.svg"]} alt="" />  
                                          </div>
                                          <div className='layListItemLinks'>
                                              <div>
                                                 <h5 className="tripARef">Uber Bus/ Uber Shuffle</h5>
                                              </div>
                                              <div>
                                                <ArrowForwardIos style={{color:"#000",fontSize:"10px"}} />
                                              </div>
                                          </div>
                                       </div>
                                   </div>
                                   <div className="rNavLayoutList">
                                       <div className="rNavLayoutListItem">
                                          <div className='layListItemIc'>
                                             <img src={svg["question.svg"]} alt="" />  
                                          </div>
                                          <div className='layListItemLinks'>
                                              <div>
                                                 <h5 className="tripARef">Signing Up</h5>
                                              </div>
                                              <div>
                                                 <ArrowForwardIos style={{color:"#000",fontSize:"10px"}} />
                                              </div>
                                          </div>
                                       </div>
                                   </div>
                                   <div className="rNavLayoutList">
                                       <div className="rNavLayoutListItem">
                                          <div className='layListItemIc'>
                                             <img src={svg["accessibilty.svg"]} alt="" />
                                          </div>
                                          <div className='layListItemLinks'>
                                              <div>
                                                 <h5 className="tripARef">Accessibility</h5>
                                              </div>
                                              <div>
                                                 <ArrowForwardIos style={{color:"#000",fontSize:"10px"}}/>
                                              </div>
                                          </div>
                                       </div>
                                   </div>
                                   <div className="rNavLayoutList">
                                       <div className="rNavLayoutListItem">
                                          <div className='layListItemIc'>
                                             <img src={svg["question.svg"]} alt="" />    
                                          </div>
                                          <div className='layListItemLinks'>
                                              <div>
                                                 <h5 className="tripARef">Uber Money</h5>
                                              </div>
                                              <div>
                                                <ArrowForwardIos style={{color:"#000",fontSize:"10px"}}/>
                                              </div>
                                          </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className='RNavContBott'>
                              <div className="pushToTop">
                                 <div className="pushHugeTo">
                                     <div className="pushHugeToIc">
                                         <PhoneIphone style={{color:"#444242",fontSize:"17px"}}/>
                                     </div>
                                     <div className="pushHugeToInf">
                                          <div className="infTopH">
                                              <h3 className="infTopHelp">Get help in the app</h3>
                                          </div>
                                          <div className="getInfoPush">
                                              <span className="getInfoPushParag">Just head to Help in the Uber app navigation.</span>
                                          </div>      
                                     </div>
                                 </div> 
                                 <div className="pushHugeTo">
                                     <div className="pushHugeToIc">
                                         <Twitter style={{color:"#444242",fontSize:"17px"}}/>
                                     </div>
                                     <div className="pushHugeToInf">
                                          <div className="infTopH">
                                              <h3 className="infTopHelp">Follow us on Twitter</h3>
                                          </div>
                                          <div className="getInfoPush">
                                              <span className="getInfoPushParag">Get the latest status on the app, or tweet to us with any questions you have.</span>
                                          </div>   
                                          <div className="getLinkPush">
                                              <a href="" className="uberSuppCl">Follow @Uber_Support</a>   
                                              <ArrowForwardIos style={{color:"#000",fontSize:"10px"}}/> 
                                          </div>   
                                     </div>
                                </div>
                              </div>
                           </div>
                        </main>
                    </div>
                </div>
                <footer className="abFootClass">
                               <div className="cityimgD">
                                  <img src={svg["palma.svg"]} alt="" />
                               </div>
                               <div className="footOnAboutP">
                                  <div className="footOnAboutPCont">
                                      <div className="deskLayoutTop">
                                          <div className="deskLayoutTopL">
                                              <div className="layoutTopLinks">
                                                <a href="" className='uberHelpL'>Uber
                                                    <span className="getSomeH">Help</span>
                                                </a>
                                              </div>
                                              <div className="layoutTopLinks">
                                                 <div className='sign-up-to-rideD'>
                                                    <a href="" className="sign-up-to-ride">SIGN UP TO RIDE</a>
                                                 </div>
                                              </div>
                                           </div>
                                          <div className="deskLayoutTopR">
                                             <div className="becAdriverBut">
                                               <a href="" className="becAdriver">BECOME A DRIVER</a>
                                             </div>
                                          </div>
                                      </div>
                                      <div className="likeAHr"></div>
                                      <div className="layoutFlush">
                                          <div className="layoutFlushpalmOne">
                                             <div className="palmOneItem">
                                                 <div className="plan-one-item">
                                                    <Language style={{color:"#fff",fontSize:"12px"}}/>
                                                 </div>
                                                 <div className="plan-one-item">
                                                     <span className="langUber">English</span>
                                                 </div>
                                                 <div className="plan-one-item">
                                                     <ArrowForwardIos style={{color:"#b3b3b3",fontSize:"9px"}} />
                                                </div>
                                             </div>
                                             <div className="palmOneItem">
                                                <div className="plan-one-item">
                                                    <Facebook style={{color:"#fff",fontSize:"15px"}} />
                                                 </div>
                                                 <div className="plan-one-item">
                                                    <Twitter style={{color:"#fff",fontSize:"15px"}} />
                                                 </div>
                                                 <div className="plan-one-item">
                                                    <LinkedIn style={{color:"#fff",fontSize:"15px"}} />
                                                 </div>
                                                 <div className="plan-one-item">
                                                    <Instagram style={{color:"#fff",fontSize:"15px"}} />
                                                 </div>
                                             </div>
                                          </div>
                                          <div className="layoutFlushpalmTwo">
                                               <div className="palmTwoListItem">
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Visit Uber.com</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Ride</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Drive</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Business Travel</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Delivery</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Food</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Helping Cities</a>
                                                   </div>
                                               </div>

                                               <div className="palmTwoListItem">
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Safety</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Careers</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Uber API</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Newsroom</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Our Story</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Media</a>
                                                   </div>
                                                   <div className="palmTwItm">
                                                       <a href="" className='palmTwLinkIt'>Find a City</a>
                                                   </div>
                                               </div>
                                          </div>
                                      </div>
                                      <div className="likeAHr"></div>
                                      <div className="layoutToDownApp">
                                          <div className="to-down-app">
                                              <div className="to-down-app-ic">
                                                 <Apple style={{color:"white",fontSize:"18px"}} />
                                              </div>
                                              <div className="to-down-app-inf">
                                                  <div><h5 className="down-uber-app-on">Available on the</h5></div>
                                                  <div><h6 className="down-uber-app-from">App Store</h6></div>
                                              </div>
                                          </div>
                                          <div className="to-down-app">
                                              <div className="to-down-app-ic">
                                                 <svg height="14px" width="14px" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 404 404" viewBox="0 0 404 404"><path fill="#f6b94c" d="M21.963,402.378l373.648-186.806c11.185-5.592,11.185-21.553,0-27.145L21.963,1.622    C11.872-3.423,0,3.914,0,15.194l0,373.612C0,400.086,11.872,407.423,21.963,402.378z"/><path fill="#52c1ff" d="M5.068,3.875C2.007,6.593,0,10.559,0,15.194v373.612c0,4.635,2.007,8.601,5.068,11.319L203.193,202    L5.068,3.875z"/><path fill="#67c7a5" d="M276.377,128.816L21.963,1.622C16.018-1.35,9.458-0.022,5.068,3.875L203.193,202L276.377,128.816z"/><path fill="#f56c61" d="M5.068,400.125c4.39,3.897,10.95,5.225,16.895,2.253l254.414-127.195L203.193,202L5.068,400.125z"/></svg>                          
                                              </div>
                                              <div className="to-down-app-inf">
                                                  <div><h5 className="down-uber-app-on">Get it on</h5></div>
                                                  <div><h6 className="down-uber-app-from">Google Play</h6></div>
                                              </div>
                                          </div>
                                          <div className="to-down-app">
                                              <div className="to-down-app-ic">
                                                 <img src={svg["microsoft-store.svg"]} alt="" />
                                              </div>
                                              <div className="to-down-app-inf">
                                                  <div><h5 className="down-uber-app-on">Available on the</h5></div>
                                                  <div><h6 className="down-uber-app-from">App Store</h6></div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="likeAHr"></div>
                                      <div className="uber-comp-term-cond">
                                          <div className="uber-company">
                                              <span className="uber-company-filials">© 2021 Uber B.V.</span>
                                          </div>
                                          <div className="uber-terms-a-cond">
                                              <div>
                                                  <a href="" className="uber-priv-and-terns-cond">Privacy</a>
                                              </div>
                                              <div>
                                                  <a href="" className="uber-priv-and-terns-cond">Terms</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                               </div>
                 </footer>
            </div>
        </div>
    )
}
