import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import DefaultMeta from "components/Meta";
import Web3ReactManager from "components/Web3ReactManager";
import { useRoutes } from "react-router-dom";
import { routes } from "routes";
import { NetworkContextName } from "utils/constants";
import { getLibrary } from "utils/functions";
import theme from "utils/theme";

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

function App() {
  const content = useRoutes(routes);
  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <Web3ReactManager>
            <div suppressHydrationWarning={true}>
              <DefaultMeta />
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              {content}
            </div>
          </Web3ReactManager>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </ChakraProvider>
  );
}

export default App;
