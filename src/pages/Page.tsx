import type { ComponentType } from "react";
import Footer from "../components/Footer";

type PageContent = {
//   inner: React.JSX.Element;
  inner: ComponentType;
  display?: boolean;
};

export default function Page({ inner: Inner, display = true }: PageContent) {
  return (
    <div className="page">
    <main className="main">
      <span
      //   className="hanko"
        aria-hidden="true"
      >
        {display && <Inner />}
      </span>    
    </main>
      <Footer/>
    </div>
  );
}
