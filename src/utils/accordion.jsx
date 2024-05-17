import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
const data = [
  {
    icon: <HiShieldCheck/>,
    heading: "Cash Remittance",
    detail:
      "MoozaCash we are trusted to deliver money safely. Send money to five different countries with the lowest charges on the continent. Send money and get it delivered today!",
      avater: <RocketLaunchIcon />
  },
  {
    icon: <HiShieldCheck />,
    heading: "Grocery Remittance",
    detail:
      "Get a quotation and send groceries to your family in Zimbabwe. You can also use WhatsApp platform or visit any of our MoozaCash branches and outlets",
      avater: <LocalGroceryStoreIcon/>
    },{
      icon: <HiShieldCheck />,
      heading: "Home Projects",
      detail:
        "MoozaCash Africa will act as agents in managing different projects back home for diasporas. These include managing building projects, tombstone installations etc.",
        avater: <SmartphoneIcon/>
      }
];
export default data;