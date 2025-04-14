import './bootstrap.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Styles from '../Components/Styles.module.css';
import VectorTop from '../Pics/VectorTop.png';
import Vector2 from '../Pics/Vector 2Top.png';
import BigVector from '../Pics/BigVector.png';
import carpic from '../Pics/carpic.png';
import VectorDown from '../Pics/Vector Down.png';
import ParagraphesBackground from '../Pics/Paragraphesbackground.png';
import FirstPlogo from '../Pics/FirstPlogo.png';
import secondLogo from '../Pics/secndParLogo.png';
import lastImgInrow from '../Pics/lastImgInRow.png';
import backgroundContactMobile from '../Pics/vec14.png'
import ninethImg from '../Pics/9ImgInRow.png';
import seventhImgInrow from '../Pics/7ImgInRow.png';
import sixthImage from '../Pics/6ImgInRow.png';
import eighthImgInrow from '../Pics/8ImgInRow.png';
import BreakLine from '../Pics/breakLine.png';
import FacebookLogo from '../Pics/FacebookLogo.png';
import InstagramLogo from '../Pics/InstagramLogo.png';
import TiktokLogo from '../Pics/tiktokLogo.png';
import vectorj from '../Pics/vectorLogo.png';
import Backgroundj from '../Pics/backgroundJoinUs.png';
import fortyeight from '../Pics/48background.png';
import trianglej from '../Pics/triangle.png'
import carj from '../Pics/smallCar1.png';
import WhiteLinear from '../Pics/whitteLinear.png';
import redLinear from '../Pics/redLine.png';
import formBg from '../Pics/formBg.png'
import phoneLogo from '../Pics/phoneLogo.png';
import mailLogo from '../Pics/mailLogo.png';
import locationLogo from '../Pics/locationLogo.png';
function Prepa(){
   const[LName,setLName]=useState();
    const [FName,setFName]=useState();
    const[phone,setPhone]=useState();
    const[message,setMessage]=useState('');
    return(
     <div >
        <div className="container-fluid">
         
          <div className="row">
            <div className={`col-12 ${Styles.VectorsTop}`}>
              <img src={VectorTop} alt="" className={Styles.VectorsTop} style={{ maxWidth: '100%', height: 'auto',position:'absolute',left:'4rem',top:'2px'}}/> <br /> <br />
              <img src={Vector2} alt="" className={Styles.VectorsTop} style={{maxWidth:'100%' , height:'auto',position:'absolute',left:'4rem'}} />
               <img src={BigVector} className={Styles.BigVector} alt="" style={{maxWidth:'100%', height:'auto', position:'absolute', left:'130px',top:'-5px'}}/> <br />
            </div>

            
          </div>
          <div className={Styles.VectorsDown}>
                <img src={VectorDown} alt="" />
                <img src={VectorDown} alt="" />
                <img src={VectorDown} alt="" />
                <img src={VectorDown} alt="" />
                <img src={VectorDown} alt="" />
                <img src={VectorDown} alt="" />
           </div>
           
          
          
          {/*paragraphes descriptions*/}
          <div className="row">
            
            <div className={`col-12 col-md-6 ${Styles.RepParagraphes}`}>
            <p className={Styles.ReparationP}>Réparation et réglage <br />automobile innovants.</p>
            <p className={Styles.secondLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Donec dolor ante, posuere faucibus elit ut, aliquam.</p>
            <div className={Styles.fstDes}>
            <img src={ParagraphesBackground} alt="" className={Styles.BgParagrapheST}  />
            <img src={FirstPlogo} className={Styles.MecanicLogo}alt="" />
            <p className={Styles.LoremTittleST}> <b> LOREM IPSUM DOLOR </b> </p>
            <p className={Styles.FstPDesciption} >Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Donec dolor ante, posuere.</p>
            </div>
              
            <div className={Styles.SecNdP}>
            <img src={ParagraphesBackground} className={Styles.BgParagrapheND} alt="" />
            <img src={secondLogo} className={Styles.secLogo} alt=""  />
            <p className={Styles.LoremTittleND} > <b> LOREM IPSUM DOLOR </b> </p>
            <p className={Styles.NDPDesciption} >Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Donec dolor ante, posuere.</p>
            </div>
           
            </div>
            <div className="col-1"></div>
            
            <div className="col-3">
                <img src={carpic} className={Styles.BigCarPic} alt="" />
            </div>
          </div>

          <br /> <br /><br />
            {/*imgs row */}
            <div className={Styles.scrollContainer} id='Gallery'>
           <img src={sixthImage} alt="" />
           <img src={seventhImgInrow} alt="" />
           <img src={eighthImgInrow} alt="" />
           <img src={ninethImg} alt="" />
           <img src={lastImgInrow} alt="" />
           <img src={sixthImage} alt="" />
           <img src={seventhImgInrow} alt="" />
           <img src={eighthImgInrow} alt="" />
          <img src={ninethImg} alt="" />
          <img src={lastImgInrow} alt="" />
          </div> <br /> <br /> <br />

          
          
          
        
           <img src={BreakLine} className={Styles.BreakLine} alt=""  />
            {/* social media links */}
            <div className={Styles.SocialMedia}>
           <a href="https://web.facebook.com/?locale=fr_FR&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
             <img src={FacebookLogo} alt="" className={Styles.SocialMediaButtons}/>
           </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={InstagramLogo} alt="" className={Styles.SocialMediaButtons}/>
          </a>
          <a href="https://www.tiktok.com/login?lang=fr&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Dfr" target="_blank" rel="noopener noreferrer">
          <img src={TiktokLogo} alt="" className={Styles.SocialMediaButtons}/>
           </a>
          </div>

        

        </div>
        {/*second layout */}
        <div className="row" id='Contact'>
                           
                             <button  className={Styles.vectorJ}>
                               <img src={vectorj} alt="" />
                             </button>
                           
                           </div>
                           <div className={`row ${Styles.joinComponent}`}>
                            <img src={carj} alt="car" className={Styles.CarToJoinUs} />
                            
                            <img src={Backgroundj} alt="" className={Styles.bgJ} />
                            <img src={trianglej} alt="" className={Styles.triangle}/>
                            <img src={fortyeight} alt=""  className={Styles.fortyeight}/>
                            <div className={`col-5 ${Styles.joinPs}`}>
                               <img src={WhiteLinear} alt="" className={Styles.whiteLinear} /> <br />
                               <p className={Styles.JoinUsP}>POUR NOUS JOINDRE </p>
                               <p className={Styles.DiscoverP}>Découvrez des solutions abordables <br /> pour votre voiture!</p>
                            </div>  {/* Contact Infos*/}
                               <div className={Styles.Contact}>
                                 <p  className={Styles.phone}>
                                  <span><img src={phoneLogo} alt="" /></span>
                                  <span className={Styles.spanSt} >Appeler à tout moment</span> <br />
                                  <span className={Styles.spanCP}>05 36 716 777</span><br />
                                  <span className={Styles.spanCPN} >05 36 716 778</span>
                                 </p>
        
                                 <p className={Styles.mail}>
                                    <img src={mailLogo} alt="" />
                                    <p className={Styles.mailpSt} style={{fontFamily:"Turret road"}} >Envoyer un e-mail</p>
                                    <p  className={Styles.mailpND} style={{fontFamily:"Turret road"}}>contact@auto48.ma</p>
                                 </p>
                                 
                                 <p className={Styles.Location}>
                                    <img src={locationLogo} alt="" />
                                    <p className={Styles.LocationPSt} style={{fontFamily:"Turret road"}} >Visitez-nous</p>
                                    <p className={Styles.LocationPND} style={{fontFamily:"Turret road,sans-serif"}} >Rte d'Algérie lotis boustane 3 N° 191 <br /> Zone industrielle - Oujda</p>
                                 </p>
                               </div>
                            
        
                            <div className="col-1"></div>
                            
                            
                            
                            <div className={`col-5 ${Styles.form}`}>
                              <img src={formBg} className={Styles.formBg} alt=""  />
                              <div className={Styles.FormContent}>
                              <img  className={Styles.RedLine} src={redLinear} alt="" /> <p className={Styles.TalkToUs}>Parlez-nous</p> <br />
                              <input type="text"  placeholder="Nom" value={LName} onChange={(e)=>{setLName(e.target.value)}} style={{color:"black"}} className={Styles.placeholdNom}/> <br />
                              <input type="text"  placeholder="Prénom" value={FName} onChange={(e)=>{setFName(e.target.value)}}/>  <br />
                              <input type="text"  placeholder="Téléphone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />  <br />
                              <textarea name=""  id="" placeholder='Message' value={message}></textarea>
                              <button className={`btn ${Styles.Submit}`}>Envoyé</button>
                              <p className={Styles.RightsReservedPM}>© SOFTCACTUS, Tous les droits <br /> sont réservés, 2025</p>
                              </div>
                              <div className="row">
                                
                                <div className="col-3"></div>
                                <div className="col-3 md-col-6">
                                <p className={Styles.RightsReservedP}>© SOFTCACTUS, Tous les droits sont réservés, 2025</p> 
                               
                                </div>
                                <div className="col-3"></div>
                              </div>
                             
                             
                            </div> 
                           </div>
 </div>   
   )
}
export default Prepa
