import authApiRequest from "@/apiRequests/auth";
import { useMutation } from "@tanstack/react-query";

export const useLoginMumation = () => {
  return useMutation({
    mutationFn: authApiRequest.clientLogin,
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.clientLogout,
  });
};

export const useSetTokenToCookieMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.setTokenToCookie,
  });
}
