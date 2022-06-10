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
  useDocumentTitle,
} from "./index";

const Homepage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // TODO remove these
  const { user } = useAppSelector((state) => state.auth);
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);
  useDocumentTitle("FitBook-Home");
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
