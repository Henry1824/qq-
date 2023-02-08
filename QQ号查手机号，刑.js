import plugin from '../../lib/plugins/plugin.js'
import { segment } from "oicq";
// import { getGroupMemberInfo } from "oicq";
import fetch from "node-fetch";
import lodash from "lodash";

export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '查手机号',
      /** 功能描述 */
      dsc: '查手机',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 0,
      rule: [
   {
    reg: "^#?查手机号[\s\S]*", //匹配消息正则，命令正则  查手机号@群友/QQ号
    fnc: 'dey'
  },
      ]
})
}

async dey (e) {
	var qq = null

	//e.reply(qq+'')
	if(e.at){
      qq = String(e.at)
	  console.log("isatqq", qq);
    }
	else{
		let msgqu = e.msg.replace("查手机号","");
		qq = String(msgqu)
		console.log("isqq", qq);
	}
	//qq = e.at
	//e.reply(qq)
	//e.reply(typeof(qq))
	let url = `https://zy.xywlapi.cc/qqapi?qq=${qq}`;
	let response = await fetch(url);
	let res = await response.json();
	if (res.phone){
	e.reply([qq,res.message,res.phone,res.phonediqu],true)
	}
	else{
		e.reply([qq,res.message],true)
	}
}
  

}
