# MC2: Password Management

## TO-DO

- [x] Sniff HTTP, show that it is not encrypted, not secure
- [x] Sniff HTTPS, show that it is encrypted, secure
- [x] Explain the process of HTTP and HTTPS
- [x] Figure out how to sniff traffic of remote PC
- [ ] Script
- [ ] Presentation
- [ ] Audio
- [ ] Trainning

## Steps

Important to note that these steps may change slightly due to the creation of an ssh-keypair

- Connect to Desktop over ssh (secure shell)
  - ssh carva@94.62.12.13 -i &lt;pathToPrivateKey&gt; (-i identity, private key)
- Run dumpcap to capture packets
  - dumpcap -i WiFi -q -f "not port 22" (-i interface to capture from, -q dont show number of packets while capturing, -f filters)
- Run scp (secure copy protocol)
  - scp -i &lt;pathToPrivateKey&gt; carva@94.62.12.13:&lt;pathToWantedFile&gt; &lt;pathToDestinationDirectory&gt; (-i identity, private key)
- Open Wireshark, open file analyze packets

## Script

(Voiceover script)
In the last episode [Next Slide]:

Our attackers, enraged by the neighbours' dog, decided to get revenge on them by attacking their minecraft server.
They used [click] Social engineering to figure out their neighbours' Wi-Fi password and as they were very familiar with the ins and outs of a minecraft server, they knew which port to aim at.

[click] Using LOIC (read full word, not letter by letter) our attackers were able to send [click] a DOS attack, flooding their neighbours' server with UDP packets which caused immense latency issues and thus disturbed their gaming session.

The defenders, [click] noticed the unexpected flood of requests from an unknown ip, verified by wireshark and [click] switfly activated a script that created a rule in their Firewall defense which filtered all requests from a specific ip.

Story beats:
Alex/Miguel are in their living room, writting the plan to attack again
Carvas asks Alex for help with defending his PC from attacks, as Carvas is dumb and naive and doesn't suspect that Alex was the one to attack him.
Alex uses the time in front of Carvas' PC to create an ssh-keypair, he then retreives the private key, allowing him to connect to Carvas' PC remotely
Now at home, Alex connects to Carvas' PC over ssh, and runs dumpcap to capture the packets of his PC
Carvas/Eli are online http page, log in
Carvas/Eli online in https site, log in
Miguel/Alex stop the capture and open the file in wireshark to analyse it
They see the plain text info in the http case, explain why
They don't see the info in the https case, explain why
Using Different passwords for different sites is also good practice

## References

canva presentation: <https://www.canva.com/design/DAGipctsa8I/gIE_1aPStpsXruENSbj28A/edit?utm_content=DAGipctsa8I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton>

<https://www.wireshark.org/docs/man-pages/dumpcap.html>

<https://en.wikipedia.org/wiki/Secure_Shell>

<https://en.wikipedia.org/wiki/Secure_copy_protocol#:~:text=Secure%20copy%20protocol%20(SCP)%20is,Secure%20Shell%20(SSH)%20protocol.>
