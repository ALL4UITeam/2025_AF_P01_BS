const defaultDateDelimiter = '-';
const defaultTimeDelimiter = ':';
const defaultDateTimeDelimiter = ' ';
const defaultMilisecondsDelimiter = '.';
const defaultDateFormat = 'yyyy-MM-dd';
const defaultDateTimeFormat = 'yyyy-MM-dd HH:mm:ss';
const defaultDateTimeFormat2 = 'yyyy-MM-dd HH:mm:ss.fff';
const defaultTimeFormat = 'HH:mm:ss';
const defaultTimeFormat2 = 'HH:mm';
//--------------------------------------------------
//--------------------------------------------------
export default {
  ibPreset: {
    // eslint-disable-next-line no-useless-escape
    DateTime: { Type: 'Date', Align: 'Center', Format: 'yyyy-MM-dd HH:mm:ss', EditFormat: 'yyyyMMddHHmmss', DataFormat: defaultDateTimeFormat, Size: 14, EditMask: '^\d*$', EmptyValue: '<span style="color:#AAAA">숫자만 입력(ex:20230514123456)</span>'},
    // eslint-disable-next-line no-useless-escape
    Date: { Type: 'Date', Align: 'Center', Format: 'yyyy-MM-dd', EditFormat: 'yyyyMMdd', DataFormat: defaultDateFormat, Size: 8, EditMask: '^\d*$', EmptyValue: '<span style="color:#AAAA">년,월,일 순으로 숫자만 입력해 주세요.</span>'},
    // eslint-disable-next-line no-useless-escape
    Time: { Type: 'Date', Align: 'Center', Format: 'HH:mm', EditFormat: 'HHmm', DataFormat: 'HH:mm:ss', Size: 6, /*EditMask: '^\d*$',*/ EmptyValue: '<span style="color:#AAAA">시,분,초 순으로 6개 숫자만 입력해 주세요.</span>'},
    // eslint-disable-next-line no-useless-escape
    Month: { Type: 'Int', Align: 'Center', Format: '#월', /*EditMask: '^\d*$',*/ EmptyValue: '<span style="color:#AAAA">숫자만 입력(ex:20230514123456)</span>'}
  },

  // defaultDataFormat: 'yyyy-MM-dd HH:mm:ss',
  dateForTime: '0001-01-01',

  /** 일시 데이터에 날짜(년월일) 포맷 적용하기 (기본포맷: yyyy-MM-dd)
   * @param date 포맷을 적용하기 위한 일시 데이터
   * @param format 적용할 포맷 (기본값: yyyy-MM-dd)
   * @returns 포맷 적용된 문자열 반환
   */
  getDateFormat: function (dateParam: Date | string, format: string = defaultDateFormat) {
    return this.getDateTimeFormat(dateParam, format);
  },
  /** 일시 데이터에 일시(년월일 시분초) 포맷 적용하기 (기본포맷: yyyy-MM-dd HH:mm:ss)
   * @param date 포맷을 적용하기 위한 일시 데이터
   * @param format 적용할 포맷 (기본값: yyyy-MM-dd)
   * @returns 포맷 적용된 문자열 반환
   */
  getDateTimeFormat: function (dateParam: Date | string, format: string = defaultDateTimeFormat) {

    if(dateParam == null || dateParam == '') {
      return '';
    }

    let date;
    
    if (dateParam instanceof Date) {
      date = dateParam;
    } else {
      try {
        if (dateParam.startsWith(this.dateForTime)) {
          date = new Date(this.dateForTime);
          const timeStr = dateParam.replace(this.dateForTime, '').replace('T', '').replace('Z', '').trim();
          const [h, m, s, ms] = timeStr.split(':').map(Number);
          date.setHours(h == undefined? 0: h);
          date.setMinutes(m == undefined? 0: m);
          date.setSeconds(s == undefined? 0: s);
          date.setMilliseconds(ms == undefined? 0: ms);
        } else {
          date = new Date(dateParam);
        }
      } catch {
        return '';
      }
    }

    const yyyy = lpad('' + date.getFullYear(), 4, '0');;
    const MM = lpad('' + (date.getMonth() + 1), 2, '0');
    const dd = lpad('' + date.getDate(), 2, '0');
    const HH = lpad('' + date.getHours(), 2, '0');
    const mm = lpad('' + date.getMinutes(), 2, '0');
    const ss = lpad('' + date.getSeconds(), 2, '0');
    const fff = lpad('' + date.getMilliseconds(), 3, '0');

    format = format.replace(/yyyy/g, yyyy);
    format = format.replace(/MM/g, MM);
    format = format.replace(/dd/g, dd);
    format = format.replace(/HH/g, HH);
    format = format.replace(/mm/g, mm);
    format = format.replace(/ss/g, ss);
    format = format.replace(/fff/g, fff);

    return format;
  },
  /** 일시 데이터에 일시(ms포함)(년월일 시분초ms) 포맷 적용하기 (기본포맷: yyyy-MM-dd HH:mm:ss.fff)
   * @param date 포맷을 적용하기 위한 일시 데이터
   * @param format 적용할 포맷 (기본값: yyyy-MM-dd)
   * @returns 포맷 적용된 문자열 반환
   */
  getDateTimeFormat2: function (dateParam: Date | string, format: string = defaultDateTimeFormat2) {
    return this.getDateTimeFormat(dateParam, format);
  },
  /** 일시 데이터에 시간(시분초) 포맷 적용하기 (기본포맷: HH:mm:ss)
   * @param date 포맷을 적용하기 위한 일시 데이터
   * @param format 적용할 포맷 (기본값: yyyy-MM-dd)
   * @returns 포맷 적용된 문자열 반환
   */
  getTimeFormat: function (dateParam: Date | string, format: string = defaultTimeFormat) {
    return this.getDateTimeFormat(dateParam, format);
  },
  /** 일시 데이터에 시간(초 제외)(시분) 포맷 적용하기 (기본포맷: HH:mm)
   * @param date 포맷을 적용하기 위한 일시 데이터
   * @param format 적용할 포맷 (기본값: yyyy-MM-dd)
   * @returns 포맷 적용된 문자열 반환
   */
  getTimeFormat2: function (dateParam: Date | string, format: string = defaultTimeFormat2) {
    return this.getDateTimeFormat(dateParam, format);
  },

  //--------------------------------------------------

  /** 현재 년도를 문자열로 반환 (포맷: yyyy)
   * @returns 
   */
  getCurrentYear: function () {
    const today = new Date();
    return this.getDateTimeFormat(today, 'yyyy');
  },
  /** 현재 년월을 문자열로 반환 (포맷: yyyy-MM)
   * @param delimiter 년 월의 구분자
   * @returns 
   */
  getCurrentMonth: function (delimiter: string = defaultDateDelimiter) {
    return this.getDateTimeFormat(new Date(), 'yyyy' + delimiter + 'MM');
  },
  /** 현재 년월일을 문자열로 반환 (포맷: yyyy-MM-dd)
   * 
   * @param delimiter 년 월 일 구분자
   * @returns 
   */
  getCurrentDay: function (delimiter: string = defaultDateDelimiter) {
    return this.getDateTimeFormat(new Date(), 'yyyy' + delimiter + 'MM' + delimiter + 'dd');
  },
  /** 현재 날짜를 문자열로 반환 getCurrentDay()와 동일함
   * 
   * @param delimiter 
   * @returns 
   */
  getToday: function (delimiter: string = defaultDateDelimiter) {
    return this.getDateTimeFormat(new Date(), 'yyyy' + delimiter + 'MM' + delimiter + 'dd');
  },
  /** 현재 일시를 문자열로 반환
   * 
   * @param dateDelimiter 년 월 일 구분자
   * @param dateTimeDelimiter 날짜 시간 구분자
   * @param timeDelimiter 시 분 초 구분자
   * @returns 
   */
  getNow: function (dateDelimiter: string = defaultDateDelimiter, dateTimeDelimiter: string = defaultDateTimeDelimiter, timeDelimiter: string = defaultTimeDelimiter) {
    return this.getDateTimeFormat(new Date(), 'yyyy' + dateDelimiter + 'MM' + dateDelimiter + 'dd' + dateTimeDelimiter + 'HH' + timeDelimiter + 'mm' + timeDelimiter + 'ss');
  },  
  /** 현재 일시를 문자열로 반환 (밀리초 포함)
   * 
   * @param dateDelimiter 년 월 일 구분자
   * @param dateTimeDelimiter 날짜 시간 구분자
   * @param timeDelimiter 시 분 초 구분자
   * @param milisecondsDelimiter 시간 밀리초 구분자
   * @returns 
   */
  getNow2: function (dateDelimiter: string = defaultDateDelimiter, dateTimeDelimiter: string = defaultDateTimeDelimiter, timeDelimiter: string = defaultTimeDelimiter, milisecondsDelimiter: string = defaultMilisecondsDelimiter) {
    return this.getDateTimeFormat(new Date(), 'yyyy' + dateDelimiter + 'MM' + dateDelimiter + 'dd' + dateTimeDelimiter + 'HH' + timeDelimiter + 'mm' + timeDelimiter + 'ss' + milisecondsDelimiter + 'fff');
  },  

  //--------------------------------------------------

  addDate(p_date: string, p_year: number, p_month: number, p_day: number) {
    if (p_date == undefined || p_date == null) {
      return '';
    }

    //구분자 세팅
    let ch = '';
    if (p_date.indexOf('-') >= 0) {
      ch = '-';
    }
    if (p_date.indexOf('.') >= 0) {
      ch = '.';
    }

    //구분자 삭제
    // eslint-disable-next-line no-useless-escape
    p_date = p_date.replace(/\-/g, '').replace(/\./g, '');
    const yyyy = p_date.substr(0, 4);
    const mm = p_date.substr(4, 2);
    const dd = p_date.substr(6, 2);

    //날짜 계산
    const date = new Date(
      Number(yyyy) + Number(p_year),
      Number(mm) - 1 + Number(p_month),
      Number(dd) + Number(p_day)
    )

    //문자로 변환
    const year: string = '' + date.getFullYear();
    let month: string = '' + date.getMonth() + 1;
    let day: string = '' + date.getDate();
    if (Number(month) < 10) month = '0' + month;
    if (Number(day) < 10) day = '0' + day;

    //리턴
    return year + ch + month + ch + day;
  },
  
  parseDate(p_date: string) {
    if (p_date == undefined || p_date == null) {
      return null;
    }

    //구분자 세팅
    let ch = '';
    if (p_date.indexOf('-') >= 0) {
      ch = '-';
    }
    if (p_date.indexOf('.') >= 0) {
      ch = '.';
    }

    //구분자 삭제
    // eslint-disable-next-line no-useless-escape
    p_date = p_date.replace(/\-/g, '').replace(/\./g, '');

    //날짜
    if (p_date.length == 8) {
      const yyyy = Number(p_date.substr(0, 4));
      const mm = Number(p_date.substr(4, 2)) - 1;
      const dd = Number(p_date.substr(6, 2));
      const date = new Date(yyyy, mm, dd);
      return date;
    }
    //날짜+시간
    else if (p_date.length == 14) {
      const yyyy = Number(p_date.substr(0, 4));
      const mm = Number(p_date.substr(4, 2)) - 1;
      const dd = Number(p_date.substr(6, 2));
      const hh = Number(p_date.substr(8, 2));
      const mi = Number(p_date.substr(10, 2));
      const ss = Number(p_date.substr(12, 2));
      const date = new Date(yyyy, mm, dd, hh, mi, ss);
      return date;
    } else {
      return null;
    }
  },
  // 일자 선택
  datepicker(p_id: string) {
    $('#' + p_id).datepicker({
      dateFormat: 'yy.mm.dd',
      showOn: 'both', // 달력 표시 - focus, button, both (input 눌렀을때, 이미지 눌렀을때, 둘다)
      buttonImage: '/src/assets/images/i_date.png',
      buttonImageOnly: true,
      showMonthAfterYear: true,
      showOtherMonths: true,
      selectOtherMonths: true,
      changeMonth: true, // 월선택 select box 표시 (기본은 false)
      changeYear: true, // 년선택 select box 표시 (기본은 false)
      showButtonPanel: true, // 하단 today, done  버튼기능 추가 표시 (기본은 false)
      //한글세팅
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
      ],
      monthNamesShort: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
      ],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      closeText: '닫기',
      currentText: '오늘'
      //,yearSuffix: '년'
    })
    // $('#' + p_id).on('keydown', function (e) {
    //   //8 : backspace
    //   //46 : delete
    //   if (e.keyCode == 8 || e.keyCode == 46) {
    //     $(this).val('')
    //   }
    // })

    //기간 Validation 설정
    let lv_start_id = '';
    let lv_end_id = '';
    //기간 Validation ID 찾기
    if (('' + p_id).indexOf('EndDe') >= 0) {
      lv_start_id = ('' + p_id).replace('EndDe', 'BgnDe');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('end') >= 0) {
      lv_start_id = ('' + p_id).replace('end', 'start');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('End') >= 0) {
      lv_start_id = ('' + p_id).replace('End', 'Start');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('END') >= 0) {
      lv_start_id = ('' + p_id).replace('END', 'START');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('EYMD') >= 0) {
      lv_start_id = ('' + p_id).replace('EYMD', 'SYMD');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('Eymd') >= 0) {
      lv_start_id = ('' + p_id).replace('Eymd', 'Symd');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('E_RCVPAY_DATE') >= 0) {
      lv_start_id = ('' + p_id).replace('E_RCVPAY_DATE', 'S_RCVPAY_DATE');
      lv_end_id = p_id;
    }

    //기간 Validation 이벤트 적용
    if (lv_start_id != '' && lv_end_id != '' && lv_start_id != lv_end_id) {
      $('#' + lv_start_id).change(() => {
        var lv_start_value = $('#' + lv_start_id).val();
        var lv_start_date = this.parseDate(lv_start_value);
        var lv_start_value_year = lv_start_value.substr(0, 4);
        var lv_end_value = $('#' + lv_end_id).val();
        var lv_end_date = this.parseDate(lv_end_value);
        var lv_end_value_year = lv_end_value.substr(0, 4);
        var lv_start_value_plus_year = this.addDate(lv_start_value, 1, 0, -1);
        var lv_start_value_plus_year_date = this.parseDate(lv_start_value_plus_year);
        if (lv_start_value != '' && lv_end_value != '') {
          //시작일 > 종료일
          if (lv_start_date > lv_end_date) {
            $('#' + lv_end_id).val(lv_start_value);
            $('#' + lv_end_id).change();
          }
          //시작년도 < 종료년도
          else if (Number(lv_start_value_year) < Number(lv_end_value_year)) {
            $('#' + lv_end_id).val(lv_start_value_year + '-12-31');
          }
          //시작일1년후 < 종료일
          /*else if(lv_start_value_plus_year_date < lv_end_date) {
            $('#'+lv_end_id).val(lv_start_value_plus_year);
            $('#'+lv_end_id).change();
          }*/
        }
      })
      $('#' + lv_end_id).change(() => {
        var lv_start_value = $('#' + lv_start_id).val();
        var lv_start_date = this.parseDate(lv_start_value);
        var lv_start_value_year = lv_start_value.substr(0, 4);
        var lv_end_value = $('#' + lv_end_id).val();
        var lv_end_date = this.parseDate(lv_end_value);
        var lv_end_value_year = lv_end_value.substr(0, 4);
        var lv_end_value_minus_year = this.addDate(lv_end_value, -1, 0, 1);
        var lv_end_value_minus_year_date = this.parseDate(lv_end_value_minus_year);

        if (lv_start_value != '' && lv_end_value != '') {
          //시작일 > 종료일
          if (lv_start_date > lv_end_date) {
            $('#' + lv_start_id).val(lv_end_value);
            $('#' + lv_start_id).change();
          }
          //시작년도 < 종료년도
          else if (Number(lv_start_value_year) < Number(lv_end_value_year)) {
            $('#' + lv_start_id).val(lv_end_value_year + '-01-01');
          }
          //시작일 < 종료일1년전
          /*else if(lv_start_date < lv_end_value_minus_year_date) {
            $('#'+lv_start_id).val(lv_end_value_minus_year);
            $('#'+lv_start_id).change();
          }*/
        }
      })
    }

    $('#' + p_id).focus(function () {
      $(this).select();
    })
    $('#' + p_id).keyup(function () {
      var lv_this = $(this);
      var lv_this_value = lv_this.val();
      var lv_this_value2 = ('' + lv_this_value).replace(/-/g, '').replace(/\./g, '');

      if (lv_this_value2.length == 8) {
        lv_this.val(
          lv_this_value2.substr(0, 4) +
            '-' +
            lv_this_value2.substr(4, 2) +
            '-' +
            lv_this_value2.substr(6, 2)
        );
        lv_this.change();
      }
    })
  },

  // 월 선택
  monthpicker(p_id: any) {
    $('#' + p_id).monthpicker({
      dateFormat: 'yy.mm',
      showOn: 'both', // 달력 표시 - focus, button, both (input 눌렀을때, 이미지 눌렀을때, 둘다)
      buttonImage: '/src/assets/images/i_date.png',
      buttonImageOnly: true,
      showMonthAfterYear: true,
      showOtherMonths: true,
      selectOtherMonths: true,
      changeMonth: true, // 월선택 select box 표시 (기본은 false)
      changeYear: true, // 년선택 select box 표시 (기본은 false)
      showButtonPanel: true, // 하단 today, done  버튼기능 추가 표시 (기본은 false)
      //한글세팅
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
      ],
      monthNamesShort: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
      ],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      closeText: '닫기',
      currentText: '이번달'
    })
    $('#' + p_id).on('keydown', function (e) {
      //8 : backspace
      //46 : delete
      if (e.keyCode == 8 || e.keyCode == 46) {
        $(this).val('');
      }
    })

    //기간 Validation 설정
    var lv_start_id = '';
    var lv_end_id = '';
    //기간 Validation ID 찾기
    if (('' + p_id).indexOf('end') >= 0) {
      lv_start_id = ('' + p_id).replace('end', 'start');
      lv_end_id = p_id;
    }

    if (('' + p_id).indexOf('End') >= 0) {
      lv_start_id = ('' + p_id).replace('End', 'Start');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('END') >= 0) {
      lv_start_id = ('' + p_id).replace('END', 'START');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('EndDe') >= 0) {
      lv_start_id = ('' + p_id).replace('EndDe', 'BgnDe');
      lv_end_id = p_id;
    }

    //기간 Validation 이벤트 적용
    if (lv_start_id != '' && lv_end_id != '' && lv_start_id != lv_end_id) {
      $('#' + lv_start_id).change(() => {
        var lv_start_value = $('#' + lv_start_id).val() + '01'
        var lv_start_value_year = lv_start_value.substr(0, 4)
        var lv_start_date = this.parseDate(lv_start_value)
        var lv_end_value = $('#' + lv_end_id).val() + '01'
        var lv_end_date = this.parseDate(lv_end_value)
        var lv_end_value_year = lv_end_value.substr(0, 4)
        if (lv_start_value != '' && lv_end_value != '') {
          //시작일 > 종료일
          if (lv_start_date > lv_end_date) {
            $('#' + lv_end_id).val(lv_start_value.substr(0, 7))
          }
        }
      })
      $('#' + lv_end_id).change(() => {
        var lv_start_value = $('#' + lv_start_id).val() + '01'
        var lv_start_date = this.parseDate(lv_start_value)
        var lv_end_value = $('#' + lv_end_id).val() + '01'
        var lv_end_date = this.parseDate(lv_end_value)
        if (lv_start_value != '' && lv_end_value != '') {
          //시작일 > 종료일
          if (lv_start_date > lv_end_date) {
            $('#' + lv_start_id).val(lv_end_value.substr(0, 7))
          }
          //시작년도 < 종료년도
          if (Number(lv_start_value_year) < Number(lv_end_value_year)) {
            $('#' + lv_end_id).val(lv_start_value_year + '-12')
          }
        }
      })
    }

    $('#' + p_id).focus(function () {
      $(this).select();
    })
    $('#' + p_id).keyup(function () {
      var lv_this = $(this);
      var lv_this_value = lv_this.val();
      var lv_this_value2 = ('' + lv_this_value).replace(/-/g, '').replace(/\./g, '');

      if (lv_this_value2.length == 6) {
        lv_this.val(lv_this_value2.substr(0, 4) + '-' + lv_this_value2.substr(4, 2));
        lv_this.change();
      }
    })
  },

  // 년도 선택
  yearpicker(p_id: any) {
    $('#' + p_id).yearpicker({
      dateFormat: 'yy',
      showOn: 'both', // 달력 표시 - focus, button, both (input 눌렀을때, 이미지 눌렀을때, 둘다)
      buttonImage: '/src/assets/images/i_date.png',
      buttonImageOnly: true,
      showMonthAfterYear: true,
      showOtherMonths: true,
      selectOtherMonths: true,
      changeMonth: true, // 월선택 select box 표시 (기본은 false)
      changeYear: false, // 년선택 select box 표시 (기본은 false)
      showButtonPanel: true, // 하단 today, done  버튼기능 추가 표시 (기본은 false)
      //한글세팅
      prevText: '이전',
      nextText: '다음',
      monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
      ],
      monthNamesShort: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
      ],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      closeText: '닫기',
      currentText: '올해'
    })
    // $('#' + p_id).on('keydown', function (e) {
    //   //8 : backspace
    //   //46 : delete
    //   if (e.keyCode == 8 || e.keyCode == 46) {
    //     $(this).val('')
    //   }
    // })

    //기간 Validation 설정
    var lv_start_id = '';
    var lv_end_id = '';

    //기간 Validation ID 찾기
    if (('' + p_id).indexOf('end') >= 0) {
      lv_start_id = ('' + p_id).replace('end', 'start');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('End') >= 0) {
      lv_start_id = ('' + p_id).replace('End', 'Start');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('END') >= 0) {
      lv_start_id = ('' + p_id).replace('END', 'START');
      lv_end_id = p_id;
    } else if (('' + p_id).indexOf('EndDe') >= 0) {
      lv_start_id = ('' + p_id).replace('EndDe', 'BgnDe');
      lv_end_id = p_id;
    }

    //기간 Validation 이벤트 적용
    if (lv_start_id != '' && lv_end_id != '' && lv_start_id != lv_end_id) {
      $('#' + lv_start_id).change(() => {
        var lv_start_value = $('#' + lv_start_id).val() + '01';
        var lv_start_date = this.parseDate(lv_start_value);
        var lv_end_value = $('#' + lv_end_id).val() + '01';
        var lv_end_date = this.parseDate(lv_end_value);

        //시작일 > 종료일
        if (lv_start_value != '' && lv_end_value != '') {
          if (lv_start_date > lv_end_date) {
            $('#' + lv_end_id).val(lv_start_value.substr(0, 7));
          }
        }
      })
      $('#' + lv_end_id).change(() => {
        var lv_start_value = $('#' + lv_start_id).val() + '01';
        var lv_start_date = this.parseDate(lv_start_value);
        var lv_end_value = $('#' + lv_end_id).val() + '01';
        var lv_end_date = this.parseDate(lv_end_value);

        //시작일 > 종료일
        if (lv_start_value != '' && lv_end_value != '') {
          if (lv_start_date > lv_end_date) {
            $('#' + lv_start_id).val(lv_end_value.substr(0, 7));
          }
        }
      })
    }

    $('#' + p_id).focus(function () {
      $(this).select();
    })
  },

  //--------------------------------------------------

  /** 일시 정보에서 초,밀리초를 리셋 - UI Component에서 초,밀리초를 지원하지 않기 때문
   * 
   * @param date 
   */
  trimForDateTime(date: Date | undefined) {
    return trimDateTime(date, 'ssfff');
  },
  
  /** 일시 정보에서 시,분,초,밀리초를 리셋 - UI Component에서 초,밀리초를 지원하지 않기 때문
   * 
   * @param date 
   */
  trimForDate(date: Date | undefined) {
    return trimDateTime(date, 'HHmmssfff');
  },
  
  /** 일시 정보에서 년,월,일,초,밀리초를 리셋 - UI Component에서 초,밀리초를 지원하지 않기 때문
   * 
   * @param date 
   */
  trimForTime(date: Date | undefined) {
    return trimDateTime(date, 'yyyyMMddssfff');
  },

  /** 일시 정보에서 월,일,시,분,초,밀리초를 리셋
   * 
   * @param date 
   */
  trimForYear(date: Date | undefined) {
    return trimDateTime(date, 'MMddHHmmssfff');
  },

  /** 일시 정보에서 일,시,분,초,밀리초를 리셋
   * 
   * @param date 
   */
  trimForYearMonth(date: Date | undefined) {
    return trimDateTime(date, 'ddHHmmssfff');
  },

  /** 일시 정보에서 시,분,초,밀리초를 리셋
   * 
   * @param date 
   */
  trimForYearMonthDay(date: Date | undefined) {
    return trimDateTime(date, 'HHmmssfff');
  },
}

