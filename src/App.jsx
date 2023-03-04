import { useState } from "react";
import "./App.scss";
import { ArticleSection, Hero, Navbar } from "./components";
import Layout from "./Layout";

function App() {
  return (
    <div className="app">
      <Layout>
        <Navbar />
        <Hero />
        <ArticleSection />
      </Layout>
    </div>
  );
}

export default App;
