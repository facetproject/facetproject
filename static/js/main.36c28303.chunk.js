(this["webpackJsonpfront-end"] = this["webpackJsonpfront-end"] || []).push([
  [0],
  {
    101: function (e, n, a) {},
    102: function (e, n, a) {},
    128: function (e, n, a) {
      "use strict";
      a.r(n);
      var i = a(0),
        o = a.n(i),
        c = a(18),
        s = a.n(c),
        r = a(21),
        t = (a(101), a(102), a(141)),
        m = a(136),
        l = a(144),
        d = "static/media/FACET_Horizontal_LogoLean.b5598ca2.svg",
        f = "static/media/FACET-Text.33f3c570.svg",
        u = a(29),
        h = a(82),
        j = a(83),
        x = a(84),
        b = a(1),
        k = function (e, n, a) {
          return Object(b.jsx)(u.a, { icon: [e, n], title: a });
        },
        p = function (e) {
          if (void 0 === typeof e.iconIndex || null === e.iconIndex)
            return (
              console.error("Index must be provided for FacetIcon function."),
              !1
            );
          if (void 0 === typeof e.iconList || null === e.iconList)
            return (
              console.error(
                "An array of icons must be provided for FacetIcon function."
              ),
              !1
            );
          if (void 0 !== typeof e.iconList[e.iconIndex].type) {
            if ("layer" === e.iconList[e.iconIndex].type)
              return Object(b.jsxs)("span", {
                className: "fa-layers fa-fw",
                children: [
                  Object(b.jsx)(u.a, {
                    icon: [
                      e.iconList[e.iconIndex].icon1Fam,
                      e.iconList[e.iconIndex].icon1,
                    ],
                    transform: e.iconList[e.iconIndex].icon1Transform,
                    title: void 0 === typeof e.title ? "" : e.title,
                  }),
                  Object(b.jsx)(u.a, {
                    icon: [
                      e.iconList[e.iconIndex].icon2Fam,
                      e.iconList[e.iconIndex].icon2,
                    ],
                    transform: e.iconList[e.iconIndex].icon2Transform,
                    title: void 0 === typeof e.title ? "" : e.title,
                  }),
                ],
              });
            if ("regular" === e.iconList[e.iconIndex].type)
              return Object(b.jsx)(u.a, {
                icon: [
                  e.iconList[e.iconIndex].icon1Fam,
                  e.iconList[e.iconIndex].icon1,
                ],
                title: void 0 === typeof e.title ? "" : e.title,
              });
            if ("mask" === e.iconList[e.iconIndex].type)
              return Object(b.jsx)(u.a, {
                icon: [
                  e.iconList[e.iconIndex].icon1Fam,
                  e.iconList[e.iconIndex].icon1,
                ],
                mask: [
                  e.iconList[e.iconIndex].maskFam,
                  e.iconList[e.iconIndex].maskIcon,
                ],
                transform: e.iconList[e.iconIndex].icon1Transform,
                title: void 0 === typeof e.title ? "" : e.title,
              });
            if ("layer-mask" === e.iconList[e.iconIndex].type)
              return Object(b.jsxs)("span", {
                className: "fa-layers fa-fw",
                title: void 0 === typeof e.title ? "" : e.title,
                children: [
                  Object(b.jsx)(u.a, {
                    icon: [
                      e.iconList[e.iconIndex].icon1Fam,
                      e.iconList[e.iconIndex].icon1,
                    ],
                    mask: [
                      e.iconList[e.iconIndex].maskFam,
                      e.iconList[e.iconIndex].maskIcon,
                    ],
                    transform: e.iconList[e.iconIndex].icon1Transform,
                  }),
                  Object(b.jsx)(u.a, {
                    icon: [
                      e.iconList[e.iconIndex].icon2Fam,
                      e.iconList[e.iconIndex].icon2,
                    ],
                    transform: e.iconList[e.iconIndex].icon2Transform,
                  }),
                ],
              });
            if ("document" === e.iconList[e.iconIndex].type)
              return Object(b.jsxs)("span", {
                className: "text-primary fa-2x fa-layers fa-fw",
                title: void 0 === typeof e.title ? "" : e.title,
                children: [
                  Object(b.jsx)(u.a, {
                    icon: [
                      e.iconList[e.iconIndex].icon1Fam,
                      e.iconList[e.iconIndex].icon1,
                    ],
                    mask: [
                      e.iconList[e.iconIndex].maskFam,
                      e.iconList[e.iconIndex].maskIcon,
                    ],
                    transform: e.iconList[e.iconIndex].icon1Transform,
                  }),
                  "" !== e.iconList[e.iconIndex].icon2
                    ? Object(b.jsx)(u.a, {
                        icon: [
                          e.iconList[e.iconIndex].icon2Fam,
                          e.iconList[e.iconIndex].icon2,
                        ],
                        transform: e.iconList[e.iconIndex].icon1Transform,
                      })
                    : null,
                ],
              });
          }
        };
      r.c.add(h.a), r.c.add(j.a), r.c.add(x.a), r.a.i2svg();
      var F = a(134),
        g = a(135),
        O = a(91),
        y = [
          {
            name: "Workspace",
            iconFam: "fas",
            iconName: "address-book",
            onClick: "",
          },
          {
            name: "Manage Data",
            iconFam: "fas",
            iconName: "database",
            onClick: "",
          },
          {
            name: "Logs",
            iconFam: "fas",
            iconName: "clipboard-list",
            onClick: "",
          },
          {
            name: "Statistics",
            iconFam: "fas",
            iconName: "chart-bar",
            onClick: "",
          },
          {
            name: "User Administration",
            iconFam: "fas",
            iconName: "users-cog",
            link: "",
          },
        ],
        I = function (e) {
          return Object(b.jsx)(F.a, {
            variant: "outline-secondary",
            drop: "end",
            className: "nocaret",
            as: g.a,
            title: k("fas", "bars", "FACET Main Menu"),
            id: "bg-nested-dropdown",
            children: y.map(function (e, n) {
              return Object(b.jsxs)(
                O.a.Item,
                {
                  eventKey: n + 1,
                  onClick: e.onClick,
                  children: [k(e.iconFam, e.iconName, e.name), " ", e.name],
                },
                n
              );
            }),
          });
        },
        v = a(86),
        w = [
          {
            name: "Edit User Profile",
            iconFam: "fas",
            iconName: "user-edit",
            link: "",
          },
          {
            name: "Manage Data",
            iconFam: "fas",
            iconName: "user-lock",
            link: "",
          },
          {
            name: "Change Password",
            iconFam: "fas",
            iconName: "user-cog",
            link: "",
          },
        ],
        T = function (e) {
          return Object(b.jsxs)(g.a, {
            bg: "outline-secondary",
            children: [
              Object(b.jsx)(F.a, {
                variant: "outline-secondary",
                className: "nocaret",
                drop: "start",
                as: g.a,
                title: k("fas", "user", "User Profile Menu"),
                id: "bg-nested-dropdown",
                children: w.map(function (e, n) {
                  return Object(b.jsxs)(
                    O.a.Item,
                    {
                      eventKey: n + 1,
                      children: [k(e.iconFam, e.iconName), " ", e.name],
                    },
                    n
                  );
                }),
              }),
              Object(b.jsx)(v.a, {
                variant: "outline-secondary",
                title: "Sign Out",
                children: k("fas", "sign-out-alt"),
              }),
            ],
          });
        },
        N = function (e) {
          return Object(b.jsx)(t.a, {
            bg: "light",
            variant: "light",
            children: Object(b.jsxs)(m.a, {
              fluid: !0,
              children: [
                Object(b.jsxs)(l.a, {
                  children: [
                    Object(b.jsx)(I, {}),
                    Object(b.jsxs)("div", {
                      children: [
                        Object(b.jsx)("img", {
                          src: d,
                          className: "facet-lean-logo responsive",
                          alt: "FACET Logo",
                        }),
                        Object(b.jsx)("img", {
                          src: f,
                          className: "facet-text responsive",
                          alt: "File Analysis and Content Exploration Tool",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(b.jsx)(l.a, { children: Object(b.jsx)(T, {}) }),
              ],
            }),
          });
        },
        C = a(2),
        S = a(8),
        W = a(138),
        L = a(89),
        q = a(145),
        M = a(137),
        D = a(140),
        z = [
          {
            type: "layer-mask",
            icon1: "circle",
            icon1Fam: "fas",
            icon1Transform: "shrink-7 right-7 down-4",
            maskFam: "fas",
            maskIcon: "address-book",
            icon2: "cog",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 down-4 right-7",
          },
          {
            type: "layer-mask",
            icon1: "circle",
            icon1Fam: "fas",
            icon1Transform: "shrink-7 right-7 down-4",
            maskFam: "fas",
            maskIcon: "address-book",
            icon2: "plus",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 down-4 right-7",
          },
          {
            type: "layer-mask",
            icon1: "circle",
            icon1Fam: "fas",
            icon1Transform: "shrink-7 right-7 down-4",
            maskFam: "fas",
            maskIcon: "address-book",
            icon2: "wrench",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 down-4 right-7",
          },
          {
            type: "mask",
            icon1: "address-book",
            icon1Fam: "fas",
            icon1Transform: "shrink-7 right-2.25 up-2.25",
            maskFam: "fas",
            maskIcon: "clone",
            icon2: "",
            icon2Fam: "fas",
            icon2Transform: "",
          },
        ],
        A = [
          { name: "Alpha One", value: "1" },
          { name: "Bravo Two", value: "2" },
          { name: "Charlie Three", value: "3" },
        ],
        E = [
          { name: "Workspace Properties", onClick: "#", iconIndex: 0 },
          { name: "Add New Workspace", onClick: "#", iconIndex: 1 },
          { name: "Manage Workspaces", onClick: "#", iconIndex: 2 },
          { name: "Clone Workspace", onClick: "#", iconIndex: 3 },
        ],
        B = function (e) {
          return Object(b.jsxs)(M.a, {
            className: "",
            children: [
              Object(b.jsx)(D.a.Select, {
                id: "workspaceSelection",
                size: "sm",
                "aria-label": "Default select example",
                children: A.map(function (e, n) {
                  return Object(b.jsx)(
                    "option",
                    { value: n + 1, children: e.name },
                    n
                  );
                }),
              }),
              Object(b.jsx)(F.a, {
                variant: "outline-secondary nocaret",
                title: k("fas", "ellipsis-h", "Workspace Options Menu"),
                id: "workspace-main-dropdown",
                align: "end",
                onHover: function () {
                  alert("hovered");
                },
                children: E.map(function (e, n) {
                  return Object(b.jsxs)(
                    O.a.Item,
                    {
                      eventKey: n + 1,
                      onClick: e.onClick,
                      children: [
                        Object(b.jsx)(p, {
                          iconIndex: e.iconIndex,
                          iconList: z,
                        }),
                        " ",
                        e.name,
                      ],
                    },
                    n
                  );
                }),
              }),
            ],
          });
        },
        J = a(88),
        P = [
          {
            type: "layer",
            icon1: "search",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "eye",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 up-1.5  left-1.25",
          },
          {
            type: "regular",
            icon1: "searchengin",
            icon1Fam: "fab",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "search-plus",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "address-book",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 up-1.5  left-1.5",
          },
          {
            type: "layer",
            icon1: "search",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "save",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 up-1.5  left-1.5",
          },
          {
            type: "layer",
            icon1: "search",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "cog",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 up-1.5  left-1.5",
          },
          {
            type: "regular",
            icon1: "download",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "share-square",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "layer",
            icon1: "search",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "question",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 up-1.5  left-1.5",
          },
          {
            type: "regular",
            icon1: "ban",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "syringe",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "share-square",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "share-square",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "file-download",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "flag",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "flag",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "star",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "star",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "eye",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "eye-slash",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
        ],
        U = a(142),
        H = function (e) {
          var n = e.handleClose,
            a = e.show,
            i = e.size,
            o = e.id,
            c = e.handleSave,
            s = e.handleCancel,
            r = e.dialogClassName;
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsxs)(U.a, {
              show: a,
              onHide: n,
              size: i,
              backdrop: "static",
              keyboard: !1,
              id: o,
              dialogClassName: r,
              children: [
                Object(b.jsx)(U.a.Header, {
                  closeButton: !0,
                  children: Object(b.jsx)(U.a.Title, { children: e.title }),
                }),
                Object(b.jsx)(U.a.Body, { children: e.children }),
                Object(b.jsx)(U.a.Footer, {
                  children:
                    void 0 !== e.handleClose
                      ? Object(b.jsx)(v.a, {
                          variant: "primary",
                          onClick: n,
                          children: "Close",
                        })
                      : Object(b.jsxs)(b.Fragment, {
                          children: [
                            Object(b.jsx)(v.a, {
                              variant: "primary",
                              onClick: c,
                              children: "Save",
                            }),
                            Object(b.jsx)(v.a, {
                              variant: "primary",
                              onClick: s,
                              children: "Cancel",
                            }),
                          ],
                        }),
                }),
              ],
            }),
          });
        },
        V = a(146),
        K = function (e) {
          var n = e.handleClose,
            a = e.show,
            i = e.performSearchByQuery;
          return Object(b.jsxs)(H, {
            id: "HelpDialog",
            title: "Search Help",
            handleClose: n,
            show: a,
            size: "xl",
            dialogClassName: "modal-90w",
            children: [
              Object(b.jsx)("p", {
                children:
                  "Below are some examples of common search syntax that will often be employed either separately or in conjunction with each other. You can directly click on an example to start a search!",
              }),
              Object(b.jsx)(V.a, {
                variant: "flush",
                children: [
                  {
                    query: "*",
                    description:
                      "Show all files. The wildcard syntax can be used to replace any number of characters in search. Entering in only a wildcard will show all files that the tool has indexed.",
                  },
                  {
                    query: "John Smith",
                    description:
                      'Search for both "John" and "Smith" words in file content and meta. This syntax by default will combine results for both search terms.',
                  },
                  {
                    query: "John|Smith",
                    description:
                      'Search for "John" or "Smith" words in file content and meta. The "|" is an OR operator.',
                  },
                  {
                    query: "John -Smith",
                    description:
                      'Search for "John" but not "Smith" words in file content and meta. The "-" is a NOT operator.',
                  },
                  {
                    query: "(John|Jane) Smith",
                    description:
                      'Search for "John" or "Jane" and "Smith" words in file content and meta using precedence (groupings).',
                  },
                  {
                    query: '"John Smith"',
                    description:
                      'Search for "John Smith" phrase in file content and meta. This type of search is used to pin to a specific multi-word search term.',
                  },
                  {
                    query: '"John Smith"~10',
                    description:
                      'Search for both "John" and "Smith" words with maximum distance of 10 words in file content and meta. This type of syntax is useful for finding multiple names in lists or individual cells on spreadsheets.',
                  },
                  {
                    query: "John~3",
                    description:
                      'Fuzzy search for word "John" in all files with maximum of 3 replacements. Fuzzy search is useful in content analysis by identifying misspellings or alternate spellings of names. It is also useful for identifying variations in phone numbers.',
                  },
                  {
                    query: "filename:*.txt",
                    description:
                      'Search for ".txt" in file fullname. This can be used for selecting specific file names by file name or file type.',
                  },
                  {
                    query: "size>1M",
                    description:
                      "Search for all files larger than 1 MB (options: M for MegaBytes, K for KiloBytes). FACET understands file sizes natively, and this type of search can be used to subset and bucket those sizes.",
                  },
                  {
                    query: "when:today",
                    description:
                      "Search for all files modified today (options: today, yesterday, thisweek, thismonth, thisyear). Useful for understanding when a source file was last edited based on the file history (not when FACET was started).",
                  },
                  {
                    query: "author:*",
                    description:
                      "Search only in file author field. FACET natively identifies authorship of files. Used primarily for forensic analysis of file editing. ",
                  },
                  {
                    query: "tags:ocr,ui-upload",
                    description:
                      "Search for files tagged with ocr and ui-upload tag. Useful for filtering through various tag types.",
                  },
                  {
                    query: "show:removed",
                    description:
                      'Search in removed files (options: removed, all). The removed files are accessible through the "Trash" tab. These files will not show up in search results.',
                  },
                ].map(function (e, n) {
                  return Object(b.jsxs)(
                    V.a.Item,
                    {
                      action: !0,
                      onClick: i(e.query),
                      children: [
                        Object(b.jsx)("strong", { children: e.query }),
                        " - ",
                        e.description,
                      ],
                    },
                    n
                  );
                }),
              }),
            ],
          });
        },
        R = function (e) {
          var n = Object(i.useState)(!1),
            a = Object(S.a)(n, 2),
            o = a[0],
            c = a[1],
            s = [
              {
                name: "Search View",
                onClick: function (e) {},
                iconIndex: 0,
                className: "",
              },
              {
                name: "Advanced Search",
                onClick: function (e) {},
                iconIndex: 1,
                className: "",
              },
              {
                name: "Save Current Search As",
                onClick: function (e) {},
                iconIndex: 2,
                className: "",
              },
              {
                name: "Use a Saved Search",
                onClick: function (e) {},
                iconIndex: 3,
                className: "",
              },
              {
                name: "Manage Saved Searches",
                onClick: "#",
                iconIndex: 4,
                className: "",
              },
              {
                name: "Download Current Queried Files",
                onClick: function (e) {},
                iconIndex: 5,
                className: "",
              },
              {
                name: "Send All Queried Files to a Workbook",
                onClick: function (e) {},
                iconIndex: 6,
                className: "",
              },
              {
                name: "Search Help",
                onClick: function () {
                  c(!0);
                },
                iconIndex: 7,
                className: "",
              },
              {
                name: "Clear Search Query",
                onClick: function (e) {},
                iconIndex: 8,
                className: "text-danger",
              },
            ];
          return Object(b.jsxs)(b.Fragment, {
            children: [
              Object(b.jsx)(b.Fragment, {
                children: Object(b.jsxs)(M.a, {
                  children: [
                    Object(b.jsx)(J.a, {
                      placeholder: "Type query here and hit enter",
                      id: "searchInput",
                      "aria-label": "Search",
                      "aria-describedby": "Search Input",
                      size: "sm",
                    }),
                    Object(b.jsx)(F.a, {
                      variant: "outline-secondary nocaret",
                      title: k("fas", "ellipsis-h", "Search Options Menu"),
                      id: "searchOptionsMenu",
                      align: "end",
                      children: s.map(function (e, n) {
                        return Object(b.jsxs)(
                          O.a.Item,
                          {
                            onClick: e.onClick,
                            eventKey: n + 1,
                            className: e.className,
                            children: [
                              Object(b.jsx)(p, {
                                iconIndex: e.iconIndex,
                                iconList: P,
                              }),
                              " ",
                              e.name,
                            ],
                          },
                          n
                        );
                      }),
                    }),
                  ],
                }),
              }),
              Object(b.jsx)(b.Fragment, {
                children: Object(b.jsx)(K, {
                  handleClose: function () {
                    return c(!1);
                  },
                  show: o,
                  performSearchByQuery: function (e) {
                    console.log("Query Value: ", e);
                  },
                }),
              }),
            ],
          });
        },
        Q = a(23),
        _ = [
          { name: "Extract Entities", href: "#", iconIndex: 9, className: "" },
          {
            name: "Send Extracted Entities to a Workbook",
            href: "#",
            iconIndex: 10,
            className: "",
          },
          {
            name: "Send Document to a Workbook",
            href: "#",
            iconIndex: 11,
            className: "",
          },
          {
            name: "Download Document",
            href: "#",
            iconIndex: 12,
            className: "",
          },
        ],
        Y = function (e) {
          return [
            {
              name:
                "true" === e.flagged || !0 === e.flagged
                  ? "Remove Flag on Document"
                  : "Flag Document",
              href: "#",
              iconIndex: !0 === e.flagged ? 13 : 14,
              className: "",
            },
            {
              name:
                "true" === e.favorite || !0 === e.favorite
                  ? "Remove as Favorite"
                  : "Add as Favorite",
              iconIndex: !0 === e.favorite ? 15 : 16,
              href: "#",
              className: "",
            },
            {
              name:
                "true" === e.hidden || !0 === e.hidden
                  ? "Unhide Document"
                  : "Hide Document",
              href: "#",
              iconIndex: !0 === e.hidden ? 17 : 18,
              className: "",
            },
          ];
        },
        G = function (e) {
          return Object(b.jsx)(F.a, {
            variant: "outline-secondary nocaret",
            title: k("fas", "ellipsis-h", "Search Item Options Menu"),
            id: "searchOptionsMenu",
            align: "end",
            children: [].concat(_, Object(Q.a)(Y(e))).map(function (e, n) {
              return Object(b.jsxs)(
                O.a.Item,
                {
                  href: e.href,
                  eventKey: n + 1,
                  className: e.className,
                  children: [
                    Object(b.jsx)(p, { iconIndex: e.iconIndex, iconList: P }),
                    " ",
                    e.name,
                  ],
                },
                n
              );
            }),
          });
        },
        X = a(92),
        Z = function (e) {
          var n = Object(i.useState)(e.open),
            a = Object(S.a)(n, 2),
            o = a[0],
            c = a[1];
          return Object(b.jsxs)(b.Fragment, {
            children: [
              Object(b.jsxs)(v.a, {
                onClick: function () {
                  return c(!o);
                },
                "aria-controls": e.id + "-collapse-text",
                "aria-expanded": o,
                id: e.id + "-btn",
                variant: "link",
                size: "sm",
                className: "expander",
                children: [
                  k(
                    "fas",
                    !0 === o ? "chevron-down" : "chevron-right",
                    "Toggle Close"
                  ),
                  " ",
                  !0 === o ? "Click to Collapse" : "Click to Expand",
                ],
              }),
              Object(b.jsx)(X.a, {
                in: o,
                children: Object(b.jsx)("div", {
                  id: e.id + "-collapse-text",
                  children: e.children,
                }),
              }),
            ],
          });
        },
        $ = function (e) {
          var n = [];
          return (
            (n[0] = {
              name:
                "true" === e.flagged || !0 === e.flagged
                  ? "Flagged Document"
                  : "Unflagged Document",
              iconIndex: !0 === e.flagged ? 14 : 13,
            }),
            (n[1] = {
              name:
                "true" === e.favorite || !0 === e.favorite
                  ? "Favorite"
                  : "Not a Favorite",
              iconIndex: !0 === e.favorite ? 16 : 15,
            }),
            (n[2] = {
              name:
                "true" === e.hidden || !0 === e.hidden
                  ? "Hidden Document"
                  : "Visible Document",
              iconIndex: !0 === e.hidden ? 18 : 17,
            }),
            n
          );
        },
        ee = function (e) {
          return Object(b.jsxs)(b.Fragment, {
            children: [
              $(e).map(function (e, n) {
                return Object(b.jsx)(
                  "span",
                  {
                    className: "indicator",
                    children: Object(b.jsx)(
                      p,
                      { iconIndex: e.iconIndex, iconList: P, title: e.name },
                      n
                    ),
                  },
                  n
                );
              }),
              " ",
            ],
          });
        },
        ne = a(143),
        ae = [
          {
            type: "document",
            icon1: "file",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: [],
            name: "unknown",
            longName: "",
          },
          {
            type: "document",
            icon1: "file-alt",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: ["facet"],
            name: "WYSIWYG",
            longName: "What you see is what you get",
          },
          {
            type: "document",
            icon1: "file-pdf",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: ["pdf"],
            name: "PDF",
            longName: "Portable Document Format",
          },
          {
            type: "document",
            icon1: "file-word",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: [
              "doc",
              "docm",
              "docx",
              "dotx",
              "dot",
              "dotm",
              "dotx",
              "odt",
            ],
            name: "Word",
            longName: "",
          },
          {
            type: "document",
            icon1: "file-powerpoint",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: [
              "pptx",
              "pptm",
              "ppt",
              "pot",
              "potx",
              "pps",
              "ppsm",
              "ppsx",
            ],
            name: "PowerPoint",
            longName: "",
          },
          {
            type: "document",
            icon1: "file-excel",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: [
              "xls",
              "xlsb",
              "xlsm",
              "xlsx",
              "xlam",
              "xla",
              "xlt",
              "xltm",
              "xltx",
              "xlw",
            ],
            name: "Excel",
            longName: "",
          },
          {
            type: "document",
            icon1: "file-csv",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: ["csv"],
            name: "CSV",
            longName: "Comma Separated Value",
          },
          {
            type: "document",
            icon1: "file-archive",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: [
              "7z",
              "apk",
              "arc",
              "cab",
              "cdx",
              "cfs",
              "dmg",
              "ear",
              "gz",
              "pea",
              "phar",
              "rar",
              "s7z",
              "sit",
              "sitx",
              "tar",
              "tgz",
              "war",
              "zip",
              "zipx",
            ],
            name: "Archive",
            longName: "",
          },
          {
            type: "document",
            icon1: "file-image",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: [
              "bmp",
              "emf",
              "eps",
              "gif",
              "heic",
              "heif",
              "jpeg",
              "jpg",
              "pmg",
              "psd",
              "raw",
              "svg",
              "tif",
              "wmf",
            ],
            name: "Image",
            longName: "",
          },
          {
            type: "document",
            icon1: "file-audio",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: [
              "aac",
              "aiff",
              "alac",
              "dsd",
              "flac",
              "mp3",
              "mqa",
              "pcm",
              "wav",
              "wma",
            ],
            name: "Audio",
            longName: "",
          },
          {
            type: "document",
            icon1: "file-video",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: [
              "avi",
              "avchd",
              "flv",
              "mid",
              "midi",
              "mp4",
              "m4p",
              "m4v",
              "mpeg",
              "mpg",
              "wmv",
              "mov",
              "mkv",
              "qt",
              "ogg",
              "webm",
            ],
            name: "Video",
            longName: "",
          },
          {
            type: "document",
            icon1: "file",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "database",
            icon2Fam: "fas",
            icon2Transform: "shrink-11 down-1.5",
            extensions: ["sql", "mdb"],
            name: "Database",
            longName: "",
          },
          {
            type: "document",
            icon1: "file-code",
            icon1Fam: "fas",
            icon1Transform: "shrink-7",
            maskFam: "fas",
            maskIcon: "circle",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
            extensions: ["xml", "json", "html", "html", "mht", "mhtml"],
            name: "Code",
            longName: "",
          },
        ],
        ie = function (e) {
          for (var n = 0, a = 0; a < ae.length; a++)
            -1 !== ae[a].extensions.indexOf(e.extension.toLowerCase()) &&
              (n = a);
          return Object(b.jsxs)(ne.a, {
            className: "text-center",
            children: [
              Object(b.jsx)(p, {
                iconIndex: n,
                iconList: ae,
                title: ae[n].name,
              }),
              Object(b.jsx)(ne.a.Caption, {
                children:
                  ae[n].longName.length > 0
                    ? Object(b.jsx)("abbr", {
                        title: ae[n].longName,
                        children: ae[n].name,
                      })
                    : ae[n].name,
              }),
            ],
          });
        },
        oe = a(147),
        ce = function (e) {
          var n = function (e) {
            return e.hasImage
              ? Object(b.jsxs)(b.Fragment, {
                  children: [
                    Object(b.jsx)("div", { className: "vr" }),
                    Object(b.jsx)("div", { className: "img-container" }),
                  ],
                })
              : Object(b.jsx)(b.Fragment, {});
          };
          return Object(b.jsxs)(oe.a, {
            direction: "horizontal",
            gap: 2,
            children: [
              Object(b.jsx)("div", {
                className: "me-auto",
                children: e.children,
              }),
              Object(b.jsx)(n, { hasImage: e.hasImage }),
            ],
          });
        },
        se = a(148),
        re = function (e) {
          var n = e.path.split("/").filter(function (e) {
            return "" !== e;
          });
          return Object(b.jsx)("div", {
            className: "text-muted font-weight-light small",
            children: Object(b.jsxs)(se.a, {
              bsPrefix: "breadcrumb",
              className: "breadcrumb",
              children: [
                Object(b.jsx)("label", {
                  className: "breadcrumb",
                  children: "Folder: // ",
                }),
                " \xa0",
                n.map(function (e, n) {
                  return Object(b.jsx)(
                    se.a.Item,
                    { active: !0, children: e },
                    n
                  );
                }),
              ],
            }),
          });
        },
        te = a(90),
        me = [
          { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: !0 },
          { value: "blue", label: "Blue", color: "#0052CC", isDisabled: !0 },
          { value: "purple", label: "Purple", color: "#5243AA" },
          { value: "red", label: "Red", color: "#FF5630", isFixed: !0 },
          { value: "orange", label: "Orange", color: "#FF8B00" },
          { value: "yellow", label: "Yellow", color: "#FFC400" },
          { value: "green", label: "Green", color: "#36B37E" },
          { value: "forest", label: "Forest", color: "#00875A" },
          { value: "slate", label: "Slate", color: "#253858" },
          { value: "silver", label: "Silver", color: "#666666" },
        ],
        le = function (e) {
          var n = Object(i.useState)([me[0], me[3]]),
            a = Object(S.a)(n, 2),
            o = a[0],
            c = a[1];
          return Object(b.jsx)("div", {
            className: "App",
            children: Object(b.jsx)(te.a, {
              defaultValue: o,
              isMulti: !0,
              onChange: c,
              options: me,
              theme: function (e) {
                return Object(C.a)(
                  Object(C.a)({}, e),
                  {},
                  {
                    borderRadius: 10,
                    colors: Object(C.a)(
                      Object(C.a)({}, e.colors),
                      {},
                      {
                        neutral10: "#0d6efd",
                        danger: "#FFFFFF",
                        dangerLight: "#0a58ca",
                        neutral80: "#FFFFFF",
                        neutral90: "#FFFFFF",
                      }
                    ),
                  }
                );
              },
            }),
          });
        },
        de = function (e) {
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)(V.a, {
              children: Object(b.jsxs)(V.a.Item, {
                as: "",
                className: "",
                children: [
                  Object(b.jsxs)(W.a, {
                    children: [
                      Object(b.jsx)(L.a, {
                        md: 1,
                        children: Object(b.jsx)(ie, {
                          extension: void 0 !== e.extension ? e.extension : "",
                        }),
                      }),
                      Object(b.jsx)(L.a, {
                        md: 5,
                        children: Object(b.jsxs)("div", {
                          className: "ms-2 me-auto",
                          children: [
                            Object(b.jsx)("div", {
                              className: "fw-bold",
                              children: e.title,
                            }),
                            Object(b.jsx)(re, {
                              path: void 0 === e.path ? "" : e.path,
                            }),
                            Object(b.jsxs)("div", {
                              className: "text-muted font-weight-light small",
                              children: ["Last Modified: ", e.lastModified],
                            }),
                          ],
                        }),
                      }),
                      Object(b.jsx)(L.a, {
                        md: 5,
                        children: Object(b.jsx)(le, {}),
                      }),
                      Object(b.jsx)(L.a, {
                        md: 1,
                        className: "text-center",
                        children: Object(b.jsx)(G, {
                          flagged: "false",
                          favorite: "false",
                          hidden: "false",
                        }),
                      }),
                    ],
                  }),
                  Object(b.jsx)(W.a, {
                    className: "seperator",
                    children: Object(b.jsx)("hr", {}),
                  }),
                  Object(b.jsx)(W.a, {
                    children: Object(b.jsx)(L.a, {
                      children: Object(b.jsx)(Z, {
                        id: "search-item",
                        open: !1,
                        children: Object(b.jsxs)(ce, {
                          hasImage: !0,
                          children: [
                            Object(b.jsx)(b.Fragment, {
                              children: Object(b.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam quam nulla. Tincidunt lobortis feugiat vivamus at. Purus faucibus ornare suspendisse sed. Ridiculus mus mauris vitae ultricies leo. Velit egestas dui id ornare. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Ullamcorper sit amet risus nullam eget felis eget nunc. Sed velit dignissim sodales ut eu. Ut eu sem integer vitae justo. Suscipit tellus mauris a diam maecenas sed enim ut sem. Commodo odio aenean sed adipiscing diam. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Lorem donec massa sapien faucibus et molestie. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Risus in hendrerit gravida rutrum quisque non. Congue quisque egestas diam in arcu cursus euismod quis.",
                              }),
                            }),
                            Object(b.jsx)("h5", {
                              children: "Extracted Entities:",
                            }),
                            Object(b.jsx)("div", {
                              className: "extracteEntities",
                              children:
                                'Click "Extract Entities\u201c in the options menu to extract entities from this file.',
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  Object(b.jsx)(W.a, { children: Object(b.jsx)(L.a, {}) }),
                  Object(b.jsx)(W.a, {
                    className: "seperator",
                    children: Object(b.jsx)("hr", {}),
                  }),
                  Object(b.jsx)(W.a, {
                    children: Object(b.jsx)(L.a, {
                      children: Object(b.jsx)(ee, {
                        flagged: !1,
                        favorite: !1,
                        hidden: !1,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        fe = function (e) {
          var n = function (n) {
            var a = parseInt(n.target.id.split("_")[0]);
            e.onWidthChange(a);
          };
          return Object(b.jsx)(F.a, {
            id: e.id,
            variant: "outline-secondary nocaret",
            title: k(
              "fas",
              "arrows-alt-h",
              "Change " + e.section + " Area Width"
            ),
            children: e.sizes.map(function (a, i) {
              return !0 === a.selected
                ? Object(b.jsxs)(
                    O.a.Item,
                    {
                      eventKey: i + 1,
                      onClick: n,
                      id: a.id + "_" + e.idSuffix,
                      children: [
                        Object(b.jsxs)("span", {
                          className: "text-success",
                          children: [k("fas", "check", "Checked"), " "],
                        }),
                        a[e.node],
                      ],
                    },
                    i
                  )
                : Object(b.jsxs)(
                    O.a.Item,
                    {
                      eventKey: i + 1,
                      onClick: n,
                      id: a.id + "_" + e.idSuffix,
                      children: [
                        Object(b.jsxs)("span", {
                          className: "text-white",
                          children: [k("fas", "check", "NotChecked"), " "],
                        }),
                        a[e.node],
                      ],
                    },
                    i
                  );
            }),
          });
        },
        ue = function (e) {
          return Object(b.jsxs)(q.a, {
            children: [
              Object(b.jsx)(q.a.Header, {
                children: Object(b.jsx)(m.a, {
                  children: Object(b.jsxs)(W.a, {
                    children: [
                      Object(b.jsx)(L.a, {
                        md: 2,
                        children: Object(b.jsx)("label", {
                          className: "fw-bold head-label",
                          htmlFor: "workspaceSelection",
                          children: "Workspace:",
                        }),
                      }),
                      Object(b.jsx)(L.a, {
                        md: 4,
                        children: Object(b.jsx)(B, {}),
                      }),
                      Object(b.jsx)(L.a, {
                        md: 1,
                        children: Object(b.jsx)("label", {
                          className: "fw-bold head-label",
                          htmlFor: "searchInput",
                          children: "Search:",
                        }),
                      }),
                      Object(b.jsx)(L.a, {
                        md: 4,
                        children: Object(b.jsx)(R, {}),
                      }),
                      Object(b.jsx)(L.a, {
                        md: 1,
                        children: Object(b.jsx)(fe, {
                          onWidthChange: e.onWorkspaceWidthChange,
                          sizes: e.sizes,
                          section: "Workspace",
                          idSuffix: "workspaceWidthMenu",
                          id: "workspaceWidthBtn",
                          node: "workspaceName",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(b.jsx)(q.a.Body, {
                className: "scroller-window",
                children: Object(b.jsx)(de, {
                  title: "John_Doe.docx",
                  lastModified: "12/12/2021",
                  extension: "docx",
                  path: "personnelFiles/D/JohnDoe.docx",
                }),
              }),
            ],
          });
        },
        he = [
          {
            type: "mask",
            icon1: "plus",
            icon1Fam: "fas",
            icon1Transform: "shrink-8 left-0.5 down-1",
            maskFam: "fas",
            maskIcon: "file",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "layer-mask",
            icon1: "circle",
            icon1Fam: "fas",
            icon1Transform: "shrink-7 right-7 down-4",
            maskFam: "fas",
            maskIcon: "file",
            icon2: "cog",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 down-4  right-7",
          },
          {
            type: "layer-mask",
            icon1: "circle",
            icon1Fam: "fas",
            icon1Transform: "shrink-7 right-7 down-4",
            maskFam: "fas",
            maskIcon: "file",
            icon2: "wrench",
            icon2Fam: "fas",
            icon2Transform: "shrink-10 down-4  right-7",
          },
          {
            type: "regular",
            icon1: "copy",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "layer",
            icon1: "file",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "plus",
            icon2Fam: "fas",
            icon2Transform: "shrink-8 down-1 left-0.5",
          },
          {
            type: "layer",
            icon1: "copy",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "check-square",
            icon2Fam: "far",
            icon2Transform: "shrink-10 down-8  right-8",
          },
          {
            type: "layer",
            icon1: "times-circle",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "check-square",
            icon2Fam: "far",
            icon2Transform: "shrink-10 down-8  right-8",
          },
          {
            type: "regular",
            icon1: "file-upload",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "file-export",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "layer",
            icon1: "file",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "eye",
            icon2Fam: "fas",
            icon2Transform: "shrink-9 down-1",
          },
          {
            type: "layer",
            icon1: "file",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "pencil-alt",
            icon2Fam: "fas",
            icon2Transform: "shrink-9 down-1",
          },
          {
            type: "layer",
            icon1: "file",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "palette",
            icon2Fam: "fas",
            icon2Transform: "shrink-9 down-1",
          },
          {
            type: "regular",
            icon1: "copy",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "layer-mask",
            icon1: "arrows-alt-v",
            icon1Fam: "fas",
            icon1Transform: "shrink-5 right-2",
            maskFam: "fas",
            maskIcon: "list-ol",
            icon2: "arrows-alt-v",
            icon2Fam: "fas",
            icon2Transform: "shrink-7 right-2",
          },
          {
            type: "regular",
            icon1: "times-circle",
            icon1Fam: "far",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
          {
            type: "regular",
            icon1: "file-download",
            icon1Fam: "fas",
            icon1Transform: "",
            maskFam: "",
            maskIcon: "",
            icon2: "",
            icon2Fam: "",
            icon2Transform: "",
          },
        ],
        je = [
          { name: "Workbook One", value: "1" },
          { name: "Workbook Two", value: "2" },
          { name: "Workbook Three", value: "3" },
        ],
        xe = [
          { name: "Add a New Workbook", href: "#", iconIndex: 0 },
          { name: "Edit Workbook Properties", href: "#", iconIndex: 1 },
          { name: "Manage Workspaces", href: "#", iconIndex: 2 },
          { name: "Manage Workbooks", href: "#", iconIndex: 3 },
          { name: "Clone a Workbook", href: "#", iconIndex: 4 },
          { name: "Add New Workbook Item", href: "#", iconIndex: 5 },
          { name: "Clone Selected Workbook Items", href: "#", iconIndex: 6 },
          { name: "Delete Selected Workbook Items", href: "#", iconIndex: 7 },
          { name: "Upload Document to Workbook", href: "#", iconIndex: 8 },
          { name: "Download Current Workbook", href: "#", iconIndex: 9 },
        ],
        be = function (e) {
          return Object(b.jsxs)(M.a, {
            className: "",
            children: [
              Object(b.jsx)(D.a.Select, {
                id: "workspaceSelection",
                size: "sm",
                "aria-label": "Default select example",
                children: je.map(function (e, n) {
                  return Object(b.jsx)(
                    "option",
                    { value: n + 1, children: e.name },
                    n
                  );
                }),
              }),
              Object(b.jsx)(F.a, {
                variant: "outline-secondary nocaret",
                title: k("fas", "ellipsis-h", "Workbook Options Menu"),
                id: "workspace-main-dropdown",
                align: "end",
                onHover: function () {
                  alert("hovered");
                },
                children: xe.map(function (e, n) {
                  return Object(b.jsxs)(
                    O.a.Item,
                    {
                      eventKey: n + 1,
                      href: "#",
                      children: [
                        Object(b.jsx)(p, {
                          iconIndex: e.iconIndex,
                          iconList: he,
                        }),
                        " ",
                        e.name,
                      ],
                    },
                    n
                  );
                }),
              }),
            ],
          });
        },
        ke = a(139),
        pe = function (e, n, a) {
          if (a >= e.length)
            for (var i = a - e.length + 1; i--; ) e.push(void 0);
          return e.splice(a, 0, e.splice(n, 1)[0]), e;
        },
        Fe = [
          {
            name: "View Workbook Item",
            href: "#",
            iconIndex: 9,
            className: "",
          },
          {
            name: "Clone Workbook Item",
            href: "#",
            iconIndex: 12,
            className: "",
          },
          {
            name: "Move Workbook Item",
            href: "#",
            iconIndex: 13,
            className: "",
          },
          {
            name: "Delete Workbook Item",
            href: "#",
            iconIndex: 14,
            className: "",
          },
          {
            name: "Download Workbook Item",
            href: "#",
            iconIndex: 15,
            className: "",
          },
        ],
        ge = function (e) {
          var n = pe(
            [].concat(
              Fe,
              Object(Q.a)(
                (function (e) {
                  return [
                    {
                      name:
                        "true" === e.document || !0 === e.document
                          ? "Annotate Document"
                          : "Edit Document",
                      href: "#",
                      iconIndex: !0 === e.document ? 11 : 10,
                      className: "",
                    },
                  ];
                })(e)
              )
            ),
            5,
            1
          );
          return Object(b.jsx)(F.a, {
            variant: "outline-secondary nocaret",
            title: k("fas", "ellipsis-h", "Search Item Options Menu"),
            id: "searchOptionsMenu",
            align: "end",
            children: n.map(function (e, n) {
              return Object(b.jsxs)(
                O.a.Item,
                {
                  href: e.href,
                  eventKey: n + 1,
                  className: e.className,
                  children: [
                    Object(b.jsx)(p, { iconIndex: e.iconIndex, iconList: he }),
                    " ",
                    e.name,
                  ],
                },
                n
              );
            }),
          });
        },
        Oe = function (e) {
          return Object(b.jsx)(V.a, {
            children: Object(b.jsxs)(V.a.Item, {
              as: "",
              className: "",
              children: [
                Object(b.jsxs)(W.a, {
                  children: [
                    Object(b.jsx)(L.a, {
                      md: 1,
                      className: "align-middle",
                      children: Object(b.jsx)(D.a.Group, {
                        controlId: "formBasicCheckbox",
                        children: Object(b.jsx)(D.a.Check, {
                          type: "checkbox",
                          label: "",
                        }),
                      }),
                    }),
                    Object(b.jsx)(L.a, {
                      md: 2,
                      children: Object(b.jsx)(ie, { extension: e.extension }),
                    }),
                    Object(b.jsx)(L.a, {
                      md: 7,
                      children: Object(b.jsxs)("div", {
                        className: "ms-2 me-auto",
                        children: [
                          Object(b.jsx)("div", {
                            className: "fw-bold",
                            children: e.title,
                          }),
                          Object(b.jsxs)("span", {
                            className: "text-muted font-weight-light small",
                            children: ["Last Modified: ", e.lastModified],
                          }),
                        ],
                      }),
                    }),
                    Object(b.jsxs)(L.a, {
                      md: 2,
                      className: "text-center",
                      children: [
                        Object(b.jsx)(ge, { document: "false" }),
                        "\xa0",
                        Object(b.jsx)(ke.a, {
                          bg: "secondary",
                          pill: !0,
                          children: e.order,
                        }),
                      ],
                    }),
                  ],
                }),
                Object(b.jsx)(W.a, {
                  className: "seperator",
                  children: Object(b.jsx)("hr", {}),
                }),
                Object(b.jsx)(W.a, {
                  children: Object(b.jsx)(L.a, {
                    children: Object(b.jsx)(Z, {
                      id: "search-item",
                      open: !1,
                      children: Object(b.jsx)(ce, {
                        hasImage: !0,
                        children:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam quam nulla. Tincidunt lobortis feugiat vivamus at. Purus faucibus ornare suspendisse sed. Ridiculus mus mauris vitae ultricies leo. Velit egestas dui id ornare. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Ullamcorper sit amet risus nullam eget felis eget nunc. Sed velit dignissim sodales ut eu. Ut eu sem integer vitae justo. Suscipit tellus mauris a diam maecenas sed enim ut sem. Commodo odio aenean sed adipiscing diam. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Lorem donec massa sapien faucibus et molestie. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Risus in hendrerit gravida rutrum quisque non. Congue quisque egestas diam in arcu cursus euismod quis.",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        ye = function (e) {
          return Object(b.jsxs)(q.a, {
            children: [
              Object(b.jsx)(q.a.Header, {
                children: Object(b.jsx)(m.a, {
                  children: Object(b.jsxs)(W.a, {
                    children: [
                      Object(b.jsx)(L.a, {
                        md: 3,
                        children: Object(b.jsx)("label", {
                          className: "fw-bold head-label",
                          htmlFor: "workbookSelection",
                          children: "Workbook:",
                        }),
                      }),
                      Object(b.jsx)(L.a, {
                        md: 8,
                        children: Object(b.jsx)(be, {}),
                      }),
                      Object(b.jsx)(L.a, {
                        md: 1,
                        children: Object(b.jsx)(fe, {
                          onWidthChange: e.onWorkbookWidthChange,
                          sizes: e.sizes,
                          section: "Workbook",
                          idSuffix: "workbookWidthMenu",
                          id: "workbookWidthBtn",
                          node: "workbookName",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(b.jsx)(q.a.Body, {
                className: "scroller-window",
                children: Object(b.jsx)(Oe, {
                  order: "1",
                  title: "Report Overview",
                  lastModified: "12/12/2021",
                  extension: "facet",
                }),
              }),
            ],
          });
        },
        Ie = [
          {
            id: 0,
            workspace: 12,
            workspaceName: "Workspace 100%",
            workbook: 0,
            workbookName: "Workbook 0%",
            selected: !1,
          },
          {
            id: 1,
            workspace: 8,
            workspaceName: "Workspace 80%",
            workbook: 4,
            workbookName: "Workbook 40%",
            selected: !0,
          },
          {
            id: 2,
            workspace: 4,
            workspaceName: "Workspace 40%",
            workbook: 8,
            workbookName: "Workbook 80%",
            selected: !1,
          },
          {
            id: 3,
            workspace: 0,
            workspaceName: "Workspace 0%",
            workbook: 12,
            workbookName: "Workbook 100%",
            selected: !1,
          },
        ],
        ve = function (e) {
          var n = Object(i.useState)([].concat(Ie).reverse()),
            a = Object(S.a)(n, 2),
            o = a[0],
            c = a[1],
            s = Object(i.useState)(Ie),
            r = Object(S.a)(s, 2),
            t = r[0],
            l = r[1],
            d = Object(i.useState)(Ie[1].workspace),
            f = Object(S.a)(d, 2),
            u = f[0],
            h = f[1],
            j = Object(i.useState)(Ie[1].workbook),
            x = Object(S.a)(j, 2),
            k = x[0],
            p = x[1],
            F = Object(i.useState)(""),
            g = Object(S.a)(F, 2),
            O = g[0],
            y = g[1],
            I = Object(i.useState)(""),
            v = Object(S.a)(I, 2),
            w = v[0],
            T = v[1],
            N = function (e) {
              for (
                var n = [
                    { list: o, action: c },
                    { list: t, action: l },
                  ],
                  a = function (n, a) {
                    a(
                      n.map(function (n) {
                        return n.id === e
                          ? ((function (e) {
                              0 === t[e].workspace
                                ? y("visually-hidden-focusable")
                                : y(""),
                                0 === t[e].workbook
                                  ? T("visually-hidden-focusable")
                                  : T("");
                            })(e),
                            Object(C.a)(
                              Object(C.a)({}, n),
                              {},
                              { selected: !0 }
                            ))
                          : n.id !== e
                          ? Object(C.a)(
                              Object(C.a)({}, n),
                              {},
                              { selected: !1 }
                            )
                          : n;
                      })
                    );
                  },
                  i = 0;
                i < n.length;
                i++
              )
                a(n[i].list, n[i].action);
              h(t[e].workspace), p(t[e].workbook);
            };
          return Object(b.jsx)(m.a, {
            fluid: !0,
            children: Object(b.jsxs)(W.a, {
              children: [
                Object(b.jsx)(L.a, {
                  id: "WorkspacePanel",
                  md: u,
                  sm: 12,
                  className: O,
                  children: Object(b.jsx)(ue, {
                    onWorkspaceWidthChange: N,
                    sizes: o,
                  }),
                }),
                Object(b.jsx)(L.a, {
                  id: "WorkbookPanel",
                  md: k,
                  sm: 12,
                  className: w,
                  children: Object(b.jsx)(ye, {
                    onWorkbookWidthChange: N,
                    sizes: t,
                  }),
                }),
              ],
            }),
          });
        };
      var we = function () {
          return Object(b.jsxs)("div", {
            className: "App",
            children: [
              Object(b.jsx)(N, {}),
              Object(b.jsx)("br", {}),
              Object(b.jsx)(ve, {}),
            ],
          });
        },
        Te = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 149))
              .then(function (n) {
                var a = n.getCLS,
                  i = n.getFID,
                  o = n.getFCP,
                  c = n.getLCP,
                  s = n.getTTFB;
                a(e), i(e), o(e), c(e), s(e);
              });
        };
      s.a.render(
        Object(b.jsx)(o.a.StrictMode, { children: Object(b.jsx)(we, {}) }),
        document.getElementById("root")
      ),
        r.a.i2svg(),
        Te();
    },
  },
  [[128, 1, 2]],
]);
//# sourceMappingURL=main.36c28303.chunk.js.map
