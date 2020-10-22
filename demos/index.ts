import { DatePicker, DateTimePicker, TimePicker, ChangeEventArgs } from '@syncfusion/ej2-calendars';
import {
    Schedule, ScheduleModel, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, PopupOpenEventArgs, View
} from '@syncfusion/ej2-schedule';
import { defaultData } from './common/datasource';
import * as util from './common/util';
import '../node_modules/es6-promise/dist/es6-promise';
/**
 * schedule sample
 */

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, MonthAgenda);

util.loadCultureFiles('ar');
util.loadCultureFiles('de');
util.loadCultureFiles('en');
util.loadCultureFiles('fr-CH');
util.loadCultureFiles('zh');
util.loadCultureFiles('nl', false, false);

let scheduleOptions: ScheduleModel = {
    selectedDate: new Date(2017, 10, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda', 'MonthAgenda'],
    popupOpen: (args: PopupOpenEventArgs) => {
        if (args.type === 'Editor') {
            let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
            if (startElement && !startElement.classList.contains('e-datetimepicker')) {
                let startObj: DateTimePicker = new DateTimePicker({ value: new Date(startElement.value) || new Date() });
                startObj.appendTo(startElement);
            }
            let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
            if (endElement && !endElement.classList.contains('e-datetimepicker')) {
                let endObj: DateTimePicker = new DateTimePicker({ value: new Date(endElement.value) || new Date() });
                endObj.appendTo(endElement);
            }
        }
    }
};

let scheduleObj: Schedule = util.createSchedule(scheduleOptions, defaultData);

let currentDate: DatePicker = new DatePicker({
    value: new Date(),
    change: (args: ChangeEventArgs) => {
        scheduleObj.selectedDate = args.value;
        scheduleObj.dataBind();
    }
});
currentDate.appendTo('#scheduledate');

let scrollToHour: TimePicker = new TimePicker({
    width: 100,
    value: new Date(2000, 0, 1, 9),
    format: 'HH:mm',
    change: (args: ChangeEventArgs) => {
        scheduleObj.scrollTo(args.text);
    }
});
scrollToHour.appendTo('#scrollTo');

document.getElementById('rtl').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('rtl') as HTMLInputElement;
    scheduleObj.enableRtl = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('start-hour').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('start-hour') as HTMLSelectElement;
    scheduleObj.startHour = ddl.value;
    scheduleObj.dataBind();
};

document.getElementById('end-hour').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('end-hour') as HTMLSelectElement;
    scheduleObj.endHour = ddl.value;
    scheduleObj.dataBind();
};

document.getElementById('workdays').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('workdays') as HTMLSelectElement;
    scheduleObj.workDays = ddl.value.toString().split(',').map(Number);
    scheduleObj.dataBind();
};

document.getElementById('weekend').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('weekend') as HTMLInputElement;
    scheduleObj.showWeekend = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('weeknumber').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('weeknumber') as HTMLInputElement;
    scheduleObj.showWeekNumber = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('scheduleview').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('scheduleview') as HTMLSelectElement;
    scheduleObj.currentView = ddl.value as View;
    scheduleObj.dataBind();
};

document.getElementById('quickinfo').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('quickinfo') as HTMLInputElement;
    scheduleObj.showQuickInfo = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('hT').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('hT') as HTMLInputElement;
    scheduleObj.quickInfoTemplates.header = ddl.checked ? '#headerTemplate' : '';
    scheduleObj.dataBind();
};

document.getElementById('cT').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('cT') as HTMLInputElement;
    scheduleObj.quickInfoTemplates.content = ddl.checked ? '#contentTemplate' : '';
    scheduleObj.dataBind();
};

document.getElementById('fT').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('fT') as HTMLInputElement;
    scheduleObj.quickInfoTemplates.footer = ddl.checked ? '#footerTemplate' : '';
    scheduleObj.dataBind();
};

document.getElementById('date-header').onchange = () => {
    let checkEle: HTMLInputElement = document.getElementById('date-header') as HTMLInputElement;
    scheduleObj.dateHeaderTemplate = (checkEle.checked) ? '#datetemplate' : null;
    scheduleObj.dataBind();
};

document.getElementById('cell-temp').onchange = () => {
    let checkEle: HTMLInputElement = document.getElementById('cell-temp') as HTMLInputElement;
    scheduleObj.cellTemplate = (checkEle.checked) ? '#celltemplate' : null;
    scheduleObj.dataBind();
};

