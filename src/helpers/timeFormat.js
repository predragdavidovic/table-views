import moment from 'moment';

export default function timeFormat(time) {    
    return moment(new Date(time)).format('h:mma');
}