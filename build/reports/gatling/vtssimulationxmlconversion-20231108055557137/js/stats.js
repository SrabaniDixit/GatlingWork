var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "14",
        "ok": "14",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "891",
        "ok": "891",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "351",
        "ok": "351",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "percentiles1": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "percentiles2": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "percentiles3": {
        "total": "526",
        "ok": "526",
        "ko": "-"
    },
    "percentiles4": {
        "total": "818",
        "ok": "818",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13,
    "percentage": 93
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 7
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
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
},
contents: {
"req_get-vts-data-36521": {
        type: "REQUEST",
        name: "Get VTS Data",
path: "Get VTS Data",
pathFormatted: "req_get-vts-data-36521",
stats: {
    "name": "Get VTS Data",
    "numberOfRequests": {
        "total": "7",
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "891",
        "ok": "891",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "204",
        "ok": "204",
        "ko": "-"
    },
    "percentiles1": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "percentiles2": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "percentiles3": {
        "total": "721",
        "ok": "721",
        "ko": "-"
    },
    "percentiles4": {
        "total": "857",
        "ok": "857",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 86
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 14
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
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_get-vts-data-re-f9b99": {
        type: "REQUEST",
        name: "Get VTS Data Redirect 1",
path: "Get VTS Data Redirect 1",
pathFormatted: "req_get-vts-data-re-f9b99",
stats: {
    "name": "Get VTS Data Redirect 1",
    "numberOfRequests": {
        "total": "7",
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "330",
        "ok": "330",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "310",
        "ok": "310",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles1": {
        "total": "307",
        "ok": "307",
        "ko": "-"
    },
    "percentiles2": {
        "total": "314",
        "ok": "314",
        "ko": "-"
    },
    "percentiles3": {
        "total": "326",
        "ok": "326",
        "ko": "-"
    },
    "percentiles4": {
        "total": "329",
        "ok": "329",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 7,
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
        "total": "0.5",
        "ok": "0.5",
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
