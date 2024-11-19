import Searchbar from "@/components/Searchbar";
import { looper } from "@/lib/data";
import React from "react";
import BankCard from "./_components/NoteCard";
import AddBankCard from "./_components/AddNote";

function UserAccoutsPage() {
  return (
    <div className="w-full flex flex-col gap-5 h-full">
      <Searchbar name="Notes" button={AddBankCard} />
      <div className="h-full grid grid-cols-3 gap-5">
        {looper(10).map((item) => (
          <BankCard />
        ))}
      </div>
    </div>
  );
}

export default UserAccoutsPage;
