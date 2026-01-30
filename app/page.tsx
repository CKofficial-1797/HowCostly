import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1508615121316-fe792af62a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 md:px-20 py-24 relative z-10 text-white">
          <div className="flex max-xl:flex-col gap-16 items-center">
            <div className="text-center">
              <p className="small-text flex items-center justify-center mb-4">
                Smart Shopping Starts Here
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </p>

              <h1 className="head-text text-6xl font-extrabold mb-6">
                Get the best price every time with{" "}
                <span className="text-primary">PriceTrack</span>
              </h1>

              <p className="text-xl mb-8">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more.
              </p>

              <Searchbar />
            </div>

            <HeroCarousel />
          </div>
        </div>
      </section>

      <section className="about-us-section bg-gray-200 px-6 md:px-20 py-24 text-black rounded-xl shadow-lg">
        <div className="container mx-auto">
          <h2 className="section-heading text-5xl text-center text-gray-800 mb-6 font-bold">
            Welcome to <span className="text-black">Price</span>
            <span className="text-primary">Track</span>
          </h2>

          <div className="about-us-content max-w-3xl mx-auto text-lg leading-relaxed">
            <p>
              Your go-to{" "}
              <span className="text-red-800 font-bold">ecommerce</span> tool
              for monitoring price changes on your favorite products. PriceTrack
              allows users to effortlessly{" "}
              <span className="text-red-800 font-bold">track</span> price
              variations by simply inputting the product link. Stay updated
              with real-time price alerts via{" "}
              <span className="text-red-800 font-bold">email</span> whenever
              there's a change on the tracked sites.
            </p>
          </div>

          <div className="more-info text-center mt-12">
            <p className="text-3xl font-bold text-red-800">
              Discover More with <span className="text-black">Price</span>
              <span className="text-primary">Track</span>
            </p>
            <p className="text-lg mt-4">
              Explore the power of real-time price tracking and start saving on
              your purchases today.
            </p>
          </div>
        </div>
      </section>

      <section className="trending-section py-24 px-6 md:px-20">
        <div className="container mx-auto">
          <h2 className="section-text text-4xl font-bold text-center mb-12 text-gray-800">
            WHAT'S TRENDING?
          </h2>

          <div className="flex flex-wrap gap-x-8 gap-y-16 justify-center">
            {allProducts?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-700">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PriceTrack. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
