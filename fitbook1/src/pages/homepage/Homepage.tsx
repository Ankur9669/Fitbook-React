import {
  LeftSideBar,
  RightSidebar,
  CenterContent,
  MobileFooter,
  CreatePostModal,
  FloatingButton,
  useState,
  useEffect,
  useAppSelector,
  useAppDispatch,
  loadPosts,
} from "./index";

const Homepage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { posts, loading, error } = useAppSelector((store) => store.posts); // TODO remove it
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
