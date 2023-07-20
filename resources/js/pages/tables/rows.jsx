import "../../../css/app.css";
const ROW_HEIGHT = 32;
const height = 25;

export const headerRow = {
    rowId: "header",
    reorderable: false,
    height,
    cells: [
        { type: "header", text: `` },
        { type: "header", text: `hash` },
    ],
};

export const rows = (reorderable) => [
    {
        rowId: 1,
        height,
        reorderable,
        cells: [
            {
                type: "chevron",
                text: "",
                isExpanded: true,
            },
            { type: "text", text: "" },
        ],
    },
    {
        rowId: 2,
        height,
        reorderable,
        cells: [
            {
                type: "chevron",
                text: "Children",
                isExpanded: true,
                parentId: 1,
                className: "text-gray-400",
            },
            {
                type: "text",
                text: "Children Content",
                className: "text-red-500",
            },
        ],
    },
    {
        rowId: 3,
        height,
        reorderable,
        cells: [
            {
                type: "chevron",
                text: "3",
                isExpanded: false,
            },
            { type: "text", text: "u61x66unzgl9xd5gre3bj7g8za8cb7ve4t7otz0e" },
        ],
    },
    {
        rowId: 4,
        height,
        reorderable,
        cells: [
            {
                type: "chevron",
                text: "4",
                isExpanded: true,
                parentId: 3,
            },
            { type: "text", text: "v2dwm51y0k874x596axt4uz1if5qcv7etavg76va" },
        ],
    },
    {
        rowId: 5,
        height,
        reorderable,
        cells: [
            {
                type: "chevron",
                text: "5",
                isExpanded: true,
                parentId: 4,
                nonEditable: true,
            },
            { type: "text", text: "jqk6nn3wktt2nwituttafuvpv7hlzo2grelvs7vo" },
        ],
    },
    {
        rowId: 6,
        height,
        reorderable,
        cells: [
            {
                type: "chevron",
                text: "6",
                isExpanded: true,
                parentId: 4,
            },
            { type: "text", text: "ppsqily4doxz27uw6tznvc3qfvfhc37500k59jw9" },
        ],
    },
    {
        rowId: 7,
        height,
        reorderable,
        cells: [
            { type: "chevron", text: "7", isExpanded: true },
            { type: "text", text: "uc75daha01rnk3dfcghvkgav13igsb87b0w1jzft" },
        ],
    },
    {
        rowId: 8,
        height,
        reorderable,
        cells: [
            { type: "chevron", text: "8", isExpanded: true, parentId: 7 },
            { type: "text", text: "bmwz5y30ypjgixzh3aic3vpjlnh1q1hrie2pv5mg" },
        ],
    },
    {
        rowId: 9,
        height,
        reorderable,
        cells: [
            { type: "chevron", text: "9", isExpanded: true, parentId: 7 },
            { type: "text", text: "rc3hmvkwh4to6iq8mo68ju9vyx2zcmqbgn73zrw9" },
        ],
    },
    {
        rowId: 10,
        height,
        reorderable,
        cells: [
            { type: "chevron", text: "10", isExpanded: true, parentId: 7 },
            { type: "text", text: "1ooxkvmvwotxicvawyh0wb1ur8jtin12egyayee8" },
        ],
    },
    {
        rowId: 11,
        height,
        reorderable,

        cells: [
            {
                type: "chevron",
                text: "11",
                isExpanded: false,
            },
            { type: "text", text: "fvgiizz61ysmiv2gn9por6izio575u557jyxz4xs" },
        ],
    },
    {
        rowId: 12,
        height,
        reorderable,
        cells: [
            { type: "chevron", text: "12", isExpanded: true, parentId: 11 },
            { type: "text", text: "rbicj7u5qxvkpqv2ti2bkthlw4yg1by4ht4c1wom" },
        ],
    },
    {
        rowId: 13,
        height,
        reorderable,
        cells: [
            { type: "chevron", text: "13", isExpanded: true, parentId: 11 },
            { type: "text", text: "cunj4bkbl2gow91atjtfcwko1zmqp6813l8x626v" },
        ],
    },
    {
        rowId: 14,
        height,
        reorderable,
        cells: [
            {
                type: "chevron",
                text: "14",
                isExpanded: true,
                parentId: 13,
                id: "",
            },
            {
                type: "text",
                text: "iwpnwef8mtzsjyu1srihdwispyrjxvb5197ey6cz",
                id: "",
            },
        ],
    },
    {
        rowId: 15,
        height,
        reorderable,
        cells: [
            { type: "chevron", text: "15", isExpanded: true, parentId: 13 },
            { type: "text", text: "6wawna3wf02eggw27v8kgyclhla2c82apmdemay4" },
        ],
    },
    {
        rowId: 16,
        height,
        reorderable,
        cells: [
            { type: "chevron", text: "16", isExpanded: true, parentId: 13 },
            { type: "text", text: "iwpnwef8mtzsjyu1srihdwispyrjxvb5197ey6cz" },
        ],
    },
];
