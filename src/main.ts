import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import "./styles/main.scss"
import {IDialogData} from "./pages/chatList";

const pages = {
  'login': [ Pages.LoginPage ],
  'registration': [ Pages.RegistrationPage ],
  'pageNotFound': [ Pages.PageNotFound ],
  'serverError': [ Pages.ServerError ],
  'chatList': [ Pages.ChatList ],
  'nav': [ Pages.NavigatePage ]
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
};

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

Handlebars.registerHelper("dateTransform", (inputDate: string) => {
  const currentDate = new Date();
  const parsedDate = new Date(inputDate);

  const timeDiff = Math.abs(currentDate.getTime() - parsedDate.getTime());
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  const daysDiff = Math.floor(hoursDiff / 24);

  if (hoursDiff <= 24) {
    return parsedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (daysDiff <= 7) {
    const days = ['ВС', ' ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[parsedDate.getDay()];
  } else {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return parsedDate.getDate() + ' ' + months[parsedDate.getMonth()] + ' ' + parsedDate.getFullYear();
  }
});

Handlebars.registerHelper("dateArrSort", (dataArray: IDialogData[]) => {
  if (!Array.isArray(dataArray)) {
    console.error("Data is not an array");
    return ;
  }

  return dataArray.sort((a, b) => {
    const dateA: Date = new Date(a.dialogDate);
    const dateB: Date = new Date(b.dialogDate);
    // @ts-ignore
    return dateB - dateA;
  });
});
