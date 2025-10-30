const e=`# HackTheBox: Escape Machine Writeup

This writeup covers the exploitation of the "Escape" machine from HackTheBox, a Windows-based system that required SQL injection, Kerberos attacks, and privilege escalation techniques.

## Initial Reconnaissance

Started with a standard nmap scan to identify open ports and services:

\`\`\`bash
nmap -sC -sV -oA escape 10.10.11.202
\`\`\`

The scan revealed several interesting services:
- Port 53 (DNS)
- Port 88 (Kerberos)
- Port 135 (RPC)
- Port 139/445 (SMB)
- Port 1433 (MSSQL)

## SQL Server Enumeration

The MSSQL service was running and accepting connections. Used \`mssqlclient.py\` from Impacket to connect:

\`\`\`bash
mssqlclient.py guest@10.10.11.202 -windows-auth
\`\`\`

Successfully connected with guest credentials and discovered the ability to enable \`xp_cmdshell\`.

## Initial Foothold

Leveraged the MSSQL service to execute commands and establish a reverse shell:

\`\`\`sql
EXEC sp_configure 'show advanced options', '1'
RECONFIGURE
EXEC sp_configure 'xp_cmdshell', '1'  
RECONFIGURE
\`\`\`

Then executed a PowerShell reverse shell payload to gain initial access.

## Domain Enumeration

Once on the system, used BloodHound and SharpHound to map the Active Directory environment:

\`\`\`powershell
.\\SharpHound.exe -c All --zipfilename escape.zip
\`\`\`

The analysis revealed several potential privilege escalation paths through Kerberos delegation attacks.

## Privilege Escalation

Found that the compromised service account had constrained delegation privileges. Used Rubeus to perform a constrained delegation attack:

\`\`\`powershell
.\\Rubeus.exe s4u /user:sqlsvc /rc4:hash /impersonateuser:administrator /msdsspn:cifs/dc01.sequel.htb /ptt
\`\`\`

This granted administrative access to the domain controller, allowing for complete system compromise.

## Key Takeaways

1. **SQL Server Security**: Default configurations often allow dangerous operations
2. **Kerberos Attacks**: Understanding delegation can lead to privilege escalation
3. **Active Directory**: Proper enumeration is crucial for identifying attack paths
4. **Defense**: Monitor for unusual Kerberos ticket requests and SQL server activities

## Remediation

- Disable unnecessary SQL Server features like \`xp_cmdshell\`
- Implement proper Kerberos delegation controls
- Use service accounts with minimal privileges
- Enable comprehensive logging for security monitoring

This machine provided excellent practice with Windows Active Directory attacks and demonstrated the importance of proper service account management in enterprise environments.
`;export{e as default};
