# DNSControl Blueprint

This Repository is a quick way to start using DNS control with Cloudflare.

To start using just clone this repository and do the following:

## 1. Create a Account API Token

For this visit your [Cloudflare Dashboard](https://dash.cloudflare.com/) then in the left menu go to Manage Account -> Account API Tokens and create an API token with the permission "Edit zone DNS".
Copy the API Token and your account id (The account ID can be find in the URL dash.cloudflare.com/\<AccountID>/api-tokens).

## 2. Add Secrets to Github

In your repository go the repository settings -> Secrets and variables -> Actions and add a the repository settings -> Secrets and variables -> Actions.
There add a secret named _CLOUDFLARE_API_TOKEN_ with your Token and a Variable named _CLOUDFLARE_API_ACCOUNTID_ with your account id.

## 3. Edit the dnsconfig.js

In the dnsconfig.js replace all example.com values with your own domain and configure the needed DNS records for your Domain under the D Function.

## Optional

You can move your domain configuration to separated files, for this remove the // of the line `//require_glob("./Domains/",true);` and create a Domains/ folder in the project, in the folder you can add then multiple files which contain your domain definitions.

## More Information

A more detailed explanation of the setup for DNSControl can be found on [ny Website](https://zeller.sh/article/cloud/dnspipeline.html)
