import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="-mt-28 mx-auto md:bg-[url('/grid.png')] bg-[100%_auto] md:bg-[90%_auto] lg:bg-[85%_auto] xl:bg-[68%_auto] bg-right-top bg-no-repeat">
      <div className="mx-auto pb-12">
        <div className="flex flex-col px-4 lg:px-20 py-10 h-[30vh] md:h-[55vh] lg:h-[65vh] justify-center">
          <div className="font-serif text-2xl md:text-4xl font-semibold leading-snug">
            Catalyzing Change
            <br />
            Fueling Business Success
          </div>
          <div className="font-light w-full md:w-1/2 my-4">
            Divination empowers Businesses to Thrive in Dynamic and Evolving
            Markets through Personalized Strategic Consulting and Advisory
          </div>
        </div>
        <div className="flex flex-col z-40">
          <div className="p-4">
            <div className="font-serif italic text-xl font-bold mb-2" id="expertise">
              Our Expertise
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-deepblue border-b-2 border-deepblue w-fit my-2">
                Emerging Industries
              </div>
              <div className="font-light">
                Embryonic industries face unique challenges from pricing to
                capital structure. We offer deep expertise in these unqiue and
                exciting periods in a business&apos;s lifecycle
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-deepblue border-b-2 border-deepblue w-fit my-2">
                Change Management
              </div>
              <div className="font-light">
                An otherwise strong business can face emerging headwinds from
                internal and external threats. We have deep expertise in
                tackling these threats early and often so businesses can
                continue to thrive in any environment
              </div>
            </div>
          </div>
          <div className="px-4 py-20">
            <div className="font-serif italic text-xl font-bold mb-2" id="capabilities">
              Our Capabilities
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-deepblue border-b-2 border-deepblue w-fit my-2">
                Fractional CFO & COO Positions
              </div>
              <div className="font-light">
              Transform your business with fractional CFO and COO positions,
                  leveraging financial and operational leadership on a flexible
                  basis.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-deepblue border-b-2 border-deepblue w-fit my-2">
              Strategy and Finance consulting
              </div>
              <div className="font-light">
              Utilize metrics and strategy frameworks to identify challenges
                  and opportunities, delivering optimized business outcomes.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-deepblue border-b-2 border-deepblue w-fit my-2">
              Independent directorships & advisory
              </div>
              <div className="font-light">
              Elevate corporate decision making with idependent directors
                  who provide honest and direct guidnace and oversight.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-deepblue border-b-2 border-deepblue w-fit my-2">
              Industry analysis & commentary
              </div>
              <div className="font-light">
              Gain valuable industry insights and commentary to stay ahead
                  in a rapidly evolving business landscape.
              </div>
            </div>
          </div>
          <div className="p-4">
          <div className="font-serif italic text-xl font-bold " id="insights">
              Trending Insights
            </div>
            <div className="font-light mb-2">
              When we aren&apos;t working with clients, we stay on top of the
              rapidly evolving business climate through research and analysis.
            </div>
            <a
              href="https://cerebration.medium.com/what-are-daos-good-for-anyways-108b8de7b60e"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2 border-black border-2 p-2 flex flex-row items-start gap-2 group h-16"
            >
              <div>
                <img
                  className="border-2 border-black h-full p-2"
                  src="/align-left-icon.svg"
                />
              </div>
              <div className="flex-1 group-hover:font-medium">
                Why are Bolivia&apos;s Currency Woes Amplified by the Federal
                Reserve&apos;s Rate Hikes
              </div>
            </a>
            <a
              href="https://cerebration.medium.com/why-are-bolivias-currency-woes-amplified-by-the-federal-reserve-s-rate-hikes-15343afe3947"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2 border-black border-2 p-2 flex flex-row items-start gap-2 group h-16"
            >
              <div>
                <img
                  className="border-2 border-black h-full p-2"
                  src="/align-left-icon.svg"
                />
              </div>
              <div className="flex-1 group-hover:font-medium">
                What are DAOs good for anyways?
              </div>
            </a>
            <a
              href="https://cerebration.medium.com/the-new-space-race-5787fc3c2dfd"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2 border-black border-2 p-2 flex flex-row items-start gap-2 group h-16"
            >
              <div>
                <img
                  className="border-2 border-black h-full p-2"
                  src="/align-left-icon.svg"
                />
              </div>
              <div className="flex-1 group-hover:font-medium">
                The New Space Race
              </div>
            </a>
            <a
              href="https://cerebration.medium.com/whats-next-for-web3-5557a195b322"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2 border-black border-2 p-2 flex flex-row items-start gap-2 group h-16"
            >
              <div>
                <img
                  className="border-2 border-black h-full p-2"
                  src="/align-left-icon.svg"
                />
              </div>
              <div className="flex-1 group-hover:font-medium">
                What&apos;s next for Web3?
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
