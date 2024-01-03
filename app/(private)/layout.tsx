'use client';
import { SWRConfig } from "swr";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import fetcherFunction from "../utils/fetcher";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig value={{fetcher: fetcherFunction}}>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SWRConfig>
  );
}
