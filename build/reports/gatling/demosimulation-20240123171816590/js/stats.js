var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "237",
        "ok": "-",
        "ko": "237"
    },
    "maxResponseTime": {
        "total": "911",
        "ok": "-",
        "ko": "911"
    },
    "meanResponseTime": {
        "total": "462",
        "ok": "-",
        "ko": "462"
    },
    "standardDeviation": {
        "total": "317",
        "ok": "-",
        "ko": "317"
    },
    "percentiles1": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "percentiles2": {
        "total": "575",
        "ok": "-",
        "ko": "575"
    },
    "percentiles3": {
        "total": "844",
        "ok": "-",
        "ko": "844"
    },
    "percentiles4": {
        "total": "898",
        "ok": "-",
        "ko": "898"
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
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "-",
        "ko": "1.5"
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
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "237",
        "ok": "-",
        "ko": "237"
    },
    "maxResponseTime": {
        "total": "911",
        "ok": "-",
        "ko": "911"
    },
    "meanResponseTime": {
        "total": "462",
        "ok": "-",
        "ko": "462"
    },
    "standardDeviation": {
        "total": "317",
        "ok": "-",
        "ko": "317"
    },
    "percentiles1": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "percentiles2": {
        "total": "575",
        "ok": "-",
        "ko": "575"
    },
    "percentiles3": {
        "total": "844",
        "ok": "-",
        "ko": "844"
    },
    "percentiles4": {
        "total": "898",
        "ok": "-",
        "ko": "898"
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
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "-",
        "ko": "1.5"
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
