import { Helmet } from "react-helmet-async";

function ReactHelmet() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Participate in HackTheChain 3.0, a blockchain hackathon to innovate and build decentralized applications."
        />

        <meta
          name="keywords"
          content="HackTheChain, Blockchain Hackathon, Web3, AI, Ethereum, Vercel, GoDaddy"
        />
        <meta name="author" content="CodeBase" />

        <meta property="og:title" content="HackTheChain 3.0 Website" />
        <meta
          property="og:description"
          content="Build the future of decentralized applications at HackTheChain 3.0. Join us to innovate in blockchain and Web3!"
        />
        <meta
          property="og:image"
          content="https://www.hackthechain.in/logo.png"
        />
        <meta property="og:url" content="https://www.hackthechain.in" />
        <meta property="og:type" content="website" />
        <title>HackTheChain 3.0</title>
      </Helmet>
    </>
  );
}

export default ReactHelmet;
