module.exports = ({
   name: "set-prefix",
   aliases: "prefix",
   code: ` Mi nuevo prefix es ( $message ) $setServerVar[prefix;$message] $onlyPerms[admin;Lo siento solo **Administradores** pueden cambiar mi prefix`
});
