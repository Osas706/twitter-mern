import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  //update profile func
  const { mutateAsync: updateProfile, isPending: isUpdating } = useMutation({
    mutationFn: async ({formData}) => {
      try {
        const res = await fetch("/api/users/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },

    onSuccess: () => {
      toast.success("Updated Successfully");
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["authUser"] }),
        queryClient.invalidateQueries({ queryKey: ["userProfile"] }),
      ]);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {updateProfile, isUpdating}
};

export default useUpdateProfile;
