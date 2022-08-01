import { Helmet } from "react-helmet";
import { DefaultMetaData } from "utils/constants";

function DefaultMeta() {
  return (
    <Helmet>
      <html lang="en" />
      <title>{DefaultMetaData.title}</title>
      <meta name="description" content={DefaultMetaData.description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default DefaultMeta;
