(ramzinehDatepickers={generalOptions:{inline:!1,format:"DD MMMM YYYY",viewMode:"day",initialValue:!1,autoClose:!0,position:"auto",altFormat:"X",onlySelectOnDate:!0,calendarType:ramzinehDatePicker.calendarType,inputDelay:800,observer:!1,calendar:{persian:{locale:"fa",showHint:!0,leapYearMode:"algorithmic"},gregorian:{locale:"en",showHint:!0}},navigator:{enabled:!0,scroll:{enabled:!0},text:{btnNextText:"<",btnPrevText:">"}},toolbox:{enabled:!0,calendarSwitch:{enabled:!0,format:"MMMM"},todayButton:{enabled:!0,text:{fa:ramzinehDatePicker.i18n.today,en:"Today"}},submitButton:{enabled:!0,text:{fa:ramzinehDatePicker.i18n.submit,en:"Submit"}},text:{btnToday:ramzinehDatePicker.i18n.today}},timePicker:{enabled:!1,step:1,hour:{enabled:!0,step:null},minute:{enabled:!0,step:null},second:{enabled:!1,step:null},meridian:{enabled:!1}},dayPicker:{enabled:!0,titleFormat:"YYYY MMMM"},monthPicker:{enabled:!0,titleFormat:"YYYY"},yearPicker:{enabled:!0,titleFormat:"YYYY"},responsive:!0,template:'<div id="plotId" class="mj-datepicker-plot-area datepicker-plot-area {{cssClass}}">\n    {{#navigator.enabled}}\n        <div data-navigator class="datepicker-navigator">\n            <div class="pwt-btn pwt-btn-next">{{navigator.text.btnNextText}}</div>\n            <div class="pwt-btn pwt-btn-switch">{{navigator.switch.text}}</div>\n            <div class="pwt-btn pwt-btn-prev">{{navigator.text.btnPrevText}}</div>\n        </div>\n    {{/navigator.enabled}}\n    <div class="datepicker-grid-view" >\n    {{#days.enabled}}\n        {{#days.viewMode}}\n        <div class="datepicker-day-view" >    \n            <div class="month-grid-box">\n                <div class="header">\n                    <div class="title"></div>\n                    <div class="header-row">\n                        {{#weekdays.list}}\n                            <div class="header-row-cell">{{.}}</div>\n                        {{/weekdays.list}}\n                    </div>\n                </div>    \n                <table cellspacing="0" class="table-days">\n                    <tbody>\n                        {{#days.list}}\n                           \n                            <tr>\n                                {{#.}}\n                                    {{#enabled}}\n                                        <td data-date="{{dataDate}}" data-unix="{{dataUnix}}" >\n                                            <span  class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span>\n                                            {{#altCalendarShowHint}}\n                                            <i  class="alter-calendar-day">{{alterCalTitle}}</i>\n                                            {{/altCalendarShowHint}}\n                                        </td>\n                                    {{/enabled}}\n                                    {{^enabled}}\n                                        <td data-date="{{dataDate}}" data-unix="{{dataUnix}}" class="disabled">\n                                            <span class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span>\n                                            {{#altCalendarShowHint}}\n                                            <i  class="alter-calendar-day">{{alterCalTitle}}</i>\n                                            {{/altCalendarShowHint}}\n                                        </td>\n                                    {{/enabled}}\n                                    \n                                {{/.}}\n                            </tr>\n                        {{/days.list}}\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        {{/days.viewMode}}\n    {{/days.enabled}}\n    \n    {{#month.enabled}}\n        {{#month.viewMode}}\n            <div class="datepicker-month-view">\n                {{#month.list}}\n                    {{#enabled}}               \n                        <div data-month="{{dataMonth}}" class="month-item {{#selected}}selected{{/selected}}">{{title}}</small></div>\n                    {{/enabled}}\n                    {{^enabled}}               \n                        <div data-month="{{dataMonth}}" class="month-item month-item-disable {{#selected}}selected{{/selected}}">{{title}}</small></div>\n                    {{/enabled}}\n                {{/month.list}}\n            </div>\n        {{/month.viewMode}}\n    {{/month.enabled}}\n    \n    {{#year.enabled }}\n        {{#year.viewMode }}\n            <div class="datepicker-year-view" >\n                {{#year.list}}\n                    {{#enabled}}\n                        <div data-year="{{dataYear}}" class="year-item {{#selected}}selected{{/selected}}">{{title}}</div>\n                    {{/enabled}}\n                    {{^enabled}}\n                        <div data-year="{{dataYear}}" class="year-item year-item-disable {{#selected}}selected{{/selected}}">{{title}}</div>\n                    {{/enabled}}                    \n                {{/year.list}}\n            </div>\n        {{/year.viewMode }}\n    {{/year.enabled }}\n    \n    </div>\n    {{#time}}\n    {{#enabled}}\n    <div class="datepicker-time-view">\n        {{#hour.enabled}}\n            <div class="hour time-segment" data-time-key="hour">\n                <div class="up-btn" data-time-key="hour">▲</div>\n                <input value="{{hour.title}}" type="text" placeholder="hour" class="hour-input">\n                <div class="down-btn" data-time-key="hour">▼</div>                    \n            </div>       \n            <div class="divider">\n                <span>:</span>\n            </div>\n        {{/hour.enabled}}\n        {{#minute.enabled}}\n            <div class="minute time-segment" data-time-key="minute" >\n                <div class="up-btn" data-time-key="minute">▲</div>\n                <input disabled value="{{minute.title}}" type="text" placeholder="minute" class="minute-input">\n                <div class="down-btn" data-time-key="minute">▼</div>\n            </div>        \n            <div class="divider second-divider">\n                <span>:</span>\n            </div>\n        {{/minute.enabled}}\n        {{#second.enabled}}\n            <div class="second time-segment" data-time-key="second"  >\n                <div class="up-btn" data-time-key="second" >▲</div>\n                <input disabled value="{{second.title}}"  type="text" placeholder="second" class="second-input">\n                <div class="down-btn" data-time-key="second" >▼</div>\n            </div>\n            <div class="divider meridian-divider"></div>\n            <div class="divider meridian-divider"></div>\n        {{/second.enabled}}\n        {{#meridian.enabled}}\n            <div class="meridian time-segment" data-time-key="meridian" >\n                <div class="up-btn" data-time-key="meridian">▲</div>\n                <input disabled value="{{meridian.title}}" type="text" class="meridian-input">\n                <div class="down-btn" data-time-key="meridian">▼</div>\n            </div>\n        {{/meridian.enabled}}\n    </div>\n    {{/enabled}}\n    {{/time}}\n    \n    {{#toolbox}}\n    {{#enabled}}\n    <div class="toolbox">\n        {{#toolbox.submitButton.enabled}}\n            <div class="pwt-btn-submit">{{submitButtonText}}</div>\n        {{/toolbox.submitButton.enabled}}        \n        {{#toolbox.todayButton.enabled}}\n            <div class="pwt-btn-today">{{todayButtonText}}</div>\n        {{/toolbox.todayButton.enabled}}        \n        {{#toolbox.calendarSwitch.enabled}}\n            <div class="pwt-btn-calendar">{{calendarSwitchText}}</div>\n        {{/toolbox.calendarSwitch.enabled}}\n    </div>\n    {{/enabled}}\n    {{^enabled}}\n        {{#onlyTimePicker}}\n        <div class="toolbox">\n            <div class="pwt-btn-exit">{{text.btnExit}}</div>\n        </div>\n        {{/onlyTimePicker}}\n    {{/enabled}}\n    {{/toolbox}}\n</div>\n'},birthdateOptions:{maxDate:new Date().getTime(),toolbox:{calendarSwitch:{enabled:!1}}},datepicker:function(e={},t="ramzineh_datepicker"){let n=jQuery,a=Object.assign(this.generalOptions,e);n(`.${t}:not(.pwt-datepicker-input-element)`).length&&n(`.${t}:not(.pwt-datepicker-input-element)`).each(function(){let e={...a};n(this).next().is('input[type="hidden"]')&&(e.altField=n(this).next()[0]);let t=n(this).mjpersianDatepicker(e);parseInt(n(this).attr("data-time"))>0&&t.setDate(1e3*n(this).attr("data-time"))})},birthdate:function(){this.datepicker(this.birthdateOptions,"ramzineh_birthdate_picker")},init:function(){this.datepicker(),this.birthdate()}}).init();