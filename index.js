const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./now.json");
require('http').createServer().listen(3000)
client.on('ready', () => {
  console.log(`El BOT esta funcionando correctamente.. Usuario ${client.user.tag}`);
});

let prefix = config.prefix;
var txt1,txt2,txt3,txt4,txt5,txt6;
var bloq1 = 0,bloq2 = 0,bloq3 = 0,bloq4 = 0,bloq5 = 0,bloq6 = 0;
var n = 0;

client.on('message' , message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let txt = args.join(" ");
  //recibiendo el mensaje
  console.log(message.content);

  if(command === 'actividad')
  {
    if(bloq1 === 1)
    {
       message.channel.send(txt1);
    }
    if(bloq2 === 1)
    {
       message.channel.send(txt2);
    }
    if(bloq3 === 1)
    {
       message.channel.send(txt3);
    }
    if(bloq4 === 1)
    {
       message.channel.send(txt4);
    }
    if(bloq5 === 1)
    {
       message.channel.send(txt5);
    }
    if(bloq6 === 1)
    {
       message.channel.send(txt6);
    }
  }

  let myRole = message.guild.roles.find(role => role.name === "Director");

  if(message.member.roles.some(r=>["Director", "Sub Director"].includes(r.name)))
  {
     //mensaje que sale si permite usarlo.
     if(command === 'eliminar')
     {
        if(n === 0)
        {
           txt1 = 'No hay actividad programada en este espacio.'
           n++;
           bloq1 = 0;
        }else
        if(n === 1)
        {
           txt2 = 'No hay actividad programada en este espacio.'
           n++;
           bloq2 = 0;
        }else
        if(n === 2)
        {
           txt3 = 'No hay actividad programada en este espacio.'
           n++;
           bloq3 = 0;
        }else
        if(n === 3)
        {
           txt4 = 'No hay actividad programada en este espacio.'
           n++;
           bloq4 = 0;
        }else
        if(n === 4)
        {
           txt5 = 'No hay actividad programada en este espacio.'
           n++;
           bloq5 = 0;
        }else
        if(n === 5)
        {
           txt6 = 'No hay actividad programada en este espacio.'
           n = 0;
           bloq6 = 0;
        }
        message.channel.send('Eliminaste sin problemas una de las actividades. Recuerda que elimina de la mas vieja a la mas nueva.');
     }
  }else{
    //mensaje que retorna debido al rol no permitido.
    if(command === 'eliminar')
    {
       message.channel.send(`Hola ${message.author} no tienes permisos para usar este comando. O no estas en el canal indicado.`);
    }
  }

  if(message.member.roles.some(r=>["Director", "Sub Director"].includes(r.name)) )
  {
     //mensaje que sale si permite usarlo.
     if(command === 'agregar')
     {
        if(bloq1 === 0)
        {
           txt1 = txt;
           bloq1 = 1;
        }
        else
        if(bloq1 === 1 && bloq2 === 0)
        {
           txt2 = txt;
           bloq2 = 1;
        }else
        if(bloq1 === 1 && bloq2 === 1 && bloq3 === 0)
        {
           txt3 = txt;
           bloq3 = 1;
        }else
        if(bloq1 === 1 && bloq2 === 1 && bloq3 === 1 && bloq4 === 0)
        {
           txt4 = txt;
           bloq4 = 1;
        }else
        if(bloq1 === 1 && bloq2 === 1 && bloq3 === 1 && bloq4 === 1 && bloq5 === 0)
        {
           txt5 = txt;
           bloq5 = 1;
        }else
        if(bloq1 === 1 && bloq2 === 1 && bloq3 === 1 && bloq4 === 1 && bloq5 === 1 && bloq6 === 0)
        {
           txt6 = txt;
           bloq6 = 1;
        }else
        if(bloq1 === 1 && bloq2 === 1 && bloq3 === 1 && bloq4 === 1 && bloq5 === 1 && bloq6 === 1)
        {
          message.channel.send('No hay espacios disponibles. Debes liberar liberar uno de ellos.');
        }
     }
  }else{
    //mensaje que retorna debido al rol no permitido.
    if(command === 'agregar')
    {
       message.channel.send(`Hola ${message.author} no tienes permisos para usar este comando.`);
    }
  }
})
client.login(config.token);