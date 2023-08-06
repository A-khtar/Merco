import "./App.css";
import React from 'react';
import './index.css';


function App() {
  return <CashApp {...CashAppData}/>;
  
}

export default App

function CashApp(props){
  const{
    EyeButton,
    SpanText1,
    SpanText2,
    SpanText3,
    SpanText4,
    SpanText5,
    SpanText6,
    SpanText7,
    SpanText8,
    SpanText9,
    Cashapplogo,
    Layer1,
    SpanText10,
    IntroPhone1,
    SpanText11,
    IntroCube1,
    IntroCubes1,
    // IntroPillar1,
    IntroStairs1,
    Vector1,
    SpanText12,
    Vector2,
    SpanText13,
    Vector3,
    SpanText14,
    Buttons,
  } = props;

  return (
    <div className='container-center-horizontal'>
    <div className='cash-app screen'>
      <div className='hero-section'>
        <div className='overlap-group1'>
          <img className='eye-button' src = {EyeButton} alt = "eye buttton"/>
          <div className='navbar agrandir-extra-extra-bold-white-12px'>
            <div className='navbar-link-sign-in valign-text-middle'>
              <span>
                <span className='agrandir-extra-extra-bold-white-12px'>{SpanText1}</span>
                 </span>
                 </div>
                 <div className='navbar-link-place valign-text-middle'>
                  <span>
                    <span className='agrandir-extra-extra-bold-white-12px'>{SpanText2}</span>
                  </span>
                  </div>
                 <div className='navbar-link-place valign-text-middle'>
                  <span>
                    <span className='agrandir-extra-extra-bold-white-12px'>{SpanText3}</span>
                  </span>
                  </div>
                  <div className='navbar-link-security valign-text-middle'>
                  <span>
                    <span className='agrandir-extra-extra-bold-white-12px'>{SpanText4}</span>
                  </span>
                  </div>
                  <div className='navbar-link-careers valign-text-middle'>
                  <span>
                    <span className='agrandir-extra-extra-bold-white-12px'>{SpanText5}</span>
                  </span>
                  </div>
                  <div className='navbar-link-press valign-text-middle'>
                  <span>
                    <span className='agrandir-extra-extra-bold-white-12px'>{SpanText6}</span>
                  </span>
                  </div>
                  <div className='navbar-link valign-text-middle'>
                  <span>
                  <span className='agrandir-extra-extra-bold-white-12px'>{SpanText7}</span>
                  </span>
                  </div>
                  <div className='navbar-link-status valign-text-middle'>
                  <span>
                    <span className='agrandir-extra-extra-bold-white-12px'>{SpanText8}</span>
                  </span>
                  </div>
                  <div className='navbar-link-codeblog valign-text-middle'>
                  <span>
                    <span className='agrandir-extra-extra-bold-white-12px'>{SpanText9}</span>
                  </span>
                  </div>
                  </div>
                  <img className='cashapp-logo' src ={Cashapplogo} alt = "eye buttton / logo"/>
                  <div className='rays'>
                    <div className='hero'>
                      <div className='overlap-group agrandir-extra-extra-bold-white-193px'>
                        <img className='layer-1' src = {Layer1} alt='Layer 1'/>
                        <h1 className=' name valign-text-middle'>
                        <span>
                            <span className='sagrandir-extra-extra-bold-white-193px'>{SpanText10}</span>
                        </span>
                        </h1>
                        <img className='intro-phone-1' src = {IntroPhone1} alt='intro-phone 1'/>
                        <div className='app valign-text-middle'>
                        <span>
                            <span className='agrandir-extra-extra-bold-white-193px'>{SpanText11}</span>
                        </span>
                        </div>
                        <img className='intro-cube-1' src = {IntroCube1} alt='intro-cube 1'/>
                        <img className='intro-cubes-1' src = {IntroCubes1} alt='intro-cubes 1'/>
                        <img className='intro-pillar-1' src = "./intro-pillar 1.png" alt='i'/>
                        <img className='intro-stairs-1' src = {IntroStairs1} alt='intro-stairs 1'/>
                        </div>
                        </div>
                        </div>
                        <div className='fixed-footer'>
                          <div className='download-icons'>
                            <div className='app-store'>
                              <img className='vector' src = {Vector1} alt= 'Vector'/>
                              <div className='label valign-text-middle agrandir-extra-extra-bold-white-12px'>
                                <span>
                                  <span className='agrandir-extra-extra-bold-white-12px'>{SpanText12}</span>
                                </span>
                              </div>
                            </div>
                            <div className='google-play'>
                              <img className='vector-1' src={Vector2} alt="Vector"/>
                              <div className='label-1 valign-text-middle agrandir-extra-extra-bold-white-12px'>
                                <span>
                                  <span className='agrandir-extra-extra-bold-white-12px'>{SpanText13}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <img className='vector-2' src={Vector3} alt="Vector"/>
                          <p className='brokerage-service-b  mulish-bold-pink-swan-10px'>
                            <span className='mulish-bold-pink-swan-10px'>{SpanText14}</span>
                          </p>
                          <img className='buttons' src = {Buttons} alt = "buttons"/>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        
                        );
                       }
 const CashAppData = {
EyeButton: "eyebutton.png",
SpanText1: "SIGN IN", 
SpanText2: "LEGAL",
SpanText3: "LICENCES",
SpanText4: "SECURITY", 
SpanText5: "CAREERS",
SpanText6: "PRESS",
SpanText7: "SUPPORT",
SpanText8: "STATUS",
SpanText9: "CODEBLOG",
Cashapplogo: "CASHAPPLOGO.png", 
//layer1: "layer-1-1.png",
SpanText10: "CASH", 
IntroPhone1:"intro-phone 1.png",

SpanText11: ( 
<React.Fragment>
<br/>
APP
</React.Fragment>
),
//introCube1: "intro-cube-1-1.png",
// introCubes1: "intro-cubes-1-1.png",
// introPillarl: "intro-pillar-1-1.png", 
// introStairs1: "intro-stairs-1-1.png",
// introStairs1: "intro-stairs-1-1.png",
IntroCube1: "intro-cube 1.png",
IntroCubes1: "intro-cubes 1.png",
// IntroPillarl: "intro-pillar 1.png", 
IntroStairs1: "intro-stairs 1.png",
Layer1: "Layer 1.png",
SpanText12: "APP STORE",
Vector2: "vector-2.png",
SpanText13: "GOOGLE PLAY",
Vector3: "vector-3.png",
Vector1: "vector-1.png", 
SpanText14: (
<React.Fragment><br/>
Brokerage services by Cash App Investing LLC, member FINRA / SIPC.<br/>See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br/> trading offered by Cash App. Cash App Investing does not
 trade bitcoin and <br/> Cash App is not a member of FINRA or SIPC. Cash App facilitates banking <br/> services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
</React.Fragment> ),
Buttons: "buttons.png",
};


