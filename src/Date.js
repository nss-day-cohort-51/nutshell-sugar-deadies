export const formatAMPM = (date) => {
    const oldDate = new Date(Date.now());
    const newDate = oldDate.toDateString();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = newDate + " " + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

