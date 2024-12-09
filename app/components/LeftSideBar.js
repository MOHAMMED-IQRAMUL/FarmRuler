import React from "react";
import { ResizableBox } from "react-resizable";
import ContentIcon from "@mui/icons-material/Share";
import DiscussionsIcon from "@mui/icons-material/Forum";
import InquireIcon from "@mui/icons-material/HelpOutline";
import LearningIcon from "@mui/icons-material/School";
import SupportIcon from "@mui/icons-material/SupportAgent";
import SeasonIcon from "@mui/icons-material/CalendarToday";
import ProfilesIcon from "@mui/icons-material/Person";
import WeatherIcon from "@mui/icons-material/WbSunny";
import Aboutus from "@mui/icons-material/Info";
import Contactus from "@mui/icons-material/ContactMail";
import FAQIcon from "@mui/icons-material/QuestionAnswer";
import PrivacyIcon from "@mui/icons-material/PrivacyTip";
import TermsIcon from "@mui/icons-material/Gavel";
import 'react-resizable/css/styles.css';

const LeftSideBar = () => {

  const NavItems = [
    { name: "Content Sharing", url: "/ContentSharing", icon: ContentIcon },
    { name: "Discussions", url: "/Discussions", icon: DiscussionsIcon },
    { name: "Inquire About Crops", url: "/InquireAboutCrops", icon: InquireIcon },
    { name: "Learning And Resources", url: "/LearningAndResources", icon: LearningIcon },
    { name: "Personal AI Support Bot", url: "/PersonalAiSupportBot", icon: SupportIcon },
    { name: "Season Dashboard", url: "/SeasonDashboard", icon: SeasonIcon },
    { name: "User Profiles", url: "/UserProfiles", icon: ProfilesIcon },
    { name: "Weather Dashboard", url: "/WeatherDashboard", icon: WeatherIcon }
  ];
  const NavItemsExt = [
    { name: "About US", url: "/aboutus", icon: Aboutus },
    { name: "Contact US", url: "/contactus", icon: Contactus },
    { name: "FAQ", url: "/faq", icon: FAQIcon },
    { name: "Privacy and Policy", url: "/privacy", icon: PrivacyIcon },
    { name: "Terms and Services", url: "/terms", icon: TermsIcon }
  ];

  return (
    <ResizableBox
      width={300}
      height={Infinity}
      minConstraints={[100, Infinity]}
      maxConstraints={[600, Infinity]}
      axis="x"
      resizeHandles={["e"]}
      className="overflow-auto w-[30%] min-w-[10%] border-r-2 border-gray-200"
    >
      <div className="  pl-5 m-0 left w-full h-full">


      <h1 className="text-2xl text-center py-2 font-semibold ">Menu</h1>

      {/* <ul className="space-y-4">
        {NavItems.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 hover:text-gray-900">
            <item.icon className="w-6 h-6 text-gray-500 hover:text-gray-900" />
            <a href={item.url} className="text-lg font-medium text-gray-500 hover:text-gray-900">
              {item.name}
            </a>
          </li>
        ))}
        <hr className="my-4" />
        {NavItemsExt.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 hover:text-gray-900">
            <item.icon className="w-6 h-6 text-gray-500 hover:text-gray-900" />
            <a href={item.url} className="text-lg font-medium text-gray-500 hover:text-gray-900">
              {item.name}
            </a>
          </li>
        ))}
      </ul> */}

      <h2 className="text-2xl font-bold mb-4">Navigation</h2>
                    <ul>
                        {NavItems.map((item) => (
                            <li key={item.name} className="mb-2">
                                <a href={item.url} className="flex items-center font-light hover:underline">
                                    <item.icon className="h-5 w-5 mr-2" />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-bold mt-8 mb-4">External Links</h2>
                    <ul>
                        {NavItemsExt.map((item) => (
                            <li key={item.name} className="mb-2">
                                <a href={item.url} className="flex items-center hover:underline  font-light">
                                    <item.icon className="h-5 w-5 mr-2" />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
      </div>
    </ResizableBox>
  );
};

export default LeftSideBar;
