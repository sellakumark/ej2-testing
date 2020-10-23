import { DateTimePicker } from '@syncfusion/ej2-calendars';
import {
    Schedule, ScheduleModel, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, PopupOpenEventArgs
} from '@syncfusion/ej2-schedule';
import { defaultData } from './common/datasource';
import * as util from './common/util';
import '../node_modules/es6-promise/dist/es6-promise';
/**
 * schedule sample
 */

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, MonthAgenda);

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
