import css from "./Content.module.css";

export default function Content() {
	const initScreenContent = `
                    'c.        
                 ,xNMM.        
               .OMMMMo         
               OMMM0,          
     .;loddo:' loolloddol;.    
   cKMMMMMMMMMMNWMMMMMMMMMM0:  
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.  
 XMMMMMMMMMMMMMMMMMMMMMMMX.    
;MMMMMMMMMMMMMMMMMMMMMMMM:     
:MMMMMMMMMMMMMMMMMMMMMMMM:     
.MMMMMMMMMMMMMMMMMMMMMMMMX.    
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.  
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk 
  .XMMMMMMMMMMMMMMMMMMMMMMMMK. 
    kMMMMMMMMMMMMMMMMMMMMMMd   
     ;KMMMMMMMWXXWMMMMMMMk.    
       .cooc,.    .,coo:.
   `;

	const systemInfo = `
user@macbookpro.local
--------------------------
OS: macOS 14.1.2 23B92 arm64
Host: MacBookPro18,3
Kernel: 23.1.0
Uptime: 8 days, 5 hours, 23 mins
Packages: 240 (brew), 48 (nix-user)
Shell: zsh 5.9
Resolution: 3360x1890
DE: Aqua
WM: Rectangle
Terminal: iTerm2
Terminal Font: JetBrainsMonoNFM-Regular 12
CPU: Apple M1 Pro
GPU: Apple M1 Pro
Memory: 3017MiB / 16384MiB
   `;

	return (
		<div className={css.root}>
			<pre>{initScreenContent}</pre>
			<pre>{systemInfo}</pre>
		</div>
	);
}
