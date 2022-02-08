import React from 'react'
import {Facebook,Twitter,YouTube,LinkedIn,Instagram,Language,LocationOn,Apple} from '@mui/icons-material';
import './footer.css'

export default function Footer() {
    return (
        <div className='uberFooter'>
        <footer className='uberFooterDiv'>
            <div className="uberFooterCont">
                <div className="uberFooterH">
                    <div className='uberFhead'>
                         <a className="uberFheadText">Uber</a>
                    </div>
                    <div className='uberHelpCenter'>
                         <a className="uberHelpCenterTxt">Visit Help Center</a>
                    </div>
                </div>
                <div className='uberProducts'>
                      <div className="uberProductsItems">
                          <div className="uberProductListItem">
                              <div className="uberProdItem">
                                  <h1 className='uberProdItemHeader'>Company</h1>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">About us</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Our offerings</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Newsroom</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Investors</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Blog</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Careers</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Al</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Gift cards</a>
                              </div>
                          </div>

                          <div className="uberProductListItem">
                              <div className="uberProdItem">
                                  <h1 className='uberProdItemHeader'>Producs</h1>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Ride</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Drive</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Deliver</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Eat</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Uber for business</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Uber Freight</a>
                              </div>
                          </div>

                          <div className="uberProductListItem">
                              <div className="uberProdItem">
                                  <h1 className='uberProdItemHeader'>Global Citizenship</h1>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Safety</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Diversity and Inclusion</a>
                              </div>
                          </div>

                          <div className="uberProductListItem">
                              <div className="uberProdItem">
                                  <h1 className='uberProdItemHeader'>Travel</h1>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Airports</a>
                              </div>
                              <div className="uberProdItem">
                                  <a href="" className="uberProdItemL">Cities</a>
                              </div>
                          </div>
                          
                      </div>
                </div>
                <div className='uberSocialMedia'>
                    <div className="uberSocialMediaCont">
                        <div className="uberSocialMediaIcons">
                             <div className="uberSocialMediaIcon">
                                  <Facebook style={{color:"white",fontSize:"14px"}} /> 
                             </div>
                             <div className="uberSocialMediaIcon">
                                  <Twitter style={{color:"white",fontSize:"14px"}} /> 
                             </div>
                             <div className="uberSocialMediaIcon">
                                  <YouTube style={{color:"white",fontSize:"14px"}} /> 
                             </div>
                             <div className="uberSocialMediaIcon">
                                  <LinkedIn style={{color:"white",fontSize:"14px"}} /> 
                             </div>
                             <div className="uberSocialMediaIcon">
                                  <Instagram style={{color:"white",fontSize:"14px"}} /> 
                             </div>
                        </div>
                        <div className="uberSocialMediaLocation">
                              <button className="uberLocationD">
                                 <Language style={{color:"white",fontSize:"14px"}} />
                                 <span className='locatText'>English</span>
                              </button>
                              <button className="uberLocationD">
                                <LocationOn style={{color:"white",fontSize:"14px"}} />
                                <span className='locatText'>San Francisco</span>
                             </button>
                        </div>
                        <div className="uberSocialMediaDownloadWith">
                              <div className="mediaDownWith">
                                 <a href="" className='mediaDownWithL'>
                                     <div className="downlMediaLogo">
                                         <svg height="14px" width="14px" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 404 404" viewBox="0 0 404 404"><path fill="#f6b94c" d="M21.963,402.378l373.648-186.806c11.185-5.592,11.185-21.553,0-27.145L21.963,1.622    C11.872-3.423,0,3.914,0,15.194l0,373.612C0,400.086,11.872,407.423,21.963,402.378z"/><path fill="#52c1ff" d="M5.068,3.875C2.007,6.593,0,10.559,0,15.194v373.612c0,4.635,2.007,8.601,5.068,11.319L203.193,202    L5.068,3.875z"/><path fill="#67c7a5" d="M276.377,128.816L21.963,1.622C16.018-1.35,9.458-0.022,5.068,3.875L203.193,202L276.377,128.816z"/><path fill="#f56c61" d="M5.068,400.125c4.39,3.897,10.95,5.225,16.895,2.253l254.414-127.195L203.193,202L5.068,400.125z"/></svg>
                                     </div>
                                     <div className="downlMediaTXT">
                                         <h5>GET IT ON</h5>
                                         <h6>Google Play</h6>
                                     </div>
                                 </a>
                              </div>
                              <div className="mediaDownWith">
                                <a href="" className='mediaDownWithL'>
                                    <div className="downlMediaLogo">
                                           <Apple style={{color:"white",fontSize:"14px"}} />
                                    </div>
                                    <div className="downlMediaTXT">
                                         <h5>Download on the</h5>
                                         <h6>Play Store</h6>
                                     </div>
                                </a>
                              </div>
                        </div>
                    </div>
                </div>
                <div className='uberSecurity'>
                       <div className="uberSecDiv">
                           <div className="uberSecDivItms">
                                <p className="uberTechnoText"><span>© 2021&nbsp;</span>Uber Technologies Inc.</p>
                           </div>
                           <div className="uberSecDivItms">
                               <div className="uberSecPolTerAcc">
                                   <a href="" className="uberSecPolTerAccL">Policy</a>
                               </div>
                               <div className="uberSecPolTerAcc">
                                   <a href=""  className="uberSecPolTerAccL">Accessbility</a>
                               </div>
                               <div className="uberSecPolTerAcc">
                                   <a href=""  className="uberSecPolTerAccL">Terms</a>
                               </div>
                          </div>
                       </div>
                </div>
            </div>
        </footer>
    </div>
    )
}
