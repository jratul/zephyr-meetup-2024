const speakerData = [
  {
    name: "Steven McHail",
    job: "Designer at Globex Corporation",
    image: "images/speakers/member1.avif",
  },
  {
    name: "Jaquelin Isch",
    job: "UX Design at InGen",
    image: "images/speakers/member2.avif",
  },
  {
    name: "Dianne Guilianelli",
    job: "General Manager at Initech",
    image: "images/speakers/member3.avif",
  },
  {
    name: "Ronni Cantadore",
    job: "Design Engineer at Weyland-Yutani",
    image: "images/speakers/member4.avif",
  },
  {
    name: "Erhart Cockrin",
    job: "Product Lead at Cyberdyne Systems",
    image: "images/speakers/member5.avif",
  },
  {
    name: "Parker Johnson",
    job: "UI Designer at MomCorp",
    image: "images/speakers/member6.avif",
  },
];

export default function Speaker() {
  return (
    <div className="p-10">
      <div className="mx-auto text-center">
        <p className="mt-2 text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
          Speaker
        </p>
        <p className="mt-3 mb-8 text-lg text-white">
          <span className="text-orange-500 font-semibold">Zephyrian</span>이
          여러분을 이끌 것입니다.
        </p>
      </div>
      <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
        {speakerData.map((speaker) => (
          <div className="col-span-1" key={speaker.name}>
            <div className="w-1/2 rounded-full m-auto overflow-hidden">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="transition duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div className="text-center">
              <p className="text-orange-500 font-semibold text-2xl">
                {speaker.name}
              </p>
              <p>{speaker.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
