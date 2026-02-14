import pdf from "../assets/Diego_Arteaga_Resume_2_13_26.pdf";
import Header from "../Header";
import Footer from "../Footer";

export default function Resume() {
  return (
    <>
      <Header />
      <br />
      <iframe
        src={pdf}
        title="Resume"
        alt="resume"
        width="100%"
        height="1000vh"
      />
      <Footer />
    </>
  );
}
