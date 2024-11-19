"use client";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { generateSecurePassword } from "@/lib/helper";
import { createPassword } from "@/actions/password";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

function AddAccPassBtn() {
  const formSchema = z.object({
    website: z.string().min(3).max(100).url(),
    email: z.string().min(3).max(50).email(),
    password: z.string().min(3).max(50),
    passwordType: z.string(),
  });

  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: createPassword,
    onSuccess: (data) => {
      if (data?.error) {
        setOpen(false);
        return toast.error(data.error || "Something went wrong", {
          id: "create-pass",
        });
      }
      toast.error(data?.data, {
        id: "create-pass",
      });
      setOpen(false);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      website: "https://www.google.com",
      email: "test@test.com ",
      password: "123456",
      passwordType: "encrypted-password",
    },
  });

  const onSubmit = async (data) => {
    const newData = { ...data };
    if (data.passwordType === "encrypted-password") {
      const newPass = generateSecurePassword(data.password);
      newData.password = newPass;
      form.setValue("password", newPass);
    }
    mutation.mutate(newData);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          <span className="font-semibold">Add</span>
          <ChevronDownIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new password</DialogTitle>
          <DialogDescription className="mt-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Website{" "}
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter website URL" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Email <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email address" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Password{" "}
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter password" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="passwordType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Select password generation type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="custom-password" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Custom Generation
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="encrypted-password" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Encrypted Generation
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddAccPassBtn;
