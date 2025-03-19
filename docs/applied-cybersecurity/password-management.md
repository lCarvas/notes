# Password Management

## How to see the packet

- Go to this [website](http://testphp.vulnweb.com/)
- Open Wireshark and start capturing
- Create an account with random password
- Log in
- Stop capturing
- Find the HTTP packet with login.php/signup.php
- Right click -> Follow -> HTTP stream
- Search for your username, password should be right after
  