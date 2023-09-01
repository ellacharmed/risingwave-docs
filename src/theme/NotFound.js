import React, { useEffect } from "react";
import NotFound from "@theme-original/NotFound";
import { useHistory, useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function NotFoundWrapper(props) {
  const { globalData } = useDocusaurusContext();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const paths = location.pathname.split("/");
    const version = paths[2];
    const slug = paths[3];
    const queries = `${slug}${location.search ?? "/" + location.search}${location.hash ?? "/" + location.hash}`;
    if (version === "latest") {
      const res = window.location.href.replace(version, "current");
      window.location.replace(res);
    } else if (version === "current") {
      history.push(`/docs/current/intro`);
    } else {
      globalData["docusaurus-plugin-content-docs"].default["versions"].map((v) =>
        v.name === version ? history.push(`${v.path}/${queries}`) : false
      );
      const currentVersion = globalData["docusaurus-plugin-content-docs"].default["versions"].find((item) => {
        return item.version === "current";
      });
      if (currentVersion?.docs?.includes(paths[paths.length - 1])) {
        history.push(`/docs/current/${paths[paths.length - 1]}`);
      }
      history.push(`/docs/current/${queries}`);
    }
  }, []);

  return (
    <>
      <NotFound {...props} />
    </>
  );
}
