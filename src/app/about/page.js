import Image from "next/legacy/image";
import AboutImg from "../../../public/images/about.png";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:mt-36">
      <div className="mt-6 space-y-7 text-base text-zinc-600 mb-12 text-center
">
        <p>
          Photography has been my muse since I was eight, starting with
          overexposed photos from a Barbie film camera in Yellowstone. Over the
          years, it has become a tool for my own healing and personal growth.
          For nearly a decade, I've used photography to capture human
          experiences, tell stories, and connect with the beauty of this world.
        </p>
        <p>
          I specialize in mindful, documentary-style photography, aiming to
          create tangible memories that reflect my clients' emotions and
          humanity. My process centers on collaboration, helping clients engage
          in authentic self-expression and preserve beautifully vulnerable
          moments in their lives.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-[16rem] px-2.5 text-center lg:max-w-[28rem]">
            <Image
              src={AboutImg}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-[2/3] rounded-lg bg-zinc-100 object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Who am I?
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600">
            <p>
              I’m a Colorado-grown art lover, cat mom, advocate, poet, vinyl DJ,
              Nuggets fan, and community arts administrator. While photography
              isn’t my full-time gig, I’m deeply involved in Denver’s art scene.
              When I'm not taking photos, you'll find me at concerts, organizing
              meetups for marginalized creatives, reading, or binge-watching
              true crime, 90 Day Fiancé, and Lord of the Rings (extended edition
              only, duh.).
            </p>
            <p>
              My work has been featured in The Collab. Year 1 magazine, and I’ve
              shot everything from street photography and creative portraits to
              proposals, elopements, weddings, and concerts.
            </p>
            <p>
              I’m committed to making my photography accessible, especially for
              those who identify as BIPOC+ and/or LGBTQIA+, single parents, and
              domestic violence survivors. Photography should capture the entire
              human experience. I strive to be an accessible resource for my
              community.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-7 text-base text-zinc-600 mb-12 text-center italic">
        <p>
          *BIPOC+ includes but is not limited to: African, Indigenous, Native,
          Latinx, Asian, Pacific Islander, Arab and Multiracial heritage.
        </p>
        <p>
          *LGBTQIA+ includes: Lesbian, Gay, Bisexual, Transgender,
          Queer/Questioning, Intersex, Asexual, and more.
        </p>
      </div>
    </div>
  );
}
