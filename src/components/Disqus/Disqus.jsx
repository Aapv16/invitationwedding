import React from "react";
import { useEffect } from "react";
import Safe from "react-safe";
const Disqus = ({ identifier, title, url }) => {
  return (
    <div>
      <div id="disqus_thread"></div>

      <Safe.script>
        {(function () {
          // DON'T EDIT BELOW THIS LINE
          var d = document,
            s = d.createElement("script");
          s.src = "https://aapv16.disqus.com/embed.js";
          s.setAttribute("data-timestamp", +new Date());
          (d.head || d.body).appendChild(s);
        })()}
      </Safe.script>
    </div>
  );
};

export default Disqus;
