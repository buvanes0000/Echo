import React from "react";
import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Service,
  SpecialOffer,
  Subscription,
  SuperQuality,
} from "./sections";
import { Navbar } from "./components";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="padding-b xl:padding-l wide:padding-r">
        <Hero />{" "}
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Service />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue ">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscription />
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
