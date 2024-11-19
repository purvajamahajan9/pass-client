"use client";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { UserButton } from "@clerk/nextjs";

function Searchbar(props) {
  return (
    <div>
      <div className="w-full flex gap-10 justify-between items-center">
        <div className="flex flex-col gap-2 w-max">
          {/* <span className="font-thin text-lg">{props.name}</span> */}
          <props.button />
        </div>
        {/* <div className="flex items-center border-2 border-primary h-max p-1 px-4 box-border gap-3 rounded-full max-w-5xl w-full">
          <Search className="stroke-primary/50" />
          <Input
            value={searchText}
            onChange={searchData}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 w-full text-lg h-8"
            placeHolder="Search..."
          />
        </div> */}
        <div className="h-max w-max rounded-full">
          <UserButton className />
        </div>
      </div>
      <Separator className="mt-3" />
    </div>
  );
}

export default Searchbar;
