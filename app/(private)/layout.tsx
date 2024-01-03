"use client";
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
    <SWRConfig value={{ fetcher: fetcherFunction }}>
      <div className="flex flex-col min-h-screen max-w-md m-auto justify-center items-center">
        <Header />
        <Navbar />
        <main className="bg-slate-800 w-full p-5 my-2 rounded-sm">
          {children}
        </main>
        <Footer />
      </div>
    </SWRConfig>
  );
}
