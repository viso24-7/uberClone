import React from 'react'
import {DirectionsCar} from '@mui/icons-material';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import {images} from '../../helpers/reqImgAndSvg'
import useDocumentTitle from '../../helpers/useDocumentTitle'
import './safety.css';

export default function Safety() {
    useDocumentTitle("Safety | Uber")
    return (
        <div className='safety'>
            <Navbar />
            <div className='commForSafety'>
                <div className="commForSafetyCont">
                    <div className="commForSafetyD">
                        <div className="safetyDiv">
                          <div className="commForSafetyDTxt">
                             <div className="commForSafetyDTxtH">
                                 <h2 className='commForSafetyDTxtHead'>Our commitment to safety</h2>
                             </div>
                             <div className="commForSafetyDTxtP">
                                  <p className="commForSafetyDTxtPar">We want you to move freely, make the most of your time, and be connected to the people and places that matter most to you. That’s why we are committed to safety, from the creation of new standards to the development of technology with the aim of reducing incidents.</p> 
                             </div>
                          </div>
                          <div className="commForSafetyDImg">
                                <div className="safImage">
                                    <img src={images["familySaf.jpg"]} alt="" className='safFamilyImg'/>
                                </div>
                          </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='safetyFromCov'>
                <div className="safetyFromCovDiv">
                  <div className="safetyFromCovItems"> 
                    <div className="safetyFromCovItem">
                        <h2 className='safetyFromCovItemH'>Helping to keep each other safe during COVID-19</h2>
                    </div>
                    <div className="safetyFromCovItem">
                        <p className='safetyFromCovItemP'>We’re actively monitoring the coronavirus (COVID-19) situation and are continually working to help keep those who rely on our platform healthy and safe.</p>
                    </div>
                    <div className="safetyFromCovItem">
                        <a className="safetyFromCovItemLink"> Go to Uber’s COVID-19 hub</a>
                        <a className="safetyFromCovItemLink">Read about our new Door-to-Door Safety Standard</a>
                    </div>
                  </div>  
                </div>
            </div>
            <div className="buildYSaf">
                <div className="buildYSafDiv">
                    <div className="buildYSafDivH">
                        <h2 className='buildYSafDivHead'>How safety is built into your experience</h2>
                    </div>
                    <div className="buildYSafDivFeat">
                        <div className="buildYSafFeatItems">
                            <div className="buildYSafFeatItemH">
                                <h3 className="buildYSafFeatItemHead">Safety features in the app</h3>
                            </div>
                            <div className="buildYSafFeatItemP">
                                <p className="buildYSafFeatItemPar">Tap a button for emergency assistance. Share your trip details with loved ones. Our technology helps put peace of mind at your fingertips</p>
                            </div>
                        </div>
                        <div className="buildYSafFeatItems">
                            <div className="buildYSafFeatItemH">
                                <h3 className="buildYSafFeatItemHead">An inclusive community</h3>
                            </div>
                            <div className="buildYSafFeatItemP">
                                <p className="buildYSafFeatItemPar">Millions of riders and drivers share a set of Community Guidelines, holding each other accountable to do the right thing.</p>
                            </div>
                        </div>
                        <div className="buildYSafFeatItems">
                            <div className="buildYSafFeatItemH">
                                <h3 className="buildYSafFeatItemHead">Support at every turn</h3>
                            </div>
                            <div className="buildYSafFeatItemP">
                                <p className="buildYSafFeatItemPar">A specially trained team is available 24/7. Reach them in the app, day or night, with any questions or safety concerns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="driveOrRideSaf">
                <div className="driveOrRideSafDiv">
                    <div className="driveOrRideSafCont">
                       <div className="driveOrRideSafContH">
                           <h2 className='driveOrRideSafContHeader'>Building safer journeys for everyone</h2>
                       </div>
                       <div className='safContDriveOrRide'>
                           <div className="safContDriveOrRideItem">
                              <div className="driverImgD">
                                  <img src={images["driver.jpg"]} alt="" className='driverImg'/>
                              </div>
                              <div className="driverHd">
                                  <h3 className="driverHead">Driver Safety</h3>
                              </div>
                              <div className="driverPd">
                                  <p className="driverParag">Count on 24/7 support and emergency assistance. Share your trip with loved ones. Our focus is on your safety, so you can focus on the opportunity.</p>
                              </div>
                              <div className="driverPLink">
                                  <a href="" className="driverParagLink">Learn more</a>
                              </div>
                           </div>
                           <div className="safContDriveOrRideItem">
                                <div className="driverImgD">
                                    <img src={images["rider.jpg"]} alt=""  className='driverImg' />
                                </div>
                                <div className="driverHd">
                                    <h3 className="driverHead">Rider Safety</h3>
                                </div>
                                <div className="driverPd">
                                    <p className="driverParag">Millions of rides are requested every day. Every rider has access to safety features built into the app. And every ride has a support team if you need them.</p>
                                </div>
                                <div className="driverPLink">
                                    <a href="" className="driverParagLink">Learn more</a>
                                </div>
                          </div>
                       </div>
                    </div>
                </div>
            </div>

            <div className="uberCeo">
                <div className="uberCeoD">
                    <div className="uberCeoPar">
                        <h3 className='uberCeoQuote'>“Every day, our technology puts millions of people together in cars in cities around the world. Helping keep people safe is a huge responsibility and one we do not take lightly.”</h3>
                    </div>
                    <div className="uberCeoN">
                        <span className='uberCeoName'>Dara Khosrowshahi, Uber&nbsp;CEO</span>
                    </div>
                </div>
            </div>

            <div className="uberPartnering">
                <div className="uberPartneringCont">
                    <div className="uberPartneringD">
                        <div className="uberPartneringImgD">
                            <img src={images["partner.jpg"]} alt="" className='partnerImg'/>
                        </div>
                        <div className="uberPartneringInf">
                            <div className="uberPartneringItemH">
                                <h3 className='tomkDiff'>Partnering to make a difference</h3>
                            </div>
                            <div className="uberPartneringItemP">
                                <p className="ourCommit">Our commitment to safety goes beyond your ride. We have teamed up with leading experts—from public safety officials to anti-violence organizations—to help make roads and cities safer for all.</p>
                            </div>
                            <div className="uberPartneringItemL">
                                <a href="" className='goFoMore'>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uberLinksDivTo">
                <div className="uberLinksConTo">
                       <div className="linkToDriverOrRider">
                           <div className="drOrRd">
                                <div className="drOrRdIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <g transform="matrix(100111)">
                                            <path fill-rule="nonzero" clip-rule="nonzero" d="M 11 0 C 4.900000095367432 0 0 4.900000095367432 0 11 C 0 17.100000381469727 4.900000095367432 22 11 22 C 17.100000381469727 22 22 17.100000381469727 22 11 C 22 4.900000095367432 17.100000381469727 0 11 0 Z M 11 3 C 14.899999618530273 3 18.099903106689453 5.800000190734863 18.89990234375 9.5 L 15.800048828125 9.5 C 15.200048446655273 7.5 13.300097465515137 6 11.10009765625 6 C 8.900097846984863 6 6.999902248382568 7.5 6.39990234375 9.5 L 3.300048828125 9.5 C 3.9000487327575684 5.800000190734863 7.099999904632568 3 11 3 Z M 11 13 C 9.899999618530273 13 9 12.100000381469727 9 11 C 9 9.899999618530273 9.899999618530273 9 11 9 C 12.100000381469727 9 13 9.899999618530273 13 11 C 13 12.100000381469727 12.100000381469727 13 11 13 Z M 3.10009765625 12.5 L 6.199951171875 12.5 C 6.699951171875 14 7.89990234375 15.300012588500977 9.39990234375 15.70001220703125 L 9.39990234375 18.79998779296875 C 6.299902439117432 18.199987411499023 3.800097703933716 15.699999809265137 3.10009765625 12.5 Z M 12.5 18.9000244140625 L 12.5 15.79998779296875 C 14 15.29998779296875 15.299951553344727 14.0999755859375 15.699951171875 12.5999755859375 L 18.800048828125 12.5999755859375 C 18.200048446655273 15.699975967407227 15.699999809265137 18.200023651123047 12.5 18.9000244140625 Z" fill="currentColor"/>
                                        </g>
                                    </svg>
                                </div>
                               <div className="drOrRdH">
                                    <h5 className="drOrRdHead">Driver safety</h5>
                               </div>
                               <div className="drOrRdP">
                                 <p className="drOrRdPar">Drive when and where you want with confidence.</p>
                               </div>
                               <div className="drOrRdL">
                                  <a href="" className="drOrRdLink">Learn More</a>
                               </div>
                           </div>

                           <div className="drOrRd">
                                <div className="drOrRdIcon">
                                   <DirectionsCar style={{color:"#000000",fontSize:"20px"}}/>
                                </div>
                               <div className="drOrRdH">
                                    <h5 className="drOrRdHead">Driver safety</h5>
                               </div>
                               <div className="drOrRdP">
                                 <p className="drOrRdPar">Drive when and where you want with confidence.</p>
                               </div>
                               <div className="drOrRdL">
                                  <a href="" className="drOrRdLink">Learn More</a>
                               </div>
                           </div>
                       </div>
                </div>
            </div>
            <div className="aboutSomeFeat">
                <div className="aboutSomeFeatCont">
                    <p className='aboutSomeFetMiss'>*Certain requirements and features vary by region and may be unavailable.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
