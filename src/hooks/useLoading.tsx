import { useState, useCallback } from "react";

const useLoading = (options?: any) => {
  const [loading, setLoading] = useState(options?.defaultLoading || false);
  const [buttonLoading, setButtonLoading] = useState(
    options?.defaultButtonLoading || false
  );

  const onLoading = useCallback(() => {
    setLoading((prev: any) => !prev);
  }, []);

  const onButtonLoading = useCallback(() => {
    setButtonLoading((prev: any) => !prev);
  }, []);

  return {
    loading,
    buttonLoading,
    onLoading,
    onButtonLoading,
  };
};

export default useLoading;
