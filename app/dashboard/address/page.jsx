import Searchbar from "@/components/Searchbar";
import { looper } from "@/lib/data";
import React from "react";
import AddressCard from "./_components/AddressCard";
import AddAddress from "./_components/AddAddress";

function UserAccoutsPage() {
  return (
    <div className="w-full flex flex-col gap-5 h-full">
      <Searchbar name="Address" button={AddAddress} />
      <div className="h-full grid grid-cols-3 gap-5">
        {looper(10).map((item) => (
          <AddressCard />
        ))}
      </div>
    </div>
  );
}

export default UserAccoutsPage;
