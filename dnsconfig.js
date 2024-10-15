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

var DefaultMX = [
    MX("@", 10, "mail.example.com."),
    MX("@", 20, "mailsec.example.com.")
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
    DefaultMX,
    DefaultSPF,
    ALIAS("@","dyn.example.com."),
    CNAME("www","example.com."),
    A("test","8.8.8.8")
);