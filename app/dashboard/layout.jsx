import Aside from "@/components/Aside";
import Nav from "@/components/Nav";

function DashboardLayout({ children }) {
  return (
    <>
      <section className="asides max-w-fit min-h-screen lg:pr-8 max-lg:px-3 bg-white">
        <Aside />
      </section>
      <section className="page w-full h-screen ">
        <section className=" w-full">
          <Nav />
        </section>
        <section className="wrapper h-[calc(100vh-108px)] max-lg:w-[calc(100vw_-_82px)] lg:w-[calc(100vw_-_320px)] overflow-y-auto padding-l py-6 pr-8">
          {children}
        </section>
      </section>
    </>
  );
}
export default DashboardLayout;
