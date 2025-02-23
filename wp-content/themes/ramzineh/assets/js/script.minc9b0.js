!function(t){t(document).ready(function(){if(t(window).on("load resize",function(){let e=window.innerWidth,i=t("body"),n={desktop:"desktop",tablet:"tablet",mobile:"mobile"};e>1024?i.removeClass([n.tablet,n.mobile]).addClass(n.desktop):e<=1024&&e>480?i.removeClass([n.desktop,n.mobile]).addClass(n.tablet):e<480&&i.removeClass([n.desktop,n.tablet]).addClass(n.mobile)}),t("body").hasClass("sticky-header")&&t(window).on("scroll",function(){let e="sticky-header-active";t(window).scrollTop()>10?t("body").addClass(e):t("body").removeClass(e)}).trigger("scroll"),t(".bottom-nav-item-menu").on("click",function(e){e.preventDefault(),t("#bottom-nav-menu-wrap").toggleClass("bottom-nav-menu-open"),t(this).toggleClass("bottom-nav-item-active")}),t(document).on("click","#bottom-nav-menu-wrap .menu-item-has-children:not(.opened) a",function(e){e.preventDefault(),t(this).closest(".menu-item-has-children").addClass("opened"),t(this).siblings("ul").slideDown()}),t(".ramzineh_select").length&&t(".ramzineh_select").each(function(){initSelector(this)}),t(".archive-sort .dropdown-item").length&&t(".archive-sort .dropdown-item").on("click",function(e){e.preventDefault();let i=t(this).closest(".archive-sort-form");i.find('input[name="sort"], input[name="orderby"]').val(t(this).attr("data-value")),i.submit()}),t(".ramzineh_trade_box").length&&"undefined"!=typeof currencies&&Object.keys(currencies).length&&(t(".ramzineh_trade_box-crypto-list").on("change",function(){t(this).closest(".ramzineh_trade_box-content").find(".ramzineh_trade_box-input").val("");let e=t(this).val();t(this).closest(".ramzineh_trade_box-input-container").find(".ramzineh_trade_box-input").attr("min",currencies[e].min_qty)}),t(".ramzineh_trade_box-crypto-list").trigger("change"),t(document).on("change keyup input",".ramzineh_trade_box-input-crypto-from, .ramzineh_trade_box-input-crypto-to",function(){let e=t(this).closest(".ramzineh_trade_box-content"),i=parseFloat(e.find(".ramzineh_trade_box-input-crypto-from").val().replaceAll(",","")),n=parseFloat(e.find(".ramzineh_trade_box-input-crypto-to").val().replaceAll(",","")),o=parseFloat(currencies[e.find(".ramzineh_trade_box-convert-from").val()].usdt),a=parseFloat(currencies[e.find(".ramzineh_trade_box-convert-to").val()].usdt),s=!!t(this).hasClass("ramzineh_trade_box-input-crypto-from"),r=parseFloat(s?o/a*i:a/o*n);r=isNaN(r)||!r?"":r.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:9}),e.find(s?".ramzineh_trade_box-input-crypto-to":".ramzineh_trade_box-input-crypto-from").val(r)})),t(".accordion-items").length&&t(".accordion-item-head").on("click",function(){let e=t(this).closest(".accordion-items").find(".accordion-item-default, .accordion-item-active"),i=t(this).closest(".accordion-item"),n=i.hasClass("accordion-item-default")||i.hasClass("accordion-item-active");e.find(".accordion-item-content").slideUp(),e.removeClass(["accordion-item-default","accordion-item-active"]),n||(i.addClass("accordion-item-active"),i.find(".accordion-item-content").slideDown())}),t(".timeline").length){function e(){t(".timeline").each(function(){var e=t(this),i=e.offset(),n=[],o=0,a=0;e.find(".timeline-item").each(function(e){let s=t(this),r=t(s.find("svg circle:first-child")[0]),c=r.offset();n[e]=[c.left-i.left+parseInt(r.attr("r")),c.top-i.top+parseInt(r.attr("r"))],o=Math.max(n[e][0],o),a=Math.max(n[e][1],a)}),e.css("--mid-line-top",`${a}px`),e.find(".timeline-item").each(function(e){let i=t(this);n[e][1]!==a&&(i.addClass("timeline-item-reposition"),i.css("--top-offset",`${a-n[e][1]}px`))})})}e(),t(window).on("resize",function(){1024>=t(window).width()&&(e(),e())})}t(".ramzineh_stars-has-radio .ramzineh_star").on("click",function(){let e=t(this).index(),i=t(this).closest(".ramzineh_stars"),n="ramzineh_star-active";t(this).prev().prop("checked",!0),i.find(".ramzineh_star").removeClass(n);for(let o=0;o<=e+1;o++)i.find(`.ramzineh_star:nth-child(${o})`).addClass(n)}),t('#footer-newsletter button, #footer-newsletter input[type="submit"]').each(function(){t(this).val().trim()||t(this).val(t("body").hasClass("rtl")?"":"").css("font-family","Ramzineh")})})}(jQuery);