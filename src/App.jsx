import Header from "./components/Header";
import Hero from "./sections/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";
import Programs from "./sections/Programs";
import AgeandTimes from "./sections/AgeandTimes";
import Facilities from "./sections/Facilities";
import EnrollmentForm from "./sections/EnrollmentForm";
import EnrollToday from "./sections/EnrollToday";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        <section id="programs">
          <Programs />
        </section>

        <section id="AgeandTimes">
          <AgeandTimes />
        </section>

        <section id="facilities">
          <Facilities />
        </section>

        <section id="themes">
          <Themes />
        </section>

        <section id="enrollment">
          <EnrollmentForm />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
