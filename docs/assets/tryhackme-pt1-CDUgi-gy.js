const e=`# TryHackMe Junior Penetration Tester (PT1)

Passed the TryHackMe Junior Penetration Tester (PT1) exam in April 2026.

![TryHackMe PT1 Certification](/tryhackme-pt1.png)

PT1 is a hands-on exam, not multiple choice — you get dropped into a network and actually have to compromise machines under time pressure. Getting there meant grinding the full Jr Penetration Tester path and then proving it end to end.

## What it covered

The path runs through the whole entry-level offensive workflow:

- Recon and enumeration — scanning, service enumeration, and walking web apps by hand.
- Web exploitation — the OWASP top 10 in practice: SQL injection, broken auth, IDOR, file upload, command injection.
- Network exploitation — getting an initial foothold, then abusing services and misconfigurations into a shell.
- Privilege escalation on both Linux and Windows.
- The usual tooling (Metasploit, Burp, nmap), plus doing the same things by hand when the tool doesn't fit.

## What actually stuck

- Enumeration is most of the job. The exploit is usually the easy part once you've genuinely understood the box — the time goes into looking properly.
- Adversarial thinking: treat every input as abusable and every default as a mistake until proven otherwise.
- Take notes as you go. On the exam, a messy methodology costs you more than a missing tool ever does.
`;export{e as default};
