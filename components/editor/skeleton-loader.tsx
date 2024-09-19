import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="py-6 space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-10 w-32 rounded-xl" />
      <Skeleton className="h-8 w-16 rounded-xl" />
      <Skeleton className="h-4 w-48 rounded-xl" />
    </div>
  );
};

export default SkeletonLoader;
