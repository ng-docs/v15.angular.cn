!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(self.webpackChunkangular_cn=self.webpackChunkangular_cn||[]).push([["src_app_custom-elements_events_events_module_ts"],{597:function(e,o,a){"use strict";a.r(o),a.d(o,{EventsModule:function(){return _}});var r=a(1116),u=a(5366),c=a(878),i=a(7727),s=a(7296),g=a(1374),l=a(2693),f=a(9474),Z=g.bL+"events.json",p=function(){var e=function(){function e(n,o){t(this,e),this.http=n,this.logger=o,this.events=this.getEvents()}return n(e,[{key:"getEvents",value:function(){var t=this,e=this.http.get(Z).pipe((0,i.K)(function(e){return t.logger.error(new Error("".concat(Z," request failed: ").concat(e.message))),(0,c.of)([])}),(0,s.C)());return e.connect(),e}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.LFG(l.eN),u.LFG(f.Y))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac}),e}();function h(t,e){1&t&&(u.TgZ(0,"div"),u.TgZ(1,"p"),u._uU(2,"We don't have any upcoming speaking engagements at the moment."),u.qZA(),u.TgZ(3,"p"),u._uU(4,"Until something comes up, make sure you check our "),u.TgZ(5,"a",4),u._uU(6,"YouTube channel"),u.qZA(),u._uU(7," and follow us on "),u.TgZ(8,"a",5),u._uU(9,"social media"),u.qZA(),u._uU(10,"."),u.qZA(),u.TgZ(11,"p"),u._uU(12,"If you want us to be part of your event reach out on "),u.TgZ(13,"a",6),u._uU(14,"devrel@angular.io"),u.qZA(),u._uU(15,"!"),u.qZA(),u.qZA())}function v(t,e){if(1&t&&(u.TgZ(0,"tr"),u.TgZ(1,"th"),u.TgZ(2,"a",7),u._uU(3),u.qZA(),u.qZA(),u.TgZ(4,"td"),u._uU(5),u.qZA(),u.TgZ(6,"td"),u.TgZ(7,"div"),u._uU(8),u.qZA(),u.qZA(),u.qZA()),2&t){var n=e.$implicit,o=u.oxw(2);u.xp6(2),u.s9C("href",n.linkUrl,u.LSH),u.s9C("title",n.tooltip),u.xp6(1),u.Oqu(n.name),u.xp6(2),u.Oqu(n.location),u.xp6(3),u.hij(" ",o.getEventDates(n)," ")}}function T(t,e){if(1&t&&(u.TgZ(0,"table",2),u.TgZ(1,"thead"),u.TgZ(2,"tr"),u.TgZ(3,"th"),u._uU(4,"Event"),u.qZA(),u.TgZ(5,"th"),u._uU(6,"Location"),u.qZA(),u.TgZ(7,"th"),u._uU(8,"Date"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(9,"tbody"),u.YNc(10,v,9,5,"tr",3),u.qZA(),u.qZA()),2&t){var n=u.oxw();u.xp6(10),u.Q6J("ngForOf",n.upcomingEvents)}}function d(t,e){if(1&t&&(u.TgZ(0,"tr"),u.TgZ(1,"th"),u.TgZ(2,"a",7),u._uU(3),u.qZA(),u.qZA(),u.TgZ(4,"td"),u._uU(5),u.qZA(),u.TgZ(6,"td"),u.TgZ(7,"div"),u._uU(8),u.qZA(),u.qZA(),u.qZA()),2&t){var n=e.$implicit,o=u.oxw();u.xp6(2),u.s9C("href",n.linkUrl,u.LSH),u.s9C("title",n.tooltip),u.xp6(1),u.Oqu(n.name),u.xp6(2),u.Oqu(n.location),u.xp6(3),u.hij(" ",o.getEventDates(n)," ")}}var m=["January","February","March","April","May","June","July","August","September","October","November","December"],q=function(){var e=function(){function e(n){t(this,e),this.eventsService=n}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.eventsService.events.subscribe(function(e){t.pastEvents=e.filter(function(t){return new Date(t.date.end).getTime()<Date.now()-864e5}).sort(function(t,e){return U(t.date,e.date)?1:-1}),t.upcomingEvents=e.filter(function(t){return new Date(t.date.end).getTime()>=Date.now()-864e5}).sort(function(t,e){return U(t.date,e.date)?-1:1})})}},{key:"getEventDates",value:function(t){var e;if(t.workshopsDate){var n="".concat(A(t.date)," (conference)"),o="".concat(A(t.workshopsDate)," (workshops)");e=U(t.workshopsDate,t.date)?"".concat(o,", ").concat(n):"".concat(n,", ").concat(o)}else e=A(t.date);return e="".concat(e,", ").concat(new Date(t.date.end).getUTCFullYear())}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(p))},e.\u0275cmp=u.Xpm({type:e,selectors:[["aio-events"]],decls:18,vars:3,consts:[[4,"ngIf"],["class","is-full-width",4,"ngIf"],[1,"is-full-width"],[4,"ngFor","ngForOf"],["href","https://www.youtube.com/angular"],["href","https://twitter.com/angular"],["href","mailto:devrel@angular.io"],[3,"href","title"]],template:function(t,e){1&t&&(u.TgZ(0,"h2"),u._uU(1,"Where we'll be presenting:"),u.qZA(),u.YNc(2,h,16,0,"div",0),u.YNc(3,T,11,1,"table",1),u._UZ(4,"br"),u.TgZ(5,"h2"),u._uU(6,"Where we already presented:"),u.qZA(),u.TgZ(7,"table",2),u.TgZ(8,"thead"),u.TgZ(9,"tr"),u.TgZ(10,"th"),u._uU(11,"Event"),u.qZA(),u.TgZ(12,"th"),u._uU(13,"Location"),u.qZA(),u.TgZ(14,"th"),u._uU(15,"Date"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(16,"tbody"),u.YNc(17,d,9,5,"tr",3),u.qZA(),u.qZA()),2&t&&(u.xp6(2),u.Q6J("ngIf",!(null!=e.upcomingEvents&&e.upcomingEvents.length)),u.xp6(1),u.Q6J("ngIf",null==e.upcomingEvents?null:e.upcomingEvents.length),u.xp6(14),u.Q6J("ngForOf",e.pastEvents))},directives:[r.O5,r.sg],encapsulation:2}),e}();function A(t){var e=new Date(t.start),n=new Date(t.end),o="".concat(m[e.getUTCMonth()]," ").concat(e.getUTCDate());return e.getUTCMonth()!==n.getUTCMonth()?o="".concat(o," - ").concat(m[n.getUTCMonth()]," ").concat(n.getUTCDate()):e.getUTCDate()!==n.getUTCDate()&&(o="".concat(o,"-").concat(n.getUTCDate())),o}function U(t,e){return t.start<e.start||t.start===e.start&&t.end<e.end}var w,_=((w=function e(){t(this,e),this.customElementComponent=q}).\u0275fac=function(t){return new(t||w)},w.\u0275mod=u.oAB({type:w}),w.\u0275inj=u.cJS({providers:[p],imports:[[r.ez]]}),w)}}])}();
//# sourceMappingURL=src_app_custom-elements_events_events_module_ts-es5.9feaa91070778c4d68f9.js.map