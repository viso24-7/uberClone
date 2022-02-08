import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import {Add,ArrowForward} from '@mui/icons-material';
import {images,svg} from '../../helpers/reqImgAndSvg'
import useDocumentTitle from '../../helpers/useDocumentTitle'
import './ride.css';


export default function Ride() {
    useDocumentTitle('Ride with Uber | Request Riders')

    return (
        <div className="ride">
            <Navbar />
            <div className="signToRide">
                <div className="signToRideDiv">
                    <div className="signToRideCont">
                       <div className="signToRideInf">
                          <div className="">
                              <h1 className="alyWithUber">Always the ride you want</h1>
                          </div>
                          <div>
                              <p className="reqAuberDr">Request a ride, hop in, and&nbsp;relax.</p>
                          </div>
                          <div className='sign-up-to-drive-tg-bt'>
                              <button className='sign-up-to-drive-tog'>Sign up to ride</button>
                          </div>
                       </div>
                       <div className="signToRideImgD"></div>
                    </div>
                </div>
            </div>
            <div className="why-uber-app">
                <div className="why-uber-app-sec">
                    <div className="why-uber-app-div">
                        <div className="why-uber-app-block">
                            <div>
                                <h2 className='why-uber-app-txt'>Why use the Uber app?</h2>
                            </div>
                            <div className="whyRideWith-us">
                                <div className='whyRideWith-us-img'>
                                    <img src={svg["rideWithUs.svg"]} alt="" />
                                </div>
                            </div>
                            <div className="easy-to-go-around-div">
                                <div className="easy-to-go-around-it">
                                    <div className="easy-to-go-around-it-ic">
                                       <img src={svg["anytime.svg"]} alt="" />
                                    </div> 
                                    <div className="easy-to-go-around-it-h">
                                       <h3 className="easy-to-go-around-it-head">Rides on demand</h3>
                                    </div>
                                    <div className="easy-to-go-around-it-p">
                                        <p className="easy-to-go-around-it-par">Request a ride at any time and on any day of the year.</p>
                                    </div>      
                                </div>
                                <div className="easy-to-go-around-it">
                                    <div className="easy-to-go-around-it-ic">
                                         <img src={svg["money.svg"]} alt="" />
                                    </div> 
                                    <div className="easy-to-go-around-it-h">
                                       <h3 className="easy-to-go-around-it-head">Budget-friendly options</h3>
                                    </div>
                                    <div className="easy-to-go-around-it-p">
                                        <p className="easy-to-go-around-it-par">Compare prices on every kind of ride, from daily commutes to special evenings out.</p>
                                    </div>      
                                </div>

                                <div className="easy-to-go-around-it">
                                    <div className="easy-to-go-around-it-ic">
                                        <img src={svg["map.svg"]} alt="" />
                                    </div> 
                                    <div className="easy-to-go-around-it-h">
                                       <h3 className="easy-to-go-around-it-head">An easy way to get around</h3>
                                    </div>
                                    <div className="easy-to-go-around-it-p">
                                        <p className="easy-to-go-around-it-par">Tap and let your driver take you where you want to go.</p>
                                    </div>      
                                </div>
                            </div>
                            <div className="how-riding-works">
                                <div className="how-riding-works-div">
                                    <a href="" className='how-riding-works-txt'>How riding works</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="your-saf-val">
                <div className="your-saf-val-cont">
                    <div className="your-saf-val-container">
                        <div className="your-saf-val-cont-items-h">
                            <div className='your-saf-val-cont-item-head'>
                                <h2 className='saf-val-itemhead'>Your safety matters</h2>
                            </div>
                            <div className='your-saf-val-cont-item-head'>
                                <p className='saf-val-item--p-txt'>Peace of mind is designed into your experience.</p>
                            </div>
                        </div>
                        <div className="your-saf-val-cont-items-c">
                            <div className="your-saf-val-cont-item-cent">
                                <div className='saf-val-item-div-img'>
                                    <img src={svg["safety.svg"]} alt="" />
                                </div>
                                <div className='saf-val-item-div-txt'>
                                    <div className='saf-val-item-div-h-txt'>
                                        <h3 className='valitem-div-h-text'>Safety features</h3>
                                    </div>
                                    <div className='saf-val-item-div-p-txt'>
                                        <p className='val-item--p-txt'>Tell your loved ones where you are. Get help with the tap of a button. Technology makes travel safer than ever before.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="your-saf-val-cont-item-cent">
                                <div className='saf-val-item-div-img'>
                                    <img src={svg["community.svg"]} alt="" />
                                </div>
                                <div className='saf-val-item-div-txt'>
                                    <div className='saf-val-item-div-h-txt'>
                                        <h3 className='valitem-div-h-text'>An inclusive community</h3>
                                    </div>
                                    <div className='saf-val-item-div-p-txt'>
                                        <p className='val-item--p-txt'>We are millions of riders and drivers who share Community Guidelines and depend on one another to do the right thing.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="your-saf-val-cont-item-cent">
                                <div className='saf-val-item-div-img'>
                                    <img src={svg["support.svg"]} alt="" />
                                </div>
                                <div className='saf-val-item-div-txt'>
                                    <div className='saf-val-item-div-h-txt'>
                                        <h3 className='valitem-div-h-text'>Help if you need it</h3>
                                    </div>
                                    <div className='saf-val-item-div-p-txt'>
                                        <p className='val-item--p-txt'>Get 24/7 support in the app for any questions or safety concerns you might have.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="your-saf-val-cont-items-b">
                            <div className='bott-saf-val-l'>
                                <a href="" className='bott-saf-val-link'>Learn more about safety</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ride-uber-cars">
                <div className="ride-uber-cars-sec">
                    <div className="ride-uber-cars-sec-1">
                        <div className="ride-cars-div-h">
                            <div><h2 className='in-area-of-us'>Ways to ride in the area</h2></div>
                        </div>
                        <div className="ride-cars-div-c">
                            <div className="ride-cars-div-center">
                                <button className='class-of-travel'>Economy</button>
                                <button className='class-of-travel'>Premium</button>
                                <button className='class-of-travel'>More</button>
                            </div>
                            <div className="new-uber-cars">
                                <ul className='new-uber-cars-items'>
                                   <li className='new-uber-cars-item'>
                                        <div className='new-uber-carimg'>
                                            <img src={images["uberc1.jpg"]} alt="" className='uberX-img'/>
                                        </div>
                                        <div className='inf-ab-ubercars'>
                                           <div className='type-of-ubercars'>
                                            <div className='uberX-car'><h3 className='uberX-car-inf'>UberX</h3></div>
                                            <div><span className='uberX-1-of-3'>1-3</span></div>
                                           </div>
                                           <div className='more-inf-ab-type'>
                                               <p className='affordable'>Affordable rides, all to yourself</p>
                                           </div> 
                                        </div>
                                    </li>
                                    <li className='new-uber-cars-item'>
                                        <div className='new-uber-carimg'>
                                            <img src={images["uberc2.jpg"]} alt="" className='uberX-img'/>
                                        </div>
                                        <div className='inf-ab-ubercars'>
                                           <div className='type-of-ubercars'>
                                             <div className='uberX-car'><h3 className='uberX-car-inf'>UberX</h3></div>
                                             <div><span className='uberX-1-of-3'>1-6</span></div>
                                           </div>
                                           <div className='more-inf-ab-type'>
                                               <p className='affordable'>Affordable rides for groups up to 5</p>
                                           </div> 
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="see-cities-with-uber">
                                <a href="" className='link-to-all-cities'>See all cities</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="everywhere-can-find-us">
                <div className="everywhere-can-find-us-sec">
                    <div className="can-find-us-iycity">
                        <div className='can-find-us-iycity-h'>
                            <h1 className='can-find-us-iycity-hTxt'>Everywhere that you travel</h1>
                        </div>
                        <div className="find-city-name-and-airport">
                            <div className="find-city-name">
                                <div className="find-city-name-top">
                                    <img src={images["city.jpg"]} alt="" className='cityorairportImg'/>
                                </div>
                                <div className="find-city-name-bott">
                                      <div className='numberofcities'>
                                          <h3 className='nm-of-cities-am'>10,000+ cities</h3>
                                      </div>
                                      <div className='avai-on-all-cit'>
                                          <p className='avai-on-all-cities'>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                                      </div>
                                      <div className='search-city'>
                                          <a href="" className='search-city-link'>Search cities</a>
                                      </div>
                                </div>
                            </div>
                            <div className="find-city-airport">
                               <div className="find-city-name-top">
                                    <img src={images["airport.jpg"]} alt="" className='cityorairportImg'/>
                                </div>
                                <div className="find-airport-name-bott">
                                      <div className='numberofairports'>
                                          <h3 className='nm-of-air-am'>600+ airports</h3>
                                      </div>
                                      <div className='avai-on-all-air'>
                                          <p className='avai-on-all-airports'>You can get a ride to and from most major airports. Schedule a ride to the airport for one less thing to worry about.</p>
                                      </div>
                                      <div className='search-airport'>
                                          <a href="" className='search-airport-link'>Search airport</a>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ways-people-find-us">
                <div className="ways-people-find-us-sec">
                    <div className="ways-people-find-us-section">
                        <div className='uber-woman-app-img'>
                            <img src={svg["uberApp.svg"]} alt="" />
                        </div>
                        <div className='uber-woman-app-inf'>
                           <div className='app-inf-h'>
                               <h2 className='app-inf-h-txt'>Ways people move around the world</h2>
                           </div>
                           <div>
                               <p className='app-inf-p-inf'>The Uber app gives you the power to get where you want to go with access to different types of rides across more than 10,000 cities.</p>
                           </div>
                           <div className='app-inf-butt'>
                               <button className='app-inf-button'>View ride options</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="question-sec">
                <div className="question-section">
                    <div className='freq-quests-cl'>
                        <h2 className='freq-quests'>Frequently asked questions</h2>
                    </div>
                    <div className='question-section-links'>
                        <ul className='question-section-links-itms'>
                            <li className='question-section-links-itms'>
                                <a href="" className='question-section-link-item'>
                                    <div className='qusec-item'><span className='qusec-item-txt'>How do I create an account?</span></div>
                                    <div className='qusec-item'><Add style={{color:"#000",fontSize:"13px"}}/></div>
                                </a>
                            </li>
                            <li className='question-section-links-itms'>
                                <a href="" className='question-section-link-item'>
                                    <div className='qusec-item'><span className='qusec-item-txt'>Is Uber available in my city?</span></div>
                                    <div className='qusec-item'><Add style={{color:"#000",fontSize:"13px"}}/></div>
                                </a>
                            </li>
                            <li className='question-section-links-itms'>
                                <a href="" className='question-section-link-item'>
                                    <div className='qusec-item'><span className='qusec-item-txt'>How do I request a ride?</span></div>
                                    <div className='qusec-item'><Add style={{color:"#000",fontSize:"13px"}}/></div>
                                </a>
                            </li>
                            <li className='question-section-links-itms'>
                                <a href="" className='question-section-link-item'>
                                    <div className='qusec-item'><span className='qusec-item-txt'>Can I use Uber without a smartphone?</span></div>
                                    <div className='qusec-item'><Add style={{color:"#000",fontSize:"13px"}}/></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="more-in-our-app">
                <div className="more-in-our-app-sec">
                    <div className='more-ab-app-sec-it-h'>
                        <h2 className='more-ab-app-sec-it-head'>Do more in the app</h2>
                    </div>
                    <div className='more-ab-app-sec-it'>
                        <a className='wh-ab-app-sec-it'>
                            <div className='wh-ab-app-sec-it-bbg'>
                                <span>Uber</span>
                            </div>
                            <div className='wh-ab-app-sec-it-txt'>
                                <h3 className='wh-ab-app-sec-it-down'>Download the app</h3>
                            </div>
                            <div className='wh-ab-app-sec-it-ic'>
                                <ArrowForward style={{color:"#000",fontSize:"16px"}}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="go-signup-to">
                <div className="go-signup-to-sec">
                    <a href="" className="go-signup-to-sec-it">
                       <div className="go-signup-to-sec-item"><h2 className='go-signup-to-sec-item-txt'>Sign up to ride</h2></div>
                       <div className="go-signup-to-sec-item"><ArrowForward style={{color:"#000",fontSize:"22px"}}/></div>
                    </a>
                </div>
            </div>
            <div className="feat-by-count-reg-city">
                <div className="feat-by-count-reg-city-sec">
                       <span className='feat-by-count-reg-city-sec-txt'>Certain requirements and features vary by country, region, and city.</span>
                </div>
            </div>
            <Footer />
        </div>
    )
}
