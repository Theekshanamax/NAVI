
/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
//---------------------------------------------------------------------------
const { cmd }   = require('../lib');
const util = require('util');
const axios = require('axios');
cmd({
 
  pattern: 'bug1',
  desc: 'Sends text',
  category: 'gen',
  use: '<does this>',
 
}, async (Void,citel,text) => {
await citel.reply("*TEXT HERE*")