/** 문자열 앞에 특정 문자열을 반복하여 채운 후 반환하기
 * @param str 대상 문자열
 * @param padLength 대상 문자열에 특정 문자열을 모두 채운 후 길이
 * @param padString 대상 문자열 앞에 채우기위한 문자열 (일반적으로 문자를 사용)
 * @returns 대상 문자열 앞에 특정 문자열을 채운 후 반환
 */
const lpad = (str:string, padLength:number, padString:string) => {
  str = '' + str;

  while(str.length < padLength)
    str = padString + str;

  return str
};

/** 일시 정보에서 년,월,일,시,분,초,밀리초를 선택하여 리셋
 * 
 * @param date 
 * @param target 
 */
const trimDateTime = (date: Date | undefined, target: String = 'ssfff') => {
  
  if (date != undefined) {
    if (target.indexOf('yyyy') >= 0) {
      date.setFullYear(1901);
      date.setFullYear(date.getFullYear() - 1900);
    }
    if (target.indexOf('MM') >= 0) {
      date.setMonth(0);
    }
    if (target.indexOf('dd') >= 0) {
      date.setDate(1);
    }
    if (target.indexOf('HH') >= 0) {
      date.setHours(0);
    }
    if (target.indexOf('mm') >= 0) {
      date.setMinutes(0);
    }
    if (target.indexOf('ss') >= 0) {
      date.setSeconds(0);
    }
    if (target.indexOf('fff') >= 0) {
      date.setMilliseconds(0);
    }
  }

  return date;
};
