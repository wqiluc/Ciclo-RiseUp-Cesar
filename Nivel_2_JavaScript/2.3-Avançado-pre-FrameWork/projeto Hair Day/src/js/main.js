"use strict";

import "../styles/global.css";
import "../styles/forms.css";
import "../styles/schedule.css";

import dayjs from "./libs/dayjs.js";

import "../modules/forms/submit.js"

let mensagem = `data e horário atual: ${dayjs().format("HH:mm")}`;

console.log(mensagem);