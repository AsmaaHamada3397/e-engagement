import { container ,h1 } from "../assets/style";

import moneyFellows from "../assets/sponser/money-fellows-logo.svg";
import fine from "../assets/sponser/fine-logo.svg";
import ccrDevelopments from "../assets/sponser/ccr-developments-logo.svg";
import rology from "../assets/sponser/rology-logo.svg";
import danone from "../assets/sponser/danone-logo-transparent-face.svg";
import estadat from "../assets/sponser/estadat-logo.svg";
import fawry from "../assets/sponser/fawry-logo.svg";
import parkville from "../assets/sponser/parkville-logo.svg";
import nileDevelopments from "../assets/sponser/nile-developments-logo.svg";
import tazkarti from "../assets/sponser/tazkarti-logo.svg";
import wadiGroup from "../assets/sponser/wadi-group-logo.svg";
import redBull from "../assets/sponser/red-bull-logo.svg";
import jumia from "../assets/sponser/jumia-logo.svg";
import schneiderElectric from "../assets/sponser/schneider-electric-logo.svg";
import vodafone from "../assets/sponser/vodafone-logo.svg";
import alumil from "../assets/sponser/alumil-logo.svg";
import seoudi from "../assets/sponser/seoudi-logo.svg";
import connecta from "../assets/sponser/connecta-logo-with-bg.svg";
import magrabi from "../assets/sponser/magrabi-logo.svg";
import zedFc from "../assets/sponser/zed-fc-logo.svg";
import palmHillsSc from "../assets/sponser/palm-hills-sc-logo-with-bg.svg";
import almentorBusiness from "../assets/sponser/almentor-business-logo-with-bg.svg";
import alMaadiClub from "../assets/sponser/al-maadi-club-logo.svg";
import swiftAct from "../assets/sponser/swift-act-logo.svg";
import scibPaints from "../assets/sponser/scib-paints-logo.svg";
import alAhly from "../assets/sponser/al-ahly-logo.svg";
import orange from "../assets/sponser/orange-logo.svg";
import cib from "../assets/sponser/cib-logo.svg";
import nestlePureLife from "../assets/sponser/nestle-pure-life-logo.svg";
import etisalat from "../assets/sponser/etisalat-logo.svg";
import wadiDegla from "../assets/sponser/wadi-degla-logo.svg";
import nissan from "../assets/sponser/nissan-logo.svg";
import cityClub from "../assets/sponser/city-club-logo.svg";
import ischool from "../assets/sponser/ischool-logo.svg";
import we from "../assets/sponser/we-logo.svg";
import saudiGermanHealth from "../assets/sponser/saudi-german-health-logo.svg";
import taager from "../assets/sponser/taager-logo.svg";
export default function KPIs() {
  const partners = [
    { id: 1, name: "Money Fellows", image: moneyFellows },
    { id: 2, name: "Fine", image: fine },
    { id: 3, name: "CCR Developments", image: ccrDevelopments },
    { id: 4, name: "Rology", image: rology },
    { id: 5, name: "Danone", image: danone },
    { id: 6, name: "Estadat", image: estadat },
    { id: 7, name: "Fawry", image: fawry },
    { id: 8, name: "Parkville", image: parkville },
    { id: 9, name: "Nile Developments", image: nileDevelopments },
    { id: 10, name: "Tazkarti", image: tazkarti },
    { id: 11, name: "Wadi Group", image: wadiGroup },
    { id: 12, name: "Red Bull", image: redBull },
    { id: 13, name: "Jumia", image: jumia },
    { id: 14, name: "Schneider Electric", image: schneiderElectric },
    { id: 15, name: "Vodafone", image: vodafone },
    { id: 16, name: "Alumil", image: alumil },
    { id: 17, name: "Seoudi", image: seoudi },
    { id: 18, name: "Connecta", image: connecta },
    { id: 19, name: "Magrabi", image: magrabi },
    { id: 20, name: "ZED FC", image: zedFc },
    { id: 21, name: "Palm Hills SC", image: palmHillsSc },
    { id: 22, name: "almentor Business", image: almentorBusiness },
    { id: 23, name: "Al Maadi Club", image: alMaadiClub },
    { id: 24, name: "Swift Act", image: swiftAct },
    { id: 25, name: "scib Paints", image: scibPaints },
    { id: 26, name: "Al Ahly", image: alAhly },
    { id: 27, name: "Orange", image: orange },
    { id: 28, name: "CIB", image: cib },
    { id: 29, name: "Nestlé Pure Life", image: nestlePureLife },
    { id: 30, name: "Etisalat", image: etisalat },
    { id: 31, name: "Wadi Degla", image: wadiDegla },
    { id: 32, name: "Nissan", image: nissan },
    { id: 33, name: "City Club", image: cityClub },
    { id: 34, name: "iSchool", image: ischool },
    { id: 35, name: "WE", image: we },
    { id: 36, name: "Saudi German Health", image: saudiGermanHealth },
    { id: 37, name: "Taager", image: taager },
  ];


return (
  <div className="bg-warm">

  <div className={`${container} overflow-hidden`}>
   <h1 className={`${h1} pb-16`}>Our Partners of Success</h1>
    <div className="partners-marquee flex items-center gap-8 w-max">
      {[...partners, ...partners].map((partner, index) => (
        <div className="overflow-hidden">

          <img
            key={`${partner.id}-${index}`}
            src={partner.image}
            alt={partner.name}
            className="w-30 md:w-44 h-28 shrink-0 object-contain rounded-2xl"
          />
        </div>
      ))}
    </div>
  </div>
  </div>
);

}
