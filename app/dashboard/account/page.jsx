"use client";
import Searchbar from "@/components/Searchbar";
import React from "react";
import AccPassCard from "./_components/AccPassCard";
import AddAccPassBtn from "./_components/AddAccPassBtn";
import { useQuery } from "@tanstack/react-query";
import { getPasswords } from "@/actions/password";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { copyPassword } from "@/actions/password";
import { CircleSlash2Icon } from "lucide-react";

function UserAccoutsPage() {
  const query = useQuery({
    queryKey: ["pass-for-user"],
    queryFn: () => getPasswords(),
    refetchInterval: 2000,
  });

  const mutation = useMutation({
    mutationFn: copyPassword,
    onSuccess: (data) => {
      navigator.clipboard.writeText(data).then(() =>
        toast.success("Pasword copied successfully!", {
          id: "show-pass",
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
      <Searchbar name="Accounts" button={AddAccPassBtn} />
      {(!query?.data?.data || query?.data?.data?.length === 0) && (
        <div className="flex h-full w-full items-center justify-center flex-col gap-3">
          <CircleSlash2Icon size={140} className="text-muted-foreground" />
          <span>No data available</span>
        </div>
      )}
      <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {query?.data?.data?.map((data) => (
          <AccPassCard
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

export default UserAccoutsPage;
