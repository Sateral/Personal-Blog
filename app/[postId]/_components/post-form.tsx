"use client";

import * as z from "zod";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2Icon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SkeletonLoader from "@/components/editor/skeleton-loader";

interface PostFormProps {
  initialData: z.infer<typeof formSchema> | null;
}

// Import on client side only
const TailwindEditor = dynamic(() => import("@/components/editor/editor"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
});

export const PostForm = ({ initialData }: PostFormProps) => {
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const params = useParams();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      content: {},
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const url = initialData ? `/api/${params.postId}` : "/api";
      const method = initialData ? "PATCH" : "POST";
      const successMessage = initialData ? "Post updated!" : "Post created!";
      const successDescription = initialData
        ? "Your post has been updated successfully."
        : "Your post has been created successfully.";

      await fetch(url, {
        method,
        body: JSON.stringify({
          title: values.title,
          content: values.content,
        }),
      });

      toast({
        title: successMessage,
        description: successDescription,
      });

      router.push("/");
    } catch (error) {
      toast({
        title: "Failed to create post",
        description: "An error occurred while creating the post.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          disabled={loading}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Give it a title!"
                  className="bg-transparent border-none p-0 text-4xl font-bold focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={loading}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TailwindEditor
                  disabled={loading}
                  className="border-none -ml-6"
                  initialValue={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          Submit{" "}
          {loading ? <Loader2Icon className="animate-spin ml-2" /> : null}
        </Button>
      </form>
    </Form>
  );
};
