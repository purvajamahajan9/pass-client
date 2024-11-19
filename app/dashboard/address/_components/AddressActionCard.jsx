"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Link2Icon, Trash2Icon } from "lucide-react";
import DeleteAccountDialog from "./DeleteAddressCard";

function AddressActionCard() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <DropdownMenu>
      <DeleteAccountDialog open={dialogOpen} setOpen={setDialogOpen} />
      <DropdownMenuTrigger>
        <EllipsisVertical size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="text-primary"
          onClick={() => setDialogOpen(true)}
        >
          <Trash2Icon className="" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AddressActionCard;