document.getElementById('event-temp').onchange = () => {
    let checkEle: HTMLInputElement = document.getElementById('event-temp') as HTMLInputElement;
    scheduleObj.eventSettings.template = (checkEle.checked) ? '#apptemplate' : null;
    scheduleObj.dataBind();
};

document.getElementById('enableTooltip').onchange = () => {
    let checkEle: HTMLInputElement = document.getElementById('enableTooltip') as HTMLInputElement;
    scheduleObj.eventSettings.enableTooltip = checkEle.checked;
    scheduleObj.dataBind();
};

document.getElementById('enableTooltipTemplate').onchange = () => {
    let checkEle: HTMLInputElement = document.getElementById('enableTooltipTemplate') as HTMLInputElement;
    scheduleObj.eventSettings.tooltipTemplate = (checkEle.checked) ? '#tooltipTemplate' : null;
    scheduleObj.dataBind();
};

document.getElementById('headerbar').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('headerbar') as HTMLInputElement;
    scheduleObj.showHeaderBar = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('readonly').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('readonly') as HTMLInputElement;
    scheduleObj.readonly = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('time-zone').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('time-zone') as HTMLSelectElement;
    scheduleObj.timezone = ddl.value;
    scheduleObj.dataBind();
};

document.getElementById('locale').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('locale') as HTMLSelectElement;
    scheduleObj.locale = ddl.value;
    scheduleObj.dataBind();
};

document.getElementById('dayofweek').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('dayofweek') as HTMLSelectElement;
    scheduleObj.firstDayOfWeek = parseInt(ddl.value, 10);
    scheduleObj.dataBind();
};

document.getElementById('slotCount').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('slotCount') as HTMLSelectElement;
    scheduleObj.timeScale.slotCount = parseInt(ddl.value, 10);
    scheduleObj.dataBind();
};

document.getElementById('interval').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('interval') as HTMLSelectElement;
    scheduleObj.timeScale.interval = parseInt(ddl.value, 10);
    scheduleObj.dataBind();
};

document.getElementById('timescale').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('timescale') as HTMLSelectElement;
    scheduleObj.timeScale.enable = (ddl.value === 'true') ? true : false;
    scheduleObj.dataBind();
};

document.getElementById('timeScale-temp').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('timeScale-temp') as HTMLSelectElement;
    scheduleObj.timeScale.minorSlotTemplate = (ddl.value === 'enable') ? '#minorSlotTemplate' : null;
    scheduleObj.timeScale.majorSlotTemplate = (ddl.value === 'enable') ? '#majorSlotTemplate' : null;
    scheduleObj.dataBind();
};

document.getElementById('date-format').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('date-format') as HTMLSelectElement;
    scheduleObj.dateFormat = ddl.value;
    scheduleObj.dataBind();
};

document.getElementById('work-start').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('work-start') as HTMLSelectElement;
    scheduleObj.workHours.start = ddl.value;
    scheduleObj.dataBind();
};

document.getElementById('work-end').onchange = () => {
    let ddl: HTMLSelectElement = document.getElementById('work-end') as HTMLSelectElement;
    scheduleObj.workHours.end = ddl.value;
    scheduleObj.dataBind();
};

document.getElementById('workhours-highlight').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('workhours-highlight') as HTMLInputElement;
    scheduleObj.workHours.highlight = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('key-board').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('key-board') as HTMLInputElement;
    scheduleObj.allowKeyboardInteraction = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('drag-drop').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('drag-drop') as HTMLInputElement;
    scheduleObj.allowDragAndDrop = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('resizing').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('resizing') as HTMLInputElement;
    scheduleObj.allowResizing = ddl.checked;
    scheduleObj.dataBind();
};

document.getElementById('cell-dimension').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('cell-dimension') as HTMLInputElement;
    scheduleObj.cssClass = (ddl.checked) ? 'schedule-cell-dimension' : null;
    scheduleObj.dataBind();
    scheduleObj.refresh();
};

document.getElementById('editor-temp').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('editor-temp') as HTMLInputElement;
    scheduleObj.editorTemplate = (ddl.checked) ? '#eventEditor' : null;
    scheduleObj.dataBind();
};

document.getElementById('time-indicator').onchange = () => {
    let ddl: HTMLInputElement = document.getElementById('time-indicator') as HTMLInputElement;
    scheduleObj.showTimeIndicator = ddl.checked;
    scheduleObj.dataBind();
};