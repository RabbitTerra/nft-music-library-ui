import { Box, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import NProgress from "nprogress";

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{ position: "fixed", left: 0, top: 0, width: "100%", height: "100%" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" thickness="4px" />
    </Box>
  );
}

export default SuspenseLoader;
