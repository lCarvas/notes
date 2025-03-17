# MC: 1 Sniffing using Wireshark

Attackers will simulate network attack; Detect the attack using Wireshark; the Defender will secure the detected vulnerabilities.

## Presentation format

- 15 mins maximum
- 5 min theoretical presentation: Summary of the mini-case, explain scenario

1. 10 min practical demonstration

## TO-DO list

- [x] Setup scenario
- [ ] Create script/scenario
- [ ] Test DDOS with LOIC with and without HPING3
- [ ] Test with port 80 closed, firewall activated and with antivirus
- [ ] Test with port 80 opened, no firewall and no antivirus
- [ ] Figure out ways to defend against the DDOS

## Scenario

Neighbours, the attacked household, has a dog. Every time the attacked go walk their dog, the dog poops in front of their neighbour's/attacker's house. The attacker, tired of this behavior decides to get revenge on the neighbour. The attacker goes to the neighbour's house, pretending to need their Wi-Fi, because his own Wi-Fi is currently not working due to a mistake on the ISP's side. The attacker acquire the attacked's Wi-Fi password. The attacker knows that the attacked is hosting a minecraft server for their friends. The attacker then proceeds to send a DOS attack to the neighbour's network, completely ruining his minecraft server, as the Attacked neighbour does not have any DOS protection. Fast Forward a bit, the Attacked neighbour acquires a software, (lets all thank the sponsor of today's video xd) Norton, which has DOS attack protection. The Attacked neighbour does not have their seerver ruined, the Attacker still gets dog shit in front of their house. All is well when it ends well.

---

## Relevant Information

- Probably worth mentioning that perhaps looking at certain types of packets incoming (from hping3) could be intelligent if the attack was a DOS (one ip) but since it's a DDOS attack, multiple ID's could be used rendering useless the technique of blocking a certain IP
- Group will use firewall whitelisting, allowing only packets from whitelisted ips
- LOIC's UDP Flood attacks send UDP packets to random destination ports. As such, closing a specific port is an uneffective solution
- IP whitelisting using iptables or ufw should protect the user from the DOS/DDOS attacks
