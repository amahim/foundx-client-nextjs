// import { useState, useCallback } from "react";
// import { FieldValues } from "react-hook-form";
// import { toast } from "sonner";
// import { registerUser } from "../services/AuthService";

// export const useUserRegistration = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);

//   const mutate = useCallback(async (userData: FieldValues) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const result = await registerUser(userData);
//       toast.success("User registration successful.");
//       setIsLoading(false);
//       return result;
//     } catch (err: any) {
//       const message = err?.message ?? "Registration failed";
//       const errorObj = err instanceof Error ? err : new Error(message);
//       setError(errorObj);
//       toast.error(errorObj.message);
//       setIsLoading(false);
//       throw errorObj;
//     }
//   }, []);

//   return {
//     mutate,
//     mutateAsync: mutate,
//     isLoading,
//     error,
//   };
// };

import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/AuthService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User registration successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User login successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};