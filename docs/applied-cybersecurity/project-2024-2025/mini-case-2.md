# MC2: Password Management

## TO-DO

- [x] Sniff HTTP, show that it is not encrypted, not secure
- [x] Sniff HTTPS, show that it is encrypted, secure
- [x] Explain the process of HTTP and HTTPS
- [x] Figure out how to sniff traffic of remote PC

## Steps

Important to note that these steps may change slightly due to the creation of an ssh-keypair

- Run dumpcap over ssh (secure shell)
  - ssh -t carva@94.62.12.13 "dumpcap -i WiFi"
- Run scp (secure copy protocol)
  - scp carva@94.62.12.13:&lt;pathToWantedFile&gt; &lt;pathToDestinationDirectory&gt;
- Open Wireshark, open file analyze packets

## References

<https://www.wireshark.org/docs/man-pages/dumpcap.html>
<https://en.wikipedia.org/wiki/Secure_Shell>
<https://en.wikipedia.org/wiki/Secure_copy_protocol#:~:text=Secure%20copy%20protocol%20(SCP)%20is,Secure%20Shell%20(SSH)%20protocol.>
