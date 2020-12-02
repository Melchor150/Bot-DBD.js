module.exports = ({
   name: "ayuda",
   aliases: "help",
   code: `$color[$getServerVar[color]]
$title[Lista de Comandos]
$description[Mi prefix es **( $getServerVar[prefix] )**

**ADMIN**
\`set-prefix \`

**OTROS**
\`help \`
]`
});
