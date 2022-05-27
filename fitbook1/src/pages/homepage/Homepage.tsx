import MobileFooter from "../../components/mobile-footer/MobileFooter";
import { LeftSideBar, RightSidebar, CenterContent } from "./index";

const Homepage = () => {
  return (
    <>
      <LeftSideBar />
      <CenterContent />
      <RightSidebar />
      <MobileFooter />
    </>
  );
};

export default Homepage;
