import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 text-sm news">
        <div className="border-b md:border-b-0 md:border-r border-black row-span-2 p-4">
          <div className="text-xl font-black tracking-tighter mb-2 font-sans uppercase">
            Divination tackles tough product challenges!
          </div>
          <div className="mb-2">
            Divination provides advisory and consulting services to businesses
            of all sizes. We like being a part of massive digital transformation
            stories. Our engagements include,
          </div>
          <ul className="list-disc ml-4 font-medium">
            <li>Independent directorships & advisory</li>
            <li>Full-scale digital product development</li>
            <li>Software engineering</li>
            <li>Industry commentary</li>
          </ul>
        </div>
        <div className="border-b md:border-r border-black col-span-1 md:col-span-2 p-4">
          <div className="text-xl font-black tracking-tighter mb-2 font-sans uppercase">
            The Future is now
          </div>
          <div className="border border-black p-2 w-full h-36">
            <div className="circuit w-full h-full" />
          </div>
          <div className="my-2">
            When we aren&apos;t working with remarkable clients who are changing the
            world, we are constantly building internally. We don&apos;t just know
            cutting-edge tech, we live it everyday.
          </div>
          <div className="font-sans font-semibold tracking-tight uppercase mt-2">
            Selected Clients
          </div>
          <div className="my-2 flex flex-col gap-1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://www.intuily.com/"
            >
              Intuily ↗
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://mushroom.party/"
            >
              Mushroom Party ↗
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://magiceden.io/marketplace/moonstream"
            >
              Moonstream ↗
            </a>
            <div className="underline">Fantastics</div>
          </div>
        </div>
        <div className="row-span-2 p-4 border-b border-black md:border-b-0">
          <div className="news italic text-xl font-bold mb-2">
            Check out our Founder&apos;s blog
          </div>
          <div>
            At Divination we are focused on technology that is rapidly changing
            the future. Our founder&apos;s blog foucses on the implications of
            emerging tech.{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://cerebration.medium.com/"
            >
              Check it out here ↗
            </a>
            .
          </div>
          <div className="font-sans font-semibold tracking-tight uppercase mt-2">
            Recent Articles
          </div>
          <a
            href="https://cerebration.medium.com/what-are-daos-good-for-anyways-108b8de7b60e"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2 border border-black border-b-4 border-r-4 p-2 flex flex-row items-start gap-2 group"
          >
            <div>
              <img
                className="border border-black w-6 p-1"
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
            className="my-2 border border-black border-b-4 border-r-4 p-2 flex flex-row items-start gap-2 group"
          >
            <div>
              <img
                className="border border-black w-6 p-1"
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
            className="my-2 border border-black border-b-4 border-r-4 p-2 flex flex-row items-start gap-2 group"
          >
            <div>
              <img
                className="border border-black w-6 p-1"
                src="/align-left-icon.svg"
              />
            </div>
            <div className="flex-1 group-hover:font-medium">
              What&apos;s next for Web3?
            </div>
          </a>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-black p-4">
          <div className="text-xl font-black tracking-tighter mb-2 font-sans uppercase">
            Hera Health
          </div>
          <div className="my-2">
            Hera Health is a prototypical global health insurance solution
            powered by blockchain, that offers cross-border coverage, especially
            in locations where insurance is expensive or inaccessible.
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://hera-next.vercel.app/"
          >
            Check it out here ↗
          </a>
        </div>
        <div className="md:border-r border-black p-4">
          <div className="text-xl font-black tracking-tighter mb-2 font-sans uppercase">
            Tipsea
          </div>
          <div className="my-2">
            Tipsea allows you to create NFT thank you notes in the form of tasty
            digital cocktails. Best of all, each digital drink can be redeemed
            for cash so you can turn your digital drink into a real one.
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://www.tipsea.xyz/"
          >
            Check it out here ↗
          </a>
        </div>
      </div>
    </>
  );
}
