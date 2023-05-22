import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Home() {

  return (
    <main className="-mt-24 md:-mt-28 mx-auto bg-[url('/gridm.png')] md:bg-[url('/grid.png')] bg-[100%_auto] md:bg-[90%_auto] lg:bg-[85%_auto] xl:bg-[68%_auto] bg-top md:bg-right-top bg-no-repeat">
      <div className="mx-auto pb-12">
        <div className="flex flex-col px-4 lg:px-20 md:py-10 h-[70vh] md:h-[55vh] lg:h-[65vh] justify-end md:justify-center">
          <div className="flex flex-col font-serif text-4xl md:text-5xl font-semibold space-y-2 md:space-y-4">
            <div>Catalyzing Change</div>
            <div>Fueling Business Success</div>
          </div>
          <div className="font-light w-full md:w-1/2 my-4 text-lg">
            Divination empowers Businesses to Thrive in Dynamic and Evolving
            Markets through Personalized Strategic Consulting and Advisory
          </div>
        </div>
        <div className="flex flex-col z-40">
          <div className="py-24">
            <div className="bg-gray-200 md:bg-deepblue text-black md:text-gray-100 mb-2 w-full text-left md:text-right px-4 md:px-14 h-fit md:h-[25vh] py-4 md:py-6 flex flex-col justify-end items-start md:items-end" id="expertise">
              <div className="font-serif text-4xl md:text-5xl font-semibold md:font-medium tracking-wide pt-8 md:pt-10">Our Expertise</div>
              <div className="font-light w-full md:w-2/5 my-4 text-lg text-gray-600 md:text-gray-100">
              We are characterized by our modern, innovative approach to problem solving and our deep knowledge of technology
          </div>
            </div>
            <div className="flex flex-col px-4 md:px-8 pt-4 md:pt-10">
              <div className="text-2xl font-bold text-deepblue border-b-2 border-deepblue w-fit pb-1 my-2 pr-6">
                Emerging Industries
              </div>
              <div className="font-light">
                Embryonic industries face unique challenges from pricing to
                capital structure. We offer deep expertise in these unqiue and
                exciting periods in a business&apos;s lifecycle
              </div>
            </div>
            <div className="flex flex-col px-4 md:px-8">
            <div className="text-2xl font-bold text-deepblue border-b-2 border-deepblue w-fit pb-1 my-2 pr-6">
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
          <div className="py-8 md:py-24">
          <div className="bg-gray-200 md:bg-deepblue text-black md:text-gray-100 mb-2 w-full text-left px-4 md:px-14 h-fit md:h-[25vh] py-4 md:py-6 flex flex-col justify-end items-start" id="capabilities">
              <div className="font-serif text-4xl md:text-5xl font-semibold md:font-medium tracking-wide pt-8 md:pt-10">Our Capabilities</div>
              <div className="font-light w-full md:w-2/5 my-4 text-lg text-gray-600 md:text-gray-100">
              With an autonomous and self-directed approach we provide honest and immediate value on day one
          </div>
            </div>
            <div className="flex flex-col px-4 md:px-8 pt-4 md:pt-10">
            <div className="text-2xl font-bold text-deepblue border-b-2 border-deepblue w-fit pb-1 my-2 pr-6">
                Fractional CFO & COO Positions
              </div>
              <div className="font-light">
              Transform your business with fractional CFO and COO positions,
                  leveraging financial and operational leadership on a flexible
                  basis.
              </div>
            </div>
            <div className="flex flex-col px-4 md:px-8">
            <div className="text-2xl font-bold text-deepblue border-b-2 border-deepblue w-fit pb-1 my-2 pr-6">
              Strategy and Finance consulting
              </div>
              <div className="font-light">
              Utilize metrics and strategy frameworks to identify challenges
                  and opportunities, delivering optimized business outcomes.
              </div>
            </div>
            <div className="flex flex-col px-4 md:px-8">
            <div className="text-2xl font-bold text-deepblue border-b-2 border-deepblue w-fit pb-1 my-2 pr-6">
              Independent directorships & advisory
              </div>
              <div className="font-light">
              Elevate corporate decision making with idependent directors
                  who provide honest and direct guidnace and oversight.
              </div>
            </div>
            <div className="flex flex-col px-4 md:px-8">
            <div className="text-2xl font-bold text-deepblue border-b-2 border-deepblue w-fit pb-1 my-2 pr-6">
              Industry analysis & commentary
              </div>
              <div className="font-light">
              Gain valuable industry insights and commentary to stay ahead
                  in a rapidly evolving business landscape.
              </div>
            </div>
          </div>
          <div className="py-8 md:py-24">
          <div className="bg-gray-200 md:bg-deepblue text-black md:text-gray-100 mb-2 w-full text-left md:text-right px-4 md:px-14 h-fit md:h-[25vh] py-4 md:py-6 flex flex-col justify-end items-start md:items-end" id="insights">
              <div className="font-serif text-4xl md:text-5xl font-semibold md:font-medium tracking-wide pt-8 md:pt-10">Trending Insights</div>
              <div className="font-light w-full md:w-2/5 my-4 text-lg text-gray-600 md:text-gray-100">
              When we aren&apos;t with clients, we stay on top of the
              rapidly evolving business climate through research and analysis.
          </div>
            </div>
            <div className="my-8">
              {" "}
            </div>
            <div className="flex flex-col space-y-6 mx-4 md:mx-8">
            <div className="flex flex-row">
            <div className="w-fit text-deepblue text-2xl font-light px-2">
            1
            </div>
            <a
              href="https://cerebration.medium.com/why-are-bolivias-currency-woes-amplified-by-the-federal-reserve-s-rate-hikes-15343afe3947"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col justify-start items-start border-l-2 border-deepblue text-black font-medium pb-6 px-2 group"
            >
              <div className="group-hover:font-semibold text-lg">
                Why are Bolivia&apos;s Currency Woes Amplified by the Federal
                Reserve&apos;s Rate Hikes
              </div>
              <div className="font-light text-sm my-1">
                Divination Blog
              </div>
            </a>
            </div>
            <div className="flex flex-row">
            <div className="w-fit text-deepblue text-2xl font-light px-2">
            2
            </div>
            <a
              href="https://cerebration.medium.com/what-are-daos-good-for-anyways-108b8de7b60e"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-start items-start border-l-2 border-deepblue text-black font-medium pb-6 px-2 group"
            >
              <div className="group-hover:font-semibold text-lg">
                What are DAOs good for anyways?
              </div>
              <div className="font-light text-sm my-1">
                Divination Blog
              </div>
            </a>
            </div>
            <div className="flex flex-row">
            <div className="w-fit text-deepblue text-2xl font-light px-2">
            3
            </div>
            <a
              href="https://cerebration.medium.com/the-new-space-race-5787fc3c2dfd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-start items-start border-l-2 border-deepblue text-black font-medium pb-6 px-2 group"
            >
              <div className="group-hover:font-semibold text-lg">
                The New Space Race
              </div>
              <div className="font-light text-sm my-1">
                Divination Blog
              </div>
            </a>
            </div>
            <div className="flex flex-row">
            <div className="w-fit text-deepblue text-2xl font-light px-2">
            4
            </div>
            <a
              href="https://cerebration.medium.com/whats-next-for-web3-5557a195b322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-start items-start border-l-2 border-deepblue text-black font-medium pb-6 px-2 group"
            >
              <div className="group-hover:font-semibold text-lg">
                What&apos;s next for Web3?
              </div>
              <div className="font-light text-sm my-1">
                Divination Blog
              </div>
            </a>
            </div>
            </div>
          </div>
          <div className="py-8 md:py-24">
          <div className="bg-gray-200 md:bg-deepblue text-black md:text-gray-100 mb-2 w-full text-left px-4 md:px-14 h-fit md:h-[25vh] py-4 md:py-6 flex flex-col justify-center items-center" id="contact">
              <div className="font-serif text-4xl md:text-5xl font-semibold tracking-wide pt-8 md:pt-10">Get in Touch</div>
              <div className="text-black md:text-white text-lg flex flex-row space-x-1 my-4">
                    <a               href="mailto:gabriel@divination.dev?subject=Learn more about Divination!"
              target="_blank"
              rel="noopener noreferrer"className="w-fit border-b-2 border-medblue">
                    Email Us
                    </a>
                    <div>
                    or
                    </div>
                    <a               href="https://www.linkedin.com/company/divination/"
              target="_blank"
              rel="noopener noreferrer"className="w-fit border-b-2 border-medblue">
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
