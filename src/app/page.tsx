"use client"

import Image from "next/image";
import WeatherApp from "../../components/WeatherApp";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <WeatherApp />
    <Footer />
    </>
  )
}
