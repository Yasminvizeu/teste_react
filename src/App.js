import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner"
import Container from "./components/Container";

const App = () => {
  return (
   <>
   <Header />
   <Banner />
   <Container> 
    <h1>Hello world!</h1>
    <p>Ola mundo estou aprendedo react js</p>
    </Container>
   <Footer/>
   </>
  );
}

export default App;