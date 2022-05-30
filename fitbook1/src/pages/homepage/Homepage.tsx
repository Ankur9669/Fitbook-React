import MobileFooter from "../../components/mobile-footer/MobileFooter";
import FloatingButton from "./floatingbutton/FloatingButton";
import { LeftSideBar, RightSidebar, CenterContent } from "./index";

const Homepage = () => {
  return (
    <>
      <LeftSideBar />
      <CenterContent />
      <RightSidebar />
      <MobileFooter />
      <FloatingButton />
    </>
  );
};

export default Homepage;
