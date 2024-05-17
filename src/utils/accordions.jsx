import { HiShieldCheck } from "react-icons/hi";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
const data = [
  {
    icon: <HiShieldCheck/>,
    heading: "+263 712887872",
    detail:
      "WhatsApp MoozaCash Africa WhatsApp line +263887872. Send hi Mooza and follow the instructions.",
      avater: <WhatsAppIcon />,
      textBtn: "Send now",
      title: 'WhatsApp "Hi" to',
      link: 'https://wa.me/+263712887872'
  },
  {
    icon: <HiShieldCheck />,
    heading: "Mobile App",
    detail:
      "Download Mooza App from Google Play store or iOS App store sign up and send money",
      avater: <SmartphoneIcon/>,
      textBtn: "Download",
      title: 'On Our',
      link: '#'
    },
  {
    icon: <HiShieldCheck />,
    heading: "+263 712887872",
    detail:
      "Speak to Mooza Customer Experience executive. Contact Mooza on +263 712887872",
      avater: <HeadsetMicIcon/>,
      textBtn: "Call us",
      title: 'Call Us',
      link: '#'
    }
];
export default data;