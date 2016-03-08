function time(timestamp) {
    var date = new Date(timestamp);
    var format = [date.getHours(), date.getMinutes(), date.getSeconds()];
    numberFormat(format);
    return format.join(":");
}

function numberFormat(format)
{
  for(var i=0; i < format.length; i++)
    if(format[i]<10)
      format[i]="0"+format[i];
}