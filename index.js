const messages = ["Abstraction gambles with lives, happiness, and even destiny itself!", "Enqoyism lies ahead, what with the future yet to come.", "Nihilism is like a summer breeze.", "Hello, World!!!", "The clear star that is yesterday brings both pleasure and pain.",  
`
██╗  ██╗███████╗██╗     ██╗      ██████╗        ██╗    ██╗██████╗  ██████╗  ██╗ ██╗  ██████╗  ██╗██╗  ██╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗       ██║    ██║██╔══██╗██╔════╝ ████████╗██╔═████╗███║██║  ██║
███████║█████╗  ██║     ██║     ██║   ██║       ██║ █╗ ██║██║  ██║██║  ███╗╚██╔═██╔╝██║██╔██║╚██║███████║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║       ██║███╗██║██║  ██║██║   ██║████████╗████╔╝██║ ██║╚════██║
██║  ██║███████╗███████╗███████╗╚██████╔╝▄█╗    ╚███╔███╔╝██████╔╝╚██████╔╝╚██╔═██╔╝╚██████╔╝ ██║     ██║
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚══╝╚══╝ ╚═════╝  ╚═════╝  ╚═╝ ╚═╝  ╚═════╝  ╚═╝     ╚═╝
                                                                                                         
                                            
`,
`
 /$$   /$$           /$$ /$$                 /$$      /$$                     /$$       /$$ /$$
| $$  | $$          | $$| $$                | $$  /$ | $$                    | $$      | $$| $$
| $$  | $$  /$$$$$$ | $$| $$  /$$$$$$       | $$ /$$$| $$  /$$$$$$   /$$$$$$ | $$  /$$$$$$$| $$
| $$$$$$$$ /$$__  $$| $$| $$ /$$__  $$      | $$/$$ $$ $$ /$$__  $$ /$$__  $$| $$ /$$__  $$| $$
| $$__  $$| $$$$$$$$| $$| $$| $$  \\ $$      | $$$$_  $$$$| $$  \\ $$| $$  \\__/| $$| $$  | $$|__/
| $$  | $$| $$_____/| $$| $$| $$  | $$      | $$$/ \\  $$$| $$  | $$| $$      | $$| $$  | $$
| $$  | $$|  $$$$$$$| $$| $$|  $$$$$$//$$   | $$/   \\  $$|  $$$$$$/| $$      | $$|  $$$$$$$ /$$
|__/  |__/ \\_______/|__/|__/ \\______/| $/   |__/     \\__/ \\______/ |__/      |__/ \\_______/|__/
                                     |_/                                                    
                                                                                           
                                                                                           
`]

const createRndNumber = () => Math.floor(Math.random()*messages.length)

const createRndMessage = () => console.log(messages[createRndNumber()])

createRndMessage();
