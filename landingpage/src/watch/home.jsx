import Landing from "./hero";
import Features from "./feature";
import Product from "./product";
import Table from "./table";
import Reviews from "./review";
// import WatchSlider from './slider'
import Closure from './closer'
import Craftsmanship from './Craftsmanship'
import Compare from './compar'
import Footer from "./footer";
const Home = () => {
  return (
    <>
      <Landing></Landing>
      <Features></Features>
      <Product></Product>
        <Craftsmanship></Craftsmanship>
         <Compare></Compare> 
      <Table></Table>
      <Reviews></Reviews> 
        {/* <WatchSlider></WatchSlider> */}
   <Closure></Closure>
   <Footer/>
   
    </>
  );
};
export default Home;
