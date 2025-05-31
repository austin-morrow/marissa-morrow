import Image from "next/image";

const details = [
  {
    description:
      "Contact me to set up a consultation. We can meet virtually or in person for coffee if you’re local to the Denver-Metro area. We’ll discuss what you’re looking for (e.g. type of shoot, who will be involved, location, etc.) and if we’re a good fit.",
    number: "1.",
  },
  {
    description: "Schedule your date using my calendar",
    number: "2.",
  },
  {
    description: "Pay  a 50% deposit to secure your date",
    number: "3.",
  },
  {
    description: "Let’s take your photos! ",
    number: "4.",
  },
  {
    description:
      "Sneak peek of 5-10 photos will be sent to you within 24-48 hours",
    number: "5.",
  },
];

export default function Details() {
  return (
    <div className="overflow-hidden bg-white lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Booking and Timeline
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {details.map((detail) => (
                  <div className="relative pl-9" key={detail.number}>
                    <dt className="absolute left-1 size-5 tet-lime-900x">
                      {detail.number}
                    </dt>
                    <dd className="text-gray-900">
                      {detail.description}
                    </dd>
                  </div>
                ))}
              </dl>

              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline text-gray-900">
                    <dd
                      aria-hidden="true"
                      className="absolute left-1 size-5 text-lime-900"
                    >
                      6.{" "}
                    </dd>
                    Your full gallery will be delivered digitally within 2 to 8
                    weeks*.
                    <dd
                      aria-hidden="true"
                      className="absolute left-1 size-5 text-lime-900"
                    ></dd>
                    <span className="italic">
                      *editing time varies by type of photoshoot.
                    </span>
                  </dt>
                </div>
              </dl>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline text-gray-900">
                    <dd
                      aria-hidden="true"
                      className="absolute left-1 size-5 text-lime-900"
                    >
                      7.{" "}
                    </dd>
                    Payment of your remaining balance upon receipt of your full
                    gallery via an invoice sent to you by Marissa Morrow Photo
                  </dt>
                </div>
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="/images/IMG_3316.jpg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
            Location
          </h2>
          <p className="mt-6">
            The location for your photoshoot will depend on a variety of factors
            including the season, day of the week and time, type of photoshoot,
            and personal preference.
          </p>
          <p className="mt-8">
            My experience with portrait work (families, couples, creatives,
            etc.) mainly involves taking photos outdoors/indoors in natural
            light. This is the kind of light I prefer to work with as it gives a
            more authentic and documentary feel to the photos. If we select a
            location that requires a photography permit or rental fee, that cost
            will be included in your total fee. I do not own my own studio
            lighting equipment and I am still learning this type of photography.
            If you would like to have your photos taken using studio lighting we
            can discuss this option during your consultation.
          </p>
        </div>
      </div>
    </div>
  );
}

// <div className="bg-white px-6 py-32 lg:px-8">

// </div>
