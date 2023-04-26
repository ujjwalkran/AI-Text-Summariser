import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header
      className="w-full flex justify-center
      items-center flex-col"
    >
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/ujjwalkran")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Get the Gist in Seconds with
        <br className="max-md:hidden" />
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Looking for a quick and efficient way to get the key takeaways from
        lengthy articles? Look no further than OpenAI GPT-4 article
        summarization technology. With this cutting-edge tool, you can
        effortlessly condense articles into easy-to-read summaries that capture
        the essence of the original content. 
      </h2>
    </header>
  );
};

export default Hero;
