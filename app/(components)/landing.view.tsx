"use client";

import TextField from "@/components/elements/TextField/TextField";
import { IoSearchOutline } from "react-icons/io5";
import BlocksTableView from "./blocks-table.view";
import Header from "@/components/elements/Header/Header";
import { useState } from "react";

const LandingView = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="flex flex-col gap-10">
      <Header
        title={`Assignment block explorer`}
        description={"Check list of blocks and detailed view."}
      />

      <TextField
        prependIcon={<IoSearchOutline />}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search for transactions, blocks & accounts"
        className="placeholder-titanium"
      />

      <BlocksTableView filter={filter} />
    </div>
  );
};

export default LandingView;
