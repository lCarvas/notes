# MC1:  Sniffing using Wireshark

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

Diogo and Eli have a Minecraft server, they are neighbours of Miguel and Alex.
Diogo and Eli have a dog, they walk this dog everyday, the dog has a tendency to poop in front of their neighbours, Miguel and Alex', house. One day, Miguel and Alex, become tired of this behavior, and decide to ruin Diogo and Eli's Minecraft server by doing a DOS attack. They go over to their neighbours' house, pretending to be interested in watching a movie with Eli and Diogo. After getting into their house, they request the Wi-Fi password. Their neighbours, unaware of their true intentions, give it to them. After acquiring the Wi-Fi password, Alex and Miguel have everything they need to start the attack. They start an attack to port 25565, the port of the Minecraft Server (show task manager impact).

### If Diogo succeeds in stopping the attack

Since Diogo has some knowledge in cybersecurity, he manages to block the neighbours' attack by blocking their ip (show task manager impact).

### If Diogo DOES NOT succeed in stopping the attack (most likely option)

Diogo is an absolute dingus and has no clue about cybersecurity, as such, his Minecraft server is impacted and he and his friends are unable to play.

---

## Script

As our main characters, Diogo and Alex will not have many speaking roles in the play.
We start off by Miguel explaining the issue.

**Miguel:** I live with Alex, our neighbours are so annoying! They walk their dog everyday. Every day! AND they never pick up after the dog. I hate that dog and I hate our neighbours.

**Miguel:** So you know what we did? We went to their house, to "watch a movie" [Miguel points towards Alex and Diogo]

**Alex:** Oh, by the way, could you tell me your wifi password? I just need to send an e-mail.

[Back to Miguel and Eli]

**Eli:** I remember that day, ii was so excited, telling Miguel that me, Diogo and our other friends have a minecraft server. Diogo hosts it himself!

**Miguel:** Right there we knew how we were going to get our revenge!

[With our scenario explained, we start the attack. Diogo and Alex can narrate their actions, to give context to what they are doing]

## Relevant Information

- Probably worth mentioning that perhaps looking at certain types of packets incoming (from hping3) could be intelligent if the attack was a DOS (one ip) but since it's a DDOS attack, multiple ID's could be used rendering useless the technique of blocking a certain IP
- Group will use firewall whitelisting, allowing only packets from whitelisted ips
- LOIC's UDP Flood attacks send UDP packets to random destination ports. As such, closing a specific port is an uneffective solution
- IP whitelisting using iptables or ufw should protect the user from the DOS/DDOS attacks

### Relevant Theoretical

- **OSI Layers**

  ![OSI-Layers](../assets/OSI-7-layers.jpg)

    1. **Phisical Layer:**
    2. **Data Link Layer:**
    3. **Network Layer:**
    4. **Transport Layer:** Provides end-to-end communication services.
    5. **Session Layer:** Manages and controls the connections between computers. Establishes, maintains and terrminates connections. Key functionalities: session checkpoint and recovery.
    6. **Presentation Layer:** a.k.a syntax layer, respomsible for translating data between layer 7 and layer 3. Key functionalities: data formatting, encryption, compression.
    7. **Application Layer:** Interface between the end-user applications and underlying network services. Key funcionalities: resource sharing, remote file access and network management.

- TPC
- UDP
- LOIC
