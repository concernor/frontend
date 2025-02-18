import { Heading } from "@/components/landing/heading";
import { Quests } from "@/components/landing/quests";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// # How to Buy $CONCERN on Base Network
// **A Comprehensive Step-by-Step Guide for Seamless Acquisition**
//
// ## Preparing Your Digital Wallet
// ### Setting Up a Base-Compatible Wallet
// To begin your $CONCERN journey, you'll need a cryptocurrency wallet supporting the Base network. **MetaMask** is the most widely used option, though alternatives like **Rabby Wallet** or **Coinbase Wallet** are equally effective[2][9].
//
// 1. **Download Rabby, Coinbase Wallet, MetaMask or any other wallet supporting the Base network**: Install the browser extension or mobile app from official sources.
// 2. **Create/Import Wallet**: Generate a new wallet or import an existing one using a recovery phrase.
// 3. **Secure Your Wallet**: Enable two-factor authentication (2FA) and store your recovery phrase offline (recommended if your wallet supports it).
//
// ### Adding the Base Network
// 1. Open your wallet and navigate to **Networks** > **Add Network**.
// 2. Enter the following Base Mainnet details:
//    - **Network Name**: Base
//    - **RPC URL**: `https://mainnet.base.org`
//    - **Chain ID**: 8453
//    - **Currency Symbol**: ETH
//    - **Block Explorer**: `https://basescan.org`
// 3. Save and switch to the Base network.
//
// ---
//
// ## Acquiring Ethereum (ETH) for Transactions
// ### Purchasing ETH on Centralized Exchanges
// 1. **Sign Up**: Create an account on platforms like **Binance**, **Coinbase**, or **Kraken**.
// 3. **Buy ETH**: Use fiat currency (USD, EUR, etc.) to purchase ETH via bank transfer or credit card.
//
// ### Bridging ETH to Base Network
// If your ETH is on Ethereum Mainnet:
// 1. Visit **Stargate Finance** or **Base Bridge**.
// 2. Connect your wallet and select the amount to transfer.
// 3. Confirm the bridge transaction (allow ~5-10 minutes for completion).
//
// ---
//
// ## Purchasing $CONCERN via Decentralized Exchanges (DEX)
// ### Buying through Flaunch
// 1. Navigate to [Flaunch](https://flaunch.gg/base/coin/0x8F5A590Be0B27fEb5bFfaab82BBF31d3c7EFe222).
// 2. Click **Connect Wallet** and authorize your wallet.
// 3. Select the amount of ETH you want to spend on $CONCERN.
// 4. Click **Buy $CONCERN**.
//
// ### Buying through Uniswap
// 1. Navigate to **uniswap.org** on the Base network.
// 2. Click **Connect Wallet** and authorize your wallet.
//
// ### Executing the Swap
// 1. In the swap interface, paste $CONCERN's contract address:
//    `0x8f5a590be0b27feb5bffaab82bbf31d3c7efe222`
//    *Always verify this address via $CONCERN's official channels to avoid scams.*
// 2. Select ETH as the input currency and $CONCERN as the output.
// 3. Set slippage tolerance to **1-5%** to accommodate volatility.
// 4. Confirm the transaction in MetaMask (gas fees typically ≤$0.50 on Base).
//
// ---
//
// ## Post-Purchase Best Practices
// ### Adding $CONCERN to Your Wallet
// 1. In your wallet, click **Import Tokens**.
// 2. Paste $CONCERN's contract address to auto-populate details.
// 3. Save to view your balance instantly.
//
// ### Securing Your Assets
// - Transfer majority holdings to a **hardware wallet** (Ledger/Trezor).
// - Avoid sharing private keys or recovery phrases.
// - Bookmark $CONCERN's official links to prevent phishing.
//
// ---
//
// # Frequently Asked Questions (FAQ)
// ## General $CONCERN Information
// ### What is $CONCERN?
// $CONCERN is a community-driven meme token operating on the Base blockchain, combining viral appeal with decentralized governance features. Unlike traditional cryptocurrencies, it emphasizes cultural engagement through memes and social interaction.
//
// ### Is $CONCERN a scam?
// $CONCERN is a fully transparent project launched through flaunch.gg. that doesn't prevent it from being a scam though.
// So yes it can be.
// - Are you sure you are on the right website?
// - Do you know what dev is thinking?
// - Do you know what the community is thinking?
// - Do you know what the market is thinking?
// - Do you know what the future is thinking?
// - Do you know what the past is thinking?
// - Do you know what the present is thinking?
// - Do you know what the past is thinking?
// There are many things that you don't know. and need to be concerned about. Therefore always DYOR and never trust anyone trying to sell you something. Remember meme coins are not investments. You losing all your money is more likely than you being rich.
// Stay Concerned.
// ---
//
// ## Transaction Support
// ### Why isn't my swap completing?
// Common fixes:
// 1. **Increase slippage** to 5-7% in DEX settings.
// 2. Ensure sufficient ETH for gas (minimum 0.01 ETH recommended).
// 3. Clear browser cache or try a different RPC endpoint.
//
// ### How long do transactions take on Base?
// Base Network processes blocks in **2 seconds**, with swaps typically confirming within **15-30 seconds**.
//
// ---
//
// ## Wallet & Security
// ### Which wallets support $CONCERN?
// All EVM-compatible wallets with Base Network configuration, to name a few:
// - **Rabby Wallet**
// - **MetaMask**
// - **Trust Wallet**
// - **Coinbase Wallet**
// - **Ledger** (via MetaMask integration)
// - **Trezor** (via MetaMask integration)
//
// ### I sent $CONCERN to the wrong address. Can I recover it?
// Blockchain transactions are irreversible. Always triple-check addresses before confirming.
// But there is a good side your failure to verify the address, you can now say goodbye to your $CONCERN's.
//
// ---
//
// ## Tokenomics & Project Details
// ### Where can I view $CONCERN's tokenomics?
// Visit the **Tokenomics** section on the top of the website or analyze the contract directly via **Basescan**:
// `https://basescan.org/token/0x8f5a590be0b27feb5bffaab82bbf31d3c7efe222`. You can also checkout [flaunch docs](https://docs.flaunch.gg/) and checkout Fixed Price Fair launch, Auto buybacks, Devs get Revs and memestream sections to get more information.
//
// ### How does $CONCERN ensure fair distribution?
// - **No Pre-Sale or Allocation**: All tokens launched via [Fixed Fair Price Launch](https://docs.flaunch.gg/core-features/fixed-price-fair-launch).
// - All the $CONCERN's team holds is bought the same way everyone else does. Free market baby.
//
// ---
//
// ## Regulatory Compliance
// ### Are $CONCERN transactions taxable?
// Cryptocurrency transactions may incur capital gains taxes in your jurisdiction. Consult a tax professional and track trades using tools like **CoinTracker** or **Koinly**.
//
// ### Is $CONCERN available in restricted countries?
// Yes, because the liquidity is deployed on Uniswap, $CONCERN is available in all countries (thanks to blockchain). However, there might be frontends that restrict access to certain countries. it does not prevent you from buying $CONCERN through other frontends or smart contracts though.
//

