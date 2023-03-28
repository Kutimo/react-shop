import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen w-full bg-gray-500 flex flex-wrap content-center justify-center gap-8 ">
        {/* Card  1*/}
        <div className="w-80 h-fit bg-stone-100 shadow-lg">
          <img
            className="h-52 w-full aspect-square object-cover object-center"
            src={"https://picsum.photos/200/300?random=3"}
            alt="Lorem image"
          />
          <div className="p-2.5">
            <h3 className="text-3xl font-bold border-b-2 border-gray-400 pb-1">Lorem</h3>
            <p className="p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum error autem praesentium, asperiores
              sequi alias exercitationem fuga? Mollitia adipisci quaerat perferendis aspernatur in amet quas vel
              laboriosam commodi, nesciunt dicta nobis? Amet doloremque nihil fuga obcaecati aspernatur, quod minus?
              Consequatur molestiae.
            </p>
          </div>
        </div>
        {/* Card  2*/}
        <div className="w-80 h-fit bg-stone-100 shadow-lg">
          <img
            className="h-52 w-full aspect-square object-cover object-center"
            src={"https://picsum.photos/200/300?random=2"}
            alt="Lorem image"
          />
          <div className="p-2.5">
            <h3 className="text-3xl font-bold border-b-2 border-gray-400 pb-1">Ipsum</h3>
            <p className="p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum error autem praesentium, asperiores
              sequi alias exercitationem fuga? Mollitia adipisci quaerat perferendis aspernatur in amet quas vel
              laboriosam commodi, nesciunt dicta nobis? Amet doloremque nihil fuga obcaecati aspernatur, quod minus?
              Consequatur molestiae.
            </p>
          </div>
        </div>
        {/* Card  3*/}
        <div className="w-80 h-fit bg-stone-100 shadow-lg">
          <img
            className="h-52 w-full aspect-square object-cover object-center"
            src={"https://picsum.photos/200/300?random=1"}
            alt="Lorem image"
          />
          <div className="p-2.5">
            <h3 className="text-3xl font-bold border-b-2 border-gray-400 pb-1">Dolor</h3>
            <p className="p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum error autem praesentium, asperiores
              sequi alias exercitationem fuga? Mollitia adipisci quaerat perferendis aspernatur in amet quas vel
              laboriosam commodi, nesciunt dicta nobis? Amet doloremque nihil fuga obcaecati aspernatur, quod minus?
              Consequatur molestiae.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
