(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{259:function(t,o,e){},277:function(t,o,e){"use strict";e(259)},312:function(t,o,e){"use strict";e.r(o);e(13);var r={props:["promotion"],data:function(){return{mobile:!1,img_url:"/img/promotions/".concat(this.promotion.year,".").concat(this.promotion.img_extension)}},methods:{isMobile:function(){var a,t=!1;a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(t=!0),this.mobile=t}},created:function(){this.isMobile()}},n=(e(277),e(22)),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"brook-whatdo-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1"},[o("div",{class:{container:!t.mobile,"mobile-container":t.mobile}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-10 offset-lg-2"},[o("div",{staticClass:"bk-title--default text-left",class:{override_margin:t.mobile}},[o("br"),t._v(" "),o("h3",{staticClass:"heading heading-h3"},[t._v("Promotion "+t._s(t.promotion.year))]),t._v(" "),o("div",{staticClass:"bkseparator--30"}),t._v(" "),t.promotion.cv_repo?o("div",[o("a",{attrs:{href:t.promotion.cv_repo}},[t._v(" Recueil de CV ")]),t._v(" "),o("div",{staticClass:"bkseparator--30"})]):t._e(),t._v(" "),o("div",{staticStyle:{display:"grid"}},[t.promotion.img_extension?o("figure",{class:{mobile_figure:t.mobile}},[o("img",{class:{override_with:t.promotion.img_width_override&&!t.mobile},attrs:{src:t.img_url}}),t._v(" "),t.promotion.credit?o("figcaption",[t._v("crédits photo: "+t._s(t.promotion.credit))]):t._e()]):t._e(),t._v(" "),o("div",{staticClass:"photo_details"},[t.promotion.students?o("p",{staticClass:"p_details"},[o("ul",{staticClass:"row_details"},t._l(t.promotion.students,(function(e){return o("div",{key:e},[o("li",[o("a",[t._v(t._s(e))])])])})),0)]):t._e(),t._v(" "),t.promotion.first_row&&2023!==t.promotion.year?o("p",{staticClass:"p_details"},[t._v("\n                                Premier rang de gauche à droite:\n                                "),o("ul",{staticClass:"row_details"},t._l(t.promotion.first_row,(function(e){return o("div",{key:e},[o("li",[o("a",[t._v(t._s(e))])])])})),0)]):t._e(),t._v(" "),t.promotion.first_row&&2023===t.promotion.year?o("p",{staticClass:"p_details"},[t._v("\n                                Premier rang de gauche à droite:\n                                "),o("ul",{staticClass:"row_details"},t._l(t.promotion.first_row,(function(e){return o("div",{key:e},[o("li",[e.linkedin.length>0?o("a",{attrs:{target:"_blank",href:e.linkedin}},[t._v(t._s(e.name))]):o("a",[t._v(t._s(e.name))])])])})),0)]):t._e(),t._v(" "),t.promotion.second_row&&2023!==t.promotion.year?o("p",{staticClass:"p_details"},[t._v("\n                                Deuxième rang de gauche à droite: \n                                "),o("ul",{staticClass:"row_details"},t._l(t.promotion.second_row,(function(e){return o("div",{key:e},[o("li",[o("a",[t._v(t._s(e))])])])})),0)]):t._e(),t._v(" "),t.promotion.second_row&&2023===t.promotion.year?o("p",{staticClass:"p_details"},[t._v("\n                                Deuxième rang de gauche à droite: \n                                "),o("ul",{staticClass:"row_details"},t._l(t.promotion.second_row,(function(e){return o("div",{key:e},[e.linkedin.length>0?o("a",{attrs:{target:"_blank",href:e.linkedin}},[t._v(t._s(e.name))]):o("a",[t._v(t._s(e.name))])])})),0)]):t._e(),t._v(" "),t.promotion.third_row&&2023!==t.promotion.year?o("p",{staticClass:"p_details"},[t._v("\n                                Troisième rang de gauche à droite:\n                                "),o("ul",{staticClass:"row_details"},t._l(t.promotion.third_row,(function(e){return o("div",{key:e},[o("li",[o("a",[t._v(t._s(e))])])])})),0)]):t._e(),t._v(" "),t.promotion.third_row&&2023===t.promotion.year?o("p",{staticClass:"p_details"},[t._v("\n                                Troisième rang de gauche à droite:\n                                "),o("ul",{staticClass:"row_details"},t._l(t.promotion.third_row,(function(e){return o("div",{key:e},[e.linkedin.length>0?o("a",{attrs:{target:"_blank",href:e.linkedin}},[t._v(t._s(e.name))]):o("a",[t._v(t._s(e.name))])])})),0)]):t._e(),t._v(" "),t.promotion.fourth_row?o("p",{staticClass:"p_details"},[t._v("\n                                Quatrième rang de gauche à droite:\n                                "),o("ul",{staticClass:"row_details"},t._l(t.promotion.third_row,(function(e){return o("div",{key:e},[o("li",[o("a",[t._v(t._s(e))])])])})),0)]):t._e(),t._v(" "),t.promotion.absents?o("p",{staticClass:"p_details"},[t._v("\n                                Sont absents de la photo:\n                                "),o("ul",{staticClass:"row_details"},t._l(t.promotion.absents,(function(e){return o("div",{key:e},[o("li",[o("a",[t._v(t._s(e))])])])})),0)]):t._e()])])])])])])])}),[],!1,null,null,null);o.default=component.exports}}]);