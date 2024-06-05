import HeaderComponent from "./components/HeaderComponent";
import BannerComponent from "./components/BannerComponent";
import GalleryComponent from "./components/GalleryComponent";
import FooterComponent from "./components/FooterComponent";

// Main App component
function App() {
  // Page titles and text
  const siteTitle = "BACHAR";
  const homeLabel = "Home";
  const aboutLabel = "About";
  const contactLabel = "Contact";

  const bannerMessage1 = "we are here ,";
  const bannerMessage2 = "cherish the quotes.";

  // Array of quotes
  const quotesList = [
    {
      id: 1,
      quote: "To be or not to be, that is the question.",
      movie: "Hamlet",
      year: 1603,
      img: "https://tse4.mm.bing.net/th?id=OIP._FrbG20TXZbYqlc-19XV2gHaE8&pid=Api&P=0&h=220",
      whoSaidIt: "William Shakespeare",
    },
    {
      id: 2,
      quote: "The only thing we have to fear is fear itself.",
      movie: "Speech",
      year: 1933,
      img: "https://tse4.mm.bing.net/th?id=OIP._FrbG20TXZbYqlc-19XV2gHaE8&pid=Api&P=0&h=220",
      whoSaidIt: "Franklin D. Roosevelt",
    },
    {
      id: 3,
      quote: "That's one small step for man, one giant leap for mankind.",
      movie: "Moon Landing",
      year: 1969,
      img: "https://tse4.mm.bing.net/th?id=OIP._FrbG20TXZbYqlc-19XV2gHaE8&pid=Api&P=0&h=220",
      whoSaidIt: "Neil Armstrong",
    },
    {
      id: 4,
      quote: "In the beginning God created the heavens and the earth.",
      movie: "Bible",
      year: "Unknown",
      img: "https://tse4.mm.bing.net/th?id=OIP._FrbG20TXZbYqlc-19XV2gHaE8&pid=Api&P=0&h=220",
      whoSaidIt: "Genesis 1:1",
    },
  ];

  return (
    <>
      <HeaderComponent 
        siteTitle={siteTitle} 
        homeLabel={homeLabel} 
        aboutLabel={aboutLabel} 
        contactLabel={contactLabel} 
      />
      <BannerComponent 
        message1={bannerMessage1} 
        message2={bannerMessage2} 
      />
      <GalleryComponent quotesList={quotesList} />
      <FooterComponent />
    </>
  );
}

export default App;
