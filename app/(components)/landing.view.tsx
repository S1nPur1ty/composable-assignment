import TextField from "@/components/elements/TextField/TextField";
import { IoSearchOutline } from "react-icons/io5";
import BlocksTableView from "./blocks-table.view";
import Header from "@/components/elements/Header/Header";

interface LandingViewProps {}

const LandingView = ({}: LandingViewProps) => {
  return (
    <div className="flex flex-col gap-10">
      <Header
        title={`Assignment block explorer`}
        description={"Check list of blocks and detailed view."}
      />

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
