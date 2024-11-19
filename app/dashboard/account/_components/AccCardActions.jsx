"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Link2Icon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import DeleteAccountDialog from "./DeleteAccountDialog";

import { deletePassword } from "@/actions/password";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { toast } from "sonner";

function AccCardActions({ id, link }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: deletePassword,
    onSuccess: (data) => {
      toast.error(data.data || "Pasword deleted successfully!", {
        id: "delete-pass",
      });
    },
    onError: (err) => {
      toast.error(err.message || "Unable to deleted password", {
        id: "delete-pass",
      });
    },
  });

  return (
    <DropdownMenu>
      <DeleteAccountDialog open={dialogOpen} setOpen={setDialogOpen} />
      <DropdownMenuTrigger>
        <EllipsisVertical size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="text-primary"
          onClick={() => {
            // setDialogOpen(true);
          }}
        >
          <Button
            onClick={() => {
              mutation.mutate(id);
            }}
            variant="ghost"
          >
            {" "}
            <Trash2Icon className="" /> Delete
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-foreground">
          <Link className="" href={link} target="_blank">
            <Button variant="link" className="text-foreground">
              <Link2Icon className="" /> Visit
            </Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccCardActions;