// const dump_data = [
//   {
//     title: "Primary Concerns",
//     content: (
//       <ul className="text-muted-foreground text-sm">
//         <li>Privacy & Anonimity</li>
//         <li>Freedom of Expression</li>
//         <li>Accountability</li>
//         <li>Sustainability</li>
//       </ul>
//     ),
//   },
//   {
//     title: "What's a meme coin?",
//     content: (
//       <p className="text-muted-foreground">
//         Meme coins are a type of cryptocurrency with no intrinsic value, but are
//         traded amongst a community who share a common interest/humor. These
//         coins are often created as a joke or parody, and are not intended to be
//         used as a serious investment!
//       </p>
//     ),
//   },
//   {
//     title: "Community",
//     content: (
//       <p className="text-muted-foreground">
//         The best memecoins are only as good as their community. Community
//         participation is both vital, and based. Join your brothers and sisters
//         in memes, and together we can spread the word – the based king is coming
//         for his throne.
//       </p>
//     ),
//   },
//   {
//     title: "Onchain Giving & Enabling",
//     content: (
//       <p className="text-muted-foreground">
//         Concernors seek to use its platform and treasury to give back and
//         enable. Whether it would be donating to great causes, or enabling
//         builders and artists on Base by providing funding, Mochi strives to be a
//         key player in the Base ecosystem and pushes to cultivate the culture
//         onchain.
//       </p>
//     ),
//   },
// ];

