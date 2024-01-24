var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "864",
        "ok": "864",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "447",
        "ok": "447",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "295",
        "ok": "295",
        "ko": "-"
    },
    "percentiles1": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "percentiles2": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "percentiles3": {
        "total": "802",
        "ok": "802",
        "ko": "-"
    },
    "percentiles4": {
        "total": "852",
        "ok": "852",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2,
    "percentage": 67
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 33
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
        "total": "1.5",
        "ok": "1.5",
        "ko": "-"
    }
},
contents: {
"req_list-all-catego-e3ac8": {
        type: "REQUEST",
        name: "List all categories",
path: "List all categories",
pathFormatted: "req_list-all-catego-e3ac8",
stats: {
    "name": "List all categories",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "864",
        "ok": "864",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "447",
        "ok": "447",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "295",
        "ok": "295",
        "ko": "-"
    },
    "percentiles1": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "percentiles2": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "percentiles3": {
        "total": "802",
        "ok": "802",
        "ko": "-"
    },
    "percentiles4": {
        "total": "852",
        "ok": "852",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2,
    "percentage": 67
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 33
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
        "total": "1.5",
        "ok": "1.5",
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
