import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, desc, fav }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href={fav} />
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
};

export default Meta;
