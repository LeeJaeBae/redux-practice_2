import React from "react";
import queryString from "query-string";

const About = ({ location, match }) => {
  const query = queryString.parse(location.search);

  const { color } = query;
  return (
    <div>
      <h2 style={{ color }}>About</h2>
      <p>
        Hi, I'm a{" "}
        {match.params.name ? match.params.name + ` page` : `about Page`}!!
      </p>
    </div>
  );
};

export default About;