// const how_to_buy_data = [
//   {
//     title: "Introduction",
//     content: (
//       <ul className="text-muted-foreground text-sm">
//         <li>Privacy & Anonimity</li>
//         <li>Freedom of Expression</li>
//         <li>Accountability</li>
//         <li>Sustainability</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Add Base network to your wallet",
//     content: (
//       <p className="text-muted-foreground">
//         Meme coins are a type of cryptocurrency with no intrinsic value, but are
//         traded amongst a community who share a common interest/humor. These
//         coins are often created as a joke or parody, and are not intended to be
//         used as a serious investment!
//       </p>
//     ),
//   },
//   {
//     title: "Bridge your ETH to Base",
//     content: (
//       <p className="text-muted-foreground">
//         The best memecoins are only as good as their community. Community
//         participation is both vital, and based. Join your brothers and sisters
//         in memes, and together we can spread the word – the based king is coming
//         for his throne.
//       </p>
//     ),
//   },
//   {
//     title: "Swap your ETH for $CONCERN",
//     content: (
//       <p className="text-muted-foreground">
//         Concernors seek to use its platform and treasury to give back and
//         enable. Whether it would be donating to great causes, or enabling
//         builders and artists on Base by providing funding, Mochi strives to be a
//         key player in the Base ecosystem and pushes to cultivate the culture
//         onchain.
//       </p>
//     ),
//   },
// ];

const wallet_security_sections = [
  {
    title: "Which wallets support $CONCERN?",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>
          All EVM-compatible wallets with Base Network configuration, to name a
          few:
        </p>
        <ul className="list-disc pl-4">
          <li>
            <strong>Rabby Wallet</strong>
          </li>
          <li>
            <strong>MetaMask</strong>
          </li>
          <li>
            <strong>Trust Wallet</strong>
          </li>
          <li>
            <strong>Coinbase Wallet</strong>
          </li>
          <li>
            <strong>Ledger</strong> (via MetaMask integration)
          </li>
          <li>
            <strong>Trezor</strong> (via MetaMask integration)
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "I sent $CONCERN to the wrong address. Can I recover it?",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>
          Blockchain transactions are irreversible. Always triple-check
          addresses before confirming.
        </p>
        <p>
          But there is a good side your failure to verify the address, you can
          now say goodbye to your $CONCERN's.
        </p>
      </div>
    ),
  },
];

const transaction_support_sections = [
  {
    title: "Why isn't my swap completing?",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>Common fixes:</p>
        <ol className="list-decimal pl-4">
          <li>
            <strong>Increase slippage</strong> to 5-7% in DEX settings.
          </li>
          <li>Ensure sufficient ETH for gas (minimum 0.01 ETH recommended).</li>
          <li>Clear browser cache or try a different RPC endpoint.</li>
        </ol>
      </div>
    ),
  },
  {
    title: "How long do transactions take on Base?",
    content: (
      <div className="text-muted-foreground text-sm">
        <p>
          Base Network processes blocks in <strong>2 seconds</strong>, with
          swaps typically confirming within <strong>15-30 seconds</strong>.
        </p>
      </div>
    ),
  },
];

const tokenomics_sections = [
  {
    title: "Where can I view $CONCERN's tokenomics?",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>
          Visit the <strong>Tokenomics</strong> section on the top of the
          website or analyze the contract directly via <strong>Basescan</strong>
          :{" "}
          <code>
            https://basescan.org/token/0x8f5a590be0b27feb5bffaab82bbf31d3c7efe222
          </code>
          . You can also checkout{" "}
          <a href="https://docs.flaunch.gg/" className="underline">
            flaunch docs
          </a>{" "}
          and checkout Fixed Price Fair launch, Auto buybacks, Devs get Revs and
          memestream sections to get more information.
        </p>
      </div>
    ),
  },
  {
    title: "How does $CONCERN ensure fair distribution?",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <ul className="list-disc pl-4">
          <li>
            <strong>No Pre-Sale or Allocation</strong>: All tokens launched via{" "}
            <a
              href="https://docs.flaunch.gg/core-features/fixed-price-fair-launch"
              className="underline"
            >
              Fixed Fair Price Launch
            </a>
            .
          </li>
          <li>
            All the $CONCERN's team holds is bought the same way everyone else
            does. Free market baby.
          </li>
        </ul>
      </div>
    ),
  },
];

