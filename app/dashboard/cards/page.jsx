"use client";
import Searchbar from "@/components/Searchbar";
import { CircleSlash2Icon } from "lucide-react";
import React from "react";
import BankCard from "./_components/BankCard";
import AddBankCard from "./_components/AddBankCard";
import { getCards } from "@/actions/card";

import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { copyPassword } from "@/actions/card";

function UserCardsPage() {
  const query = useQuery({
    queryKey: ["cards-for-user"],
    queryFn: () => getCards(),
    refetchInterval: 2000,
  });

  const mutation = useMutation({
    mutationFn: copyPassword,
    onSuccess: (data) => {
      navigator.clipboard.writeText(data).then(() =>
        toast.success("Copied successfully!", {
          id: "show-card",
        })
      );
    },
    onError: (err) => {
      console.log("Unable to decrypt password", err);
      toast.error(err.message || "Unable to decrypt password", {
        id: "show-pass",
      });
    },
  });

  return (
    <div className="w-full flex flex-col gap-5 h-full">
      <Searchbar name="Accounts" button={AddBankCard} />
      {(!query?.data?.data || query?.data?.data?.length === 0) && (
        <div className="flex h-full w-full items-center justify-center flex-col gap-3">
          <CircleSlash2Icon size={140} className="text-muted-foreground" />
          <span>No data available</span>
        </div>
      )}
      <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {query?.data?.data?.map((data) => (
          <BankCard
            data={data}
            key={data._id}
            onCopy={(text) => {
              mutation.mutate(text);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default UserCardsPage;
