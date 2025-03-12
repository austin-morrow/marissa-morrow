import { SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const tiers = [
  {
    description:
      "Creative Portraits (Individuals, bands, artists, etc.), Families, Couples (engagements, portraits, proposals, etc.): $300-500*",
    price:
      "*If required, studio rental cost or photography permit is typically an additional $100-200.",
    features: [
      "30 min consultation",
      "1-hour photoshoot",
      "Editing",
      "Digitak gallery of 50+ images",
      "Delivery within 2-4 weeks",
    ],
  },
  {
    description:
      "Elopements & Small-Weddings (less than 100 guests): $700-3,600*",
    price:
      "*Travel costs for elopements/weddings outside of the Denver Metro area or out-of-state will be added the total cost accordingly.",
    features: [
      "1-hour consultation",
      "4-12 hours of coverage",
      "Editing",
      "Film photos with physical and digital delivery (optional)",
      "Digital gallery of 400+ images",
      "Delivery within 4-8 weeks",
    ],
  },
  {
    description: "Concerts: $150-200*",
    price:
      "*If you’re a small local band or artist who needs some flexibility in pricing, let me know when you fill out the contact form!",
    features: [
      "1-hour set",
      "Sneak Peek sent within 48 hours",
      "Editing",
      "Digital gallery of 50+ images",
      "Delivery within 2-4 weeks",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <figure className="mt-16 flex justify-center">
          <Image
            alt=""
            src="/images/IMG_0122.jpg"
            width={983}
            height={655}
            className="aspect-video rounded-lg bg-gray-50 object-cover mx-auto"
            style={{ maxWidth: "983px", width: "100%", height: "auto" }}
          />
        </figure>
        <div className="bg-white px-6 pt-12 sm:pt-10 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base/7 font-semibold text-lime-900">
            Accessible Solutions
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Pricing
            </h2>
          </div>
        </div>
        <div className="mt-16 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3
                  id={tier.id}
                  className="text-base/7 font-semibold text-gray-900"
                >
                  {tier.description}
                </h3>
                <p className="italic mt-3 text-sm/6 text-gray-500">
                  {tier.price}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm/6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <SparklesIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-lime-900"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
            Discounted Rates
          </h2>
          <p className="italic mt-6">
            To make my photography as accessible as possible, I offer up to $100
            off for BIPOC+ and LGBTQIA+ clients, along with sliding scale
            options for single parents, low-income families, and survivors of
            domestic violence. I’m passionate about supporting these communities
            specifically because of my personal background and my belief that
            every person deserves to have their memories captured by a
            professional photographer regardless of how much they can pay. If
            you relate to any of these experiences or identities and a
            discounted rate would help, please let me know on your contact form,
            and we’ll find a way to make it work.
          </p>
        </div>
      </div>
    </div>
  );
}
