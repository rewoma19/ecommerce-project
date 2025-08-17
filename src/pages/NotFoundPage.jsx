import Header from "../components/Header";
import "../styles/Header.css";
import "../styles/NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <Header />
      <div className="not-found-textbox">
        <p className="not-found-text">Page Not Found!</p>
      </div>
    </div>
  );
}

export default NotFoundPage;
