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

- Run dumpcap over ssh (secure shell)
  - ssh -t carva@94.62.12.13 "dumpcap -i WiFi"
- Run scp (secure copy protocol)
  - scp carva@94.62.12.13:&lt;pathToWantedFile&gt; &lt;pathToDestinationDirectory&gt;
- Open Wireshark, open file analyze packets

## Script

(Voiceover script)
In the last episode [Next Slide]:

We saw how our attackers used [click] Social engineering to figure out the internet password, thus were able to sniff packets and found out the neighbors were using a minecraft server, trying to have fun. Now the attackers are very familiar with the ins and outs of a minecraft server so they knew the port to aim at.

[click] With hping3 and LOIC our attackers were able to send [click] a DOS attack, flooding their server with SYN packets which caused immense latency issues and thus disturbed their gaming session.

And the defenders,[click] protected themselves by noticing the unexpected flood of requests from an unknown ip, verified by wireshark

Then, [click] swiftly the defenders activated a script that created a rule in their Firewall defense which filters all requests from a specific ip.

Story beats:
Alex/Miguel are in their living room, writting the plan to attack again
Carvas/Eli are online http page, start a session in a site.
Miguel/Alex go for the password
Carvas/Eli online in https site, start a session
Miguel/Alex dont see the password
Using Different passwords for different sites is also good practice

## References

canva presentation: <https://www.canva.com/design/DAGipctsa8I/gIE_1aPStpsXruENSbj28A/edit?utm_content=DAGipctsa8I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton>

<https://www.wireshark.org/docs/man-pages/dumpcap.html>

<https://en.wikipedia.org/wiki/Secure_Shell>

<https://en.wikipedia.org/wiki/Secure_copy_protocol#:~:text=Secure%20copy%20protocol%20(SCP)%20is,Secure%20Shell%20(SSH)%20protocol.>
