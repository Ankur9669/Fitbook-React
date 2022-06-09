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
  useAppSelector,
  loadPosts,
} from "./index";

const Homepage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPosts());
    console.log(user);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);
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
