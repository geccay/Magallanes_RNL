import Navbar from "../../components/Navbar"

interface MainLayoutProps {
content: React.ReactNode;
}

const MainLayout = ({ content }: MainLayoutProps) => {
  return (
    <>
    <div className="cotainer-fluid">
        <Navbar />
        <div>{content}</div>
    </div>
    </>
  );
};

export default MainLayout;