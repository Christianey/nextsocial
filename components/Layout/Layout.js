import HeadTags from "./HeadTags";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <HeadTags />
      <Navbar />
      <div className="app-wrapper">{children}</div>
    </>
  );
}

export default Layout;
