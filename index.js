const Discord = require("discord.js")
const intent_list = new Discord.Intents(["GUILD_MEMBERS", "GUILD_MESSAGES", "GUILDS", "GUILD_INVITES"])
const client = new Discord.Client({ ws: { intents: intent_list } })
const token = process.env.token

client.on("ready", () => {
  console.log("켰다.")
  client.user.setPresence({ activity: { name: "!도움말을 쳐보세요" }, status: "online" })
})

client.on("message", (message) => {
  if (message.author.bot) return

  if (message.content == "ping") {
    return message.reply("pong")
  }

  if (message.content == "!노래1") {
    return message.reply("https://youtu.be/kenar8s7oRE")
  }

  if (message.content == "!노래2") {
    return message.reply("https://youtu.be/QxmGiqqYrn8?list=PL014qIk11wJqJuCgXoM4I63ITY9Sqhe7k")
  }

  if (message.content == "!노래3") {
    return message.reply("https://youtu.be/r8jbD8TzQLw?list=PL014qIk11wJqJuCgXoM4I63ITY9Sqhe7k")
  }

  if (message.content == "!노래4") {
    return message.reply("https://youtu.be/2VY2NLE2Bn0?list=RDMM")
  }

  if (message.content == "!노래5") {
    return message.reply("https://youtu.be/ewCLsbNczjo?list=RDMM")
  }

  if (message.content == "!근찌정보") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let embed = new Discord.MessageEmbed()
      embed.setColor("ff8e8e")
      .setTitle("근찌정보")
      .setURL("http://www.naver.com")
      .setAuthor("근찌", img, "http://www.naver.com")
      .setThumbnail(img)
      .addField("팔로워", "팔로워 184명")
      .addField("나이", "성인", true)
      .addField("생일", "11월22일", true)
      .addField("좋아하는음식", "떡볶이", true)
      .addField("기타정보", "게임은 좋아하지만 재능이\n0개 국어 입니다 한국말로 번역해주세요\n기분에 따라 달라지는 목소리 톤\n순두부 멘탈 (멘탈 나가면 방종..)")
      .setTimestamp()
      .setFooter("화이트해커 가 만듬", img)

    message.channel.send(embed)
  } 
  
  if (message.content == "!현재시간") {
    let embed = new Discord.MessageEmbed()
    embed.setColor("ff8e8e")
    .setTitle("현재시간")
    .setURL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%ED%98%84%EC%9E%AC%EC%8B%9C%EA%B0%84")
    .setTimestamp()

    message.channel.send(embed)
  }

  if (message.content == "!근찌봇테스트") {
    let embed = new Discord.MessageEmbed()
    embed.setColor("ff8e8e")
    .setTitle
  }

  let blacklisted = ["시발", "욕설테스트", "시1발", "시이발", "병신", "병1신", "씨발", "씨1발", "씨이발", "느금", "느금마", "느1금", "느그음마", "좇", "좇까", "좇1까", "좆", "좆까", "좆1까", "조옷같네", "병진", "병1진", "닥쳐", "닥1쳐", "니거",] //"감지할 욕설", "감지할 욕설2" 이런식으로 적어주심 됩니다
  let img = "https://cdn.discordapp.com/emojis/790597907899744266.png"
  
      let foundInText = false;
      for (var i in blacklisted) { 
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true
      }
      

      if (foundInText) {
          const user = message.author.id;
          const embed = new Discord.MessageEmbed()
          .setColor('#FF0000')
          .setThumbnail(img)
          .setDescription(`<@${user}> 그런말쓰지마! \n사용한 욕설 : \`${message.content}\``); //욕설 하면 보내는 말 (바꿔도댐)
          message.channel.send(embed)
          message.delete()
  }

  if (message.content == "!방송규칙") {
    let img = "https://cdn.discordapp.com/emojis/790597907899744266.png"
    let embed = new Discord.MessageEmbed()
    embed.setColor("ff8e8e")
    .setTitle("방송규칙")
    .setURL("https://www.twitch.tv/geunzzi_/about")
    .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_/about")
    .setThumbnail(img)
    .addField("규칙:1", "이 방송 주인공은 누구? 근찌임🐹")
    .addField("규칙:2", "시청자 간의 친목 금지입니다")
    .addField("규칙:3", "도배, 시비, 싸우기 금지입니다")
    .addField("규칙:4", "선넘으면'너 밴!'입니다")
    .addField("규칙:5", "지나친 훈수는 좋지 않습니다")
    .addField("규칙:6", "타스트리머 언급 자제해 주세요")
    .addField("규칙:7", "언팔은 NO")
    .addField("규칙:8", "방송과 관련 없는 얘기는 삼가해주세요")

    message.channel.send(embed)
  }

  if (message.content == "!테스트") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/802751023302049832/giphy.gif"
    let embed = new Discord.MessageEmbed()
    
    embed.setThumbnail(img)
    message.channel.send(embed)
  }

  if (message.content == "!시참규칙") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let embed = new Discord.MessageEmbed()
    embed.setColor("ff8e8e")
    .setTitle("시참규칙")
    .setURL("https://www.twitch.tv/geunzzi_/about")
    .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_/about")
    .setThumbnail(img)
    .addField("규칙:1", "시참은 팔로우 하셔야 가능합니다(언팔 할 거면 시참 하지 마세요)")
    .addField("규칙:2", "시참 시 디코 대기실에서 대기해 주세요")
    .addField("규칙:3", "닉네임은 디코 닉네임 채널에 써주세요")
    .addField("규칙:4", "과한 주접, 자기 어필 금지입니다")
    .addField("규칙:5", "불편한 행동, 말 자제해주세요")

    message.channel.send(embed)
  }
  
  else if (message.content == "!도움말") {
    let helpImg = "https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png"
    let commandList = [
      { name: "!도움말", desc: "근찌봇 명령어를 알려줘요" },
      { name: "ping", desc: "사용가능" },
      { name: "!근찌정보", desc: "근찌님 정보를 알려줘요" },
      { name: "!현재시간", desc: "현재시간은 알려줘요" },
      { name: "!방송규칙", desc: "근찌님 방송규칙을 알려줘요" },
      { name: "!시참규칙", desc: "시참 규칙을 알려줘요" },
      { name: "!청소", desc: "채팅청소 님들 방청소 그런거 아님ㅋㅋ" },
      { name: "욕설방지 기능(?)", desc: "현재 정상 작동중..욕하시마세요" },
      { name: "!노래1~5", desc: "제작자가 자주 듣는 노래를 보여줍니다."},
    ]
    let commandStr = ""
    let embed = new Discord.MessageEmbed().setAuthor("Help of 근찌 BOT", helpImg).setColor("#186de6").setFooter(`근찌 BOT ❤️`).setTimestamp()

    commandList.forEach((x) => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`
    })

    embed.addField("Commands: ", commandStr)

    message.channel.send(embed)
  } else if (message.content == "!초대코드2") {
    client.guilds.cache.array().forEach((x) => {
      x.channels.cache
        .find((x) => x.type == "text")
        .createInvite({ maxAge: 0 }) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then((invite) => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if (err.code == 50013) {
            message.channel.send(`**${x.channels.cache.find((x) => x.type == "text").guild.name}** 채널 권한이 없어 초대코드 발행 실패`)
          }
        })
    })
  } else if (message.content == "!초대코드") {
    if (message.channel.type == "dm") {
      return message.reply("dm에서 사용할 수 없는 명령어 입니다.")
    }
    message.guild.channels.cache
      .get(message.channel.id)
      .createInvite({ maxAge: 0 }) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then((invite) => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if (err.code == 50013) {
          message.channel.send(`**${message.guild.channels.cache.get(message.channel.id).guild.name}** 채널 권한이 없어 초대코드 발행 실패`)
        }
      })
  } else if (message.content.startsWith("!전체공지2")) {
    if (checkPermission(message)) return
    if (message.member != null) {
      // 채널에서 공지 쓸 때
      let contents = message.content.slice("!전체공지2".length)
      let embed = new Discord.MessageEmbed().setAuthor("공지 of 근찌 BOT").setColor("#186de6").setFooter(`근찌 BOT ❤️`).setTimestamp()

      embed.addField("공지: ", contents)

      message.member.guild.members.cache.array().forEach((x) => {
        if (x.user.bot) return
        x.user.send(embed)
      })

      return message.reply("공지를 전송했습니다.")
    } else {
      return message.reply("채널에서 실행해주세요.")
    }
  } else if (message.content.startsWith("!전체공지")) {
    if (checkPermission(message)) return
    if (message.member != null) {
      // 채널에서 공지 쓸 때
      let contents = message.content.slice("!전체공지".length)
      message.member.guild.members.cache.array().forEach((x) => {
        if (x.user.bot) return
        x.user.send(`<@${message.author.id}> ${contents}`)
      })

      return message.reply("공지를 전송했습니다.")
    } else {
      return message.reply("채널에서 실행해주세요.")
    }
  } else if (message.content.startsWith("!청소")) {
    if (message.channel.type == "dm") {
      return message.reply("dm에서 사용할 수 없는 명령어 입니다.")
    }

    if (message.channel.type != "dm" && checkPermission(message)) return

    var clearLine = message.content.slice("!청소 ".length)
    var isNum = !isNaN(clearLine)

    if (isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return
    } else if (!isNum) {
      // c @나긋해 3
      if (message.content.split("<@").length == 2) {
        if (isNaN(message.content.split(" ")[2])) return

        var user = message.content.split(" ")[1].split("<@!")[1].split(">")[0]
        var count = parseInt(message.content.split(" ")[2]) + 1
        let _cnt = 0

        message.channel.messages.fetch().then((collected) => {
          collected.every((msg) => {
            if (msg.author.id == user) {
              msg.delete()
              ++_cnt
            }
            return !(_cnt == count)
          })
        })
      }
    } else {
      message.channel
        .bulkDelete(parseInt(clearLine) + 1)
        .then(() => {
          message.channel.send(`<@${message.author.id}> ${parseInt(clearLine)} 개의 메시지를 삭제했습니다. (이 메시지는 잠시 후 사라집니다.)`).then((msg) => msg.delete({ timeout: 3000 }))
        })
        .catch(console.error)
    }
  }
})

function checkPermission(message) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> 명령어를 수행할 관리자 권한을 소지하고 있지않습니다.`)
    return true
  } else {
    return false
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str
  limitLen -= tmp.length

  for (let i = 0; i < limitLen; i++) {
    tmp += " "
  }

  return tmp
}

client.login(token)
