// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

//
// Default Variables
//

var REG_NONE = NewRegistrar("none");
var DNS_CLOUDFLARE = NewDnsProvider("cloudflare");

var DefaultCAA = [
    CAA_BUILDER({
        label: "@",
        iodef: "mailto:cert@example.com",
        issue: [
        "letsencrypt.org", //letsencrypt
        "sectigo.org", //zeroSSL
        ],
        issuewild: [
            "letsencrypt.org", //letsencrypt
            "sectigo.org", //zeroSSL
        ],
        })
    ]

var DefaultDMARC = [
    DMARC_BUILDER({
        policy: "quarantine",
        rua: [
            "mailto:webmaster@example.com"
        ],
        ruf: [
            "mailto:webmaster@example.com"
        ],
    })
]

var DefaultSPF = [
    SPF_BUILDER({
        label: "@",
        overflow: "_spf%d",
        parts: [
            "v=spf1",
            "include:sendgrid.net",
            "a:mail.example.com",
            "mx",
        ]
    })
]

//
// Import Domains from Domains Folder
//
//require_glob("./Domains/",true);

//
//Domains
//
D("example.com", REG_NONE, DnsProvider(DNS_CLOUDFLARE),DefaultTTL("5m"),
    CF_PROXY_DEFAULT_OFF, //disables proxy default for that domain
    DefaultCAA,
    DefaultDMARC,
    DefaultSPF,
    ALIAS("@","dyn.example.com."),
    CNAME("www","example.com."),
    A("ipv4","8.8.8.8"),
    A("ipv6","::1"),
    MX("@", 10, "mail.example.com."),
    //Ignore Let's Encrypt Records
    IGNORE("_acme-challenge", "TXT"),
    IGNORE("_acme-challenge.**", "TXT"),
);