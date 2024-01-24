var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "maxResponseTime": {
        "total": "926",
        "ok": "-",
        "ko": "926"
    },
    "meanResponseTime": {
        "total": "583",
        "ok": "-",
        "ko": "583"
    },
    "standardDeviation": {
        "total": "344",
        "ok": "-",
        "ko": "344"
    },
    "percentiles1": {
        "total": "583",
        "ok": "-",
        "ko": "583"
    },
    "percentiles2": {
        "total": "754",
        "ok": "-",
        "ko": "754"
    },
    "percentiles3": {
        "total": "892",
        "ok": "-",
        "ko": "892"
    },
    "percentiles4": {
        "total": "919",
        "ok": "-",
        "ko": "919"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "926",
        "ok": "-",
        "ko": "926"
    },
    "maxResponseTime": {
        "total": "926",
        "ok": "-",
        "ko": "926"
    },
    "meanResponseTime": {
        "total": "926",
        "ok": "-",
        "ko": "926"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "926",
        "ok": "-",
        "ko": "926"
    },
    "percentiles2": {
        "total": "926",
        "ok": "-",
        "ko": "926"
    },
    "percentiles3": {
        "total": "926",
        "ok": "-",
        "ko": "926"
    },
    "percentiles4": {
        "total": "926",
        "ok": "-",
        "ko": "926"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "-",
        "ko": "0.5"
    }
}
    },"req_get-authenticat-9f6b8": {
        type: "REQUEST",
        name: "Get authentication token",
path: "Get authentication token",
pathFormatted: "req_get-authenticat-9f6b8",
stats: {
    "name": "Get authentication token",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "maxResponseTime": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "meanResponseTime": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "percentiles2": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "percentiles3": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "percentiles4": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "-",
        "ko": "0.5"
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
