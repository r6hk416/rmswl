const Discord = require("discord.js")
const intent_list = new Discord.Intents(["GUILD_MEMBERS", "GUILD_MESSAGES", "GUILDS", "GUILD_INVITES"])
const client = new Discord.Client({ ws: { intents: intent_list } })
const token = process.env.token

client.on("ready", () => {
  console.log("켰다.")
  client.user.setPresence({ activity: { name: "'!도움말을' 쳐보세요" }, status: "online" })
})

client.on("message", (message) => {
  if (message.author.bot) return

  if (message.content == "ping") {
    return message.reply("pong")
  }

  if (message.content == "음") {
    return message.reply("움")
  }

  if (message.content == "근모닝") {
    return message.reply("근모닝~!")
  }

  if (message.content == "깡패다!") {
    return message.reply("https://cdn.discordapp.com/attachments/811624609383972864/812370063981936660/a1eec8b664e8a5272e8643dcbda8ba1e.jpg")
  }

{
  if (message.content == "!탕수육게임") {
    let img = "https://th.bing.com/th/id/OIP.6kCfsexRlgnlXR9aZA-augHaEv?w=245&h=180&c=7&o=5&pid=1.7"
    let embed = new Discord.MessageEmbed()
    .setTitle("탕수육게임")
    .setURL("https://namu.wiki/w/%ED%83%95%EC%88%98%EC%9C%A1%20%EA%B2%8C%EC%9E%84")
    .setThumbnail(img)
    .addField("정상", "탕 - > 수 - > 육 ->")
    .addField("비정상", "탕 - > 육 - > 수 or 수 - > 탕 - > 육 ")
    .addField("주의점", "\n현재 '탕수육'게임은 아주 간단한 코드로 만들어졌으며 \n빠르게 채팅을 치면 근찌봇이 고장날수도있습니다 그리고 계속 하시면 도배가 될수도있습니다. 적당히!")
    message.channel.send(embed)
  }
  if (message.content == "탕") {
    return message.reply("수")
  }

  if (message.content == "육") {
    return message.reply("탕")
  }

  if (message.content == "수") {
    return message.reply("육")
  }
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
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .addField("나이가 궁금하시면", "'!나이'을/를 쳐주세요")
      .addField("팔로워가 궁금하시면", "'!팔로워'을/를 쳐주세요")
      .addField("생일이 궁금하시면", "'!생일'을/를 쳐주세요")
      .addField("좋아하는 음식이 궁금하시면", "'!음식'을/를 쳐주세요")
      .addField("다른 정보를 알고싶다면", "'!기타'을/를 쳐주세요")
      .setTimestamp()
      .setFooter("화이트해커 가 만듬", img)

    message.channel.send(embed)
  }

  if (message.content == "!나이") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let embed = new Discord.MessageEmbed()
      embed.setColor("ff8e8e")
      .setTitle("근찌정보")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .setTitle("나이 을/를 선택하셨습니다.")
      .addField("'성인'입니다")
      .setTimestamp()
      message.channel.send(embed)
  }

  if (message.content == "") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let smimg = "https://cdn.discordapp.com/attachments/804191844560142356/811132351442452510/802d583a5185a46f.PNG"
    let embed = new Discord.MessageEmbed()
      embed.setColor("ff8e8e")
      .setTitle("근찌정보")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .addField("근찌님 현재 키는 바로 이문제를 풀면 알려드림", "문자 A , B, C, D , E가 하나씩 적혀 있는 5장의 카드와\n숫자 1 , 2 , 3 , 4가 하나씩 적혀 있는 4장의 카드가 있다.\n이 9장의 카드를 모두 한 번씩 사용하여 일렬로 임의로 나열할 때,\n문자 A 가 적혀 있는 카드의 바로 양옆에 각각 숫자가 적혀 있는\n카드가 놓일 확률은?")
      .setImage(smimg)

      message.channel.send(embed)
  }

  if (message.content == "!팔로워") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let embed = new Discord.MessageEmbed()
      embed.setColor("ff8e8e")
      .setTitle("근찌정보")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .addField("팔로워 을/를 선택하셨습니다.")
      .addField("현재 팔로워는", "'237명'입니다")
      .setTimestamp()
      message.channel.send(embed)
  }

  if (message.content == "!생일") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let embed = new Discord.MessageEmbed()
      embed.setColor("ff8e8e")
      .setTitle("근찌정보")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .setTitle("생일 을/를 선택하셨습니다.")
      .addField("근찌님 생일은", "'11월22일'입니다")
      .setTimestamp()
      message.channel.send(embed)
  }

  if (message.content == "!음식") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let embed = new Discord.MessageEmbed()
      embed.setColor("ff8e8e")
      .setTitle("근찌정보")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .addField("음식 을/를 선택하셨습니다.")
      .addField("근찌님이 좋아하는 음식은", "'떡볶이'입니다")
      .setTimestamp()
      message.channel.send(embed)
  }

  if (message.content == "!기타") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let embed = new Discord.MessageEmbed()
      embed.setColor("ff8e8e")
      .setTitle("근찌정보")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .addField("기타 을/를 선택하셨습니다.")
      .addField("기타정보", "게임은 좋아하지만 재능이\n0개 국어 입니다 한국말로 번역해주세요\n기분에 따라 달라지는 목소리 톤\n순두부 멘탈 (멘탈 나가면 방종..)")
      .setTimestamp()
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

  if (message.content == "!봇테스트서버") {
    let embed = new Discord.MessageEmbed()
    .setTitle("근찌봇테스트서버")
    .addField("서버링크", "https://discord.gg/U9GcMXCMyZ")
    .addField("근찌봇테스트서버", "근찌봇의 새로운기능을 이 서버에서 테스트하시고 문제가 있으면 개발자에게 말해주세요\n 바로 문제를 수정하고 더 좋은 기능을 넣을 수 있습니다\n물론 다른 근찌봇 기능을 원하시면 테스트서버에서 말하시면 제가 검토후 추가하도록 하겠습니다.")
    .setFooter("개발자:화이트해커")

    message.channel.send(embed)
  }

  let blacklisted = ["시발", "욕설테스트", "시1발", "시이발", "병신", "병1신", "씨발", "씨1발", "씨이발", "느금", "느금마", "느1금", "느그음마", "좇", "좇까", "좇1까", "좆", "좆까", "좆1까", "조옷같네", "병진", "병1진", "닥쳐", "닥1쳐", "니거","ㅅㅂ","ㅅ1ㅂ","ㅆㅂ","ㅈㄲ","ㅈ1ㄲ","창녀","ㅂㅈ","ㅄ","ㅂㅅ"] //"감지할 욕설", "감지할 욕설2" 이런식으로 적어주심 됩니다
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
    let helpImg = "https://static-cdn.jtvnw.net/jtv_user_pictures/3ab02819-794f-436f-aed6-3f6d49062283-profile_image-70x70.png"
    let commandList = [
      { name: "!도움말", desc: "근찌봇 명령어를 알려줘요" },
      { name: "ping", desc: "사용가능" },
      { name: "!근찌정보", desc: "근찌님 정보를 알려줘요" },
      { name: "!현재시간", desc: "현재시간을 알려줘요" },
      { name: "!방송규칙", desc: "근찌님 방송규칙을 알려줘요" },
      { name: "!시참규칙", desc: "시참 규칙을 알려줘요" },
      { name: "!청소", desc: "채팅청소 님들 방청소 그런거 아님ㅋㅋ" },
      { name: "욕설방지 기능(?)", desc: "현재 정상 작동중..욕하시마세요" },
      { name: "!노래1~5", desc: "제작자가 자주 듣는 노래를 보여줍니다."},
      { name: "!봇테스트서버", desc: "근찌봇의 새로운 기능을 테스트하기위한 서버입니다."},
      { name: "!현재시간", desc: "현재 시간을 알려줘요"}
    ]
    let commandStr = ""
    let embed = new Discord.MessageEmbed().setAuthor("근찌 BOT", helpImg).setColor("#186de6").setFooter(`근찌 BOT ❤️`).setTimestamp()

    commandList.forEach((x) => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`
    })

    embed.addField("커맨드: ", commandStr)

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
