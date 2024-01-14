(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
      306: function (n, e, t) {
        "use strict";
        t.r(e);
        var o = {
          components: {
            HeaderBlack: function () {
              return t.e(0).then(t.bind(null, 288));
            },
            OffCanvasMobileMenu: function () {
              return t.e(2).then(t.bind(null, 308));
            },
            Promotion: function () {
              return t.e(3).then(t.bind(null, 312));
            },
            Footer: function () {
              return t.e(1).then(t.bind(null, 309));
            },
          },
          data: function () {
            return {
              navOpen: !1,
              promotion: {
                year: 2024,
                img_extension: "png",
                first_row: 
                    [
                        { name: "Aliette Jannin", linkedin: "" },
                        { name: "Antoine Gonnet", linkedin: "" },
                        { name: "Claire Renson d'Allois d'Herculais", linkedin: "" },
                        { name: "Clémence Le Guigot", linkedin: "" },
                        { name: "Imane Rkik", linkedin: "" },
                        { name: "Marion Bumenn-Etienne", linkedin: "" },
                        { name: "Laëtitia Lepert", linkedin: "" },
                        { name: "Zoé Petetin-Lacoste", linkedin: "" },
                        { name: "Manon Dieuaide", linkedin: "" },
                        { name: "Guillaume Tison", linkedin: "" },
                      ],
                second_row: [
                    { name: "Manon Cavrois", linkedin: "" },
                    { name: "Alexandre Moussay", linkedin: "" },
                    { name: "Juliette Lafitedupont", linkedin: "" },
                    { name: "Mélissa Cicchirillo", linkedin: "" },
                    { name: "Nicolas Duteil", linkedin: "" },
                    { name: "Axelle Laribi", linkedin: "" },
                    { name: "Laetitia Mounier", linkedin: "" },
                    { name: "Valentine Mathey", linkedin: "" },
                    { name: "Youssef Tahri", linkedin: "" },
                    { name: "Margot Vair", linkedin: "" },
                  ],
                third_row:
                    [
                        { name: "Lucie Canu", linkedin: "" },
                        { name: "Danièla Sohily-Liravi", linkedin: "" },
                        { name: "Antoine Grémont", linkedin: "" },
                        { name: "Amélie Convert", linkedin: "" },
                        { name: "Claude Brenner", linkedin: "" },
                        { name: "Elisa Dumont", linkedin: "" },
                        { name: "Manon Bedouet", linkedin: "" },
                        { name: "Grégoire Bonin", linkedin: "" },
                        { name: "Agathe Quernez", linkedin: "" },
                      ],
                credit: "Nicolas CROQUISON",
                cv_repo: "https://drive.google.com/file/d/1PE-fxseR9MHnugjsTv22jjjg-xKcrn40/view",
              },
            };
          },
          mounted: function () {
            document.body.classList.add("template-color-5", "template-font-1");
          },
          head: function () {
            return { title: "Promotion" };
          },
        },
        l = t(22),
        component = Object(l.a)(o, function () {
          var n = this,
            e = n._self._c;
          return e("div", { staticClass: "main-container" }, [
            e("HeaderBlack", { on: { togglenav: function (e) { n.navOpen = !n.navOpen; } } }),
            n._v(" "),
            e("OffCanvasMobileMenu", {
              class: { "show-mobile-menu": n.navOpen },
              on: { togglenav: function (e) { n.navOpen = !n.navOpen; } },
            }),
            n._v(" "),
            e("client-only", [e("Promotion", { attrs: { promotion: n.promotion } })], 1),
            n._v(" "),
            e("Footer"),
          ], 1);
        }, [], !1, null, null, null);
        e.default = component.exports;
      },
    },
  ]);
  