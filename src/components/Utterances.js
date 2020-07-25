import React, { useEffect } from "react";

const src = "https://utteranc.es/client.js";
const branch = "master";

const Utterances = ({ repo, theme }) => {
  const rootElm = React.createRef();

  useEffect(() => {
    const utterances = document.createElement("script");
    const utterancesConfig = {
      src,
      repo,
      branch,
      async: true,
      "issue-term": "pathname",
      label: "Comments 💬",
      crossorigin: "anonymous",
      theme,
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
  }, []);

  return <div id="ar-comments" className="utterances" ref={rootElm} />;
};

export default Utterances;
