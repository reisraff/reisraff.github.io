jQuery(document).ready(function($) {
  function v(dateStart, dateEnd) {
    var a = moment.utc(dateEnd);
    var b = moment.utc(dateStart);
    var c = moment.preciseDiffObject(a, b);

    return  c.years;
  }

  var birthdate = new Date('1993-09-16');

  $('#age').html(v(birthdate, new Date()));
});