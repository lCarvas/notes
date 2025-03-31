# MC3: Symmetric Encryption (ig not)

## RP

- Brief introduction, remember the class of last week's situation
- Alex uses the fact that he has ssh access to put a keylogger on Diogo's PC, gaining access to his traffic
- Introduce a situation where Alex doesn't have access to the ssh server, RP could end here, this mini-case is can be very theoretical
- End RP, start nerd shit

## What if Alex doesn't have access to the ssh server? And other related situations

- Website password bruteforce using hydra
  - Could we selfhost a version of Socialhire? Could be good as to not get rate limited and show the full potential of Hydra. Could also make RP around it?
- John the Ripper on Linux to unhash the password (I'm unsure about this part, I will rely on you guys, please carry me here)
- Bruteforcing ssh using hydra
  - Show the option of making a firewall whitelist
  - Explain why this is not a perfect solution
    - Allowing an IP of a different network means all devices on said network have access to the ssh server
    - Try bruteforcing, should not work as I will disable password login, this is an introduction to the next point (needs testing to see Hydra's output on this situation)
    - Perfect solution would include a VPN (give the example of specific software that are only available when in NOVA or when using the VPN. e.g. PowerDesigner) and a keypair
  - Explain keypairs and why they are important
