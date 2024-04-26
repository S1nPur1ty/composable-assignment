import Image from "next/image";

import TextField from "@/components/elements/TextField/TextField";
import { IoSearchOutline } from "react-icons/io5";
import BlocksTableView from "./BlocksTable.view";

interface LandingViewProps {}

const LandingView = ({}: LandingViewProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex w-full p-6 gap-6 border border-white/10 rounded-3xl">
        <div className="bg-black w-14 h-14 rounded-full flex items-center justify-center">
          <Image
            src={"/assets/images/sol.svg"}
            alt="Solana"
            width={32.67}
            height={29.94}
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <h1 className="text-2xl">Assignment block explorer</h1>
          <p className="text-titanium">
            Check list of blocks and detailed view.
          </p>
        </div>
      </div>

      <TextField
        prependIcon={<IoSearchOutline />}
        placeholder="Search for transactions, blocks & accounts"
        className="placeholder-titanium"
      />

      <BlocksTableView />
    </div>
  );
};

export default LandingView;