const regulatory_sections = [
  {
    title: "Are $CONCERN transactions taxable?",
    content: (
      <div className="text-muted-foreground text-sm">
        <p>
          Cryptocurrency transactions may incur capital gains taxes in your
          jurisdiction. Consult a tax professional and track trades using tools
          like <strong>CoinTracker</strong> or <strong>Koinly</strong>.
        </p>
      </div>
    ),
  },
  {
    title: "Is $CONCERN available in restricted countries?",
    content: (
      <div className="text-muted-foreground text-sm">
        <p>
          Yes, because the liquidity is deployed on Uniswap, $CONCERN is
          available in all countries (thanks to blockchain). However, there
          might be frontends that restrict access to certain countries. it does
          not prevent you from buying $CONCERN through other frontends or smart
          contracts though.
        </p>
      </div>
    ),
  },
];

const digital_wallet_sections = [
  {
    title: "Setting Up a Base-Compatible Wallet",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>To begin your $CONCERN journey, you'll need a cryptocurrency wallet supporting the Base network. <strong>MetaMask</strong> is the most widely used option, though alternatives like <strong>Rabby Wallet</strong> or <strong>Coinbase Wallet</strong> are equally effective.</p>
        <ol className="list-decimal pl-4">
          <li><strong>Download Rabby, Coinbase Wallet, MetaMask or any other wallet supporting the Base network</strong>: Install the browser extension or mobile app from official sources.</li>
          <li><strong>Create/Import Wallet</strong>: Generate a new wallet or import an existing one using a recovery phrase.</li>
          <li><strong>Secure Your Wallet</strong>: Enable two-factor authentication (2FA) and store your recovery phrase offline (recommended if your wallet supports it).</li>
        </ol>
      </div>
    )
  },
  {
    title: "Adding the Base Network",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <ol className="list-decimal pl-4">
          <li>Open your wallet and navigate to <strong>Networks</strong> > <strong>Add Network</strong>.</li>
          <li>Enter the following Base Mainnet details:
            <ul className="list-disc pl-4 mt-2">
              <li><strong>Network Name</strong>: Base</li>
              <li><strong>RPC URL</strong>: <code>https://mainnet.base.org</code></li>
              <li><strong>Chain ID</strong>: 8453</li>
              <li><strong>Currency Symbol</strong>: ETH</li>
              <li><strong>Block Explorer</strong>: <code>https://basescan.org</code></li>
            </ul>
          </li>
          <li>Save and switch to the Base network.</li>
        </ol>
      </div>
    )
  }
];

const eth_transaction_sections = [
  {
    title: "Purchasing ETH on Centralized Exchanges",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <ol className="list-decimal pl-4">
          <li><strong>Sign Up</strong>: Create an account on platforms like <strong>Binance</strong>, <strong>Coinbase</strong>, or <strong>Kraken</strong>.</li>
          <li><strong>Buy ETH</strong>: Use fiat currency (USD, EUR, etc.) to purchase ETH via bank transfer or credit card.</li>
        </ol>
      </div>
    )
  },
  {
    title: "Bridging ETH to Base Network",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>If your ETH is on Ethereum Mainnet:</p>
        <ol className="list-decimal pl-4">
          <li>Visit <strong>Stargate Finance</strong> or <strong>Base Bridge</strong>.</li>
          <li>Connect your wallet and select the amount to transfer.</li>
          <li>Confirm the bridge transaction (allow ~5-10 minutes for completion).</li>
        </ol>
      </div>
    )
  }
];

const dex_purchase_sections = [
  {
    title: "Buying through Flaunch",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <ol className="list-decimal pl-4">
          <li>Navigate to <a href="https://flaunch.gg/base/coin/0x8F5A590Be0B27fEb5bFfaab82BBF31d3c7EFe222" className="underline">Flaunch</a>.</li>
          <li>Click <strong>Connect Wallet</strong> and authorize your wallet.</li>
          <li>Select the amount of ETH you want to spend on $CONCERN.</li>
          <li>Click <strong>Buy $CONCERN</strong>.</li>
        </ol>
      </div>
    )
  },
  {
    title: "Buying through Uniswap",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <ol className="list-decimal pl-4">
          <li>Navigate to <strong>uniswap.org</strong> on the Base network.</li>
          <li>Click <strong>Connect Wallet</strong> and authorize your wallet.</li>
        </ol>
      </div>
    )
  },
  {
    title: "Executing the Swap",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <ol className="list-decimal pl-4">
          <li>In the swap interface, paste $CONCERN's contract address:
            <br /><code>0x8f5a590be0b27feb5bffaab82bbf31d3c7efe222</code>
            <br /><em>Always verify this address via $CONCERN's official channels to avoid scams.</em>
          </li>
          <li>Select ETH as the input currency and $CONCERN as the output.</li>
          <li>Set slippage tolerance to <strong>1-5%</strong> to accommodate volatility.</li>
          <li>Confirm the transaction in MetaMask (gas fees typically ≤$0.50 on Base).</li>
        </ol>
      </div>
    )
  }
];

