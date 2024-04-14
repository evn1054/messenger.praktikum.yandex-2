import './chatList.scss';
import Handlebars from "handlebars";
export { default as ChatList } from './chatList.hbs?raw';


export interface IDialogData {
    "dialogImage"?: string;
    "dialogName": string;
    "dialogDescription": string;
    "dialogDate": string;
    "dialogNotification"?: string;
}

Handlebars.registerHelper('chatListData', ():IDialogData[] => {
    return [
        {
            "dialogImage": "",
            "dialogName": "Пользователь 1",
            "dialogDescription": "Последнее сообщение",
            "dialogDate": "Sat, 13 Apr 2024 03:04:05 GMT",
            "dialogNotification": "6",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 2",
            "dialogDescription": "Описание диалога 2",
            "dialogDate": "Fri, 12 Apr 2024 07:42:44 GMT",
            "dialogNotification": "1"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 3",
            "dialogDescription": "Пока!",
            "dialogDate": "Tue, 02 Jan 2018 19:21:21 GMT",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 4",
            "dialogDescription": "Что нового?",
            "dialogDate": "Wed, 21 Feb 2001 01:39:20 GMT",
            "dialogNotification": "5"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 5",
            "dialogDescription": "Давай встретимся завтра",
            "dialogDate": "Wed, 05 Apr 2017 08:47:27 GMT",
            "dialogNotification": "6"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 6",
            "dialogDescription": "Какие у тебя планы на выходные?",
            "dialogDate": "Thu, 03 Jan 2008 17:08:26 GMT",
            "dialogNotification": "4"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 7",
            "dialogDescription": "Спасибо за приглашение!",
            "dialogDate": "Thu, 02 Apr 1987 17:50:44 GMT",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 8",
            "dialogDescription": "Как дела?",
            "dialogDate": "Sat, 21 Aug 1999 12:53:07 GMT",
            "dialogNotification": "1"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 9",
            "dialogDescription": "Привет!",
            "dialogDate": "Sat, 10 Sep 2011 00:24:34 GMT",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 10",
            "dialogDescription": "Спасибо за приглашение!",
            "dialogDate": "Fri, 18 Oct 2019 12:13:42 GMT",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 11",
            "dialogDescription": "Пока!",
            "dialogDate": "Wed, 17 Nov 1982 02:08:46 GMT",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 12",
            "dialogDescription": "Как прошел день?",
            "dialogDate": "Sun, 03 Jul 2005 15:39:47 GMT",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 13",
            "dialogDescription": "Привет!",
            "dialogDate": "Mon, 05 Feb 2018 06:30:47 GMT",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 14",
            "dialogDescription": "Привет!",
            "dialogDate": "Tue, 29 Sep 1981 10:15:36 GMT",
            "dialogNotification": "7"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 15",
            "dialogDescription": "Как прошел день?",
            "dialogDate": "Thu, 06 Apr 1995 00:29:33 GMT",
            "dialogNotification": "1"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 16",
            "dialogDescription": "Спасибо за приглашение!",
            "dialogDate": "Wed, 29 Nov 2017 02:34:50 GMT",
            "dialogNotification": "6"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 17",
            "dialogDescription": "Давай встретимся завтра",
            "dialogDate": "Tue, 11 Aug 2015 20:35:57 GMT",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 18",
            "dialogDescription": "Как дела?",
            "dialogDate": "Sat, 23 Nov 2002 07:53:35 GMT",
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 19",
            "dialogDescription": "Что нового?",
            "dialogDate": "Sat, 25 May 2019 22:15:09 GMT",
            "dialogNotification": "4"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 20",
            "dialogDescription": "Давай встретимся завтра",
            "dialogDate": "Mon, 10 Sep 2012 20:42:40 GMT",
            "dialogNotification": "8"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 21",
            "dialogDescription": "Как прошел день?",
            "dialogDate": "Sun, 29 Dec 1996 15:47:21 GMT",
            "dialogNotification": "6"
        },
        {
            "dialogImage": "",
            "dialogName": "Пользователь 22",
            "dialogDescription": "Привет!",
            "dialogDate": "Fri, 02 Oct 2009 09:32:11 GMT",
        }
    ]
})
