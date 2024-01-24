var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "13",
        "ok": "10",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "86112"
    },
    "maxResponseTime": {
        "total": "171339",
        "ok": "42854",
        "ko": "171339"
    },
    "meanResponseTime": {
        "total": "34515",
        "ok": "8586",
        "ko": "120947"
    },
    "standardDeviation": {
        "total": "52664",
        "ok": "17105",
        "ko": "36491"
    },
    "percentiles1": {
        "total": "68",
        "ok": "34",
        "ko": "105390"
    },
    "percentiles2": {
        "total": "42854",
        "ok": "77",
        "ko": "138365"
    },
    "percentiles3": {
        "total": "131770",
        "ok": "42802",
        "ko": "164744"
    },
    "percentiles4": {
        "total": "163425",
        "ok": "42844",
        "ko": "170020"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 62
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.067",
        "ok": "0.052",
        "ko": "0.016"
    }
},
contents: {
"req_update-work-ord-aaea1": {
        type: "REQUEST",
        name: "Update WORK_ORDER_QUEUE in VTS",
path: "Update WORK_ORDER_QUEUE in VTS",
pathFormatted: "req_update-work-ord-aaea1",
stats: {
    "name": "Update WORK_ORDER_QUEUE in VTS",
    "numberOfRequests": {
        "total": "8",
        "ok": "5",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "86112"
    },
    "maxResponseTime": {
        "total": "171339",
        "ok": "42854",
        "ko": "171339"
    },
    "meanResponseTime": {
        "total": "56063",
        "ok": "17132",
        "ko": "120947"
    },
    "standardDeviation": {
        "total": "57444",
        "ok": "20955",
        "ko": "36491"
    },
    "percentiles1": {
        "total": "42797",
        "ok": "30",
        "ko": "105390"
    },
    "percentiles2": {
        "total": "90932",
        "ok": "42739",
        "ko": "138365"
    },
    "percentiles3": {
        "total": "148257",
        "ok": "42831",
        "ko": "164744"
    },
    "percentiles4": {
        "total": "166723",
        "ok": "42849",
        "ko": "170020"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 38
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.041",
        "ok": "0.026",
        "ko": "0.016"
    }
}
    },"req_update-work-ord-1ff1c": {
        type: "REQUEST",
        name: "Update WORK_ORDER_QUEUE in VTS Redirect 1",
path: "Update WORK_ORDER_QUEUE in VTS Redirect 1",
pathFormatted: "req_update-work-ord-1ff1c",
stats: {
    "name": "Update WORK_ORDER_QUEUE in VTS Redirect 1",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "percentiles1": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "percentiles2": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles3": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "percentiles4": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.026",
        "ok": "0.026",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