const post_purchase_sections = [
  {
    title: "Adding $CONCERN to Your Wallet",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <ol className="list-decimal pl-4">
          <li>In your wallet, click <strong>Import Tokens</strong>.</li>
          <li>Paste $CONCERN's contract address to auto-populate details.</li>
          <li>Save to view your balance instantly.</li>
        </ol>
      </div>
    )
  },
  {
    title: "Securing Your Assets",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <ul className="list-disc pl-4">
          <li>Transfer majority holdings to a <strong>hardware wallet</strong> (Ledger/Trezor).</li>
          <li>Avoid sharing private keys or recovery phrases.</li>
          <li>Bookmark $CONCERN's official links to prevent phishing.</li>
        </ul>
      </div>
    )
  }
];

const general_info_sections = [
  {
    title: "What is $CONCERN?",
    content: (
      <div className="text-muted-foreground text-sm">
        <p>$CONCERN is a community-driven meme token operating on the Base blockchain, combining viral appeal with decentralized governance features. Unlike traditional cryptocurrencies, it emphasizes cultural engagement through memes and social interaction.</p>
      </div>
    )
  },
  {
    title: "Is $CONCERN a scam?",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>$CONCERN is a fully transparent project launched through flaunch.gg. that doesn't prevent it from being a scam though.</p>
        <p>So yes it can be.</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Are you sure you are on the right website?</li>
          <li>Do you know what dev is thinking?</li>
          <li>Do you know what the community is thinking?</li>
          <li>Do you know what the market is thinking?</li>
          <li>Do you know what the future is thinking?</li>
          <li>Do you know what the past is thinking?</li>
          <li>Do you know what the present is thinking?</li>
        </ul>
        <p className="mt-2">There are many things that you don't know and need to be concerned about. Therefore always DYOR and never trust anyone trying to sell you something. Remember meme coins are not investments. You losing all your money is more likely than you being rich.</p>
        <p className="font-bold mt-2">Stay Concerned.</p>
      </div>
    )
  }
];


const FAQs = () => (
  <div className="w-full lg:w-2/3 flex flex-col">
    <p>Concernoors united</p>

    <h1 className="text-xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
    <Accordion type="single" collapsible>
      {[...general_info_sections, ...tokenomics_sections, ...wallet_security_sections, ...transaction_support_sections].map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
      ))}


    </Accordion>
  </div>
)

// Update the Dump2 component to include all sections
export const Dump2 = () => (
  <div className="w-full flex flex-col gap-8">
    <div>
      <h1 className="text-xl font-bold mb-4">How to Buy $CONCERN on Base Network</h1>
      <p className="text-muted-foreground mb-4">A Comprehensive Step-by-Step Guide for Seamless Acquisition</p>
    </div>

    <div>
      <Accordion type="single" collapsible>
        <h2 className="font-semibold mb-4">Preparing Your Digital Wallet</h2>
        {digital_wallet_sections.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}

        <h2 className="font-semibold my-4">Acquiring Ethereum (ETH)</h2>
        {eth_transaction_sections.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}

        <h2 className="font-semibold my-4">Purchasing via DEX</h2>
        {dex_purchase_sections.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}

        <h2 className="font-semibold my-4">Post-Purchase Steps</h2>
        {post_purchase_sections.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}

        <h2 className="font-semibold my-4">General Information</h2>
        {general_info_sections.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}

        <h2 className="font-semibold my-4">Wallet & Security</h2>
        {wallet_security_sections.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}

        <h2 className="font-semibold my-4">Transaction Support</h2>
        {transaction_support_sections.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}

        <h2 className="font-semibold my-4">Tokenomics & Project Details</h2>
        {tokenomics_sections.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}

        <h2 className="font-semibold my-4">Regulatory Compliance</h2>
        {regulatory_sections.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Heading />
      <div className="bg-dotted w-full h-12" />
      <div className="flex flex-col lg:flex-row gap-8">
        <Quests />
        <FAQs />

        {/* <Dump2 /> */}
      </div>
      <div className="bg-dotted w-full h-12" />
    </>
  );
}
