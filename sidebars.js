/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  tutorialSidebar: [
    "intro",
    {
      type: "html",
      className: "sidebar-divider",
      value: "<div/>"
    },
    {
      type: "category",
      label: "Core Concepts",
      link: { type: "doc", id: "core/index" },
      collapsible: false,
      collapsed: false,
      className: "CoreClass",
      items: [
        "core/what-is-ens",
        "core/ens-use-cases",
        {
          type: "category",
          label: "Design",
          link: { type: "doc", id: "core/design/index" },
          collapsible: true,
          collapsed: true,
          items: [
            "core/design/how-ens-works",
            "core/design/where-are-names-stored",
            "core/design/terminology",
          ],
         },
         {
          type: "category",
          label: "Registration",
          link: { type: "doc", id: "core/registration/index" },
          collapsible: true,
          collapsed: true,
          items: [
            "core/registration/registration-steps",
            "core/registration/fees",
            "core/registration/renewals",
            "core/registration/name-lifecycle",
            "core/registration/temporary-premium",
            "core/registration/integrating-dns",
          ],
         },
         {
          type: "category",
          label: "Records",
          link: { type: "doc", id: "core/records/index" },
          collapsible: true,
          collapsed: true,
          items: [
            "core/records/eth-address",
            "core/records/primary-name",
            "core/records/avatar",
            "core/records/coin-types",
            "core/records/social",
            "core/records/content-hash",
            "core/records/custom-records",
            "core/records/resolver",
          ],
        },
      ],
    },
    {
      type: "html",
      className: "sidebar-divider",
      value: "<div/>"
    },
    {
      type: "category",
      label: "Support FAQ",
      link: { type: "doc", id: "faq/index" },
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Marketplaces",
          link: { type: "doc", id: "faq/marketplaces/index" },
          collapsible: true,
          collapsed: true,
          items: [
            "faq/marketplaces/opensea",
            "faq/marketplaces/ensvision",
           ],
        },
        {
          type: "category",
          label: "Wallets",
          link: { type: "doc", id: "faq/wallets/index" },
          collapsible: true,
          collapsed: true,
          items: [
            "faq/wallets/coinbase_wallet",
            "faq/wallets/ledger",
            "faq/wallets/metamask",
            "faq/wallets/metamask_mobile",
            "faq/wallets/trezor",
          ],
        },
        "faq/secondary_market",
        "faq/security",
        "faq/contributor-guidelines",
	"faq/bug-bounty",
      ]
    },
    {
      type: "html",
      className: "sidebar-divider",
      value: "<div/>"
    },
    {
      type: "category",
      label: "Learning Resources",
      link: { type: "doc", id: "howto/index" },
      collapsible: false,
      collapsed: false,
      items: [
        "howto/add-custom-record",
        "howto/v3-add-custom-record",
        "howto/add-wallet-address",
        "howto/v3-add-wallet-address",
        "howto/decentralized_website",
        "howto/v3-decentralized-website",
        "howto/link-dns-name",
        "howto/v3-integrate-dns",
        "howto/registration",
        "howto/v3-registration",
        "howto/set-avatar",
	"howto/v3-set-avatar",
        "howto/set-primary-name",
        "howto/v3-set-primary-name",
        "howto/set-record",
	"howto/v3-set-record",
        "howto/set-twitter-name",
        "howto/test-v3-manager",
        "howto/transfer-name",
        "howto/v3-transfer-name",
      ],
    },
  ],
};

module.exports = sidebars;
