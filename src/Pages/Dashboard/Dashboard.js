import ASide from "../../Components/A-Side/A-Side";
import InvoiceList from "../../Components/InvoiceList/InvoiceList";
import InvoiceNav from "../../Components/InvoiceNav/InvoiceNav";
import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";
import {InvoiceProvider} from "../../Context/InvoiceContext";

const Home = () => {
  return (
      <section className="home">
        <ASide/>
        <InvoiceForm/>
        <InvoiceProvider>
          <InvoiceNav/>
          <InvoiceList/>
        </InvoiceProvider>
      </section>
  );
};

export default Home;
