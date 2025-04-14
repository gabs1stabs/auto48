import redVtop from '../Pics/comingSoon/greyVector.png';
import redVTop from '../Pics/comingSoon/revector.png';
import Styles from '../Components/ComingsoonStyles.module.css' ;
import bg from '../Pics/comingSoon/backgound.png'
import phoneIcon from '../Pics/comingSoon/phoneIcon.png';
import mailIcon from '../Pics/comingSoon/mailIcon.png'
import companyLogo from '../Pics/comingSoon/Logo.png';
import fcLogo from '../Pics/comingSoon/fclogo.png';
import redV from '../Pics/comingSoon/redV.png';
import pBg from '../Pics/comingSoon/prBg.png';
import locationIcon from "../Pics/comingSoon/locationIcon.png"
import instaLogo from '../Pics/comingSoon/instalogo.png';
import tiktok from '../Pics/comingSoon/Component 7.png'
import bgMedia from '../Pics/comingSoon/bgSocialMedias.png';
import FrstBgLocation from '../Pics/comingSoon/bgLocation.png';
import NdBgLocation from '../Pics/comingSoon/NdBgLocayion.png';
import LocationIcon from '../Pics/comingSoon/locationLogo.png';
import contactMedia from '../Pics/comingSoon/contactBg.png'
export default function ComingSoon(){
    return(
        <div className={Styles.container}>
           <img src={bg} alt="" className={Styles.bg} />
           <img src={pBg} className={Styles.pbg} alt="" />
           <img src={companyLogo} className={Styles.CompanyLogo} alt="" />
           {/*contact infos */}
           <div className={Styles.contact}>
                <div className={Styles.fc}>
                    <img src={bgMedia}  alt="" />
                   <a href="https://web.facebook.com/" target='blank'><img src={fcLogo} className={Styles.bgFc} alt="" /></a> 
                 </div>
                 <div>
                    <img src={bgMedia} alt="" />
                    <a href="https://www.instagram.com/" target='blank'><img src={instaLogo} className={Styles.bgFc} alt="" /></a>
                 </div>
                 <div >
                    <img src={bgMedia} alt="" className={Styles.tiktok}/>
                    <a href="https://www.tiktok.com/?lang=fr" target='blank'> <img src={tiktok} className={Styles.bgtiktok} alt="tiktok" /> </a>
                 </div>
            </div>
            
               <div>
                <img src={redV} className={Styles.redV} alt="" />
                <p className={Styles.comingP}>
                    Coming soon
                </p>
                <p className={Styles.DescP}>
                Votre atelier de confiance pour la mécanique générale, l'électricité <br /> auto, la tôlerie-peinture et le pneumatique.
                </p>
                
                {/*contact row*/}
                <img src={contactMedia} alt="" className={Styles.ContactLine} />
                <div className={Styles.contactUs}>
                    {/*phone1 */}
                    <img src={phoneIcon} alt="" /> 
                    <p  className={Styles.contactUsP}>05 36 716 777  </p>
                       {/*phone2 */}
                    <img src={phoneIcon} alt="" />
                    <p className={Styles.contactUsP}> 05 36 716 778</p>
                          {/*mail */}
                    <img src={mailIcon} alt="" />
                    <p className={Styles.contactUsP}>  contact@auto48.ma </p>
                </div>
                 {/*location */}
                 <div className={Styles.LocationInfos}>
                    <img src={FrstBgLocation} alt="" />
                    <img src={NdBgLocation} alt="" className={Styles.LocationInfosNd}/>
                    <div className={Styles.LocationInfoo}>
                     <img src={locationIcon} style={{width:"16px",height:"25px"}} alt="" />
                     <p className={Styles.LocationInfoP}>Rte d'Algérie lotis boustane 3 N° 191 Zone industrielle - Oujda</p>
                    </div>
                 </div>
                 <p className={Styles.ReservedRights}>Tous les droits sont réservés pour soft cactus 2025
                 </p>
               </div>
           
        </div>
    )
}