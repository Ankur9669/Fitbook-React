import {
  LeftSideBar,
  RightSidebar,
  CenterContent,
  MobileFooter,
  CreatePostModal,
  FloatingButton,
  useState,
  useEffect,
  useAppDispatch,
  loadPosts,
} from "./index";

const Homepage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  return (
    <div className="app-container">
      {isModalOpen && <CreatePostModal setModalOpen={setModalOpen} />}
      <LeftSideBar setModalOpen={setModalOpen} />
      <CenterContent />
      <RightSidebar />
      <MobileFooter />
      <FloatingButton setModalOpen={setModalOpen} />
    </div>
  );
};

export default Homepage;
