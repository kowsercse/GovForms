/* English/UK initialisation for the jQuery UI date picker plugin. */
/* Written by Stuart. */
jQuery(function($){
	$.datepicker.regional['bn'] = {
		closeText: 'বাংলা',
		prevText: 'পেছনে',
		nextText: 'সামনে',
		currentText: 'আজ',
		monthNames: ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন',
		'জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'],
		monthNamesShort: ['জান','ফেব্রু','মার্চ','এপ্রি','মে','জুন',
		'জুল','আগ','সেপ্ট','অক্ট','নভ','ডিস'],
		dayNames: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
		dayNamesShort: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'],
		dayNamesMin: ['র', 'সো', 'ম', 'বু', 'বৃ', 'শু', 'শ'],
		weekHeader: 'সঃ',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['bn']);
});
